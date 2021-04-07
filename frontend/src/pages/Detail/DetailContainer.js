import React from "react";
import { useLocation } from "react-router";

const Detail = () => {
  const location = useLocation();

  // 가게 ID
  console.log(location.state.storeId);

  return <div>식당 ID : {location.state.storeId}</div>;
};

export default Detail;
