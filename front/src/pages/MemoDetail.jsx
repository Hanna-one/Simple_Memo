import styled from "styled-components";
import Button from "../style/Button";
import { ContentSection, MenuWrap } from "../components/Section";

const MemoTitle = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid gray;
  background-color: ${({theme}) => theme.textbox};
`
const MemoText = styled.textarea`
  padding: 10px;
  height: 45vh;
  resize: none;
  background-color: ${({theme}) => theme.textbox};
`

const BtnWrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export default function MemoDetail() {

  const handleChange = () => {
    console.log('1111');
  }

  return (
    <>
      <div style={{ textAlign: "right", padding: "20px 20px 0"}}>
        <Button>목록보기</Button>
      </div>
      <ContentSection style={{display:"flex", flexDirection:"column"}}>
        <MemoTitle value="메모제목" onChange={handleChange}/>
        <MemoText value="메모내용" onChange={handleChange}></MemoText>
      </ContentSection>
      <MenuWrap>
        <Button delete>삭제</Button>
        <Button done>완료</Button>
      </MenuWrap>
    </>
  );
}