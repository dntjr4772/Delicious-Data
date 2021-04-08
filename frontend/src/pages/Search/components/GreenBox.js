import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import GetWindowDimensions from "../../../utils/hooks/getWindowDimensions";
import { greenPos } from "../../../utils/BoxPosition";

const Wrapper = styled.div`
  position: absolute;
  width: 335px;
  height: 210px;
  cursor: pointer;
  user-select: none;
  transform: translate(
    ${(props) => greenPos[props.dataIndex].x}px,
    ${(props) => greenPos[props.dataIndex].y}px
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
  background-color: #00a864;

  transform: scale(
    ${(props) =>
      props.scrollPos.curScrollX < greenPos[props.dataIndex].x + 127 &&
      props.scrollPos.curScrollY < greenPos[props.dataIndex].y + 65 &&
      props.scrollPos.curScrollX >
        greenPos[props.dataIndex].x - props.windowWidth + 127 &&
      props.scrollPos.curScrollY >
        greenPos[props.dataIndex].y - props.windowHeight + 65
        ? 1
        : 0}
  );

  transition: transform 0.3s;
`;

const PhotoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 325px;
  height: 200px;
  background-color: white;
  border-radius: 16px;
`;

const PhotoBox = styled.div`
  width: 305px;
  height: 180px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const GreenBox = ({ dataIndex, scrollPos }) => {
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

export default GreenBox;
