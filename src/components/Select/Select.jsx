import * as React from "react";

import { SelectStyled, OptionStyled } from "./SelectStyled";

const Select = ({ options, handleSelect, defaultValue }) => (
  <SelectStyled onChange={handleSelect} defaultValue={defaultValue}>
    {options.map((option, i) => (
      <OptionStyled key={option} value={option}>
        {option}
      </OptionStyled>
    ))}
  </SelectStyled>
);

export default Select;
