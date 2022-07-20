import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
  font-size: 18px;
  font-weight: 500;
  color: grey;
  border: 1px solid #d8d8d8;
  padding: 10px;
  margin: 15px 15px 0;
  width: -webkit-fill-available;
  border-radius: 25px;
  transition: 0.8s;

  &:focus {
    border: 1px solid #fff;
    outline: none;
    background-color: lightgrey;
  }
`;

const Input = ({ placeholder, type, onChange }) => {
  return (
    <CustomInput placeholder={placeholder} type={type} onChange={onChange} />
  );
};

export default Input;
