import React from "react";

import styled from "styled-components";

const Wrapper = styled.section`
  background: palevioletred;
`;
const Title = styled.h1`
  font-size: 1em;
  text-align: center;
  color: blueviolet;
`;
const EventTitle = (props) => {
  return (
    <Wrapper>
      <Title>{props.event_name}</Title>
    </Wrapper>
  );
};

export default EventTitle;
