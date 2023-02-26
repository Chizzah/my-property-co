import type { Component } from "solid-js";
// import EAAB from "./svg/EAAB";
// import IEASA from "./svg/IEASA";
import EAAB from "../assets/img/eaab.png";
import IEASA from "../assets/img/ieasa.png";
import LiLink from "./LiLink";
import Facebook from "./svg/Facebook";
import PropData from "./svg/PropData";
import Twitter from "./svg/Twitter";
import Youtube from "./svg/Youtube";


const Footer: Component = () => {
  return (
    <footer class="bg-primary px-[250px] py-[70px] text-white text-xs">
      <section class="mb-12 flex items-center space-x-[30px]">
        {/* <EAAB />
        <IEASA /> */}
        <img class="w-[87px]" src={EAAB} alt="eaab logo" loading="lazy" />
        <img class="w-[125px]" src={IEASA} alt="ieasa logo" loading="lazy" />
      </section>
      <section class="flex items-center text-xs">
        <p>Browse:</p>
        <ul class="flex items-center space-x-1 ml-1">
          <LiLink href="#" label="Home" />
          <span>|</span>
          <LiLink href="#" label="Residential For Sale [5]" />
          <span>|</span>
          <LiLink href="#" label="Calculators" />
          <span>|</span>
          <LiLink href="#" label="Company" />
          <span>|</span>
          <LiLink href="#" label="Profile" />
          <span>|</span>
          <LiLink href="#" label="Agent Search" />
          <span>|</span>
          <LiLink href="#" label="Contact Us" />
          <span>|</span>
          <LiLink href="#" label="Website Map" />
          <span>|</span>
          <LiLink href="#" label="Links" />
          <span>|</span>
          <LiLink href="#" label="PrivacyPolicy" />
        </ul>
      </section>
      <div class="border-t-[1px] my-[26px] opacity-[0.3]" />
      {/* should be links with a hover state */}
      <section class="flex items-center text-xs mb-12 w-full">
        <ul class="flex flex-wrap items-center space-x-1">
          <LiLink href="#" label="Residential For Sale [54]:" />
          <LiLink href="#" label="Amanzimtoti [12]" />
          <span>|</span>
          <LiLink href="#" label="Athlone Park [3]" />
          <span>|</span>
          <LiLink href="#" label="Doonside [6]" />
          <span>|</span>
          <LiLink href="#" label="Warner Beach [11]" />
          <span>|</span>
          <LiLink href="#" label="St Winifreds [4]" />
          <span>|</span>
          <LiLink href="#" label="Residential To Let [54]:" />
          <LiLink href="#" label="Amanzimtoti [12]" />
          <span>|</span>
          <LiLink href="#" label="Athlone Park [3]" />
          <span>|</span>
          <LiLink href="#" label="Doonside [6]" />
          <span>|</span>
          <LiLink href="#" label="Warner Beach [11]" />
          <span>|</span>
          <LiLink href="#" label="St Winifreds [4]" />
          <span>|</span>
        </ul>
      </section>
      <section class="flex justify-between items-center">
        <div class="flex items-center space-x-[20px]">
          <PropData />
          <div>
            <p>Website Powered by Prop Data</p>
            <p>Copyright © 2019 Name</p>
          </div>
        </div>
        <div class="flex items-center space-x-[25px]">
          <Facebook />
          <Twitter />
          <Youtube />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
