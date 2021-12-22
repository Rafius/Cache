import React from "react";

import { HomeStyled } from "./HomeStyled";
import Generator from "@/components/Generator";
import Table from "@/components/Table";
import useHomeHooks from "./useHomeHooks";
import { Button } from "@mui/material";

const Home = () => {
  const { hits, fails, failsToPrint, inputData, setInputData, handleClick } =
    useHomeHooks();

  const readLength = fails.length + hits.length;
  const percentageOfFails = (fails.length / readLength).toFixed(3);

  const percentageOfHits = (hits.length / readLength).toFixed(3);
  const memoryAccessTime =
    percentageOfHits * inputData.hitAccessTime +
    percentageOfFails * inputData.failAccessTime;

  return (
    <HomeStyled>
      <Generator inputData={inputData} setInputData={setInputData} />
      <Button onClick={handleClick} variant="contained">
        Calcular
      </Button>
      <Table {...inputData} failsToPrint={failsToPrint} />
      {failsToPrint.length > 0 && (
        <>
          <div>
            Tasa de aciertos: {hits.length}/{hits.length + fails.length} = {""}
            {percentageOfHits}
          </div>
          <div>
            Tasa de fallos: {fails.length}/{hits.length + fails.length} = {""}
            {percentageOfFails}
          </div>
          <div>Tiempo de acceso a memoria: {memoryAccessTime}</div>
        </>
      )}
    </HomeStyled>
  );
};

export default Home;
