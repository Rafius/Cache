import { useState } from "react";

const useHomeHooks = () => {
  const [inputData, setInputData] = useState({
    option: "FIFO",
    lines: 0,
    blocks: 0,
    reads: "",
    hitAccessTime: 4,
    failAccessTime: 20
  });
  const { option, lines, blocks, reads } = inputData;

  const generateCache = () => {
    let cacheLines = [];
    for (let i = 0; i < lines; i++) {
      cacheLines[i] = [...Array(blocks)].map((_, index) => index + blocks * i);
    }
    return cacheLines;
  };

  let cacheState = generateCache();

  const [fails, setFails] = useState([]);
  const [hits, setHits] = useState([]);
  const [failsToPrint, setFailsToPrint] = useState([]);

  const handleClick = () => {
    setFails([]);
    setHits([]);
    setFailsToPrint([]);
    if (!reads) return;
    checkReads();
  };

  const directAssignment = (read) => {
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

    cacheState[line] = [...Array(blocks)].map(
      (_, index) => blocks * line + tag * lines * blocks + index
    );
  };

  const lru = (read) => {
    // let lastLineUse = -1;
    // const { line, tag } = calculateNewLine(read);
    // const newLine = (lastLineUse + 1) % 3;
    // cacheState[newLine] = [...Array(blocks)].map(
    //   (_, index) => blocks * line + tag * lines * blocks + index
    // );
  };

  let lastLineUse = -1;

  const fifo = (read) => {
    const line = (lastLineUse + 1) % 3;
    const block = Math.floor(read / blocks);
    const tag = Math.floor(block / lines);
    lastLineUse = line;

    setFailsToPrint((prevState) => [
      ...prevState,
      {
        read,
        line,
        block,
        tag
      }
    ]);

    cacheState[line] = [...Array(blocks)].map(
      (_, index) => blocks * block + index
    );
  };
  const checkReads = () => {
    reads.split(",").forEach((read) => {
      read = parseInt(read.trim());
      if (hits.includes(read) || fails.includes(read)) return;

      if (cacheState.flat().includes(read)) {
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
    LRU: lru,
    FIFO: fifo
  };

  return {
    hits,
    fails,
    inputData,
    failsToPrint,
    handleClick,
    setInputData
  };
};

export default useHomeHooks;
