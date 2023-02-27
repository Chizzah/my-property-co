import type { Component, JSXElement } from "solid-js";

const ImageWrapper: Component<{ children: JSXElement }> = ({ children }) => {
  return (
    <picture>
      <source type="image/webp" />
      {children}
    </picture>
  );
};

export default ImageWrapper;
