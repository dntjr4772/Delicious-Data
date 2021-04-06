import React from "react";
import SearchBoxContainer from "../Home/searchbox/SearchBoxContainer"

const Home = () => {
  return ( 
    <div>
      {/* <SearchBoxContainer>    
      </SearchBoxContainer> */}
      <input
        type="text"
        placeholder="Search..."
        // onChange={this.handleChange}
      />
    </div>;
  )
};

export default Home;
