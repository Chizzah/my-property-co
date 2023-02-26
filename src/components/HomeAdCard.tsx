import type { Component } from "solid-js";

type HomeAdCardProps = {
  src: string;
  title: string;
  content: string;
};

const HomeAdCard: Component<HomeAdCardProps> = ({ src, title, content }) => {
  return (
    <div class="w-[300px] border border-[#BDBDBD]">
      <img class="w-full h-[225px]" src={src} alt={title} loading="lazy" />
      <div class="py-[25px] px-12 text-center">
        <h3 class="font-bold text-2xl mb-[15px]">{title}</h3>
        <p class="text-accent1 ">{content}</p>
      </div>
    </div>
  );
};

export default HomeAdCard;
