import detailData from "../utils/data/detailData";

const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getOneDetail = async (req) => {
  return { status: 200, data: detailData.data };
};
