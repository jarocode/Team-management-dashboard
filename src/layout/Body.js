import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import { color } from "theme";
import Header from "./Header";

const Body = ({ children, header }) => {
  return (
    <Container>
      <Header header={header} />
      {children}
    </Container>
  );
};

export default Body;

const Container = styled.div`
  width: 100%;
`;
