import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecommendBox from "./components/RecommendBox";
import ScrollContainer from "react-indiana-drag-scroll";
// import recommendData from "../../utils/data/recommendData";
import PopupBox from "./components/PopupBox";
import { useSelector } from "react-redux";
import getWindowDimensions from "../../utils/hooks/getWindowDimensions";
import bgLayout from "../../assets/bg/bg_layout.png";
import { GET_ONE_DETAIL } from "../../api/searchApi";

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

const Search = () => {
  const { isPop, popIndex } = useSelector((state) => state.search);
  const [data, setData] = useState([]);
  const { windowWidth, windowHeight } = getWindowDimensions();
  const [curScrollX, setCurScrollX] = useState(0);
  const [curScrollY, setCurScrollY] = useState(0);

  useEffect(() => {
    const requestGetOneDetail = async () => {
      const getResult = async () => {
        return await GET_ONE_DETAIL();
      };
      const result = await getResult();
      if (result.status === 200) {
        console.log(result.data);
        setData(result.data);
      }
    };

    requestGetOneDetail();
  }, []);

  useEffect(() => {
    const scroll_container = document.getElementById("container").parentElement;
    scroll_container.scrollTo(2500 - windowWidth / 2, 2000 - windowHeight / 2);
    return;
  }, [windowWidth, windowHeight]);

  useEffect(() => {
    const scroll_container = document.getElementById("container").parentElement;

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

  // useEffect(() => {
  //   console.log("x : " + curScrollX + ", y : " + curScrollY);
  //   return;
  // }, [curScrollX, curScrollY]);

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
        </Inner>
      </ScrollContainer>
    </Wrapper>
  );
};

export default Search;
