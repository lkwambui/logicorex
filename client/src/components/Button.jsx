import React from "react";

export default function Button({
  children,
  type = "button",
  className = "",
  variant = "primary",
  disabled = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variants = {
    primary:
      "bg-customdarkblue text-white hover:bg-customlightblue focus-visible:ring-customdarkblue",
    secondary:
      "bg-white text-customdarkblue border border-customdarkblue hover:bg-gray-100 focus-visible:ring-customdarkblue",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
  };
  return (
    <button
      type={type}
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
