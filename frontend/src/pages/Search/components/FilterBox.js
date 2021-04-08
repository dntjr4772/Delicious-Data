import React from "react";
import styled from "styled-components";
import GetWindowDimensions from "../../../utils/hooks/getWindowDimensions";

const Wrapper = styled.div`
  position: absolute;
  width: 319px;
  height: 446px;
  user-select: none;
  transform: translate(2645px, 1895px);
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

const FilterText1 = styled.div`
  color: #00a666;
  font-size: 24px;
  margin-bottom: 16px;
`;

const FilterText2 = styled.div`
  color: #00a666;
  font-size: 24px;
  margin-bottom: 48px;
`;

const FilterText3 = styled.div`
  color: #00a666;
  font-size: 18px;
  margin-top: 12px;
`;

const FilterBox = () => {
  const { windowWidth, windowHeight } = GetWindowDimensions();

  const onClickHandler = () => {};

  return (
    <Wrapper onClick={onClickHandler}>
      <Inner windowWidth={windowWidth} windowHeight={windowHeight}>
        <Circle style={{ top: 10, left: 15 }}></Circle>
        <Circle style={{ top: 10, right: 15 }}></Circle>
        <Circle style={{ bottom: 10, left: 15 }}></Circle>
        <Circle style={{ bottom: 10, right: 15 }}></Circle>
        <FilterText1>사용자 리뷰 기반의</FilterText1>
        <FilterText1>추천 서비스</FilterText1>
        <FilterText2>맛있는 데이터, DD 입니다.</FilterText2>
        <FilterText3>빅데이터 추천 알고리즘을 구현하고</FilterText3>
        <FilterText3>'맛집 추천 서비스'를 기획하였습니다.</FilterText3>
        <FilterText3>사용자, 아이템 기반 협업 필터링을 통해</FilterText3>
        <FilterText3>주변 맛집을 추천해드립니다.</FilterText3>
      </Inner>
    </Wrapper>
  );
};

export default FilterBox;
