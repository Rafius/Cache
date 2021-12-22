import React from "react";

import { TableContainer, RowContainer, Row, Empty } from "./TableStyled";

const initialRows = ["Linea", "Estado Inicial"];

const Table = ({ lines, blocks, failsToPrint }) => {
  return (
    <TableContainer>
      {initialRows.map((row, index) => (
        <RowContainer key={index}>
          <Row>{row}</Row>
          {[...Array(parseInt(lines))].map((_, j) => (
            <div key={j}>
              {index === 0 ? (
                <div align="left">{j}</div>
              ) : (
                <div align="left">
                  {`${j}:0  (${j * blocks} - ${(j + 1) * blocks - 1})`}
                </div>
              )}
            </div>
          ))}
        </RowContainer>
      ))}
      {failsToPrint.map(({ line, read, block, tag }) => (
        <RowContainer key={read}>
          <Row>Fallo: {read}</Row>
          {[...Array(parseInt(lines))].map((_, index) => {
            if (line !== index) return <Empty key={index}>vacio</Empty>;
            return (
              <div key={index}>
                F|{" "}
                {`${block}:${tag} (${block * blocks} - ${
                  (block + 1) * blocks - 1
                })`}
              </div>
            );
          })}
        </RowContainer>
      ))}
    </TableContainer>
  );
};
export default Table;
