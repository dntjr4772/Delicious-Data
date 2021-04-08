import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
// import { useSelector } from "react-redux";
// import SearchBar from "./components/SearchBar";
import SearchLogo from "./components/SearchLogo";

const SearchBoxContainer = () => {
  const history = useHistory();
  const [searchWidth, setSearchWidth] = useState(100);
  const [location, setLocation] = useState("");
  const handleChange = useCallback(({ target: { value } }) => {
    setLocation(value);
  }, []);
  const handleClick = () => {
    history.push({ pathname: "/search", state: { term: location } });
  };

  useEffect(() => {
    setSearchWidth(600);
  }, []);

  return (
    <Wrapper>
      <BarContainer>
        <SearchInput
          type="text"
          placeholder="원하시는 지역을 입력해주세요."
          value={location}
          onChange={handleChange}
          searchWidth={searchWidth}
        />
        <SearchButton onClick={handleClick}>검색</SearchButton>
      </BarContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const BarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 80px;
`;

const SearchInput = styled("input")`
  width: ${(props) => props.searchWidth}px;
  height: 80px;
  font-size: 24px;
  font-family: "HangeulNuri-Bold", sans-serif;
  font-weight: normal;
  padding: 0px 20px;
  border: 2px solid #ed8e47;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  transition: width 0.5s cubic-bezier(0.25, 0.25, 0.75, 0.75);
`;

const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ed8e47;
  background-color: #ed8e47;
  width: 80px;
  height: 80px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
  font-size: 24px;
  color: white;
`;

export default SearchBoxContainer;
