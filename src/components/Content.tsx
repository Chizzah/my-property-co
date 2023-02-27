import type { Component, JSXElement } from "solid-js";

const Content: Component<{ children: JSXElement }> = ({ children }) => {
  return <main class="flex-1 min-h-screen">{children}</main>;
};

export default Content;
