"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderComponent from "@/components/HeaderComponent";
import { menuItems } from "@/utils/menuItems";

const Wrapper = styled.div`
  width: 100%;
  padding: 16px 32px 0 32px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    padding: 16px 12px 0 12px;
  }
`;

const Header = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #181b57;
  margin-top: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

const Line = styled.div`
  height: 5px;
  width: 100%;
  background-color: #f97a00;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 958px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
    margin-right: 32px;
  }
`;

const List = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #f0efef;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
    transform: scale(1.02);
  }

  &:active {
    background-color: #f97a00;
    color: white;
  }
`;

const ItemText = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;

const ItemTitle = styled.div`
  font-size: 1rem;
  color: ${(props) => (props.clicked ? "#f97a00" : "#181b57")};
  font-weight: bold;
  width: 100%;
  overflow: hidden;
  white-space: normal;
  text-align: center;
  max-height: 100px;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    max-height: 80px;
  }
`;

const IframeContainer = styled.div`
  position: fixed;
  top: 150px;
  left: 35%;
  width: 60%;
  height: ${(props) => (props.clicked ? "70vh" : "0")};
  border: none;
  overflow-y: auto;
  transition: height 0.3s ease;
  border-radius:15px;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    height: ${(props) => (props.clicked ? "50vh" : "0")};
    margin-top: 16px;
    border-radius:10px;
    left: 0; 
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #f97a00;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  border-radius:5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const extractTitleWithoutNumbers = (title) => {
  return title.replace(/[\d_\-]+/g, "");
};

const Page = () => {
  const [data, setData] = useState([]);
  const [clickedItemId, setClickedItemId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://notices.tcioe.edu.np/api/report/"
        );
        const jsonData = await response.json();
        setData(jsonData);

        if (window.innerWidth > 768 && jsonData.length > 0) {
          const firstItemId = jsonData.find((item) =>
            item.title.startsWith("1_")
          )?.id;
          setClickedItemId(firstItemId || null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (itemId) => {
    setClickedItemId(itemId);

    if (window.innerWidth <= 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const container = document.getElementById(`container-${itemId}`);
      if (container) {
        const containerPosition = container.offsetTop;
        window.scrollTo({ top: containerPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <HeaderComponent menuItems={menuItems} />
      <Wrapper>
      <IframeContainer clicked={clickedItemId}>
  {typeof window !== 'undefined' && window.innerWidth > 768 && (
    <CloseButton onClick={() => setClickedItemId(null)}>
      Close
    </CloseButton>
  )}
  {clickedItemId && (
    <iframe
      src={data.find((item) => item.id === clickedItemId)?.file}
      width="100%"
      height="100%"
      frameBorder="0"
    />
  )}
</IframeContainer>


        <Header>
          <Title>ऐन</Title>
          <Line width={"100px"} />
        </Header>
        <Container>
          <List>
            {data
              .filter((item) => item.title.startsWith("1_"))
              .map((item) => (
                <Item
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  id={`container-${item.id}`}
                >
                  <ItemText>
                    <ItemTitle clicked={clickedItemId === item.id}>
                      {extractTitleWithoutNumbers(item.title)}
                    </ItemTitle>
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
            {data
              .filter((item) => item.title.startsWith("2_"))
              .map((item) => (
                <Item
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  id={`container-${item.id}`}
                >
                  <ItemText>
                    <ItemTitle clicked={clickedItemId === item.id}>
                      {extractTitleWithoutNumbers(item.title)}
                    </ItemTitle>
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
            {data
              .filter((item) => item.title.startsWith("3_"))
              .map((item) => (
                <Item
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  id={`container-${item.id}`}
                >
                  <ItemText>
                    <ItemTitle clicked={clickedItemId === item.id}>
                      {extractTitleWithoutNumbers(item.title)}
                    </ItemTitle>
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
            {data
              .filter((item) => item.title.startsWith("4_"))
              .map((item) => (
                <Item
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  id={`container-${item.id}`}
                >
                  <ItemText>
                    <ItemTitle clicked={clickedItemId === item.id}>
                      {extractTitleWithoutNumbers(item.title)}
                    </ItemTitle>
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
            {data
              .filter((item) => item.title.startsWith("5_"))
              .map((item) => (
                <Item
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  id={`container-${item.id}`}
                >
                  <ItemText>
                    <ItemTitle clicked={clickedItemId === item.id}>
                      {extractTitleWithoutNumbers(item.title)}
                    </ItemTitle>
                  </ItemText>
                </Item>
              ))}
          </List>
        </Container>
      </Wrapper>
    </>
  );
};

export default Page;