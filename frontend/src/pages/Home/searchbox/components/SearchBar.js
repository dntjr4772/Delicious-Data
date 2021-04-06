import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Route, useLocation } from "react-router-dom";
// import styled from "styled-components";
// import { SEARCH_RECOMMEND } from '../../../../api/searchApi'
// import { useSelector } from "react-redux";
import queryString from "query-string"
// import qs from 'qs';

function SearchTerm() {
  // const router = useRoute();
  // const { store_name } = match.params;
  let location = useLocation();

  const query = queryString.parse(location.search)

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  // const [searchApiState, setSearchApiState] = useState(false);

  const getData = useCallback(async () => {
    setLoading(false);
    const result = await axios.get();
    setData(result.data);
    setLoading(true);
    // setSearchApiState(false);
  }, []);

  useEffect(() => {
    getData()
  })
  if(loading){
    return ( 
     <Route path="/loading"/>
    );
  }
  return (
    <div>{data}</div>
  );
}

export default SearchTerm

// function SearchData() {
//   let { data } = useParams();
//   return <div>Here are our recommendations { data }</div>
// }
