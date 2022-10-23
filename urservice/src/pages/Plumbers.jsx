import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { onValue, ref, child, get } from "firebase/database";

const Container = styled.div`
  margin-left: 500px;
  display: flex;
  flex-flow: wrap;
`;

const Wrapper = styled.div``;
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
      <Wrapper>
        <>
          <p>{users.firstname + " " + users.userType}</p>
        </>
      </Wrapper>
    </Container>
  );
};

export default Plumbers;
