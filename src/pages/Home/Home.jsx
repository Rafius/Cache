import React from "react";

import { HomeStyled } from "./HomeStyled";
import Generator from "@/components/Generator";
import Table from "@/components/Table";
const Matches = () => {
  return (
    <HomeStyled>
      <Generator />
      <Table />
    </HomeStyled>
  );
};

export default Matches;
