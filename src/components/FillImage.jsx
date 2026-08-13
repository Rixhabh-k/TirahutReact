import React from "react";

export default function FillImage({
  src,
  alt,
  className,
  priority = false,
  sizes,
  style,
  ...rest
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", ...style }}
      {...rest}
    />
  );
}
