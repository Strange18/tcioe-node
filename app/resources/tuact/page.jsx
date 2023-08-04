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
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    padding: 16px 12px 0 12px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px 0;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #181b57;
  margin-top: 1.5rem;
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
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  @media (max-width: 958px) {
    flex-direction: column-reverse;
  }
`;
const List = styled.div`
  flex: 3.5;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const Item = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 120px;
  background-color: #f0efef;
  border-radius: 12px;
  padding: 1rem;
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

const extractTitleWithoutNumbers = (title) => {
  return title.replace(/[\d_\-]+/g, '');
};

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://notices.tcioe.edu.np/api/resources/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredData1 = data.filter(item => item.title.startsWith("1_"));
  const filteredData2 = data.filter(item => item.title.startsWith("2_"));
  const filteredData3 = data.filter(item => item.title.startsWith("3_"));
  const filteredData4 = data.filter(item => item.title.startsWith("4_"));
  const filteredData5 = data.filter(item => item.title.startsWith("5_"));

  return (
    <>
      <HeaderComponent menuItems={menuItems} />
      <Wrapper>
        <Header>
          <Title>ऐन</Title>
          <Line width={"100px"} />
        </Header>
        <Container>
          <List>
          {filteredData1.map(item => (
              <Item href={item.file} target="_blank" key={item.id}>
                <ItemText>
                  <ItemTitle>{extractTitleWithoutNumbers(item.title)}</ItemTitle>
                </ItemText>
              </Item>
            ))}
          </List>
        </Container>

        <Header>
          <Title>नियम</Title>
          <Line width={"100px"} />
        </Header>
        <Container>
          <List>
          {filteredData2.map(item => (
              <Item href={item.file} target="_blank" key={item.id}>
                <ItemText>
                <ItemTitle>{extractTitleWithoutNumbers(item.title)}</ItemTitle>
                </ItemText>
              </Item>
            ))}
          </List>
        </Container>

        <Header>
          <Title>विनियम</Title>
          <Line width={"100px"} />
        </Header>
        <Container>
          <List>
          {filteredData3.map(item => (
              <Item href={item.file} target="_blank" key={item.id}>
                <ItemText>
                <ItemTitle>{extractTitleWithoutNumbers(item.title)}</ItemTitle>
                </ItemText>
              </Item>
            ))}
          </List>
        </Container>

        <Header>
          <Title>कार्यविधि</Title>
          <Line width={"100px"} />
        </Header>
        <Container>
          <List>
          {filteredData4.map(item => (
              <Item href={item.file} target="_blank" key={item.id}>
                <ItemText>
                <ItemTitle>{extractTitleWithoutNumbers(item.title)}</ItemTitle>
                </ItemText>
              </Item>
            ))}
          </List>
        </Container>

        <Header>
          <Title>निर्देशिका</Title>
          <Line width={"100px"} />
        </Header>
        <Container>
          <List>
          {filteredData5.map(item => (
              <Item href={item.file} target="_blank" key={item.id}>
                <ItemText>
                <ItemTitle>{extractTitleWithoutNumbers(item.title)}</ItemTitle>
                </ItemText>
              </Item>
            ))}
          </List>
        </Container>

      </Wrapper>
    </>
  );
};
export default page;
