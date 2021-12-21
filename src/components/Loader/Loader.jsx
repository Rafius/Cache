import React from "react";
import { BeatLoader } from "react-spinners";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => (
  <LoaderContainer data-testid="loader-container">
    <BeatLoader />
  </LoaderContainer>
);

export default Loader;
