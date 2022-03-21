import React from "react";
import styled from "styled-components";
import { Typography, AvatarGroup, Avatar } from "@mui/material";
import { MdAdd } from "react-icons/md";
import {
  FiChevronRight,
  FiChevronLeft,
  FiChevronDown,
  FiSearch,
} from "react-icons/fi";

import { color } from "theme";
import Layout from "layout";
import AppProgress from "components/reusables/AppProgress";
import portrait1 from "assets/non-svg/portrait1.jpg";
import portrait2 from "assets/non-svg/portrait2.jpg";
import portrait3 from "assets/non-svg/portrait3.jpg";
import portrait4 from "assets/non-svg/portrait4.jpg";
import portrait5 from "assets/non-svg/portrait5.jpg";
import portrait7 from "assets/non-svg/portrait7.jpg";
import portrait8 from "assets/non-svg/portrait8.jpg";
import portrait9 from "assets/non-svg/portrait9.jpg";
import portrait10 from "assets/non-svg/portrait10.jpg";
import portrait11 from "assets/non-svg/portrait11.jpg";
import portrait12 from "assets/non-svg/portrait12.jpg";
import portrait13 from "assets/non-svg/portrait13.jpg";
import portrait14 from "assets/non-svg/portrait14.jpg";
import portrait15 from "assets/non-svg/portrait15.jpg";
import Staff from "components/reusables/Staff";
import TaskProgress from "components/reusables/TaskProgress";

