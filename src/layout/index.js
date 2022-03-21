import React, { useState } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

// import { color } from "theme.js";
import SideBar from "./SideBar";
import Body from "./Body";

const Index = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState();
  const [header, setHeader] = useState("Dashboard");
  return (
    <Container collapsed={isCollapsed}>
      <SideBar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        setHeader={setHeader}
      />
      <Body children={children} header={header} collapsed={isCollapsed} />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: inherit;
  width: inherit;
  margin-left: ${({ collapsed }) => (collapsed ? "80px" : "256px")};

  transition: all 0.2s ease;
`;
