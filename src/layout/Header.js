import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { FiChevronRight } from "react-icons/fi";
import { IoMdChatboxes } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";

import { color } from "theme";
import AppBadge from "components/reusables/AppBadge";
import AppUser from "components/reusables/AppUser";
import portrait6 from "assets/non-svg/portrait6.jpg";

const Header = ({ header }) => {
  return (
    <Container>
      <Inner>
        <LeftDiv>
          {" "}
          <Typography
            variant="subtitle2"
            component="h2"
            fontWeight={600}
            fontSize={"16px"}
            fontFamily={"Raleway"}
            color={color.black}
          >
            {header}
          </Typography>
          <FiChevronRight color={color.grey} />
          <Typography
            variant="subtitle2"
            component="h2"
            fontWeight={600}
            fontSize={"16px"}
            fontFamily={"Raleway"}
            color={color.grey}
          >
            GSE Banking App
          </Typography>
        </LeftDiv>
        <RightDiv>
          <Div1>
            <IoMdChatboxes size={"1.5rem"} color={color.black} />
            <AppBadge
              variant="dot"
              overlap="circular"
              background={color.danger}
            >
              <MdNotifications size={"1.5rem"} color={color.black} />
            </AppBadge>
          </Div1>
          <Div2>
            <AppUser image={portrait6} name={"Jim Kimell"} />
            <IoChevronDownOutline color={color.grey} />
          </Div2>
        </RightDiv>
      </Inner>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0;
  position: fixed;

  width: 100%;
  background: ${color.white};
  padding-right: 16rem;
  top: 0;
  z-index: 999;
`;
const Inner = styled.div`
  display: flex;
  padding: 1.4rem 0 1.4rem 3.5rem;

  justify-content: space-between;
  width: 97%;
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const RightDiv = styled.div`
  display: flex;
`;

const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  border-right: 1px solid #d8d8d8;
  align-items: center;
  width: 8.5rem;
  padding: 0 1.5rem;
`;
const Div2 = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 1.5rem;
`;
