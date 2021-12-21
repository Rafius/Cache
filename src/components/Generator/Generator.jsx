import React from "react";

import Select from "@/components/Select";
import { GeneratorContainer } from "./GeneratorStyled";

const options = ["Asignacion directa", "LRU"];

const Generator = () => {
  const [inputData, setInputData] = React.useState({
    option: "Asignacion directa",
    lines: "",
    blocks: "",
    reads:
      "12, 13, 25, 26, 17, 8, 22, 3, 24, 62, 5, 63, 64, 17, 18, 19, 57, 58, 20, 25"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleClick = () => {
    inputData.reads.split(",").forEach((item) => console.log(item.trim()));
  };

  return (
    <GeneratorContainer>
      <label>Cantidad de lineas de Memoria Cache</label>
      <input
        name="lines"
        type="number"
        value={inputData.lines}
        onChange={handleChange}
      />

      <label>Cantidad de bloques por linea</label>
      <input
        name="blocks"
        type="text"
        value={inputData.blocks}
        onChange={handleChange}
      />

      <label>Numeros a leer</label>
      <input
        name="reads"
        type="text"
        onChange={handleChange}
        value={inputData.reads}
      />

      <Select options={options} />
      <button onClick={handleClick}>Simular</button>
    </GeneratorContainer>
  );
};

export default Generator;
