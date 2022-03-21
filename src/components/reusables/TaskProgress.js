import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import { color } from "theme";

const TaskProgress = ({
  divColor,
  progressColor,
  width,
  taskName,
  percentage,
  marginLeft,
  iconColor,
}) => {
  return (
    <Container bg={divColor} width={width} left={marginLeft}>
      <Progress bg={progressColor} percent={percentage}></Progress>
      <Task>
        <IconDiv bg={iconColor}>
          <Inner></Inner>
        </IconDiv>
        <Typography
          variant="subtitle2"
          component="h2"
          fontWeight={600}
          fontSize={"16px"}
          fontFamily={"Raleway"}
          color={color.white}
        >
          {taskName}
        </Typography>
      </Task>
      <Typography
        variant="subtitle2"
        component="h2"
        fontWeight={600}
        fontSize={"16px"}
        fontFamily={"Raleway"}
        color={progressColor}
      >
        {percentage}
      </Typography>
    </Container>
  );
};

export default TaskProgress;

const Container = styled.div`
  position: relative;
  display: flex;
  height: 3rem;
  background: ${(props) => props.bg};
  width: ${(props) => props.width};
  align-items: center;
  border-radius: 1.5rem;
  padding: 0 1rem;
  margin-left: ${(props) => props.left};
  justify-content: space-between;
`;

const Progress = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(props) => props.percent};
  border-radius: 1.5rem;
  background: ${(props) => props.bg};
  z-index: 2;
  transition: all 0.3s ease-out;
`;

const Task = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 5;
`;

const IconDiv = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background: ${(props) => props.bg};
  padding: 0.4rem;
`;
const Inner = styled.div`
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 50%;
`;
