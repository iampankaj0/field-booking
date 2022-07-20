import React, { useContext, useState } from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import styled from "styled-components";
import "../../../node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { bookinglist } from "../../arrays/bookinglist";
import PaginationList from "react-pagination-list";
import { myFilterContext } from "../../context/FilterContext";

const RightList = styled.div`
  width: calc(100vw - 301px);
  height: calc(100vh - 61px);
  overflow-y: auto;

  @media (max-width: 767px) {
    margin-top: 30px;
    height: auto;
    width: 100%;
  }
`;

const PanelContent = styled.div`
  padding: 15px;
`;

const ListPanel = () => {
  const [bookings, setBookings] = useState(bookinglist);

  const [searchTerm, setSearchTerm] = useContext(myFilterContext);

  return (
    <RightList className="right_list_dash">
      <PanelContent>
        <Table>
          <Thead className="table-head">
            <Tr>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Field</Th>
              <Th>Customer</Th>
              <Th>Phone</Th>
              <Th>Invoice</Th>
              <Th>#</Th>
            </Tr>
          </Thead>
          <Tbody>
            
            {bookings.filter((val)=>{
              if(searchTerm == ""){
                return val
              } else if(val.field.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return val
              }
            }).map((data, id) => {
              return (
                <Tr>
                  <Td>
                    <p> {data.date} </p>
                  </Td>
                  <Td>
                    <p> {data.time} </p>
                  </Td>
                  <Td>
                    <p> {data.field} </p>
                  </Td>
                  <Td>
                    <p> {data.customer} </p>
                  </Td>
                  <Td>
                    <p> {data.phone} </p>
                  </Td>
                  <Td>
                    <p> {data.invoice} </p>
                  </Td>
                  <Td>
                    <p> {id + 1} </p>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </PanelContent>
    </RightList>
  );
};

export default ListPanel;
