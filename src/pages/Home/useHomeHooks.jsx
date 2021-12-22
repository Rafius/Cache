import { useState } from "react";

const useHomeHooks = () => {
  const [inputData, setInputData] = useState({
    option: "Asignacion directa",
    lines: 0,
    blocks: 0,
    reads: "",
    hitAccessTime: 0,
    failAccessTime: 0
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

  let linesRead = [...Array(lines)].map((_, i) => i);

  const updateLinesRead = (read) => {
    const lineReaded = cacheState.findIndex((state) => state.includes(read));

    const newLinesRead = [...linesRead];
    newLinesRead[0] = lineReaded;

    for (let i = 0; i < newLinesRead.length - 1; i++) {
      if (!newLinesRead.includes(linesRead[i])) {
        newLinesRead[i + 1] = linesRead[i];
      }
    }
    linesRead = newLinesRead;
  };

  const lru = (read) => {
    const line = linesRead[lines - 1];
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
      (_, index) => blocks * block + index
    );
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
      if (cacheState.flat().includes(read)) {
        setHits((prevState) => [...prevState, read]);
      } else {
        setFails((prevState) => [...prevState, read]);
        const callback = cacheDictionary[option];
        callback(read);
      }
      updateLinesRead(read);
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
