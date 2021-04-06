import React from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";


const SearchLogo = () => {
  return (
    <div>
      {/* <Image/> */}
      <LogoBox></LogoBox>
    </div>
  )
}

const LogoBox = styled.div`
  display: flex;
  width: 300px;
  height: 200px;
  background-color: gray;
`;

export default SearchLogo
