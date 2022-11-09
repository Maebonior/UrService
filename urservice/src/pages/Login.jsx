import { borderRadius, fontSize, height, width } from "@mui/system";
import React from "react";
import styled from "styled-components";
import ProjectLogo from "../Assets/Logo.png";

const Container = styled.div`
  width: 100%;
  height: 655px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: "Special Elite", cursive;
`;

const Wrapper = styled.div`
  background-color: #189ab4;
  padding: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
  width: 40%;
  height: 50%;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 1px;
`;

const userinput = {
  width: "300px",
  height: "50px",
  fontSize: "16px",
  borderRadius: "20px",
  margin: "5px",
  border: "0px",
  boxShadow: "0px 0px 5px 1px white",
};
const UserLogin = styled.div`
  width: 280px;
  font-size: 25px;
  border-radius: 20px;
  margin: 5px;
  border: 0px;
  background-color: #4af3e2;
  color: #d4f1f4;
  text-align: center;
  margin-left: 113px;
  padding: 10px;
  box-shadow: 0px 0px 5px 1px white;

  &:hover {
    background-color: #b7f7f7;
    color: #108276;
    transition: 0.3s;
  }
`;
const Body = styled.body`
  background-color: #05445e;
`;
const Login = () => {
  return (
    <Body>
      <Container>
        <Wrapper>
          <h2 style={{ padding: "15px" }}>Login</h2>
          <input
            type="gmail"
            name=""
            id=""
            placeholder=" Email Adress"
            style={userinput}
          />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder=" Password"
            style={userinput}
          />
          <br></br>
          <UserLogin>Login</UserLogin>
        </Wrapper>
      </Container>
    </Body>
  );
};

export default Login;
