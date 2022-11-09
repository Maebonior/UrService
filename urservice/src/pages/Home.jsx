import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import PeopleIcon from "@mui/icons-material/People";
import RecentApp from "../components/RecentApp";

//firebase
import { getDatabase, ref, onValue } from "firebase/database";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  font-family: "Courier Prime", monospace;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 5px;
`;

const Span = styled.div`
  font-family: "Courier Prime", monospace;
`;

const action = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  paddingTop: "15px",
};

const Home = () => {
  return (
    <Container>
      <p style={{ margin: "10px", color: "#267238", fontSize: "30px" }}>
        &nbsp;&nbsp;Dashboard
      </p>
      <CardContainer>
        <Card
          sx={{
            width: 300,
            height: 100,
            backgroundColor: "white",
            color: "black",
          }}
        >
          <CardActionArea sx={action}>
            <CardContent sx={{ display: "flex", gap: "50px" }}>
              <PeopleIcon sx={{ color: "#0036cc" }} />
              <CardWrapper>
                <Span>1500</Span>
                <Span>Total User</Span>
              </CardWrapper>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: 300,
            height: 100,
            backgroundColor: "white",
            color: "black",
          }}
        >
          <CardActionArea sx={action}>
            <CardContent sx={{ display: "flex", gap: "50px" }}>
              <PeopleIcon sx={{ color: "#ad00cc" }} />
              <CardWrapper>
                <Span>500</Span>
                <Span>Plumbers</Span>
              </CardWrapper>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: 300,
            height: 100,
            backgroundColor: "white",
            color: "black",
          }}
        >
          <CardActionArea sx={action}>
            <CardContent sx={{ display: "flex", gap: "50px" }}>
              <PeopleIcon sx={{ color: "#cc0055" }} />
              <CardWrapper>
                <Span>1000</Span>
                <Span>Clients</Span>
              </CardWrapper>
            </CardContent>
          </CardActionArea>
        </Card>
      </CardContainer>
      <RecentApp />
    </Container>
  );
};

export default Home;
