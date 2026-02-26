import { useCallback, useEffect, useMemo, useRef, useState, memo } from "react";
import "../../styles/LogoLoop.css";
import CEAT from "./figma/CEAT Tyre.webp";
import ITPL from "./figma/itpl-new-logo.webp";
import RIMJHIM from "./figma/RIMJHIM_23.webp";
import Stallion from "./figma/Stallion_2.webp";

const DEFAULT_LOGOS = [
  { src: CEAT, alt: "CEAT" },
  { src: ITPL, alt: "ITPL" },
  { src: RIMJHIM, alt: "RIMJHIM" },
  { src: Stallion, alt: "Stallion" },
];

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
};

const toCssLength = (value) =>
  typeof value === "number" ? `${value}px` : value ?? undefined;

/* ---------------- Resize Observer ---------------- */

const useResizeObserver = (callback, refs, deps) => {
  const stableCallback = useCallback(callback, deps);

  useEffect(() => {
    if (!window.ResizeObserver) {
      window.addEventListener("resize", stableCallback);
      stableCallback();
      return () => window.removeEventListener("resize", stableCallback);
    }

    const observers = refs
      .map((ref) => {
        if (!ref.current) return null;
        const obs = new ResizeObserver(stableCallback);
        obs.observe(ref.current);
        return obs;
      })
      .filter(Boolean);

    stableCallback();

    return () => observers.forEach((o) => o.disconnect());
  }, [refs, stableCallback]);
};

/* ---------------- Image Loader ---------------- */

const useImageLoader = (seqRef, onLoad, deps) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll("img") ?? [];
    if (!images.length) {
      onLoad();
      return;
    }

    let remaining = images.length;

    const handleLoad = () => {
      remaining--;
      if (remaining === 0) onLoad();
    };

    images.forEach((img) => {
      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener("load", handleLoad, { once: true });
        img.addEventListener("error", handleLoad, { once: true });
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleLoad);
      });
    };
  }, deps);
};

/* ---------------- Animation Loop ---------------- */

const useAnimationLoop = (
  trackRef,
  targetVelocity,
  seqWidth,
  seqHeight,
  isHovered,
  hoverSpeed,
  isVertical
) => {
  const rafRef = useRef();
  const lastRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const size = isVertical ? seqHeight : seqWidth;
    if (!size) return;

    track.style.willChange = "transform"; // GPU hint

    const animate = (time) => {
      if (lastRef.current === null) lastRef.current = time;

      const dt = (time - lastRef.current) / 1000;
      lastRef.current = time;

      const target =
        isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;

      const easing = 1 - Math.exp(-dt / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easing;

      let next = offsetRef.current + velocityRef.current * dt;
      next = ((next % size) + size) % size;
      offsetRef.current = next;

      track.style.transform = isVertical
        ? `translate3d(0, ${-next}px, 0)`
        : `translate3d(${-next}px, 0, 0)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lastRef.current = null;
    };
  }, [targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical]);
};

/* ================= COMPONENT ================= */

export const LogoLoop = memo(
  ({
    logos = DEFAULT_LOGOS,
    speed = 120,
    direction = "left",
    width = "100%",
    logoHeight = 28,
    gap = 32,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = "Partner logos",
    className,
    style,
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [seqHeight, setSeqHeight] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const isVertical = direction === "up" || direction === "down";

    /* ---------- Hover Speed ---------- */

    const effectiveHoverSpeed = useMemo(() => {
      if (hoverSpeed !== undefined) return hoverSpeed;
      if (pauseOnHover === true) return 0;
      if (pauseOnHover === false) return undefined;
      return 0;
    }, [hoverSpeed, pauseOnHover]);

    /* ---------- Velocity ---------- */

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const dir =
        isVertical
          ? direction === "up"
            ? 1
            : -1
          : direction === "left"
          ? 1
          : -1;

      return magnitude * dir * (speed < 0 ? -1 : 1);
    }, [speed, direction, isVertical]);

    /* ---------- Dimension Calculation ---------- */

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const rect = seqRef.current?.getBoundingClientRect();
      if (!rect) return;

      const widthVal = Math.ceil(rect.width);
      const heightVal = Math.ceil(rect.height);

      if (isVertical) {
        setSeqHeight(heightVal);
        const viewport = containerRef.current?.clientHeight ?? heightVal;
        const copies =
          Math.ceil(viewport / heightVal) +
          ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copies));
      } else {
        setSeqWidth(widthVal);
        const copies =
          Math.ceil(containerWidth / widthVal) +
          ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copies));
      }
    }, [isVertical]);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [
      logos,
      gap,
      logoHeight,
      isVertical,
    ]);

    useImageLoader(seqRef, updateDimensions, [
      logos,
      gap,
      logoHeight,
      isVertical,
    ]);

    useAnimationLoop(
      trackRef,
      targetVelocity,
      seqWidth,
      seqHeight,
      isHovered,
      effectiveHoverSpeed,
      isVertical
    );

    /* ---------- Styles ---------- */

    const cssVars = useMemo(
      () => ({
        "--logoloop-gap": `${gap}px`,
        "--logoloop-logoHeight": `${logoHeight}px`,
        ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
      }),
      [gap, logoHeight, fadeOutColor]
    );

    const rootClassName = useMemo(
      () =>
        [
          "logoloop",
          isVertical ? "logoloop--vertical" : "logoloop--horizontal",
          fadeOut && "logoloop--fade",
          scaleOnHover && "logoloop--scale-hover",
          className,
        ]
          .filter(Boolean)
          .join(" "),
      [isVertical, fadeOut, scaleOnHover, className]
    );

    const renderLogoItem = useCallback(
      (item, key) => (
        <li className="logoloop__item" key={key} role="listitem">
          {renderItem ? (
            renderItem(item, key)
          ) : (
            <img
              src={item.src}
              alt={item.alt ?? ""}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          )}
        </li>
      ),
      [renderItem]
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className="logoloop__list"
            key={copyIndex}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
          >
            {logos.map((item, i) =>
              renderLogoItem(item, `${copyIndex}-${i}`)
            )}
          </ul>
        )),
      [copyCount, logos, renderLogoItem]
    );

    return (
      <div
        ref={containerRef}
        className={rootClassName}
        style={{
          width: toCssLength(width) ?? "100%",
          ...cssVars,
          ...style,
        }}
        role="region"
        aria-label={ariaLabel}
      >
        <div
          className="logoloop__track"
          ref={trackRef}
          onMouseEnter={() =>
            effectiveHoverSpeed !== undefined && setIsHovered(true)
          }
          onMouseLeave={() =>
            effectiveHoverSpeed !== undefined && setIsHovered(false)
          }
        >
          {logoLists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = "LogoLoop";

export default LogoLoop;