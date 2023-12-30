import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  line-height: 40px;
  font-weight: 500;
  border-radius: 5px;
  border: none;
  background: ${(props) => props.background || "green" };
  color: ${(props) => props.color || "white" };
  &:hover{
    cursor: pointer;
  }
`

export default function Button({children, color, background}){
  return(
    <StyledButton color={color} background={background}>{children}</StyledButton>
  );
}