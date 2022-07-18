import React from "react";
import styled from "styled-components";
import Button from "../../reusableComponents/button/Button";
import Input from "../../reusableComponents/input/Input";

const LeftMain = styled.div`
  width: 300px;
  padding: 0 15px;
`;

const Form = styled.form({});

const LeftPanel = () => {
  return (
    <LeftMain>
      <Form>
        <Input type='text' placeholder="Search..." />
        <Button type="button" btn_name="Search" />
      </Form>
    </LeftMain>
  );
};

export default LeftPanel;
