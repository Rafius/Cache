import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";

import Loader from "@/components/Loader";
import {
  StyledTableContainer,
  StyledTableRow,
  StyledTableCell,
  StyledTableHead
} from "./RankingStyled";
import useRankingHooks from "./useRankingHooks";

const header = [
  "Clasificacion",
  "Equipos",
  "Puntos",
  "Partidos jugados",
  "Victorias",
  "Derrotas",
  "Juegos a Favor",
  "Juegos en Contra",
  "Diferencia de juegos"
];

const Ranking = () => {
  const { isLoading, ranking } = useRankingHooks();
  if (isLoading) return <Loader />;

  return (
    <StyledTableContainer component={Paper}>
      <Table aria-label="customized table">
        <StyledTableHead>
          <StyledTableRow>
            {header.map((item) => (
              <StyledTableCell key={item}>{item}</StyledTableCell>
            ))}
          </StyledTableRow>
        </StyledTableHead>
        <TableBody>
          {ranking.map(
            ({
              ranking,
              name,
              points,
              played,
              won,
              lose,
              gamesFor,
              gamesAgainst,
              gamesDifference
            }) => (
              <StyledTableRow key={name}>
                <StyledTableCell align="center">{ranking}</StyledTableCell>
                <StyledTableCell align="left">{name}</StyledTableCell>
                <StyledTableCell align="center">{points}</StyledTableCell>
                <StyledTableCell align="center">{played}</StyledTableCell>
                <StyledTableCell align="center">{won}</StyledTableCell>
                <StyledTableCell align="center">{lose}</StyledTableCell>
                <StyledTableCell align="center">{gamesFor}</StyledTableCell>
                <StyledTableCell align="center">{gamesAgainst}</StyledTableCell>
                <StyledTableCell align="center">
                  {gamesDifference}
                </StyledTableCell>
              </StyledTableRow>
            )
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default Ranking;
