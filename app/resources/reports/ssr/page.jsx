"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { menuItems } from "@/utils/menuItems";
import HeaderComponent from "@/components/HeaderComponent";

const Wrapper = styled.div`
  width: 100%;
  padding: 16px 64px 0 64px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  @media (max-width: 768px) {
    padding: 16px 12px 0 12px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  /* margin-bottom: 12px; */
  color: #181b57;
`;
const Line = styled.div`
  height: 4px;
  width: ${(props) => (props.width ? props.width : "100px")};
  background-color: #f97a00;
  border-radius: 6px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 40vh;
  @media (max-width: 958px) {
    flex-direction: column-reverse;
  }
`;
const List = styled.div`
  flex: 3.5;
  display: flex;
  flex-direction: column;
`;
const Item = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 120px;
  background-color: #f0efef;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #e6e6e6;
    scale: 1.02;
  }
`;

const ItemText = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 85%;
`;
const ItemTitle = styled.div`
  font-size: 1.2rem;
  color: #181b57;
  font-weight: bold;
  width: 100%;
  overflow: hidden;

  @media (max-width: 958px) {
    font-size: 1rem;
  }
`;
const ItemSubtitle = styled.div`
  font-size: 0.8rem;
  color: #8a8a8a;
  width: 100%;
  overflow: hidden;
  @media (max-width: 958px) {
    font-size: 0.6rem;
  }
`;

const page = () => {
  return (
    <>
      <HeaderComponent menuItems={menuItems} />
      <Wrapper>
        <Header>
          <Title>Self Study Reports</Title>
          <Line width={"100px"} />
        </Header>
        <Container>
          <List>
            <Item
              href="https://notices.tcioe.edu.np/media/files/Self_Study_Report_For_QAA.pdf"
              target="_blank"
            >
              <ItemText>
                <ItemTitle>Self Study Report For QAA</ItemTitle>
              </ItemText>
            </Item>
          </List>
          <List>
            <Item
              href="https://notices.tcioe.edu.np/media/files/Self_Study_Report_-_ANNEX_QAA.pdf"
              target="_blank"
            >
              <ItemText>
                <ItemTitle>Self Study Report - ANNEX (QAA)</ItemTitle>
              </ItemText>
            </Item>
          </List>
        </Container>
      </Wrapper>
    </>
  );
};
export default page;
