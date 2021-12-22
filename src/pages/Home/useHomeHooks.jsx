import { useState, useEffect } from "react";

const useHomeHooks = () => {
  const [inputData, setInputData] = useState({
    option: "Asignacion directa",
    lines: 4,
    blocks: 8,
    reads: ""
  });
  const { option, lines, blocks, reads } = inputData;

  const [state, setState] = useState(
    [...Array(lines * blocks)].map((_, index) => index)
  );

  const [fails, setFails] = useState([]);
  const [hits, setHits] = useState([]);
  const [failsToPrint, setFailsToPrint] = useState([]);

  const handleClick = () => {
    if (!reads) return;
    checkReads();
  };

  const directAssignment = (read) => {
    // Add read to state
    const line = Math.floor(read / blocks) % 4;
    const block = Math.floor(read / blocks);
    const tag = Math.floor(block / lines);

    setFailsToPrint((prevState) => [
      ...prevState,
      {
        read,
        line,
        block,
        tag
      }
    ]);

    // Update state to include the failed read using direct assignment
  };

  const checkReads = () => {
    reads.split(",").forEach((read) => {
      read = parseInt(read.trim());
      if (hits.includes(read) || fails.includes(read)) return;
      if (state.includes(read)) {
        setHits((prevState) => [...prevState, read]);
      } else {
        setFails((prevState) => [...prevState, read]);
        const callback = cacheDictionary[option];
        callback(read);
      }
    });
  };

  const cacheDictionary = {
    "Asignacion directa": directAssignment,
    LRU: "LRU",
    FIFO: "FIFO"
  };

  return {
    inputData,
    failsToPrint,
    handleClick,
    setInputData
  };
};

export default useHomeHooks;
