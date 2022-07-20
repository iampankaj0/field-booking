import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: -webkit-fill-available;
`;

const Stats = styled.div`
  padding: 15px;
`;

const Heading = styled.h2`
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  padding-bottom: 8px;
  border-bottom: 4px double #d8d8d8;
  margin: 20px 15px 5px;
`;

const StatsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatsText = styled.p`
  font-size: 16px;
  margin: 0 0 10px;
`;

const StatsNumber = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

const StatsDetail = () => {
  return (
    <Section>
      <Stats>
        <Heading>QUICK STATS</Heading>

        <StatsBar>
          <StatsText>today</StatsText>
          <span> - </span>
          <StatsNumber>1,320</StatsNumber>
        </StatsBar>
        <StatsBar>
          <StatsText>upcoming</StatsText>
          <span> - </span>
          <StatsNumber>12,180</StatsNumber>
        </StatsBar>
        <StatsBar>
          <StatsText>completed</StatsText>
          <span> - </span>
          <StatsNumber>71,840</StatsNumber>
        </StatsBar>
        <StatsBar>
          <StatsText>cancelled</StatsText>
          <span> - </span>
          <StatsNumber>1,232</StatsNumber>
        </StatsBar>
      </Stats>
    </Section>
  );
};

export default StatsDetail;
