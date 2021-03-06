import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  color: black;

  @media screen and (max-width: 800px) {
    top: 65px;
    right: 10px;
  }
`;

export const CartDropdownnButton = styled(CustomButton)`
  margin-top: auto;
`;

export const CartItemContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  ::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar
{
    width: 7px;
    background-color: #F5F5F5;
    margin-bottom: 2px;
}

::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
