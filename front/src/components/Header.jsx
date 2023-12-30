import React from "react";
import styled from "styled-components";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const HeaderSection = styled.header`
  margin-bottom: 20px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  background-color: rgb(242, 242, 242);
  `

const HeaderMenu = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 5vh;
  line-height: 5vh;
  font-size: 14px;
  text-align: center;
  background-color: #FFF387;
`

const IconWrap = styled.span`
  width: 40px;
  height: 40px;
  vertical-align: middle;
  text-align: center;
  border: 1px solid red;
  &:hover{
    cursor:pointer;
  }
`

export default function Header() {
  return (
    <>
      <HeaderMenu>
        <span>Memorial Memo Application & Light Mode</span>
      </HeaderMenu>
      <HeaderSection>
        <h1 style={{ marginLeft: "30px" }}>SIMPLE MEMO</h1>
        <IconWrap>
          {/* <MdOutlineNightlight style={{color: "yellow"}}/> */}
          <MdOutlineLightMode size="30"/>
        </IconWrap>
      </HeaderSection>
    </>
  );
}