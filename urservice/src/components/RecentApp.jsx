import React from "react";
import styled from "styled-components";
//import Profile from "../Assets/Profile.png";

const Container = styled.div`
  width: 945px;
  box-shadow: 0px 1px 5px 0px grey;
  border-radius: 10px;
  padding: 30px;
  margin: 50px 0px 0px 30px;
  color: black;
  font-family: "Courier Prime", monospace;
  font-size: 20px;
`;

const Wrapper = styled.div``;

const UserContainer = styled.div`
  float: left;
  height: 50px;
  padding: 20px;
`;

const Span = styled.span`
  font-size: 15px;
`;
const UserContainer1 = styled.div`
  float: right;
  height: 50px;
  margin: 0px 50px 0px 100px;
  padding: 20px;
  font-family: "Courier Prime", monospace;
`;
const head = {
  margin: "10px 0px",
};

const button1 = {
  backgroundColor: "limegreen",
  color: "white",
  border: "0px",
  padding: "5px 10px",
  borderRadius: "5px",
};
const button2 = {
  backgroundColor: "tomato",
  color: "white",
  border: "0px",
  padding: "5px 10px",
  borderRadius: "5px",
};
const button3 = {
  backgroundColor: "#26725e",
  color: "white",
  border: "0px",
  padding: "5px 10px",
  borderRadius: "5px",
};

const RecentApp = () => {
  return (
    <Container>
      <h4>Recent Applicants</h4>
      <Wrapper>
        <UserContainer>
          <h5 style={head}>Name</h5>

          <Span>Karl Michael Lopez</Span>
        </UserContainer>

        <UserContainer1>
          <h5 style={head}>Action</h5>
          <button style={button1}>accept</button> <span></span>
          <button style={button2}>decline</button>
        </UserContainer1>
        <UserContainer1>
          <h5 style={head}>View CV's</h5>
          <button style={button3}>view</button>
        </UserContainer1>
      </Wrapper>
    </Container>
  );
};

export default RecentApp;
