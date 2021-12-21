import React from "react";

import {
  MatchesContainer,
  Status,
  HomeTeam,
  AwayTeam,
  TeamNames,
  Result,
  HomeResult,
  AwayResult,
  PersonStyled,
} from "./MatchStyled";

const href = (phone) => `whatsapp://send?phone=+34${phone}&abid=${phone}`;

const Person = ({ name, phone }) => (
  <PersonStyled key={name} href={href(phone)}>
    {name}
  </PersonStyled>
);

const Match = ({ home, away, homeResult, awayResult, isSecondary, index }) => {
  return (
    <MatchesContainer index={index} isSecondary={isSecondary}>
      <Status result={homeResult}>{homeResult ? "Jugado" : "Pendiente"}</Status>
      <TeamNames>
        <HomeTeam>
          {home.person.map(({ name, phone }) => (
            <Person key={name} name={name} phone={phone} />
          ))}
        </HomeTeam>
        <AwayTeam>
          {away.person.map(({ name, phone }) => (
            <Person key={name} name={name} phone={phone} />
          ))}
        </AwayTeam>
      </TeamNames>
      <Result>
        <HomeResult>{homeResult}</HomeResult>
        <AwayResult>{awayResult}</AwayResult>
      </Result>
    </MatchesContainer>
  );
};

export default Match;
