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
    <div class="w-full flex border border-[#BDBDBD]">
      <div class="relative w-[66%]">
        {item?.tag ? (
          <div class="absolute top-0 left-0 px-[10px] py-[5px] bg-primary text-white uppercase ">
            {item.tag}
          </div>
        ) : null}
        <img class="w-full" src={item.src} alt={item.title} loading="lazy" />
      </div>
      <div class="w-[34%] pt-[33px] pb-[39px] px-10 flex flex-col justify-between">
        <div class="text-accent1">
          <p class="font-bold text-2xl text-primary mb-[6px]">
            {formatListingAmount(+item.price)}
          </p>
          <p class="mb-[27px]">{item.title}</p>
          <div class="flex items-center space-x-[20px] mb-7">
            <div class="flex items-center space-x-[12px]">
              <Bedroom /> <p>{item.bedrooms}</p>
            </div>
            <div class="flex items-center space-x-[12px]">
              <Bathroom /> <p>{item.bathrooms}</p>
            </div>
            <div class="flex items-center space-x-[12px]">
              <Garage /> <p>{item.garages}</p>
            </div>
          </div>
          <p>{formatLongDescription(item.description)}</p>
        </div>
        <div class="flex items-center space-x-[18px]">
          <img
            src={item.agent.src}
            alt={`${item.agent.firstName} ${item.agent.lastName}`}
            loading="lazy"
          />
          <div>
            <p class="font-semibold mb-0.5">
              {item.agent.firstName} {item.agent.lastName}
            </p>
            <button class="inline-flex text-secondary">
              View contact number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
