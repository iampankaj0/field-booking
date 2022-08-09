import React, { useContext } from "react";
import styled from "styled-components";
import { allBookingContext } from "../../context/BookingContext";
import { myFilterContext } from "../../context/FilterContext";
import Button from "../../reusableComponents/button/Button";
import Input from "../../reusableComponents/input/Input";
import StatsDetail from "../../reusableComponents/statsDetail/StatsDetail";

const LeftMain = styled.div`
  width: 300px;
  height: calc(100vh - 61px);
  border-right: 1px solid #d8d8d8;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    border-right: none;
  }
`;

const Form = styled.form({});

const LeftPanel = () => {
  const [searchTerm, setSearchTerm] = useContext(myFilterContext);
  const [bookings, setBookings] = useContext(allBookingContext);

  return (
    <LeftMain>
      <Form>
        <Input
          type="text"
          placeholder="Search Field"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="button" btn_name="Search" />
      </Form>
      <StatsDetail data={bookings.length} />
    </LeftMain>
  );
};

export default LeftPanel;
