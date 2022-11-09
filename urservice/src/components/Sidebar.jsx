import React from "react";
import styled from "styled-components";
import ProjectLogo from "../Assets/Logo.png";
import { Link } from "react-router-dom";

//MUI ICONS
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";

const Container = styled.div`
  position: absolute;
  background-color: #134d4d;
  width: 20%;
  height: 100vh;
  color: white;
  top: 0;
  font-family: "Courier Prime", monospace;
`;

const ImgContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%;
`;

const Span = styled.span`
  margin-left: -15px;
  font-size: 25px;
`;

const MenuContainer = styled.div`
  justify-content: center;
  align-items: center;
`;

const OptionContainer = styled.div`
  display: flex;
  padding: 15px;
  gap: 10px;
  font-size: 18px;
  color: white;

  &:hover {
    color: skyblue;
    cursor: pointer;
    transform: scale(1.05);
  }
  /* 
  &:active {
    border: solid 3px white;
    border-radius: 15px;
    background-color: #134d4d;
  } */
`;

const LogoutContainer = styled.div`
  display: flex;
  padding: 15px;
  margin-top: 100px;
  color: red;
  gap: 10px;
  font-size: 18px;

  &:hover {
    color: #3c91e6;
    cursor: pointer;
  }
`;

const Sidebar = () => {
  //JAVASCRIPT

  return (
    //HTML
    <Container>
      <ImgContainer>
        <Logo src={ProjectLogo} />
        <Span>UrService</Span>
      </ImgContainer>

      <MenuContainer>
        <OptionContainer>
          <DashboardIcon sx={{ color: "#00c4cc" }} />
          <Link to="/">Dashboard</Link>
        </OptionContainer>
        <OptionContainer>
          <PeopleIcon sx={{ color: "#00c4cc" }} />
          <Link to="/Plumbers">Plumbers</Link>
        </OptionContainer>
        <LogoutContainer>
          <LogoutIcon />
          Logout
        </LogoutContainer>
      </MenuContainer>
    </Container>
  );
};

export default Sidebar;
