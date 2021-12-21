import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Table, TableHead, TableContainer, TableRow } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)`
  margin: 5px;
  max-width: 100%;
`;

export const StyledTable = styled(Table)`
  min-width: 100%;
`;

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  whiteSpace: "nowrap",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16
  }
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

export const StyledTableHead = styled(TableHead)``;
