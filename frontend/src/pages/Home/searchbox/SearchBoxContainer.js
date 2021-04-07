import React, { useState, useCallback } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
// import { useSelector } from "react-redux";
// import SearchBar from "./components/SearchBar";
import SearchLogo from "./components/SearchLogo";

const SearchBoxContainer = () => {
  const history = useHistory();
  const [location, setLocation] = useState("");
  const handleChange = useCallback(({ target: { value } }) => {
    setLocation(value);
  }, []);
  const handleClick = () => {
    history.push({ pathname: "/search", state: { term: location } });
  };

  // handleClick() {
  //   this.setState(state => ({

  //   }));
  // }

  return (
    <Wrapper>
      <LogoContainer>
        <SearchLogo></SearchLogo>
      </LogoContainer>
      <BarContainer>
        <input
          type="text"
          placeholder="Search..."
          value={location}
          onChange={handleChange}
        />
        <button onClick={handleClick}>검색</button>
      </BarContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 350px;
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

export default SearchBoxContainer;
