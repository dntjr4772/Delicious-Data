import React from "react";
import styled from "styled-components";
import GetWindowDimensions from "../../../utils/hooks/getWindowDimensions";

const Wrapper = styled.div`
  position: absolute;
  width: 569px;
  height: 569px;
  user-select: none;
  transform: translate(2020px, 1645px);
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
  border-radius: 15px;
  background-color: #ffffff;
`;

const Circle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  border: 4px solid #00a666;
`;

const TitleText = styled.div`
  font-family: "Fredoka One", cursive;
  color: #00a666;
  font-size: 240px;
  border-bottom: 12px solid #fff018;
  border-radius: 4px;
  padding-bottom: 16px;
  padding: 0px 5px;
`;

const FullText1 = styled.div`
  font-family: "Fredoka One", cursive;
  color: #00a666;
  font-size: 58px;
  border-bottom: 12px solid #fff018;
  border-radius: 4px;
  padding-top: 12px;
  padding-bottom: 12px;
  letter-spacing: 11px;
  padding-left: 11px;
`;

const FullText2 = styled.div`
  font-family: "Fredoka One", cursive;
  color: #00a666;
  font-size: 58px;
  padding-top: 16px;
  letter-spacing: 80px;
  margin-left: 80px;
`;

const CenterBox = () => {
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
        <Circle style={{ top: 15, left: 20 }}></Circle>
        <Circle style={{ top: 15, right: 20 }}></Circle>
        <Circle style={{ bottom: 15, left: 20 }}></Circle>
        <Circle style={{ bottom: 15, right: 20 }}></Circle>
        <TitleText>D D</TitleText>
        <FullText1>DELICIOUS</FullText1>
        <FullText2>DATA</FullText2>
      </Inner>
    </Wrapper>
  );
};

export default CenterBox;
