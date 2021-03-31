import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(200, 200, 200, 0.5);
`;

const CloseBgDiv = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  z-index: 20;
  width: 640px;
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
`;

let PopupBox = ({ data, dispatch }) => {
  const { store_name } = data;

  const onClickHandler = () => {
    dispatch({ type: "TOGGLE_POPUP_BOX", dataIndex: -1 });
  };

  return (
    <Wrapper>
      <Inner>{store_name}</Inner>
      <CloseBgDiv onClick={onClickHandler}></CloseBgDiv>
    </Wrapper>
  );
};
PopupBox = connect()(PopupBox);

export default PopupBox;
