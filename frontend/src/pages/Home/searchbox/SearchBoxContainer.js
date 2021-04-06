import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
import SearchBar from './components/SearchBar'
import SearchLogo from './components/SearchLogo'

const SearchBoxContainer = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <SearchLogo></SearchLogo>
      </LogoContainer>
      <BarContainer>
        <SearchBar></SearchBar>
      </BarContainer>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 350px;
  background-color: gray;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 300px;
  height: 95px;
`;

const BarContainer = styled.div`
  display: flex;
  width: 570px;
  height: 50px;
`;

export default SearchBoxContainer
