import React from "react";
import { useLocation } from "react-router";
import Leagues from "../Leagues/Leagues";
import useHeaderHooks from "./useHeaderHooks";
import { MdOutlineSportsTennis } from "react-icons/md";

import { BiTable } from "react-icons/bi";

import {
  HeaderContainer,
  HeaderContainerItem,
  HeaderItem,
  HeaderItemName
} from "./HeaderStyled";

const headerItems = [
  {
    name: "Jornadas",
    path: "/",
    icon: <MdOutlineSportsTennis size={"1.5em"} />
  },
  {
    name: "Clasificacion",
    path: "/ranking",
    icon: <BiTable size={"1.5em"} />
  }
];

const Header = () => {
  const { league, handleSetLeague } = useHeaderHooks();
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return (
    <HeaderContainer>
      <HeaderContainerItem>
        {headerItems.map(({ name, path, icon }) => (
          <HeaderItem to={path} key={name}>
            {icon}
            <HeaderItemName isActive={isActive(path)}>{name}</HeaderItemName>
          </HeaderItem>
        ))}
      </HeaderContainerItem>
      <Leagues handleSetLeague={handleSetLeague} league={league} />
    </HeaderContainer>
  );
};

export default Header;
