import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 25px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #ffd800;
  color: black;
  &:hover {
    background-color: rgba(66, 0, 121, 0.863);
    color: #fff;
  }
`;

const Button = ({ type, onClick, className, btn_name, btn_icon }) => {
  return (
    <CustomButton type={type} onClick={onClick} className={className}>
      {btn_icon} {btn_name}
    </CustomButton>
  );
};

export default Button;
