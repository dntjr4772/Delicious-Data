import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { GET_ONE_DETAIL } from "../../api/searchApi"
import styled from "styled-components"
// import DetailContents from "./components/DetailContents"
// import DetailMap from "./components/DetailMap"

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

  // 	https://map.kakao.com/link/map/위도,경도


  // const { kakao } = window;

  // const MapContainer = () => {
  //   useEffect(() => {
  //       const container = document.getElementById('myMap');
	// 	            const options = {
	// 		                  center: new kakao.maps.LatLng({latitude}, {longitude}),
	// 		                  level: 3
	// 	            };
  //       const map = new kakao.maps.Map(container, options);
  //   }, []);

  console.log(data);
    const {storeName, storeImage, menus, reviews, address, category, tel, area, latitude, longitude} = data;
  return (

    <Wrapper>
      <Container>
        {/* <MapContainer></MapContainer> */}
        <div>식당 ID : {location.state.storeId}</div>
        <NameBox>{storeName}</NameBox>
        <ImgDiv>
          <ImgBox>storeImage</ImgBox>
        </ImgDiv>      
        <AreaBox>{area}</AreaBox>
        <AddressBox>{address}</AddressBox>
        <div>{ latitude }{ longitude }</div>
        <TelBox>TEL : {tel}</TelBox>
        <CategoryBox>{category}</CategoryBox>
        <MenuBox>
          <p>menu</p>
          <ul>
            {menus.map(({menuName, price})=><li>{menuName}: {price}</li>)}
          </ul>
        </MenuBox>
        <ReviewsBox>
          <p>review</p>
          <ul>
            {reviews.map(({regTime, content})=><li>{regTime}: {content}</li>)}
          </ul>
        </ReviewsBox>
      </Container>
    </Wrapper>
  )
};

export default Detail;

const Wrapper = styled.div`
  background-color: #fffaeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 150px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  border-radius: 20px;
  border-left: 5px solid #ed8e47;
  border-top: 5px solid #ed8e47;
  border-right: 8px solid #ed8e47;
  border-bottom: 8px solid #ed8e47;
  background-color: white;
`;

const NameBox = styled.div`
  background-color: #ed8e47;
  color: white;
  font-size: 30px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
  padding: 10px;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  border-radius: 15px;
  border: 3px solid #ed8e47;
  background-color: white;
  margin: 28px 0px;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 50px; */
  width: 330px;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 6px;
`;

const AreaBox = styled.div`
  background-color: #ed8e47;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
`;

const AddressBox = styled.div`
  background-color: #ed8e47;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
`;

const TelBox = styled.div`
  background-color: #ed8e47;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
`;

const CategoryBox = styled.div`
  background-color: #ed8e47;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
`;

const MenuBox = styled.div`
  background-color: #ed8e47;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
`;

const ReviewsBox = styled.div`
  background-color: #ed8e47;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
`;