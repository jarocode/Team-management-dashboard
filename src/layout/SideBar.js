import React, { useState } from "react";
import styled from "styled-components";
import { Typography, Fab, IconButton } from "@mui/material";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { MdDashboardCustomize, MdAdd } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import {
  IoSpeedometer,
  IoSettings,
  IoChevronDownOutline,
} from "react-icons/io5";
import { ImFolderOpen } from "react-icons/im";
import { FaHistory } from "react-icons/fa";

import { color } from "theme";
import logo from "assets/non-svg/teamaptLogo.png";
import AppUser from "components/reusables/AppUser";
import portrait2 from "assets/non-svg/portrait2.jpg";

const SideBar = ({ isCollapsed, setIsCollapsed, setHeader }) => {
  const [active, setActive] = useState(0);

  const menuList = [
    {
      name: "Dashboard",
      icon: (
        <MdDashboardCustomize
          size={"1.5rem"}
          color={active === 0 ? color.blue : color.black}
        />
      ),
    },
    {
      name: "Analytics",
      icon: (
        <SiGoogleanalytics
          size={"1.3rem"}
          color={active === 1 ? color.blue : color.black}
        />
      ),
    },
    {
      name: "Projects",
      icon: (
        <ImFolderOpen
          size={"1.5rem"}
          color={active === 2 ? color.blue : color.black}
        />
      ),
    },
    {
      name: "Tracking",
      icon: (
        <IoSpeedometer
          size={"1.5rem"}
          color={active === 3 ? color.blue : color.black}
        />
      ),
    },
    {
      name: "History",
      icon: (
        <FaHistory
          size={"1.5rem"}
          color={active === 4 ? color.blue : color.black}
        />
      ),
    },
    {
      name: "Settings",
      icon: (
        <IoSettings
          size={"1.5rem"}
          color={active === 5 ? color.blue : color.black}
        />
      ),
    },
  ];

  return (
    <Container collapse={isCollapsed}>
      <Inner>
        <TopDiv>
          {!isCollapsed && <Logo src={logo} />}
          <BsBoxArrowInLeft
            size={"1.2rem"}
            color={color.blue}
            style={{ marginTop: ".5rem", cursor: "pointer" }}
            onClick={() => setIsCollapsed((prev) => !prev)}
          />
        </TopDiv>
        <MenuDiv>
          {menuList.map(({ name, icon }, index) => (
            <Menu
              onClick={() => {
                setActive(index);
                setHeader(name);
              }}
            >
              {icon}
              {!isCollapsed && (
                <MenuName
                  variant="subtitle2"
                  component="h2"
                  fontWeight={600}
                  fontSize={"16px"}
                  fontFamily={"Raleway"}
                  color={active === index ? color.blue : color.black}
                  textAlign={"center"}
                >
                  {name}
                </MenuName>
              )}
            </Menu>
          ))}
        </MenuDiv>
        <>
          {isCollapsed ? (
            <Fab
              color="primary"
              aria-label="add"
              size="small"
              sx={{ marginTop: "2rem" }}
            >
              <MdAdd size="1.5rem" />
            </Fab>
          ) : (
            <CreateTask>
              <Typography
                variant="subtitle2"
                component="h2"
                fontWeight={600}
                fontSize={"16px"}
                fontFamily={"Raleway"}
                color={color.black}
                textAlign={"center"}
                width={"55%"}
              >
                Create new task
              </Typography>

              <Fab color="primary" aria-label="add" size="small">
                <MdAdd size="1.5rem" />
              </Fab>
            </CreateTask>
          )}
        </>
        {!isCollapsed && (
          <BottomDiv>
            <AppUser
              image={portrait2}
              name={"Marcel A."}
              title={"Marcel@ffg.com"}
            />
            <IoChevronDownOutline color={color.grey} />
          </BottomDiv>
        )}
      </Inner>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  width: ${({ collapse }) => (collapse ? "80px" : "256px")};
  height: 100vh;
  transition: width 0.2s ease;
  position: fixed;
  left: 0px;
  flex-shrink: 0;
  border-right: 1px solid #efefef;
  padding-top: 0.5rem;
`;
const Inner = styled.div`
  padding: ${({ collapse }) => (collapse ? "0 .5rem" : "0 2rem")};
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 75%;
  height: auto;
  align-self: center;
`;

const MenuDiv = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MenuName = styled(Typography)``;

const Menu = styled.div`
  display: flex;
  gap: 8%;
  align-items: center;
  cursor: pointer;
  &:hover ${MenuName} {
    color: ${color.blue};
  }
`;

const CreateTask = styled.div`
  height: 6rem;
  width: 97%;
  background: #eef1fd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  margin-top: 3rem;
  border-radius: 2rem;
`;

const BottomDiv = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
