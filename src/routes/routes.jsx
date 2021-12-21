import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Ranking from "@/pages/Ranking";
import Matches from "@/pages/Matches";
import Header from "@/components/Header";

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Matches />} />
      <Route path="/ranking" element={<Ranking />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
