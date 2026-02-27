import React from "react";

const GradientText = ({ children, className = "" }) => {
  return (
    <span className={`gradient-border-wrapper ${className}`}>
      <span className="gradient-text">
        {children}
      </span>
    </span>
  );
};

export default GradientText;