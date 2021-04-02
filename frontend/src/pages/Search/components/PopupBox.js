import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled, { css, keyframes } from "styled-components";

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

const innerFade = keyframes`
  0%{
    transform: scale(0, 0);
  }
  75%{
    transform: scale(1.05, 1.05);
  }
  100%{
    transform: scale(1, 1);
  }
`;

const Inner = styled.div`
  z-index: 20;
  width: 620px;
  height: 500px;
  border-radius: 20px;
  border-left: 4px solid #ed8e47;
  border-top: 4px solid #ed8e47;
  border-right: 8px solid #ed8e47;
  border-bottom: 8px solid #ed8e47;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isClick &&
    css`
      animation: ${innerFade} 0.3s linear;
    `};
`;

let PopupBox = ({ data, dispatch }) => {
  const [isClick, setIsClick] = useState(false);

  const { store_name } = data;

  const onClickHandler = () => {
    dispatch({ type: "TOGGLE_POPUP_BOX", dataIndex: -1 });
  };

  useEffect(() => {
    setIsClick(true);
    return;
  }, []);

  return (
    <Wrapper isClick={isClick}>
      <Inner isClick={isClick}>{store_name}</Inner>
      <CloseBgDiv onClick={onClickHandler}></CloseBgDiv>
    </Wrapper>
  );
};
PopupBox = connect()(PopupBox);

export default PopupBox;
