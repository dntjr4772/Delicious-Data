import React from "react";
import styled from "styled-components";
import GetWindowDimensions from "../../../utils/hooks/getWindowDimensions";
import { yellowPos } from "../../../utils/BoxPosition";

const Wrapper = styled.div`
  position: absolute;
  width: 585px;
  height: 210px;
  cursor: pointer;
  user-select: none;
  transform: translate(
    ${(props) => yellowPos[props.dataIndex].x}px,
    ${(props) => yellowPos[props.dataIndex].y}px
  );
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #ffdc32;

  transform: scale(
    ${(props) =>
      props.scrollPos.curScrollX < yellowPos[props.dataIndex].x + 252 &&
      props.scrollPos.curScrollY < yellowPos[props.dataIndex].y + 65 &&
      props.scrollPos.curScrollX >
        yellowPos[props.dataIndex].x - props.windowWidth + 252 &&
      props.scrollPos.curScrollY >
        yellowPos[props.dataIndex].y - props.windowHeight + 65
        ? 1
        : 0}
  );

  transition: transform 0.3s;
`;

const PhotoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 575px;
  height: 200px;
  background-color: white;
  border-radius: 16px;
`;

const PhotoBox = styled.div`
  width: 555px;
  height: 180px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const YellowBox = ({ dataIndex, scrollPos }) => {
  const { windowWidth, windowHeight } = GetWindowDimensions();

  const onClickHandler = () => {};

  return (
    <Wrapper dataIndex={dataIndex} onClick={onClickHandler}>
      <Inner
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        dataIndex={dataIndex}
        scrollPos={scrollPos}
      >
        <PhotoDiv>
          <PhotoBox></PhotoBox>
        </PhotoDiv>
      </Inner>
    </Wrapper>
  );
};

export default YellowBox;
