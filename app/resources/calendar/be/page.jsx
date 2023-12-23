"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderComponent from "@/components/HeaderComponent";
import { menuItems } from "@/utils/menuItems";
import "pdfcraft/dist/index.es.css";
import { Viewer } from "pdfcraft";

const Wrapper = styled.div`
  width: 100%;
  min-height: 552px;
  padding: 16px 24px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-size: 2rem;
    color: #2c3e50;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 16px;
    position: relative;
  }

  h1::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100px;
    height: 5px;
    background-color: #f97a00;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    padding: 16px 12px 0 12px;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const DownloadsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin-top: 16px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    order: 2;
  }
`;

const DownloadItem = styled.a`
  cursor: pointer;
  height: 60px;
  background-color: ${(props) => (props.isSelected ? "transparent" : "#ecf0f1")};
  border-radius: 12px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  transition: 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: ${(props) => (props.isSelected ? "#f97a00" : "#2c3e50")}; // Set color based on isSelected prop

  &:hover {
    background-color: ${(props) => (props.isSelected ? "transparent" : "#d5dbdb")};
  }

  @media (max-width: 768px) {
    height: 80px;
  }
`;

const ItemText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const ItemTitle = styled.div`
  font-size: 1rem;
  color: ${(props) => (props.isSelected ? "#f97a00" : "#2c3e50")};
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

const EmbeddedContainer = styled.div`
  flex: 3;
  max-width: 1000px;
  margin: 16px auto;
  align-self: center;

  @media (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;

const StyledPage = styled.div`
  background-color: #f7f7f7;
  padding-bottom: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Page = () => {
  const [calendars, setCalendars] = useState([]);
  const [selectedCalendar, setSelectedCalendar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://notices.tcioe.edu.np/api/calendar/");
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        console.log("This is calendar:", data);

        const filteredCalendars = data.filter(
          (calendar) => calendar.calendar_level === "Bachelors in Engineering"
        );

        const sortedCalendars = filteredCalendars.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        setCalendars(sortedCalendars);

        if (sortedCalendars.length > 0) {
          setSelectedCalendar(sortedCalendars[0]);
        }

        window.history.pushState(null, null, `/resources/calendar/be#/${sortedCalendars[0].id}`);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCalendarClick = (calendar) => {
    setSelectedCalendar(calendar);
    window.history.pushState(null, null, `/resources/calendar/be#/${calendar.id}`);
  };


  return (
    <Wrapper>
      <h1>B.E./BArch. Academic Calendar</h1>
      <Container>
      <DownloadsContainer>
          {calendars.map((calendar) => (
            <DownloadItem
              key={calendar.id}
              href={calendar.calendar_pdf}
              onClick={(e) => {
                e.preventDefault();
                handleCalendarClick(calendar);
              }}
              isSelected={calendar === selectedCalendar}
            >
              <ItemText>
                <ItemTitle isSelected={calendar === selectedCalendar}>
                  {calendar.title}
                </ItemTitle>
              </ItemText>
            </DownloadItem>
          ))}
        </DownloadsContainer>
        <EmbeddedContainer>
          {selectedCalendar && (
            <>
              <Viewer src={selectedCalendar.calendar_pdf} />
            </>
          )}
        </EmbeddedContainer>
      </Container>
    </Wrapper>
  );
};

const App = () => (
  <StyledPage>
    <HeaderComponent menuItems={menuItems} />
    <Page />
  </StyledPage>
);

export default App;






