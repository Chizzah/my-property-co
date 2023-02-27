import type { Component, JSXElement } from "solid-js";
import { createSlider } from "solid-slider";

import ArrowNext from "./svg/ArrowNext";
import ArrowPrev from "./svg/ArrowPrev";

import "../index.css";

type SliderProps = {
  children: JSXElement;
  total: number;
};

const Slider: Component<SliderProps> = ({ children, total }) => {
  const [slider, { current, next, prev, moveTo }] = createSlider();
  slider;

  const dots = Array.from({ length: total }, (_, i) => (
    <button
      class={`inline-flex w-[10px] h-[10px] mr-[10px] ${
        current() === i ? "bg-secondary" : "bg-[#F2F2F2]"
      }`}
      onClick={() => moveTo(i)}
    />
  ));

  return (
    <>
      <div use:slider>{children}</div>
      <br />
      <div>
        <button
          class="hidden lg:inline-flex absolute top-1/2 -left-[110.54px]"
          onClick={prev}
        >
          <ArrowPrev />
        </button>
        <button
          class="hidden lg:inline-flex absolute top-1/2 -right-[110.54px]"
          onClick={next}
        >
          <ArrowNext />
        </button>
      </div>
      <div class="absolute -bottom-[48px] flex justify-center items-center w-full">
        {dots}
      </div>
    </>
  );
};

export default Slider;
