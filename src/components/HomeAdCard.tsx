import type { Component } from "solid-js";

type HomeAdCardProps = {
  src: string;
  title: string;
  content: string;
};

const HomeAdCard: Component<HomeAdCardProps> = ({ src, title, content }) => {
  return (
    <div class="mb-4 lg:w-[300px] border border-[#BDBDBD] hover:animate-wiggle cursor-pointer">
      <img
        class="w-full h-52 lg:h-[225px]"
        src={src}
        alt={title}
        loading="lazy"
      />
      <div class="p-8 lg:py-[25px] lg:px-12 text-center">
        <h3 class="font-bold mb-2 lg:text-2xl lg:mb-[15px]">{title}</h3>
        <p class="text-xs text-accent1">{content}</p>
      </div>
    </div>
  );
};

export default HomeAdCard;
