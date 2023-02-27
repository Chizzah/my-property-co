import type { Component } from "solid-js";
import PropDataNumbers from "../components/PropDataNumbers";

const PropData: Component = () => {
  return (
    <section class="px-8 flex justify-center items-center w-full h-screen">
      <PropDataNumbers />
    </section>
  );
};

export default PropData;
