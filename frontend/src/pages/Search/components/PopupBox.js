import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import close_1 from "../../../assets/icons/close_1.png";
import { useHistory } from "react-router";

const Wrapper = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.75);
  background-image: radial-gradient(#ffffff 20%, transparent 0),
    radial-gradient(#ffffff 20%, transparent 0);
  background-position: 0 0, 5px 5px;
  background-size: 10px 10px;
  opacity: ${(props) => (props.isClick ? 1 : 0)};
  transition: opacity 0.3s;
`;

const CloseBgDiv = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

const innerFadeIn = keyframes`
  0% {
    transform: scale(0, 0);
  }
  80% {
    transform: scale(1.05, 1.05);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const innerFadeOut = keyframes`
  0% {
    transform: scale(1, 1);
  }
  20% {
    transform: scale(1.05, 1.05);
  }
  100% {
    transform: scale(0, 0);
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 20;
  width: 570px;
  padding: 28px;
  min-height: 300px;
  height: max-content;
  border-radius: 20px;
  border-left: 5px solid #ed8e47;
  border-top: 5px solid #ed8e47;
  border-right: 8px solid #ed8e47;
  border-bottom: 8px solid #ed8e47;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ed8e47;
  ${(props) =>
    props.isClick
      ? css`
          animation: ${innerFadeIn} 0.3s linear;
        `
      : css`
          animation: ${innerFadeOut} 0.3s linear;
        `};
`;

const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleBox = styled.div`
  font-size: 32px;
`;

const PhotoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  border-radius: 15px;
  border: 3px solid #ed8e47;
  background-color: white;
  margin: 28px 0px;
`;

const PhotoBox = styled.div`
  width: 558px;
  height: 288px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const AddressBox = styled.div`
  font-size: 18px;
`;

const TelBox = styled.div`
  font-size: 18px;
  margin-top: 8px;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 28px;
  padding-top: 28px;
  border-top: 4px dotted #ed8e47;
`;

const DetailButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  height: 60px;
  width: 100%;
  background-color: #ed8e47;
  border: 3px solid #ed8e47;
  border-radius: 15px;
  cursor: pointer;
`;

const XButtonBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -25px;
  right: -40px;
  z-index: 30;
  width: 60px;
  height: 54px;
  border-radius: 10px;
  border-left: 3px solid #ed8e47;
  border-top: 3px solid #ed8e47;
  border-right: 5px solid #ed8e47;
  border-bottom: 5px solid #ed8e47;
  background-color: white;
  :hover {
    background-color: #eaeaea;
  }
  cursor: pointer;
`;

const XButtonIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
`;

let PopupBox = ({ data, dispatch }) => {
  const [isClick, setIsClick] = useState(false);
  const [popupData, setPopupData] = useState();
  const history = useHistory();

  useEffect(() => {
    setPopupData(data);
  }, [data]);

  const onXButtonClickHandler = () => {
    setIsClick(false);
    setTimeout(() => {
      dispatch({ type: "TOGGLE_POPUP_BOX", dataIndex: -1 });
    }, 250);
  };

  const onDetailButtonClickHandler = () => {
    history.push({ pathname: "/detail", state: { storeId: popupData.id } });
  };

  useEffect(() => {
    setIsClick(true);
    return;
  }, []);

  return (
    <Wrapper isClick={isClick}>
      {popupData && popupData !== null && (
        <Inner isClick={isClick}>
          <TopDiv>
            <TitleBox>{popupData.storeName}</TitleBox>
            <PhotoDiv>
              <PhotoBox image={popupData.storeImage}></PhotoBox>
            </PhotoDiv>
            <AddressBox>{popupData.address}</AddressBox>
            <TelBox>TEL : {popupData.tel}</TelBox>
          </TopDiv>
          <BottomDiv>
            <DetailButtonBox onClick={onDetailButtonClickHandler}>
              자세히보기
            </DetailButtonBox>
          </BottomDiv>
          <XButtonBox onClick={onXButtonClickHandler}>
            <XButtonIcon image={close_1}></XButtonIcon>
          </XButtonBox>
        </Inner>
      )}
      <CloseBgDiv onClick={onXButtonClickHandler}></CloseBgDiv>
    </Wrapper>
  );
};
PopupBox = connect()(PopupBox);

export default PopupBox;
