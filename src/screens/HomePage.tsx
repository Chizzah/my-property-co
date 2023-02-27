import type { Component } from "solid-js";
import { For } from "solid-js";

import HomeAdCard from "../components/HomeAdCard";
import HomeHero from "../components/HomeHero";
import FeaturedProperty from "../components/FeaturedProperty";

import userAvatar from "../assets/img/user-avatar.png";
import featuredPropertyImg from "../assets/img/featured-property-img.jpg";
import mortgageCalculatorImg from "../assets/img/mortgage-calculator-img.jpg";
import contactUsImg from "../assets/img/contact-us-img.jpg";
import followUsImg from "../assets/img/follow-us-img.jpg";
import Slider from "../components/Slider";

// console.log(
//   alert(
//     JSON.stringify(
//       {
//         "1": "make it responsive and make it responsive remember fonts and assets from assignment folder",
//         "2": "remember fonts",
//         "3": "assets from assignment folder",
//         "4": "change color form button outlines",
//       },
//       null,
//       2
//     )
//   )
// );

const properties = [
  {
    tag: "sole mandate",
    src: featuredPropertyImg,
    price: 1100000,
    title: "4 Bedroom house for sale in Stellenbosch",
    description:
      "This stylish single-level Cowies Hill home showcases high-quality finishes, an easy indoor/outdoor lorem ipsum",
    bedrooms: 4,
    bathrooms: 4,
    garages: 4,
    agent: {
      src: userAvatar,
      firstName: "Michelle",
      lastName: "Ruffelo",
      contactNumber: 1234567890,
    },
  },
  {
    tag: "",
    src: featuredPropertyImg,
    price: 2300000,
    title: "3 Bedroom apartment for sale in Pinetown",
    description:
      "This stylish single-level Cowies Hill home showcases high-quality finishes, an easy indoor/outdoor lorem ipsum",
    bedrooms: 3,
    bathrooms: 2,
    garages: 1,
    agent: {
      src: userAvatar,
      firstName: "Michelle",
      lastName: "Ruffelo",
      contactNumber: 1234567890,
    },
  },
  {
    tag: "price reduced",
    src: featuredPropertyImg,
    price: 1780000,
    title: "2 Bedroom townhouse for sale in Paarl",
    description:
      "This stylish single-level Cowies Hill home showcases high-quality finishes, an easy indoor/outdoor lorem ipsum",
    bedrooms: 2,
    bathrooms: 1,
    garages: 1,
    agent: {
      src: userAvatar,
      firstName: "Michelle",
      lastName: "Ruffelo",
      contactNumber: 1234567890,
    },
  },
];

const ads = [
  {
    src: mortgageCalculatorImg,
    title: "Mortgage Calculator",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: contactUsImg,
    title: "Contact Us",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: followUsImg,
    title: "Follow us on Facebook",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const HomePage: Component = () => {
  return (
    <section>
      <HomeHero />
      <section class="mx-8 mb-16 text-center lg:mb-[100px]">
        <h1 class="text-2xl mb-8 font-bold lg:text-[35px] text-primary lg:mb-[45px] font-cormorant-garamond">
          Lorem ipsum dolor sit amet
        </h1>
        <p class=" mb-8 text-accent1 text-xs lg:text-base lg:mx-auto lg:w-5/12 lg:mb-[40px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
          scelerisque dui. Proin porta consectetur euismod. Duis pharetra
          dapibus blandit. Aenean lobortis orci a egestas eleifend. Pellentesque
          faucibus mi et interdum molestie. Quisque in diam felis. Ut vitae
          elementum leo.
        </p>
        <button class="inline-flex text-xs lg:text-base bg-secondary text-white rounded-[5px] px-[15px] py-[8.5px]  hover:text-secondary hover:bg-white border-2 transition-colors ease-in-out delay-75 duration-150 border-white hover:border-secondary">
          Read more
        </button>
      </section>
      <section class="mx-8 mb-32 lg:mx-auto lg:w-8/12 lg:mb-[162px]">
        <h2 class="text-2xl mb-8 lg:mb-[44px] font-bold lg:text-[35px] text-center">
          Featured Properties
        </h2>
        <div class="relative">
          <Slider total={properties.length}>
            <For each={properties} fallback={<div>Loading...</div>}>
              {(item) => <FeaturedProperty item={item} />}
            </For>
          </Slider>
        </div>
      </section>
      <section class="mx-8 mb-16 lg:mx-auto lg:w-8/12 lg:mb-[116px]">
        <div class="lg:flex lg:justify-between">
          <For each={ads} fallback={<div>Loading...</div>}>
            {(item) => (
              <HomeAdCard
                src={item.src}
                title={item.title}
                content={item.content}
              />
            )}
          </For>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
