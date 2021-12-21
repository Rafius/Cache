import React from "react";

import { HomeStyled } from "./HomeStyled";
import Generator from "@/components/Generator";
import Table from "@/components/Table";
import useHomeHooks from "./useHomeHooks";

const Matches = () => {
  const { failsToPrint, inputData, setInputData, handleClick } = useHomeHooks();

  return (
    <HomeStyled>
      <Generator inputData={inputData} setInputData={setInputData} />
      <button onClick={handleClick}>Click</button>
      <Table {...inputData} failsToPrint={failsToPrint} />
    </HomeStyled>
  );
};

export default Matches;
