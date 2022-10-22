import React from "react";
import styled from "styled-components";
import ProjectLogo from "../Assets/Logo.png";

//MUI ICONS
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LogoutIcon from "@mui/icons-material/Logout";

const Container = styled.div``;

const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  margin-left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%;
`;

const Span = styled.div`
  margin-left: -15px;
`;

const MenuContainer = styled.div`
  justify-content: center;
  align-items: center;
`;

const OptionContainer = styled.div`
  display: flex;
  padding: 20px;
`;

const LogoutContainer = styled.div``;

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
          <DashboardIcon />
          Dashboard
        </OptionContainer>
        <OptionContainer>
          <PeopleIcon />
          Plumbers
        </OptionContainer>
        <OptionContainer>
          <AccountBalanceIcon />
          Transactions
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
