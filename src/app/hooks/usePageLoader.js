import { useState, useEffect, useRef } from "react";

export const usePageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const progressRef = useRef(0);
  const targetRef = useRef(100); // target is 100 from the start
  const completedRef = useRef(false);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      if (completedRef.current) return;

      const current = progressRef.current;
      const target = targetRef.current;

      if (current < target) {
        const delta = Math.max((target - current) * 0.08, 0.5); // slightly bigger delta
        progressRef.current = Math.min(current + delta, target);
        setProgress(Math.round(progressRef.current));
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    const onLoadComplete = () => {
      progressRef.current = 100;
      setProgress(100);

      setTimeout(() => {
        completedRef.current = true;
        setIsLoading(false);
      }, 500); // small delay to let animation finish
    };

    if (document.readyState === "complete") {
      onLoadComplete();
    } else {
      window.addEventListener("load", onLoadComplete, { once: true });
    }

    // Fallback in case load never fires
    const fallback = setTimeout(() => {
      if (completedRef.current) return;
      progressRef.current = 100;
      setProgress(100);
      completedRef.current = true;
      setIsLoading(false);
    }, 10000);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      clearTimeout(fallback);
      window.removeEventListener("load", onLoadComplete);
    };
  }, []);

  return { isLoading, progress };
};