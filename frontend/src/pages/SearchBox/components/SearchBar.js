import React, { useEffect, useState, useFetch } from "react";
import styled from "styled-components";
import axios from 'axios';
// import { useSelector } from "react-redux";
// const API = ""

function SearchBar() {
  const [searchbar, setSearchBar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]
  
  useEffect(() => {})
  const fetchSearchBar = async () => {
    try {
      setError(null);
      setSearchbar(null);
      setLoading(true);
      const response = await axios.get(
        // '주소'
      );
      setSearchBar(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  fetchSearchBar();
}, []);

const SearchBar = () => {

  return (
    <input
      type="search"
      placeholder="Search..."
      onChange={this.props.handleChange}
    />
  )
}

export default SearchBar
