import axios from "axios";
// import secrets from "../../secrets"
// import recommendData from "../utils/data/recommendData";
// import detailData from "../utils/data/detailData";

// const timeout = (ms) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

export const GET_ONE_DETAIL = async (req) => {
  // 단일 식당 정보 요청 여기에 작성
  // req => store id 로
  let status = 0;
  let data = [];

  try {
    await axios
      .get(`http://j4a405.p.ssafy.io:8080/api/store/${req}`)
      .then((res) => {
        status = res.status;
        data = res.data.data;
      });
  } catch (error) {
    console.log(error.message)
  }
  return { status, data };
};

export const GET_RECOMMEND_LIST = async (req) => {
  let status = 0;
  let data = [];

  try {
    await axios
      .get(`http://j4a405.p.ssafy.io:8080/api/search/logout/location/${req}`)
      .then((res) => {
        status = res.status;
        data = res.data.data;
      });
  } catch (error) {
    console.log(error.message);
  }
  return { status, data };
};

export const GET_DETAIL_MAP = async (req) => {
  let status = 0;
  let data = [];

  try {
    await axios
      .get(`"//dapi.kakao.com/v2/maps/sdk.js?appkey=7fe544dfe742dea42f32c0720602698b${req}`)
      .then((res) => {
        status = res.status;
        data = res.data.data;
      });
  } catch (error) {
    console.log(error.message);
  }
  return { status, data };
};