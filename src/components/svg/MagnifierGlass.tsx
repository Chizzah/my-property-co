import type { Component } from "solid-js";

const MagnifierGlass: Component = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" fill="none">
      <path
        fill="#fff"
        d="M9 6c0 1.93-1.57 3.5-3.5 3.5S2 7.93 2 6s1.57-3.5 3.5-3.5S9 4.07 9 6Zm4 6.5c0-.266-.11-.523-.29-.703l-2.679-2.68A5.498 5.498 0 0 0 5.5.5C2.46.5 0 2.96 0 6a5.498 5.498 0 0 0 8.617 4.531l2.68 2.672A.98.98 0 0 0 12 13.5c.547 0 1-.453 1-1Z"
      />
    </svg>
  );
};

export default MagnifierGlass;
