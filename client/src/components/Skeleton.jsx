import React from "react";

export default function Skeleton({ className = "", width = "100%", height = 16, style = {} }) {
  return (
    <div
      className={`bg-gray-200 animate-pulse rounded ${className}`}
      style={{ width, height, ...style }}
      aria-busy="true"
      aria-label="Loading..."
    />
  );
}
