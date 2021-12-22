import React from "react";

import Select from "@/components/Select";
import { GeneratorContainer } from "./GeneratorStyled";

const options = ["Asignacion directa", "LRU", "FIFO"];

const Generator = ({ inputData, setInputData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value
    }));
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

      <label>Tiempo de acceso de fallo</label>
      <input
        name="hitAccessTime"
        type="text"
        onChange={handleChange}
        value={inputData.hitAccessTime}
      />

      <label>Tiempo de acceso de acierto</label>
      <input
        name="failAccessTime"
        type="text"
        onChange={handleChange}
        value={inputData.failAccessTime}
      />

      <Select options={options} />
    </GeneratorContainer>
  );
};

export default Generator;
