import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecommendBox from "./components/RecommendBox";
import ScrollContainer from "react-indiana-drag-scroll";
import recommendData from "../../utils/data/recommendData";
import PopupBox from "./components/PopupBox";
import { useSelector } from "react-redux";
import getWindowDimensions from "../../utils/hooks/getWindowDimensions";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Inner = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 5000px;
  height: 5000px;
  background-color: #fff7f1;
  overflow: "hidden";
`;

const Search = () => {
  const { isPop, popIndex } = useSelector((state) => state.search);
  const [data, setData] = useState([]);
  const { windowWidth, windowHeight } = getWindowDimensions();

  useEffect(() => {
    setData(recommendData);

    const scroll_container = document.getElementById("container").parentElement;
    scroll_container.scrollTo(2500 - windowWidth / 2, 2500 - windowHeight / 2);
    return;
  }, [data, windowWidth, windowHeight]);

  return (
    <Wrapper>
      {isPop && <PopupBox data={data[popIndex]}></PopupBox>}
      <ScrollContainer
        style={{ height: "100%", width: "100%", overflow: "auto" }}
      >
        <Inner id="container">
          {data.length === 30 && (
            <>
              <RecommendBox dataIndex={0} data={data[0]}></RecommendBox>
              <RecommendBox dataIndex={1} data={data[1]}></RecommendBox>
              <RecommendBox dataIndex={2} data={data[2]}></RecommendBox>
              <RecommendBox dataIndex={3} data={data[3]}></RecommendBox>
              <RecommendBox dataIndex={4} data={data[4]}></RecommendBox>
            </>
          )}
        </Inner>
      </ScrollContainer>
    </Wrapper>
  );
};

export default Search;
