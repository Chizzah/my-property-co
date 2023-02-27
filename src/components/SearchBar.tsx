import type { Component } from "solid-js";
import { For } from "solid-js";
import MagnifierGlass from "./svg/MagnifierGlass";

type SearchBarProps = {};

const buyOrRentOptions = [
  { value: "buy", label: "Buy" },
  { value: "rent", label: "Rent" },
];

const residentialOrCommercialOptions = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
];

const moreSearchOptions = [
  { value: "optionOne", label: "Option One" },
  { value: "optionTwo", label: "Option Two" },
];

const SearchBar: Component<SearchBarProps> = () => {
  return (
    <form class="w-full mx-4 p-4 lg:mx-auto lg:w-[1000px] lg:p-[30px] bg-primary bg-opacity-[0.7] rounded-[5px]">
      <section class="lg:mb-[15px] flex flex-col lg:flex-row lg:items-center lg:w-full lg:gap-2.5 space-y-4 lg:space-y-0 mb-4">
        <select
          name="buyOrRent"
          class="lg:w-[90px] rounded-[5px] text-accent1 fill-primary lg:max-h-[40px] text-xs lg:text-base"
        >
          <For each={buyOrRentOptions} fallback={<div>Loading...</div>}>
            {(item) => <option value={item.value}>{item.label}</option>}
          </For>
        </select>
        <select
          name="residentialOrCommercial"
          class="lg:w-[330px] rounded-[5px] text-accent1 fill-primary lg:max-h-[40px] text-xs lg:text-base"
        >
          <For
            each={residentialOrCommercialOptions}
            fallback={<div>Loading...</div>}
          >
            {(item) => <option value={item.value}>{item.label}</option>}
          </For>
        </select>
        <input
          type="text"
          name="location"
          placeholder="Type Area or Suburb Name"
          class="lg:w-[500px] rounded-[5px] placeholder-accent1 lg:max-h-[40px] text-accent1 text-xs lg:text-base"
        />
      </section>
      <section class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <label class="w-full relative inline-flex bg-transparent text-white rounded-[5px] lg:max-h-[40px] mb-4 lg:mb-0">
          <input
            class="w-full lg:w-auto py-[10px] px-[17px] pl-9 placeholder-white drop-shadow-md  rounded-[5px] bg-transparent text-xs lg:text-base"
            placeholder="Web Ref. Number Search"
            type="text"
          />
          <span class="pl-[18px] absolute inset-y-0 left-0 flex items-center text-secondary text-2xl font-bold">
            #
          </span>
        </label>
        <div class="flex flex-col lg:flex-row lg:items-center lg:gap-2.5 space-y-4 lg:space-x-0">
          <p class="font-semibold text-white text-xs lg:text-base">
            124 Properties
          </p>
          <select
            name="residentialOrCommercial"
            class="rtl_select rounded-[5px] bg-transparent text-white lg:max-h-[40px] text-xs lg:text-base"
          >
            <option class="text-black">More Search Options</option>
            <For each={moreSearchOptions} fallback={<div>Loading...</div>}>
              {(item) => (
                <option class="text-black" value={item.value}>
                  {item.label}
                </option>
              )}
            </For>
          </select>
          <button class="justify-center inline-flex uppercase items-center lg:justify-between py-[10px] px-[17px] gap-2.5 bg-secondary text-white rounded-[5px] max-h-[40px] transition-colors ease-in-out delay-75 duration-150 hover:bg-opacity-80 text-xs lg:text-base">
            <MagnifierGlass /> <p class="text-xs lg:text-base">Search</p>
          </button>
        </div>
      </section>
    </form>
  );
};

export default SearchBar;
