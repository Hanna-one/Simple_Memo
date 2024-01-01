import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

const HeaderMenu = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 5vh;
  line-height: 5vh;
  font-size: 14px;
  text-align: center;
  background-color: ${({ theme }) => theme.headertitle};
`
const HeaderSection = styled.header`
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  background-color: ${({ theme }) => theme.header};
`
const IconWrap = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.border};;
  box-shadow: 1px 1px 1px gray;
  &:hover{
    cursor:pointer;
  }
`
export default function Header({ themeMode, handleTheme }) {

  return (
    <>
      <HeaderMenu>
        <span>Memorial Memo Application & {themeMode}</span>
      </HeaderMenu>
      <HeaderSection>
        <h1 style={{ marginLeft: "30px" }}><Link to="/">SIMPLE MEMO</Link></h1>
        <IconWrap onClick={handleTheme} >
          {themeMode === "darkTheme"
            ? <MdOutlineNightlight size="30" color="FFF387"/>
            : <MdOutlineLightMode size="30" />
          }
        </IconWrap>
      </HeaderSection >
    </>
  );
}