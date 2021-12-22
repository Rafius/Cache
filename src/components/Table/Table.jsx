import React from "react";
import { RowItemFailed } from "./TableStyled";

import {
  TableContainer,
  RowContainer,
  RowHeader,
  RowItem,
  Empty
} from "./TableStyled";

const initialRows = ["Linea", "Estado Inicial"];

const Table = ({ option, lines, blocks, failsToPrint }) => {
  return (
    <TableContainer>
      {initialRows.map((row, index) => (
        <RowContainer key={index}>
          <RowHeader>{row}</RowHeader>
          {[...Array(parseInt(lines))].map((_, j) => (
            <>
              {index === 0 ? (
                <RowItem key={j}>{j}</RowItem>
              ) : (
                <RowItem key={j}>
                  {`${j}:0  (${j * blocks} - ${(j + 1) * blocks - 1})`}
                </RowItem>
              )}
            </>
          ))}
        </RowContainer>
      ))}
      {failsToPrint.map(({ line, read, block, tag }) => (
        <RowContainer key={read}>
          <RowHeader>Fallo: {read}</RowHeader>
          {[...Array(parseInt(lines))].map((_, index) => {
            if (line !== index) return <Empty key={index}>vacio</Empty>;
            if (option === "Asignacion directa") {
              return (
                <RowItemFailed key={index}>
                  {`${block}:${tag} (${block * blocks} - ${
                    (block + 1) * blocks - 1
                  })`}
                </RowItemFailed>
              );
            }
            return (
              <RowItemFailed key={index}>
                {`${block} (${block * blocks} - ${(block + 1) * blocks - 1})`}
              </RowItemFailed>
            );
          })}
        </RowContainer>
      ))}
    </TableContainer>
  );
};
export default Table;
