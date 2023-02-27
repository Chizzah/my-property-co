import type { Component } from "solid-js";
// import EAAB from "./svg/EAAB";
// import IEASA from "./svg/IEASA";
import EAAB from "../assets/img/eaab.png";
import IEASA from "../assets/img/ieasa.png";
import ImageWrapper from "./Image";
import LiLink from "./LiLink";
import Facebook from "./svg/Facebook";
import PropData from "./svg/PropData";
import Twitter from "./svg/Twitter";
import Youtube from "./svg/Youtube";

const Footer: Component = () => {
  return (
    <footer class="bg-primary p-4 lg:px-[250px] lg:py-[70px] text-white text-xs">
      <section class="mb-12 flex items-center space-x-[30px]">
        <ImageWrapper>
          <img
            class="w-16 lg:w-[87px]"
            src={EAAB}
            alt="eaab logo"
            loading="lazy"
          />
        </ImageWrapper>
        <ImageWrapper>
          <img
            class="w-16 lg:w-[125px]"
            src={IEASA}
            alt="ieasa logo"
            loading="lazy"
          />
        </ImageWrapper>
      </section>
      <section class="flex justify-between w-full lg:block">
        <section class="w-1/2 lg:flex lg:items-center text-xs lg:w-full">
          <p class="text-xs lg:text-base">Browse:</p>
          <ul class="lg:flex lg:items-center lg:space-x-1 lg:ml-1 text-xs">
            <LiLink href="#" label="Home" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Residential For Sale [5]" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Calculators" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Company" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Profile" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Agent Search" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Contact Us" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Website Map" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Links" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="PrivacyPolicy" />
          </ul>
        </section>
        <div class="hidden lg:block border-t-[1px] my-[26px] opacity-[0.3]" />
        <section class="w-1/2 lg:flex lg:items-center text-xs mb-12 lg:w-full">
          <ul class="lg:flex lg:flex-wrap lg:items-center lg:space-x-1">
            <LiLink href="#" label="Residential For Sale [54]:" />
            <LiLink href="#" label="Amanzimtoti [12]" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Athlone Park [3]" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Doonside [6]" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Warner Beach [11]" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="St Winifreds [4]" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Residential To Let [54]:" />
            <LiLink href="#" label="Amanzimtoti [12]" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Athlone Park [3]" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Doonside [6]" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="Warner Beach [11]" />
            <li class="hidden lg:block">|</li>
            <LiLink href="#" label="St Winifreds [4]" />
            <li class="hidden lg:block">|</li>
          </ul>
        </section>
      </section>
      <section class="flex justify-between items-center">
        <div class="flex items-center space-x-2 lg:space-x-[20px]">
          <PropData />
          <div>
            <p class="text-[0.625rem] lg:text-base">
              Website Powered by Prop Data
            </p>
            <p class="text-[0.625rem] lg:text-base">Copyright © 2019 Name</p>
          </div>
        </div>
        <div class="flex items-center space-x-2 lg:space-x-[25px]">
          <Facebook />
          <Twitter />
          <Youtube />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
