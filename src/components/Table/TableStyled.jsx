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
  min-width: 110px;
`;

export const RowHeader = styled.div`
  border-bottom: 1px solid black;
`;

export const RowItem = styled.div`
  text-align: center;
`;

export const RowItemFailed = styled(RowItem)`
  background-color: #f4c274;
`;

export const Empty = styled.div`
  visibility: hidden;
`;
