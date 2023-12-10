"use client"
import { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderComponent from "@/components/HeaderComponent";
import { menuItems } from "@/utils/menuItems";

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

const CalendarsContainer = styled.div`
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

const CalendarCard = styled.div`
  cursor: pointer;
  height: 60px;
  background-color: #ecf0f1;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  transition: 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 80px;
  }

  &:hover {
    background-color: #d5dbdb;
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
  font-size: 1.2rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => (props.isSelected ? "#f97a00" : "#2c3e50")}; // Set color based on isSelected prop

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const EmbeddedContainer = styled.div`
  flex: 3;
  max-width: 1000px;
  margin-top: -16px;
  align-self: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    order: 1;
  }
`;

const EmbeddedIframe = styled.iframe`
  width: 100%;
  height: 500px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 400px;
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
        const data = await response.json();

        const MscCalendars = data.filter(
          (calendar) => calendar.slug === "msc-academic-calendar-2079-2080"
        );

        const sortedCalendars = MscCalendars.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });

        setCalendars(sortedCalendars);

        if (sortedCalendars.length > 0) {
          setSelectedCalendar(sortedCalendars[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (calendar) => {
    setSelectedCalendar(calendar);
  };

  return (
    <Wrapper>
      <h1>M.Sc. Academic Calendars</h1>
      <Container>
        <CalendarsContainer>
          {calendars.map((calendar) => (
            <CalendarCard
              key={calendar.id}
              onClick={() => handleCardClick(calendar)}
            >
              <ItemText>
                <ItemTitle isSelected={calendar === selectedCalendar}>{calendar.title}</ItemTitle>
              </ItemText>
            </CalendarCard>
          ))}
        </CalendarsContainer>
        <EmbeddedContainer>
          {selectedCalendar && (
            <>
              <EmbeddedIframe
                title={selectedCalendar.title}
                src={selectedCalendar.calendar_pdf}
                frameBorder="0"
                allowFullScreen
              />
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
