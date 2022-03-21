import React from "react";
import styled from "styled-components";
import { Typography, Avatar } from "@mui/material";

import { color } from "theme";

const AppUser = ({ image, name, title }) => {
  return (
    <Container>
      <Avatar src={image} />
      <NameDiv>
        <Typography
          variant="subtitle2"
          component="h2"
          fontWeight={600}
          fontSize={"14px"}
          fontFamily={"Raleway"}
          color={color.black}
        >
          {name}
        </Typography>
        <Typography
          variant="subtitle2"
          component="h2"
          fontWeight={600}
          fontSize={"12px"}
          fontFamily={"Raleway"}
          color={color.grey}
        >
          {title}
        </Typography>
      </NameDiv>
    </Container>
  );
};

export default AppUser;

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;
const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
