import type { Component } from "solid-js";
import { For } from "solid-js";

import Logo from "./svg/Logo";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/",
    label: "Property Search",
  },
  {
    href: "/",
    label: "Tools",
  },
  {
    href: "/",
    label: "About",
  },
  {
    href: "/",
    label: "Contact",
  },
];

const Header: Component = () => {
  return (
    <header class="w-full bg-primary flex items-center text-white py-[30px] px-[50px] z-10">
      <nav class="flex justify-between w-full items-center">
        <Logo />
        <ul class="flex uppercase space-x-[25px]">
          <For each={links} fallback={<div>Loading...</div>}>
            {(item) => (
              <li class="hover:text-secondary">
                <a href={item.href}>{item.label}</a>
              </li>
            )}
          </For>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
