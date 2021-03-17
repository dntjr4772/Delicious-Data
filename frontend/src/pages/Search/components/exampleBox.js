import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 80px;
  background-color: gray;
  border: 1px solid white;
  border-radius: 8px;
`;

const exampleBox = () => {
  return <Wrapper>Component Test</Wrapper>;
};

export default exampleBox;
