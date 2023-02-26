import type { Component } from 'solid-js';

// put this somewhere else
const num = Array.from({ length: 50 }, (_, i) => i + 1);

export function PropData(num: number[]) {
  const result: string[] = [];
  for (const n of num) {
    if (n % 3 === 0 && n % 5 === 0) {
      result.push("PropData");
    } else if (n % 5 === 0) {
      result.push("Data");
    } else if (n % 3 === 0) {
      result.push("Prop");
    } else {
      result.push(n.toString());
    }
  }
  return result.join(" ")
}

const PropDataNumbers: Component = () => {
  return <p>{PropData(num)}</p>;
};

export default PropDataNumbers;
