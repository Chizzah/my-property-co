import type { Component } from "solid-js";
import { createSignal, For } from "solid-js";
import { A } from "@solidjs/router";

import Logo from "./svg/Logo";
import Menu from "./svg/Menu";

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
  const [isOpen, setIsOpen] = createSignal<boolean>(false);

  return (
    <header class="w-full bg-primary flex items-center text-white lg:py-[30px] lg:px-[50px] z-10">
      <nav class="lg:flex justify-between w-full items-center">
        <div class="w-full flex items-center justify-between py-3 px-5">
          <Logo />
          <button onClick={() => setIsOpen(!isOpen())}>
            <Menu />
          </button>
          <ul class="hidden lg:flex uppercase space-x-[25px]">
            <For each={links} fallback={<div>Loading...</div>}>
              {(item) => (
                <li class="hover:text-secondary">
                  <A href={item.href}>{item.label}</A>
                </li>
              )}
            </For>
          </ul>
        </div>
        <ul
          class={isOpen() ? "block uppercase py-3 px-5 bg-secondary" : "hidden"}
        >
          <For each={links} fallback={<div>Loading...</div>}>
            {(item) => (
              <li class="text-white hover:text-primary py-2 transition-colors ease-in-out delay-75 duration-150">
                <A href={item.href}>{item.label}</A>
              </li>
            )}
          </For>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
