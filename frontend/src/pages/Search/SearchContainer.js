import React, { useEffect } from "react";
import styled from "styled-components";
import RecommendBox from "./components/RecommendBox";
import ScrollContainer from "react-indiana-drag-scroll";
import recommendData from "../../utils/data/recommendData";

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
  height: 2900px;
`;

const InnerRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 2900px;
`;

const Search = () => {
  const data = recommendData;
  console.log(data);

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
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
              </InnerRow>
              <InnerRow>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
              </InnerRow>
              <InnerRow>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
              </InnerRow>
              <InnerRow>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
              </InnerRow>
              <InnerRow>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
              </InnerRow>
              <InnerRow>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
                <RecommendBox></RecommendBox>
              </InnerRow>
            </InnerCol>
          </Inner>
        </ScrollContainer>
      </Wrapper>
    </>
  );
};

export default Search;
