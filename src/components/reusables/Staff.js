import React from "react";
import styled from "styled-components";
import { FiMoreVertical } from "react-icons/fi";

import { color } from "theme";
import AppUser from "./AppUser";

const Staff = ({ image, name, title }) => {
  return (
    <Container>
      <AppUser image={image} name={name} title={title} />
      <FiMoreVertical color={color.grey} />
    </Container>
  );
};

export default Staff;

const Container = styled.div`
  display: flex;
  padding: 1.2rem 0.8rem;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${color.grey};
  border-radius: 1rem;
`;
