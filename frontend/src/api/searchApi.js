import axios from "axios";
// import detailData from "../utils/data/detailData";

// const timeout = (ms) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

export const GET_ONE_DETAIL = async (req) => {
  let status = 0;
  let data = [];

  await axios
    .get("http://j4a405.p.ssafy.io:8080/api/search/logout/location/창천동")
    .then((res) => {
      status = res.status;
      data = res.data.data;
    });

  return { status, data };
};
