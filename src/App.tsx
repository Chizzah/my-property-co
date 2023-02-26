import type { Component } from "solid-js";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./screens/HomePage";
// import PropDataNumbers from './components/PropDataNumbers';

const App: Component = () => {
  return (
    <MainLayout>
      <HomePage />
      {/* <PropDataNumbers /> */}
    </MainLayout>
  );
};

export default App;
