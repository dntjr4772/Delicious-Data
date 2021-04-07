import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import RecommendBox from "./components/RecommendBox";
import ScrollContainer from "react-indiana-drag-scroll";
// import recommendData from "../../utils/data/recommendData";
import PopupBox from "./components/PopupBox";
import { useSelector } from "react-redux";
import getWindowDimensions from "../../utils/hooks/getWindowDimensions";
import bgLayout from "../../assets/bg/bg_layout.png";
import { GET_RECOMMEND_LIST } from "../../api/searchApi";
import { yellowPos, greenPos } from "../../utils/BoxPosition";
import YellowBox from "./components/YellowBox";
import GreenBox from "./components/GreenBox";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Inner = styled.div`
  display: flex;
  position: relative;
  width: 5000px;
  height: 4000px;
  background-color: #fff7f1;
  overflow: "hidden";
  background-image: url(${(props) => props.bgLayout});
`;

let Search = () => {
  const { isPop, popIndex } = useSelector((state) => state.search);
  const { windowWidth, windowHeight } = getWindowDimensions();
  const [data, setData] = useState([]);
  const [yellowData, setYellowData] = useState([]);
  const [greenData, setGreenData] = useState([]);
  const [curScrollX, setCurScrollX] = useState(0);
  const [curScrollY, setCurScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const requestGetRecommendList = async () => {
      const req = location.state.term;
      const result = await GET_RECOMMEND_LIST(req);
      if (result.status === 200) {
        console.log(result.data);
        setData(result.data);
      }
    };

    requestGetRecommendList();
  }, [location]);

  useEffect(() => {
    setYellowData(yellowPos);
    setGreenData(greenPos);
  }, []);

  useEffect(() => {
    const scroll_container = document.getElementById("container").parentElement;
    if (!scroll_container) {
      return;
    }
    scroll_container.scrollTo(2500 - windowWidth / 2, 2000 - windowHeight / 2);
  }, [windowWidth, windowHeight]);

  useEffect(() => {
    const scroll_container = document.getElementById("container").parentElement;

    if (!scroll_container) {
      return;
    }
    const setCurScrollPos = () => {
      setCurScrollX(scroll_container.scrollLeft);
      setCurScrollY(scroll_container.scrollTop);
    };

    setCurScrollPos();

    scroll_container.addEventListener("scroll", setCurScrollPos);
    return () => {
      scroll_container.removeEventListener("scroll", setCurScrollPos);
    };
  });

  return (
    <Wrapper>
      {isPop && <PopupBox data={data[popIndex]}></PopupBox>}
      <ScrollContainer
        style={{ height: "100%", width: "100%", overflow: "auto" }}
      >
        <Inner bgLayout={bgLayout} id="container">
          {data.length === 30 &&
            data.map((d, index) => (
              <RecommendBox
                key={index}
                dataIndex={index}
                data={d}
                scrollPos={{ curScrollX, curScrollY }}
              ></RecommendBox>
            ))}
          {yellowData.length === 8 &&
            yellowData.map((yd, index) => (
              <YellowBox
                key={index}
                dataIndex={index}
                data={yd}
                scrollPos={{ curScrollX, curScrollY }}
              ></YellowBox>
            ))}
          {greenData.length === 7 &&
            greenData.map((gd, index) => (
              <GreenBox
                key={index}
                dataIndex={index}
                data={gd}
                scrollPos={{ curScrollX, curScrollY }}
              ></GreenBox>
            ))}
        </Inner>
      </ScrollContainer>
    </Wrapper>
  );
};

export default Search;
