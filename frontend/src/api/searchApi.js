import axios from "axios";
// import secrets from "../../secrets"
// import recommendData from "../utils/data/recommendData";
// import detailData from "../utils/data/detailData";

// const timeout = (ms) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

// const API_ROOT_URI = secrets.API_ROOT_URI
// const VIA_API = secrets.VIA_API

export const GET_ONE_DETAIL = async (req) => {
  // let status = 0;
  // let data = [];

  const res = await axios
    .get("http://j4a405.p.ssafy.io:8080/api/search/logout/location/창천동")
  return { status: res.status, data:res.data.data };
};

export const SEARCH_RECOMMEND = async (req) => {

  try {
    const res = await axios
    // .get(`${API_ROOT_URI}/api/search/logout/location/${req}`)
    .get(`http://j4a405.p.ssafy.io:8080/api/search/logout/location/${req}`)
    return { status: res.status, data: res.data.data };
  } catch (error) {
  }

  // if (!VIA_API) {
  //   try {
  //     await setTimeout(1000);
  //     status = 200;
  //     data = recommendData.data;
  //   } catch (error) {

  //   }
  // } else {

  //   try {
  //     await axios
  //       .get(`${API_ROOT_URI}/api/search/logout/location/${req}`)
  //       .then((res) => {
  //         status = res.status;
  //         data = res.data.data
  //       });
  //   } catch (error) {

  //   }
  // }
};

