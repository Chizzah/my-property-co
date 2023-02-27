import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import { PropData } from "./components/PropDataNumbers";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import PropDataPage from "./pages/PropDataPage";

const num = Array.from({ length: 50 }, (_, i) => i + 1);

console.log(PropData(num));

const App: Component = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/prop-data" component={PropDataPage} />
      </Routes>
    </MainLayout>
  );
};

export default App;
