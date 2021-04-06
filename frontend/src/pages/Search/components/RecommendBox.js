import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import FoodExample from "../../../assets/icons/food_example.png";
import GetWindowDimensions from "../../../utils/hooks/getWindowDimensions";
import pos from "../../../utils/recommendPosition";

const Wrapper = styled.div`
  position: absolute;
  width: 460px;
  height: 460px;
  cursor: pointer;
  :hover {
    transform: translate(
        ${(props) => pos[props.dataIndex].x}px,
        ${(props) => pos[props.dataIndex].y}px
      )
      scale(1.02);
  }

  user-select: none;

  transform: translate(
    ${(props) => pos[props.dataIndex].x}px,
    ${(props) => pos[props.dataIndex].y}px
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
  background-color: #ed8e47;

  transform: scale(
    ${(props) =>
      props.scrollPos.curScrollX < pos[props.dataIndex].x + 230 &&
      props.scrollPos.curScrollY < pos[props.dataIndex].y + 230 &&
      props.scrollPos.curScrollX >
        pos[props.dataIndex].x - props.windowWidth + 230 &&
      props.scrollPos.curScrollY >
        pos[props.dataIndex].y - props.windowHeight + 230
        ? 1
        : 0}
  );

  transition: transform 0.3s;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 50%;
  width: 100%;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 450px;
  height: 225px;
`;

const TopHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: min-content;
`;

const HeadLeft = styled.div`
  display: flex;
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: white;
  margin: 5px;
  border-radius: 8px;
`;

const CategoryImg = styled.div`
  background-image: url(${FoodExample});
  background-size: contain;
  width: 50px;
  height: 50px;
`;

const RankBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: white;
  color: #ed8e47;
  margin: 5px;
  border-radius: 8px;
`;

const RankTop = styled.div`
  font-size: 18px;
  margin-top: 8px;
  letter-spacing: 4px;
  margin-left: 4px;
`;

const RankBottom = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
  letter-spacing: 8px;
  margin-left: 8px;
`;

const HeadRight = styled.div``;

const PlusBox = styled.div`
  position: relative;
  width: 33px;
  height: 33px;
  margin: 5px;
  border: 3px solid white;
  border-radius: 8px;
`;

const PlusVer = styled.div`
  position: absolute;
  top: 7px;
  left: 15px;
  width: 3px;
  height: 19px;
  background-color: white;
  border-radius: 5px;
`;

const PlusHor = styled.div`
  position: absolute;
  top: 15px;
  left: 7px;
  width: 19px;
  height: 3px;
  background-color: white;
  border-radius: 5px;
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
`;

const TopTitle = styled.div`
  font-size: 40px;
`;

const TopDesc = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const BottomDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

const PhotoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 220px;
  background-color: white;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;

const PhotoBox = styled.div`
  width: 430px;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 6px;
`;

let RecommendBox = ({ dataIndex, data, scrollPos, dispatch }) => {
  const { windowWidth, windowHeight } = GetWindowDimensions();
  const { storeName, category, storeImage } = data;

  const categoryText = category.replaceAll("|", " / ");

  let rank = "";
  if (dataIndex <= 8) {
    rank = "0" + (dataIndex + 1);
  } else {
    rank = dataIndex + 1;
  }

  const onClickHandler = () => {
    dispatch({ type: "TOGGLE_POPUP_BOX", dataIndex });
  };

  return (
    <Wrapper dataIndex={dataIndex} onClick={onClickHandler}>
      <Inner
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        dataIndex={dataIndex}
        scrollPos={scrollPos}
      >
        <TopDiv>
          <TopBox>
            <TopHead>
              <HeadLeft>
                <CategoryBox>
                  <CategoryImg></CategoryImg>
                </CategoryBox>
                <RankBox>
                  <RankTop>추천</RankTop>
                  <RankBottom>{rank}</RankBottom>
                </RankBox>
              </HeadLeft>
              <HeadRight>
                <PlusBox>
                  <PlusVer></PlusVer>
                  <PlusHor></PlusHor>
                </PlusBox>
              </HeadRight>
            </TopHead>
            <TopInfo>
              <TopTitle>{storeName}</TopTitle>
              <TopDesc>{categoryText}</TopDesc>
            </TopInfo>
          </TopBox>
        </TopDiv>
        <BottomDiv>
          <PhotoDiv>
            <PhotoBox storeImage={storeImage}></PhotoBox>
          </PhotoDiv>
        </BottomDiv>
      </Inner>
    </Wrapper>
  );
};

RecommendBox = connect()(RecommendBox);

export default RecommendBox;
