import React from "react";
import styled from "styled-components";

//Mui
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  background-color: #134d4d;
  min-width: 100%;
`;

const Wrapper = styled.div``;

const SearchIconContainer = styled.div``;

const SearchWrapper = styled.div`
  display: flex;
  border-radius: 20px 0px 0px 20px;
`;

const Input = styled.input`
  padding: 1px;
  width: 30%;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <SearchIconContainer>
          <SearchWrapper>
            <Input type="search" />
            <SearchIcon />
          </SearchWrapper>
        </SearchIconContainer>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
