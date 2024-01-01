import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  line-height: 20px;
  font-weight: 500;
  border-radius: 5px;
  border: none;
  background-color: ${({theme}) => theme.bgBtnreg};
  &:hover{
    cursor: pointer;
  }
  ${(props)=>props.delete && 
  `background-color: #DC4B48`};
  ${(props)=>props.done && 
    `background-color: #0B87BA`};
`  

/* ${(props)=>props.children=="완료" && 
`background-color: ${({theme}) => theme.bgBtndone}`}; */

export default function Button({children, ...props}){
  return(
    <StyledButton {...props}>{children}</StyledButton>
  );
}