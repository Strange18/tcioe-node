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
    width: fit-content;
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
    width: 100%;
    height: 5px;
    background-color: #f97a00;
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

const ReportsContainer = styled.div`
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

const ReportCard = styled.div`
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

  color: ${(props) => (props.isSelected ? "#f97a00" : "#2c3e50")}; // Set color based on isSelected prop

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

const StyledPage = styled.div`
  background-color: #f7f7f7;
  padding-bottom: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Page = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://notices.tcioe.edu.np/api/report/");
        const data = await response.json();
  
        const selfStudyReports = data.filter((report) => report.type === "8436a4bf-2406-4d66-bd34-a37def2f4ddb");
  
        const sortedReports = selfStudyReports.sort((a, b) => new Date(b.uploaded_at) - new Date(a.uploaded_at));
  
        const storedReportId = localStorage.getItem("selectedReportId");
  
        const isSamePage = window.location.pathname === `/resources/reports/ssr/${storedReportId}`;
  
        if (sortedReports.length > 0) {
          const defaultReport = isSamePage
            ? sortedReports.find((report) => report.id === storedReportId) || sortedReports[0]
            : sortedReports[0];
  
          setSelectedReport(defaultReport);
          localStorage.setItem("selectedReportId", defaultReport.id);
  
          if (isSamePage) {
            window.history.pushState(null, null, `/resources/reports/ssr/${defaultReport.id}`);
          }
        }
  
        setReports(sortedReports);
  
        if (!isSamePage && sortedReports.length > 0) {
          const defaultOpenCalendarId = sortedReports[0].id;
          window.history.pushState(null, null, `/resources/reports/ssr/${defaultOpenCalendarId}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  
  

  const getViewerSrc = (fileUrl) => {
    const fileName = fileUrl.split("/").pop();
    return `https://notices.tcioe.edu.np/media/media/reports/${fileName}`;
  };

  const handleCardClick = (report) => {
    setSelectedReport(report);
    localStorage.setItem("selectedReportId", report.id);
    window.history.pushState(null, null, `/resources/reports/ssr/${report.id}`);
  };

  return (
    <Wrapper>
      <h1>Self Study Reports</h1>
      <Container>
        <ReportsContainer>
          {reports.map((report) => (
            <ReportCard key={report.id} onClick={() => handleCardClick(report)}>
              <ItemText>
                <ItemTitle isSelected={report === selectedReport}>{report.title}</ItemTitle>
              </ItemText>
            </ReportCard>
          ))}
        </ReportsContainer>
        <EmbeddedContainer>
          {selectedReport && (
            <>
              <Viewer src={getViewerSrc(selectedReport.file)} />
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