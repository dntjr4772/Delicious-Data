import React from "react";
import styled from "styled-components";
import SearchTestBox from "./components/ResultBox";
import ScrollContainer from "react-indiana-drag-scroll";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3000px;
  height: 3000px;
  background-color: #fff7f1;
`;

const Search = () => {
  return (
    <ScrollContainer vertical="true" horizontal="true">
      <Wrapper>
        <SearchTestBox></SearchTestBox>
      </Wrapper>
    </ScrollContainer>
  );
};

export default Search;
