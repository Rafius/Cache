import React from "react";

import Match from "./Match";
import Loader from "@/components/Loader";
import Select from "@/components/Select";
import useMatchesHooks from "./useMatchesHooks";
import { MatchesContainer, Info } from "./MatchesStyled";

const Matches = () => {
  const { week, titles, isLoading, matchesData, handleSelect } =
    useMatchesHooks();

  if (isLoading) return <Loader />;

  return (
    <MatchesContainer>
      <Info>
        <Select options={titles} handleSelect={handleSelect} week={week} />
      </Info>
      {matchesData.map((event, index) => (
        <Match key={index} {...event} index={index} />
      ))}
    </MatchesContainer>
  );
};

export default Matches;
