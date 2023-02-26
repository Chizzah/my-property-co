import type { Component, JSXElement } from "solid-js";

import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout: Component<{ children: JSXElement }> = ({ children }) => {
  return (
    <div class="relative flex flex-col w-full 2lg:min-w-[1440px] min-h-screen">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default MainLayout;
