import * as React from "react";

import { SelectStyled, OptionStyled } from "./SelectStyled";

const Select = ({ options, handleSelect, week }) => (
  <SelectStyled onChange={handleSelect} defaultValue={week}>
    {options.map((option, i) => (
      <OptionStyled key={option} value={i + 1}>
        {option}
      </OptionStyled>
    ))}
  </SelectStyled>
);

export default Select;