const TeamBoard = () => {
  const days = [
    { day: "T", number: 11 },
    { day: "F", number: 12 },
    { day: "S", number: 13 },
    { day: "S", number: 14 },
    { day: "M", number: 15 },
    { day: "T", number: 16 },
    { day: "W", number: 17 },
    { day: "T", number: 18 },
    { day: "F", number: 19 },
    { day: "S", number: 20 },
    { day: "S", number: 21 },
    { day: "M", number: 22 },
    { day: "T", number: 23 },
    { day: "W", number: 24 },
    { day: "T", number: 25 },
    { day: "F", number: 26 },
    { day: "S", number: 27 },
  ];

  const borderLines = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const staffDetails = [
    {
      name: "Adedotun Basil",
      title: "Senior Software Engineer",
      image: portrait14,
    },
    { name: "Demms Moore", title: "Backend Engineer", image: portrait13 },
    { name: "Lexy Dunnel", title: "Product Designer", image: portrait12 },
    {
      name: "krisha maskey",
      title: " Senior Product Designer",
      image: portrait10,
    },
    {
      name: "Olabode Adekoya",
      title: " Senior Product Designer",
      image: portrait11,
    },
    {
      name: "Chris himmel",
      title: " Frontend Engineer",
      image: portrait9,
    },
    {
      name: "Bob Scotte",
      title: " Backend Engineer",
      image: portrait8,
    },
    {
      name: "Arnold Bergrich",
      title: " Devops Engineer",
      image: portrait7,
    },
    {
      name: "Julia Saske",
      title: " Frontend Engineer",
      image: portrait5,
    },
    {
      name: "Sussane HeizenBerg",
      title: " Frontend Engineer",
      image: portrait15,
    },
  ];
  return (
    <Layout>
      <Container>
        <TopDiv>
          <LeftDiv>
            <Typography
              variant="subtitle2"
              component="h2"
              fontWeight={600}
              fontSize={"24px"}
              fontFamily={"Raleway"}
              color={color.black}
              marginBottom={".3rem"}
            >
              GSE Banking app
            </Typography>
            <AppProgress />
          </LeftDiv>
          <RightDiv>
            <InviteDiv>
              <MdAdd color={color.grey} />
              <Typography
                variant="subtitle2"
                component="h2"
                fontWeight={600}
                fontSize={"16px"}
                fontFamily={"Raleway"}
                color={color.grey}
              >
                Invite
              </Typography>
            </InviteDiv>
            <AvatarGroup total={18}>
              <Avatar alt="Remy Sharp" src={portrait1} />
              <Avatar alt="Travis Howard" src={portrait2} />
              <Avatar alt="Cindy Baker" src={portrait3} />
              <Avatar alt="Cindy" src={portrait4} />
            </AvatarGroup>
          </RightDiv>
        </TopDiv>
        <CalendarDiv>
          <CalenderHeader>
            <DateHeader>
              <Typography
                variant="subtitle2"
                component="h2"
                fontWeight={600}
                fontSize={"18px"}
                fontFamily={"Raleway"}
                color={color.black}
              >
                February 2021
              </Typography>
              <div>
                <FiChevronLeft color={color.grey} />
                <FiChevronRight
                  color={color.grey}
                  style={{ marginLeft: ".5rem" }}
                />
              </div>
            </DateHeader>
            <SearchDiv>
              <FiSearch size={"1.2rem"} />
              <Filter>
                <Typography
                  variant="subtitle2"
                  component="h2"
                  fontWeight={600}
                  fontSize={"12px"}
                  fontFamily={"Raleway"}
                  color={color.black}
                >
                  Month
                </Typography>
                <FiChevronDown color={color.grey} />
              </Filter>
            </SearchDiv>
          </CalenderHeader>
          <TaskBody>
            <Header>
              {days.map(({ day, number }) => (
                <Typography
                  variant="subtitle2"
                  component="h2"
                  fontWeight={600}
                  fontSize={"17px"}
                  fontFamily={"Raleway"}
                  color={color.grey}
                  background={"red"}
                >
                  {day} <span style={{ color: color.black }}>{number}</span>
                </Typography>
              ))}
            </Header>
            <Body>
              <StaffDiv>
                {staffDetails.map(({ name, title, image }) => (
                  <Staff image={image} key={name} title={title} name={name} />
                ))}
              </StaffDiv>
              <TaskDiv>
                {borderLines.map((data) => (
                  <BorderLines data={data}></BorderLines>
                ))}
                <TaskInner>
                  <ProgressDiv>
                    <TaskProgress
                      divColor={"#fff3eb"}
                      progressColor={" #ff7500"}
                      iconColor="#ff9d5a"
                      width="50%"
                      taskName="Database design"
                      marginLeft={"0rem"}
                      percentage="50%"
                    />
                  </ProgressDiv>
                  <ProgressDiv>
                    <TaskProgress
                      divColor={"#f7f4ff"}
                      progressColor={" #06063b"}
                      iconColor="#302a5c"
                      width="65%"
                      taskName="Payments"
                      marginLeft={"4rem"}
                      percentage="70%"
                    />
                  </ProgressDiv>
                  <ProgressDiv>
                    <TaskProgress
                      divColor={"#e6fafe"}
                      progressColor={" #00d6ff"}
                      iconColor="#6df0fb"
                      width="70%"
                      taskName="User profile"
                      marginLeft={"0rem"}
                      percentage="60%"
                    />
                  </ProgressDiv>
                  <ProgressDiv>
                    <TaskProgress
                      divColor={"#fff9e4"}
                      progressColor={" #ffd000"}
                      iconColor="#fcdd4b"
                      width="65%"
                      taskName="User profile"
                      marginLeft={"8rem"}
                      percentage="60%"
                    />
                  </ProgressDiv>
                  <ProgressDiv>
                    <TaskProgress
                      divColor={"#fff3eb"}
                      progressColor={" #ff7500"}
                      iconColor="#ff9d5a"
                      width="50%"
                      taskName="Database design"
                      marginLeft={"0rem"}
                      percentage="50%"
                    />
                  </ProgressDiv>
                  <ProgressDiv>
                    <TaskProgress
                      divColor={"#f7f4ff"}
                      progressColor={" #06063b"}
                      iconColor="#302a5c"
                      width="65%"
                      taskName="Payments"
                      marginLeft={"4rem"}
                      percentage="70%"
                    />
                  </ProgressDiv>
                  <ProgressDiv>
                    <TaskProgress
                      divColor={"#e6fafe"}
                      progressColor={" #00d6ff"}
                      iconColor="#6df0fb"
                      width="70%"
                      taskName="User profile"
                      marginLeft={"0rem"}
                      percentage="60%"
                    />
                  </ProgressDiv>
                  <ProgressDiv>
                    <TaskProgress
                      divColor={"#fff9e4"}
                      progressColor={" #ffd000"}
                      iconColor="#fcdd4b"
                      width="65%"
                      taskName="User profile"
                      marginLeft={"8rem"}
                      percentage="60%"
                    />
                  </ProgressDiv>
                  <ProgressDiv>
                    <TaskProgress
                      divColor={"#fff3eb"}
                      progressColor={" #ff7500"}
                      iconColor="#ff9d5a"
                      width="50%"
                      taskName="Database design"
                      marginLeft={"0rem"}
                      percentage="50%"
                    />
                  </ProgressDiv>
                  <ProgressDiv>
                    <TaskProgress
                      divColor={"#f7f4ff"}
                      progressColor={" #06063b"}
                      iconColor="#302a5c"
                      width="65%"
                      taskName="Payments"
                      marginLeft={"4rem"}
                      percentage="70%"
                    />
                  </ProgressDiv>
                </TaskInner>
              </TaskDiv>
            </Body>
          </TaskBody>
        </CalendarDiv>
      </Container>
    </Layout>
  );
};

export default TeamBoard;

const Container = styled.div`
  padding: 6.5rem 2.2rem 0 3.5rem;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftDiv = styled.div``;
const RightDiv = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const InviteDiv = styled.div`
  display: flex;
  border: 1px dashed ${color.grey};
  height: 3.4rem;
  align-items: center;
  width: 9rem;
  gap: 0.5rem;
  border-radius: 1.5rem;
  justify-content: center;
`;

const CalendarDiv = styled.div``;

const CalenderHeader = styled.div`
  margin-top: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DateHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${color.grey};
  justify-content: center;
  gap: 2.5rem;
  height: 2.2rem;
  border-radius: 1.1rem;
  min-width: 8rem;
`;

const TaskBody = styled.div`
  position: relative;
  margin-top: 1.8rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 0.5rem;
`;

const StaffDiv = styled.div`
  width: 25rem;
  min-height: 10rem;
  top: 4rem;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const Body = styled.div`
  display: flex;
  gap: 3rem;
  padding-top: 3rem;
`;

const TaskDiv = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  position: relative;
`;

const BorderLines = styled.div`
  height: 100%;
  width: 100%;
  border-left: 0.5px solid #efefff;
  border-right: ${(props) => props.data === 12 && "0.5px solid #efefff;"}
  border-top: none;
  border-bottom: none;
`;

const TaskInner = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const ProgressDiv = styled.div`
  width: 100%;
  height: 81.21px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
