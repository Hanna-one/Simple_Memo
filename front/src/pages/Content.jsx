import React from "react";
import styled from "styled-components";
import Button from "../style/Button";
import { ContentSection, MenuWrap } from "../components/Section";
import { MdColorLens } from "react-icons/md";

const Search = styled.div`
  padding: 10px;
  width: 50%;
  height: 40px;
  line-height: 20px;
  border: 1px solid gray;
`
const SortMenu = styled.select`
  width: 30%;
  height: 40px;
  line-height: 40px;
`
const ContentBox = styled.div`
  padding: 10px;
  height: 120px;
  border: 1px solid gray;
  &:hover{
    cursor: pointer;
  }
`

const ContentText = styled.div`
  margin: 5px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

function Content() {
  return (
    <>
      <div style={{ textAlign: "right", padding: "0 20px"}}>
        <Button color="black" background="#F3AE5F">메모하기</Button>
      </div>
      <ContentSection>
        <ContentBox>
          <ContentText>
            한나의 더메모 프로젝트 <br />
            첫번째 메모. 리액트를 활용한 토이프로젝트
          </ContentText>
        </ContentBox>
      </ContentSection>
      <MenuWrap>
        <Search>
          검색
        </Search>
        <SortMenu>
          <option value="날짜순">날짜순</option>
          <option value="수정순">수정순</option>
        </SortMenu>
      </MenuWrap>
    </>
  );
}

export default Content;