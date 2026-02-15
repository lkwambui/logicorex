import React from "react";

/**
 * Helper visually hides content but keeps it accessible to screen readers.
 */
export function VisuallyHidden({ children }) {
  return (
    <span style={{
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    }}>{children}</span>
  );
}

/**
 * Helper for focus outlines for keyboard users only.
 */
export function FocusOutlineOnly({ children }) {
  return (
    <div className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-customdarkblue focus-visible:ring-offset-2">
      {children}
    </div>
  );
}
