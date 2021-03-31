import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecommendBox from "./components/RecommendBox";
import ScrollContainer from "react-indiana-drag-scroll";
import recommendData from "../../utils/data/recommendData";
import PopupBox from "./components/PopupBox";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3000px;
  height: 3000px;
  background-color: #fff7f1;
  overflow: "hidden";
`;

const InnerCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2900px;
`;

const InnerRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 2900px;
`;

const Search = () => {
  const { isPop, popIndex } = useSelector((state) => state.search);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(recommendData);

    let scroll_container = document.getElementById("container").parentElement;
    scroll_container.scrollTo(500, 500);
    return;
  }, [data]);

  return (
    <Wrapper>
      {isPop && <PopupBox data={data[popIndex]}></PopupBox>}
      <ScrollContainer
        style={{ height: "100%", width: "100%", overflow: "auto" }}
      >
        <Inner id="container">
          {data.length === 30 && (
            <InnerCol>
              <InnerRow>
                <RecommendBox dataIndex={0} data={data[0]}></RecommendBox>
                <RecommendBox dataIndex={1} data={data[1]}></RecommendBox>
                <RecommendBox dataIndex={2} data={data[2]}></RecommendBox>
                <RecommendBox dataIndex={3} data={data[3]}></RecommendBox>
                <RecommendBox dataIndex={4} data={data[4]}></RecommendBox>
              </InnerRow>
              <InnerRow>
                <RecommendBox dataIndex={5} data={data[5]}></RecommendBox>
                <RecommendBox dataIndex={6} data={data[6]}></RecommendBox>
                <RecommendBox dataIndex={7} data={data[7]}></RecommendBox>
                <RecommendBox dataIndex={8} data={data[8]}></RecommendBox>
                <RecommendBox dataIndex={9} data={data[9]}></RecommendBox>
              </InnerRow>
              <InnerRow>
                <RecommendBox dataIndex={10} data={data[10]}></RecommendBox>
                <RecommendBox dataIndex={11} data={data[11]}></RecommendBox>
                <RecommendBox dataIndex={12} data={data[12]}></RecommendBox>
                <RecommendBox dataIndex={13} data={data[13]}></RecommendBox>
                <RecommendBox dataIndex={14} data={data[14]}></RecommendBox>
              </InnerRow>
              <InnerRow>
                <RecommendBox dataIndex={15} data={data[15]}></RecommendBox>
                <RecommendBox dataIndex={16} data={data[16]}></RecommendBox>
                <RecommendBox dataIndex={17} data={data[17]}></RecommendBox>
                <RecommendBox dataIndex={18} data={data[18]}></RecommendBox>
                <RecommendBox dataIndex={19} data={data[19]}></RecommendBox>
              </InnerRow>
              <InnerRow>
                <RecommendBox dataIndex={20} data={data[20]}></RecommendBox>
                <RecommendBox dataIndex={21} data={data[21]}></RecommendBox>
                <RecommendBox dataIndex={22} data={data[22]}></RecommendBox>
                <RecommendBox dataIndex={23} data={data[23]}></RecommendBox>
                <RecommendBox dataIndex={24} data={data[24]}></RecommendBox>
              </InnerRow>
              <InnerRow>
                <RecommendBox dataIndex={25} data={data[25]}></RecommendBox>
                <RecommendBox dataIndex={26} data={data[26]}></RecommendBox>
                <RecommendBox dataIndex={27} data={data[27]}></RecommendBox>
                <RecommendBox dataIndex={28} data={data[28]}></RecommendBox>
                <RecommendBox dataIndex={29} data={data[29]}></RecommendBox>
              </InnerRow>
            </InnerCol>
          )}
        </Inner>
      </ScrollContainer>
    </Wrapper>
  );
};

export default Search;
