import React from "react";

import { HomeStyled } from "./HomeStyled";
import Generator from "@/components/Generator";
import Table from "@/components/Table";
import useHomeHooks from "./useHomeHooks";

const Home = () => {
  const { hits, fails, failsToPrint, inputData, setInputData, handleClick } =
    useHomeHooks();

  const percentageOfFails = fails.length / (fails.length + hits.length);
  const percentageOfHits = hits.length / (fails.length + hits.length);
  const memoryAccessTime =
    percentageOfHits * inputData.hitAccessTime +
    percentageOfFails * inputData.failAccessTime;

  return (
    <HomeStyled>
      <Generator inputData={inputData} setInputData={setInputData} />
      <button onClick={handleClick}>Click</button>
      <Table {...inputData} failsToPrint={failsToPrint} />
      <div>
        Tasa de aciertos: {hits.length}/{hits.length + fails.length} = {""}
        {percentageOfHits}
      </div>
      <div>
        Tasa de fallos: {fails.length}/{hits.length + fails.length} = {""}
        {percentageOfFails}
      </div>
      <div>Tiempo de acceso a memoria: {memoryAccessTime}</div>
    </HomeStyled>
  );
};

export default Home;
