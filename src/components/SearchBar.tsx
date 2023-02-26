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

const numberOfProperties = 124;

const SearchBar: Component<SearchBarProps> = () => {
  return (
    <form class="mx-auto w-[1000px] p-[30px] bg-primary bg-opacity-[0.7] rounded-[5px]">
      <section class="mb-[15px] flex items-center w-full gap-2.5">
        <select
          name="buyOrRent"
          class="w-[90px] rounded-[5px] text-accent1 fill-primary max-h-[40px]"
        >
          <For each={buyOrRentOptions} fallback={<div>Loading...</div>}>
            {(item) => <option value={item.value}>{item.label}</option>}
          </For>
        </select>
        <select
          name="residentialOrCommercial"
          class="w-[330px] rounded-[5px] text-accent1 fill-primary max-h-[40px]"
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
          class="w-[500px] rounded-[5px] placeholder-accent1 max-h-[40px] text-accent1"
        />
      </section>
      <section class="flex items-center justify-between">
        <label class="relative inline-flex bg-transparent text-white rounded-[5px] max-h-[40px]">
          <input
            class="py-[10px] px-[17px] pl-9 placeholder-white drop-shadow-md  rounded-[5px] bg-transparent"
            placeholder="Web Ref. Number Search"
            type="text"
          />
          <span class="pl-[18px] absolute inset-y-0 left-0 flex items-center text-secondary text-2xl font-bold">
            #
          </span>
        </label>
        <div class="flex items-center gap-2.5">
          <p class="font-semibold text-white">
            {numberOfProperties} Properties
          </p>
          <select
            name="residentialOrCommercial"
            class="rtl_select rounded-[5px] bg-transparent text-white max-h-[40px]"
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
          <button class="inline-flex uppercase items-center justify-between py-[10px] px-[17px] gap-2.5 bg-secondary text-white rounded-[5px] max-h-[40px] transition-colors ease-in-out delay-75 duration-150 hover:bg-opacity-80">
            <MagnifierGlass /> <p>Search</p>
          </button>
        </div>
      </section>
    </form>
  );
};

export default SearchBar;
