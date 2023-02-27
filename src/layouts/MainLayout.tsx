import type { Component, JSXElement } from "solid-js";

import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout: Component<{ children: JSXElement }> = ({ children }) => {
  return (
    <div class="relative flex flex-col w-full lg:max-w-[1440px] lg:mx-auto min-h-screen font-open-sans">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default MainLayout;
