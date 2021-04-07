import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { GET_ONE_DETAIL } from "../../api/searchApi"
// import DetailContents from "./components/DetailContents"

let Detail = () => {
  const [data, setData] = useState();
  const location = useLocation();
  const storeId = location?.state?.storeId;
  // 가게 ID
  console.log(location.state.storeId);

  useEffect(() => {
    const requestGetOneDetail = async () => {
      if(!storeId){
        return;
      }
      const result = await GET_ONE_DETAIL(storeId);
      if (result.status === 200) {
        console.log(result.data);
        setData(result.data[0]);
      }
    };

    requestGetOneDetail();
  }, [storeId]);
  if(!data){
    return null;
  }

  console.log(data);
    const {storename, menus, reviews, address, category, tel} = data;
  return (
    <div>
      <div>식당 ID : {location.state.storeId}</div>
      <div>{storename}</div>
      <div>{address}</div>
      <div>{tel}</div>
      <div>
        <p>menu</p>
        <ul>
          {menus.map(({menuName, price})=><li>{menuName}: {price}</li>)}
        </ul>
      </div>
      <div>
        <p>review</p>
        <ul>
          {reviews.map(({menuName, price})=><li>{menuName}: {price}</li>)}
        </ul>
      </div>
      {/* <DetailContents></DetailContents>
      <div>{id}</div>
      <div>{storename}</div>
      <div>{image}</div>
      <div>{adress}</div>
      <div>{tel}</div>
      <div>{category}</div>
      <div>{branch}</div>
      <div>{reviews}</div> */}
    </div>

  )
};

export default Detail;
