import styled from "styled-components";
import { mobile } from "../../src/responsive";

export const Container = styled.div`
  height: 60vh;
  background-color: #f7f7f1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
export const Desc = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
export const Input = styled.input`
  border: none;
  flex: 8;
`;
export const Button = styled.button`
  flex: 1;
  padding-left: 20px;
  border: none;
  background-color: lightcoral;
  color: white;
  cursor: pointer;
`;
