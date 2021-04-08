import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 30;
  width: 60px;
  height: 60px;
  user-select: none;
  ${(props) =>
    props.type === 1 &&
    css`
      top: 40px;
      left: 40px;
    `};
  ${(props) =>
    props.type === 2 &&
    css`
      bottom: 40px;
      left: 40px;
    `};
  ${(props) =>
    props.type === 3 &&
    css`
      top: 40px;
      right: 40px;
    `};
  cursor: pointer;
  border-radius: 10px;
  border-top: 3px solid black;
  border-left: 3px solid black;
  border-bottom: 6px solid black;
  border-right: 6px solid black;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #ffffff;
`;

const IconBox = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 6px;
`;

const HomeText = styled.div`
  position: absolute;
  margin-top: 5px;
  color: white;
  font-family: "Fredoka One", cursive;
`;

const FixedBox = ({ image, handler, type, text }) => {
  const onClickHandler = () => {
    handler();
  };

  return (
    <Wrapper type={type} onClick={onClickHandler}>
      <Inner>
        <IconBox image={image}></IconBox>
        <HomeText type={type}>{text}</HomeText>
      </Inner>
    </Wrapper>
  );
};

export default FixedBox;
