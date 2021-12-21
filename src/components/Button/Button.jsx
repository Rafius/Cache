import React from "react";
import { ButtonStyled } from "./ButtonStyled";

const Button = ({ onClick, disabled, children }) => (
  <ButtonStyled onClick={onClick} disabled={disabled}>
    {children}
  </ButtonStyled>
);

export default Button;
