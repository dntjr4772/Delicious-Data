import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import FoodExample from "../../../assets/icons/food_example.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 460px;
  height: 460px;
  background-color: #ed8e47;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
  user-select: none;
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
  background-image: url("https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjlfMjgx%2FMDAxNjA5MjI0MDc1NzYw.Sn9cRzv5kPxf-QEoE2jCl90FfSvR2AFsvOM68Ankxb8g.Hgv6ba6d7pf7rRpiVmDHi3xqe19wIOy1Xs9gtUC7_Gog.JPEG.naxkarma%2F092.JPG");
  background-size: cover;
  background-position: center;
  border-radius: 6px;
`;

let RecommendBox = ({ dataIndex, data, dispatch }) => {
  const { store_name, category } = data;

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
    <Wrapper onClick={onClickHandler}>
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
            <TopTitle>{store_name}</TopTitle>
            <TopDesc>{category}</TopDesc>
          </TopInfo>
        </TopBox>
      </TopDiv>
      <BottomDiv>
        <PhotoDiv>
          <PhotoBox></PhotoBox>
        </PhotoDiv>
      </BottomDiv>
    </Wrapper>
  );
};

RecommendBox = connect()(RecommendBox);

export default RecommendBox;
