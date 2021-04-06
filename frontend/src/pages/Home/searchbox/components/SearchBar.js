import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
// import styled from "styled-components";
// import { SEARCH_RECOMMEND } from '../../../../api/searchApi'
// import { useSelector } from "react-redux";
import queryString from "query-string"

// const API = ""

function SearchTerm() {
  const router = useRoute();
  const routerQuery = router.queryString.term;

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchApiState, setSearchApiState] = useState(false);

  const getData = useCallback(async () => {
    setLoading(false);
    const result = await axios.get();
    setData(result.data);
    setLoading(true);
    setSearchApiState(false);
  },);

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
