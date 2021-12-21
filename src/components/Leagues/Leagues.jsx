import React from "react";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const LOW = "low";
const MID = "mid";

const Leagues = ({ handleSetLeague, league }) => {
  return (
    <ToggleButtonGroup
      color="primary"
      value={league}
      size="small"
      onChange={handleSetLeague}
    >
      <ToggleButton value={LOW}>Nivel Bajo</ToggleButton>
      <ToggleButton value={MID}>Nivel Medio</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Leagues;
