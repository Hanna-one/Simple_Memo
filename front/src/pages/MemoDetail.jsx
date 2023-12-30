import styled from "styled-components";
import Button from "../style/Button";
import { ContentSection, MenuWrap } from "../components/Section";

const MemoTitle = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid gray;
`
const MemoText = styled.textarea`
  padding: 10px;
  height: 48vh;
  resize: none;
`

const BtnWrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export default function MemoDetail() {

  return (
    <>
      <div style={{ textAlign: "right", padding: "0 20px"}}>
        <Button children="목록보기" color="black" background="#F3AE5F"></Button>
      </div>
      <ContentSection style={{display:"flex", flexDirection:"column"}}>
        <MemoTitle />
        <MemoText>메모 내용</MemoText>
      </ContentSection>
      <MenuWrap>
        <Button background="#DC4B48" children="삭제"></Button>
        <Button background="#0B87BA" children="완료"></Button>
      </MenuWrap>
    </>
  );
}