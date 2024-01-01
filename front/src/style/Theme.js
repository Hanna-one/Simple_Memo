export const lightTheme = {
  background: "#FFF",
  text: "#000",
  textbox: "#FFF",
  headertitle: "#FFF387",
  header: "#f2f2f2",
  hoverColor: "#f2f2f2",
  border: "#888",
  btnText: "#FFF",
  bgBtnreg: "#F3AE5F",
  bgBtndelete: "#DC4B48",
  bgBtndone: "#0B87BA",
}

export const darkTheme = {
  background: "#151a30",
  text: "#8f9bb3",
  textbox: "#1a2138",
  headertitle: "#000C78",
  header: "#1a2138",
  hoverColor: "#f2f2f2",
  border: "#8f9bb3",
  btnText: "#f2f2f2",
  bgBtnreg: "#FDE9BF",
  bgBtndelete: "#FBCAB7",
  bgBtndone: "#9AEFF8",
}

export const theme = {
  lightTheme, 
  darkTheme,
}

export default theme;


/* 

background
text( 본문 글씨, 로고, 아이콘 모두 같은 색 사용)
상태 3가지 ( correct, present, absent) + 텍스트는 #fefefe로 동일
보드 배경색, 텍스트 색, 테두리색(기본, 활성화 시)
키보드 배경색, 텍스트 색, hover시 배경색
다이얼로그 배경색
버튼 배경색, hover시 배경색, 텍스트색
*/