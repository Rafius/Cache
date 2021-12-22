import React from "react";

import { TableContainer, RowContainer, Row, Empty } from "./TableStyled";

const initialRows = ["Linea", "Estado Inicial"];

const Table = ({ lines, blocks, reads, failsToPrint }) => {
  return (
    <TableContainer>
      {initialRows.map((row, index) => {
        return (
          <RowContainer key={index}>
            <Row>{row}</Row>
            {[...Array(parseInt(lines))].map((_, j) => {
              return (
                <div key={j}>
                  {index === 0 ? (
                    <div align="left">{j}</div>
                  ) : (
                    <div align="left">
                      {`${j}:0  (${j * blocks} - ${(j + 1) * blocks - 1})`}
                    </div>
                  )}
                </div>
              );
            })}
          </RowContainer>
        );
      })}
      {failsToPrint.map(({ line, read, block, tag }) => {
        return (
          <RowContainer key={read}>
            <Row>Fallo: {read}</Row>
            {[...Array(parseInt(lines))].map((item, index) => {
              console.log(item, index);
              if (line !== index) return <Empty>vacio</Empty>;
              return (
                <div>
                  F|{" "}
                  {`${block}:${tag} (${block * blocks} - ${
                    (block + 1) * blocks - 1
                  })`}
                </div>
              );
            })}
          </RowContainer>
        );
      })}
    </TableContainer>
  );
};
export default Table;
