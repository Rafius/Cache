import React from "react";

import { Input, InputLabel } from "@mui/material";

import Select from "@/components/Select";
import { GeneratorContainer, InputContainer } from "./GeneratorStyled";

const options = ["Asignacion directa", "LRU", "FIFO"];

const Generator = ({ inputData, setInputData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: name !== "reads" ? parseInt(value) : value
    }));
  };

  const inputs = [
    {
      label: "Cantidad de lineas de Memoria Cache",
      name: "lines",
      value: inputData.lines,
      type: "number"
    },
    {
      label: "Cantidad de bloques por linea",
      name: "blocks",
      value: inputData.blocks,
      type: "number"
    },
    {
      label: "Numeros a leer",
      name: "reads",
      value: inputData.reads,
      type: "text"
    },
    {
      label: "Tiempo de acceso de aciertos",
      name: "hitAccessTime",
      value: inputData.hitAccessTime,
      type: "number"
    },
    {
      label: "Tiempo de acceso de fallos",
      name: "failAccessTime",
      value: inputData.failAccessTime,
      type: "number"
    }
  ];

  const handleSelect = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      option: e.target.value
    }));
  };
  return (
    <GeneratorContainer>
      {inputs.map(({ label, name, value, type }) => (
        <InputContainer key={name}>
          <InputLabel>{label}</InputLabel>
          <Input
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
          />
        </InputContainer>
      ))}

      <Select
        options={options}
        defaultValue={inputData.option}
        handleSelect={handleSelect}
      />
    </GeneratorContainer>
  );
};

export default Generator;
