import React from "react";
import styled from "styled-components";
import GetWindowDimensions from "../../../utils/hooks/getWindowDimensions";

const Wrapper = styled.div`
  position: absolute;
  width: 319px;
  height: 76px;
  user-select: none;
  transform: translate(2645px, 1770px);
  border-radius: 20px;
  border-top: 5px solid #00a666;
  border-left: 5px solid #00a666;
  border-bottom: 11px solid #00a666;
  border-right: 11px solid #00a666;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #ffffff;
`;

const Circle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  border: 4px solid #00a666;
`;

const TermText = styled.div`
  color: #00a666;
  font-size: 24px;
`;

const FilterTopBox = ({ text }) => {
  const { windowWidth, windowHeight } = GetWindowDimensions();
  //   const { storeName, category, storeImage } = data;

  //   const categoryText = category.replaceAll("|", " / ");

  //   let rank = "";
  //   if (dataIndex <= 8) {
  //     rank = "0" + (dataIndex + 1);
  //   } else {
  //     rank = dataIndex + 1;
  //   }

  const onClickHandler = () => {
    // dispatch({ type: "TOGGLE_POPUP_BOX", dataIndex });
  };

  return (
    <Wrapper onClick={onClickHandler}>
      <Inner windowWidth={windowWidth} windowHeight={windowHeight}>
        <Circle style={{ top: 10, left: 15 }}></Circle>
        <Circle style={{ top: 10, right: 15 }}></Circle>
        <Circle style={{ bottom: 10, left: 15 }}></Circle>
        <Circle style={{ bottom: 10, right: 15 }}></Circle>
        <TermText>{text}</TermText>
      </Inner>
    </Wrapper>
  );
};

export default FilterTopBox;
