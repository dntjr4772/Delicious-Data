import React, { useEffect } from "react";
import styled from "styled-components";
import SearchTestBox from "./components/ResultBox";
import ScrollContainer from "react-indiana-drag-scroll";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3000px;
  height: 3000px;
  background-color: #fff7f1;
  overflow: "hidden";
`;

const InnerCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2800px;
`;

const InnerRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 2800px;
`;

const Search = () => {
  useEffect(() => {
    let scroll_container = document.getElementById("container").parentElement;
    scroll_container.scrollTo(500, 500);
    return;
  });

  return (
    <>
      <Wrapper>
        <ScrollContainer
          style={{ height: "100%", width: "100%", overflow: "auto" }}
        >
          <Inner id="container">
            <InnerCol>
              <InnerRow>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
              </InnerRow>
              <InnerRow>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
              </InnerRow>
              <InnerRow>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
              </InnerRow>
              <InnerRow>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
                <SearchTestBox></SearchTestBox>
              </InnerRow>
            </InnerCol>
          </Inner>
        </ScrollContainer>
      </Wrapper>
    </>
  );
};

export default Search;
