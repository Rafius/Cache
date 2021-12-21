import styled from "styled-components";

export const MatchesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid white;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: ${({ index }) => (index % 2 === 0 ? "#f5f5f5" : "#fff")};
  border: 1px solid rgba(5, 6, 15, 0.2);
  box-shadow: 1px 5px 6px -2px rgba(0, 0, 0, 0.29);
`;

export const Status = styled.div`
  margin-right: 10px;
  color: ${({ result }) => (result ? "green" : "red")};
  min-width: 80px;
  font-weight: 600;
`;

export const TeamNames = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
`;

export const HomeTeam = styled.div`
  margin-bottom: 10px;
`;

export const AwayTeam = styled.div``;

export const PersonStyled = styled.a`
  margin-right: 10px;
  color: #007185;
`;

export const Result = styled.div`
  font-weight: 600;
  min-width: 50px;
`;

export const HomeResult = styled.div`
  margin-bottom: 10px;
`;

export const AwayResult = styled.div``;
