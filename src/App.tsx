import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import { SharedLayout } from "@components/SharedLayout/SharedLayout";

const Home = lazy(() => import("@pages/Home/HomePage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
