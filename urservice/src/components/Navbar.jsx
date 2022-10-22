import React from "react";
import styled from "styled-components";

//Mui
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  background-color: #134d4d;
  min-width: 100%;
`;

const Wrapper = styled.div``;

const SearchIconContainer = styled.div`
  border-radius: 15px;
  background-color: #3c91e6;
  width: 30%;
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
      </Wrapper>
    </Container>
  );
};

export default Navbar;
