import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { onValue, ref, child, get } from "firebase/database";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const Container = styled.div`
  margin: 50px 50px 0px 300px;
  box-shadow: 0px 1px 5px 0px;
  border-radius: 10px;
  padding: 30px 30px 60px 30px;
  height: 100px;
  color: black;
  background-color: white;
  font-family: "Courier Prime", monospace;
`;

const HeadContainer = styled.div`
  float: left;
  width: 200px;
`;
// const PlumberContainer = styled.div``;
// const PlumberName = styled.div``;
// const PlumberStatus = styled.div``;
// const PlumberRevoke = styled.div``;

const Wrapper = styled.div``;

const Span = styled.span``;

const Plumbers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      // setUsers(data);
      const result = Object.values(data);
      const results = Object.values(result[0]);
      // console.log(results);
      const plumbers = results.map((userData) => {
        // console.log(userData);
        if (userData.userType === "Plumber") {
          setUsers(userData);
        } else {
        }
      });

      // if (data !== null) {
      //   const result = Object.values(data).map((key) => {
      //     setUsers(key);
      //   });
      //   console.log(Object.values(users));
      //   // console.log(result);
      //   //   //   Object.values(data).map((user) => {
      //   //   //     setUsers((oldArray) => [...oldArray, user]);
      //   //   //   });
      // }
    });
  }, []);

  console.log(users);

  return (
    <Container>
      <HeadContainer style={{ margin: "0px 300px 0px 0px" }}>
        <h4>Name</h4> <br></br>
        <Wrapper>
          <>
            <p>{users.firstname + " " + users.userType}</p>
          </>
        </Wrapper>
      </HeadContainer>
      <HeadContainer>
        <h4>Status</h4> <br></br>
        <Wrapper>
          <WorkspacePremiumIcon sx={{ color: "darkgreen" }} />
          <Span
            style={{
              textAlign: "center",
              color: "darkgreen",
              fontFamily: "sans-serif",
              fontSize: "15px",
            }}
          >
            &nbsp; certified
          </Span>
        </Wrapper>
      </HeadContainer>
      <HeadContainer>
        <h4>Revoke</h4>
        <br></br>
        <Wrapper>
          <button
            style={{
              backgroundColor: "#134d4d",
              border: "0px",
              padding: "6px 10px ",
              borderRadius: "45px",
              fontSize: "12px",
              color: "white",
            }}
          >
            Access
          </button>
        </Wrapper>
      </HeadContainer>
    </Container>
  );
};
export default Plumbers;
