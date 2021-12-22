import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 auto;
  margin-top: 20px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 5px;
  min-width: 110px;
`;

export const Row = styled.div``;

export const Empty = styled.div`
  color: white;
`;
