import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";

// const API = ""

const SearchBar = () => {

  componentDidMount = () => {
    fetch(API, {
      method: "GET",
    })
    .then((response) => response.json())
    .then((result) => {
      this.setState({ restaurant: result, restaurantData: result });
    });
  };

  searchRestaurant = (e) => {
    this.setState({ userInput: e.target.value })
  }

  filterRestaurant = () => {
    const filter
  }

  return (
    <input
      type="search"
      placeholder="Search..."
      onChange={this.props.handleChange}
    />
  )
}

export default SearchBar
