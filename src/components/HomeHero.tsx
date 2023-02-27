import type { Component } from "solid-js";

import SearchBar from "./SearchBar";

const HomeHero: Component = () => {
  return (
    <section class="w-full h-[50vh] lg:h-[777px] z-0 mb-[100px] background_slider">
      <div class="background_slide"></div>
      <div class="background_slide"></div>
      <div class="absolute bottom-0 left-0 mb-[114px] flex justify-center w-full">
        <SearchBar />
      </div>
    </section>
  );
};

export default HomeHero;
