import React from "react";
import styled from "styled-components";

const UserContainer = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin-top: 25px;
`;

const Span = styled.span``;

const RecentApp = () => {
  return (
    <UserContainer>
      <h1>Recent Applicants</h1>
      <Span>Name</Span>
    </UserContainer>
  );
};

export default RecentApp;
