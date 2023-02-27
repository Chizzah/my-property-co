import type { Component } from "solid-js";
import { Slider, SliderProvider } from "solid-slider";
import autoplay from "solid-slider/plugins/autoplay";

import ImageWrapper from "./Image";
import SearchBar from "./SearchBar";

const HomeHero: Component = () => {
  return (
    <section class="relative w-full h-[50vh] lg:h-[777px] lg:min-h-[777px] z-0 mb-[100px]">
      <SliderProvider>
        <Slider options={{ loop: true }} plugins={[autoplay(8000, {})]}>
          <ImageWrapper>
            <img
              class="w-full h-[777px]"
              src="/home-hero-img-1.jpg"
              alt="modern kitchen"
            />
          </ImageWrapper>
          <ImageWrapper>
            <img
              class="w-full h-[777px]"
              src="/home-hero-img-2.jpg"
              alt="deck with sunset"
            />
          </ImageWrapper>
        </Slider>
      </SliderProvider>
      <div class="absolute bottom-0 left-0 mb-[114px] flex justify-center w-full">
        <SearchBar />
      </div>
    </section>
  );
};

export default HomeHero;
