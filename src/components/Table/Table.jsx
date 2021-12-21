import React from "react";
import { Paper, TableBody } from "@mui/material";

import {
  StyledTableContainer,
  StyledTable,
  StyledTableRow,
  StyledTableCell,
  StyledTableHead
} from "./TableStyled";

const initialRows = ["Linea", "Estado Inicial"];

const Table = ({ lines, blocks, reads, failsToPrint }) => (
  <StyledTableContainer component={Paper}>
    <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
      <StyledTableHead>
        <StyledTableRow>
          {initialRows.map((row) => (
            <StyledTableCell key={row}>{row}</StyledTableCell>
          ))}
          {failsToPrint.map(({ read }) => (
            <StyledTableCell key={read}>Fallo: {read}</StyledTableCell>
          ))}
        </StyledTableRow>
      </StyledTableHead>
      <TableBody>
        {[...Array(parseInt(lines))].map((_, index) => (
          <StyledTableRow key={index}>
            <StyledTableCell align="left">{index}</StyledTableCell>
            <StyledTableCell align="left">
              {`${index}:0  (${index * blocks} - ${(index + 1) * blocks - 1})`}
            </StyledTableCell>
            {failsToPrint.map((item, j) => {
              // Add logic to only print the correct column
              const { line, read, block, tag } = item;
              console.log(index === line && failsToPrint[j].read === read);
              if (index === line && failsToPrint[j].read === read) {
                return (
                  <StyledTableCell key={read}>
                    F|{" "}
                    {`${block}:${tag} (${block * blocks} - ${
                      (block + 1) * blocks - 1
                    })`}
                  </StyledTableCell>
                );
              }
            })}
          </StyledTableRow>
        ))}
      </TableBody>
    </StyledTable>
  </StyledTableContainer>
);
export default Table;
