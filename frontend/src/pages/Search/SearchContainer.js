import React from "react";
import styled from "styled-components";
import SearchTestBox from "./components/exampleBox";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.gray};
`;

const Search = () => {
  return (
    <Wrapper>
      <SearchTestBox></SearchTestBox>
    </Wrapper>
  );
};

export default Search;
