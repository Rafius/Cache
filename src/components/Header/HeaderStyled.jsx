import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgb(243 244 246);
  min-height: 100px;
  max-height: 100px;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    background-color: rgb(243 244 246);
    width: 100%;
    padding: 10px 0 20px;
  }
`;

export const HeaderContainerItem = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-decoration: none;
  color: inherit;
`;

export const HeaderItemName = styled.span`
  ${({ isActive }) => isActive && "font-weight: bold"}
`;

export const Title = styled.h4`
  text-align: center;
  margin: 20px;
`;
