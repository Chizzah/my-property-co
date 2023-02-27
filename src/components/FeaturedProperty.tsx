import type { Component } from "solid-js";

import { formatListingAmount } from "../utils/formatNumbers";
import { formatLongDescription } from "../utils/formatStrings";

import Bedroom from "./svg/Bedroom";
import Bathroom from "./svg/Bathroom";
import Garage from "./svg/Garage";

type Agent = {
  src: string;
  firstName: string;
  lastName: string;
  contactNumber: number;
};

type Property = {
  tag?: string;
  src: string;
  price: number;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  agent: Agent;
};

type FeaturedPropertyProps = {
  item: Property;
};

const FeaturedProperty: Component<FeaturedPropertyProps> = ({ item }) => {
  return (
    <div class="w-[600px] lg:w-full flex flex-col lg:flex-row border border-[#BDBDBD]">
      <div class="relative lg:w-[66%]">
        {item?.tag ? (
          <div class="absolute top-0 left-0 px-[10px] py-[5px] bg-primary text-white uppercase ">
            {item.tag}
          </div>
        ) : null}
        <img class="w-full" src={item.src} alt={item.title} loading="lazy" />
      </div>
      <div class="py-8 px-4 lg:w-[34%] lg:pt-[33px] lg:pb-[39px] lg:px-10 flex flex-col justify-between">
        <div class="text-accent1 mb-4">
          <p class="font-bold text-sm lg:text-2xl text-primary mb-1.5">
            {formatListingAmount(+item.price)}
          </p>
          <p class="text-xs mb-4 lg:mb-[27px]">{item.title}</p>
          <div class="flex items-center space-x-[20px] mb-7">
            <div class="flex items-center space-x-2 lg:space-x-[12px]">
              <Bedroom /> <p class="text-xs lg:text-base">{item.bedrooms}</p>
            </div>
            <div class="flex items-center space-x-2 lg:space-x-[12px]">
              <Bathroom /> <p class="text-xs lg:text-base">{item.bathrooms}</p>
            </div>
            <div class="flex items-center space-x-2 lg:space-x-[12px]">
              <Garage /> <p class="text-xs lg:text-base">{item.garages}</p>
            </div>
          </div>
          <p class="text-xs lg:text-base">
            {formatLongDescription(item.description)}
          </p>
        </div>
        <div class="flex items-center space-x-2 lg:space-x-[18px]">
          <img
            class="scale-75 lg:scale-100"
            src={item.agent.src}
            alt={`${item.agent.firstName} ${item.agent.lastName}`}
            loading="lazy"
          />
          <div class="text-right lg:text-left">
            <p class="text-xs lg:text-base font-semibold lg:mb-0.5">
              {item.agent.firstName} {item.agent.lastName}
            </p>
            <button class="text-xs text-right lg:text-left lg:text-base inline-flex text-secondary">
              View contact number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
