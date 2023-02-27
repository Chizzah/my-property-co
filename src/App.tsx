import type { Component } from "solid-js";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./screens/HomePage";
import { PropData } from "./components/PropDataNumbers";
// import PropDataNumbers from './components/PropDataNumbers';

const num = Array.from({ length: 50 }, (_, i) => i + 1);

console.log(PropData(num));

const App: Component = () => {
  return (
    <MainLayout>
      <HomePage />
      {/* <PropDataNumbers /> */}
    </MainLayout>
  );
};

export default App;
