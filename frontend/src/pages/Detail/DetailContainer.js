import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { GET_ONE_DETAIL } from "../../api/searchApi"
import styled from "styled-components"
// import DetailContents from "./components/DetailContents"
// import DetailMap from "./components/DetailMap"

let Detail = () => {
  const [data, setData] = useState();
  const [text, setText] = useState('');
  const location = useLocation();
  const storeId = location?.state?.storeId;
  // 가게 ID
  console.log(location.state.storeId);

  const onChange = (e) => {
    setText(e.target.value);
  };

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
    const {storeName, storeImage, menus, reviews, address, category, tel, area, latitude, longitude} = data;
  return (
    <Wrapper>
      <Container>
        {/* <MapContainer></MapContainer> */}
        {/* <div>식당 ID : {location.state.storeId}</div> */}
        <NameBox>{storeName}</NameBox>
        <ImgDiv>
          <ImgBox image = {storeImage}>
          </ImgBox>
        </ImgDiv>      
        {/* <div>{ latitude }{ longitude }</div> */}
        <AreaBox>{area} {category}</AreaBox>
        <AddressBox>{address}<br/>TEL : {tel}</AddressBox>
        {/* <TelBox>TEL : {tel}</TelBox> */}
        {/* <CategoryBox>{category}</CategoryBox> */}
        <MenuBox>
          <p>menu</p>
          <ul>
            {menus.map(({menuName, price}, index)=><li key={index}>{menuName}: {price}</li>)}
          </ul>
        </MenuBox>
        <ReviewPost>
          리뷰 작성하기
          <ReviewForm>
            <label>
              <input type="text" name="content" style={{ width: "450px", height: "150px", borderRadius: "10px", border: "none"}} onChange={onChange} vaule={text} placeholer="리뷰를 작성해주세요"/>
            </label>
            <br/>
            <input type="submit" value="submit" />
          </ReviewForm>
        </ReviewPost>
        <ReviewsBox>
          <p>리뷰 보기</p>
          <br/>
          <ul>
            {reviews.map(({regTime, content}, index)=><li key={index}>{regTime}: {content}</li>)}
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
  align-items: center;
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
  font-size: 40px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
  width: 85%;
  padding: 10px;
  margin: 20px;
  border-radius: 20px;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 300px;
  border-radius: 15px;
  border: 3px solid #ed8e47;
  background-color: white;
  margin: 28px 20px;
  padding: 5px;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 50px; */
  width: 100%;
  height: 100%;
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
  width: 85%;
  align-items: center;
  min-height: 30px;
  margin: 20px;
  border-radius: 20px;
  padding: 10px;
`;

const AddressBox = styled.div`
  background-color: #ed8e47;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
  width: 85%;
  margin: 20px;
  border-radius: 20px;
  padding: 10px;
`;

const TelBox = styled.div`
  background-color: #ed8e47;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
  width: 85%;
  margin: 20px;
  border-radius: 20px;
  padding: 10px;
`;

const CategoryBox = styled.div`
  background-color: #ed8e47;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
  width: 85%;
  margin: 20px;
  border-radius: 20px;
  padding: 10px;

`;

const MenuBox = styled.div`
  background-color: #ed8e47;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
  width: 85%;
  margin: 20px;
  border-radius: 20px;
  padding: 10px;

`;

const ReviewsBox = styled.div`
  background-color: #ed8e47;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
  width: 85%;
  margin: 20px;
  border-radius: 20px;
  padding: 10px;

`;

const ReviewPost = styled.div`
  background-color: #ed8e47;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
  width: 85%;
  margin: 20px;
  border-radius: 20px;
  padding: 10px;

`;

const ReviewForm = styled.div`
  background-color: #ed8e47;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50px;
  width: 90%;
  margin: 20px;
  border-radius: 20px;
  padding: 10px;
`;