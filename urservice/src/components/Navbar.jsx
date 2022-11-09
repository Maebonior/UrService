import React from "react";
import styled from "styled-components";
import profileAdmin from "../Assets/Images/profile.png";

//Mui
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Container = styled.div`
  background-color: #134d4d;
  min-width: 100%;
  height: 55px;
  font-family: "Courier Prime", monospace;
`;

const Wrapper = styled.div`
  margin-left: 25%;
  display: flex;
  align-content: center;
`;

const SearchIconContainer = styled.div`
  border-radius: 15px;
  background-color: #3c91e6;
  width: 100%;
  margin-top: 13px;
`;

const SearchWrapper = styled.div`
  display: flex;
  border-radius: 15px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  padding: 10px;
  border-radius: 15px 0px 0px 10px;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: #3c91e6;
  border-radius: 15px;
`;

const NotificationsNoneIconContainer = styled.div`
  justify-content: flex-end;
  align-items: center;
  display: flex;
  margin-right: 20px;
  color: white;
  margin-left: 50%;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <SearchIconContainer>
          <SearchWrapper>
            <Input type="search" placeholder="Search..." />
            <Button>
              <SearchIcon />
            </Button>
          </SearchWrapper>
        </SearchIconContainer>
        {/* //Contain */}
        <NotificationsNoneIconContainer>
          <NotificationsNoneIcon />
        </NotificationsNoneIconContainer>
        <ProfileContainer>
          <Profile src={profileAdmin} />
        </ProfileContainer>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
