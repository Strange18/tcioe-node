import React, { useEffect } from "react";
import styled from "styled-components";
import "pdfcraft/dist/index.es.css";
import { Viewer } from "pdfcraft";

const InterfaceWrapper = styled.div`
  width: 100%;
  min-height: 552px;
  padding: 16px 24px 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;

  h1 {
    font-size: 1.8rem;
    color: #2c3e50;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 16px;
    margin-top: 40px;
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

const BackButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 8px;
  background-color: #7177ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #7177ff;
    transform: scale(1.1);
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
  
  color: ${props => (props.isSelected ? "#f97a00" : "#2c3e50")};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const EmbeddedContainer = styled.div`
  flex: 3;
  max-width: 1000px;
  margin-top: 16px;
  margin-bottom: 16px;
  align-self: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    order: 1;
  }
`;

const PdfCraftViewer = styled(Viewer)`
  width: 100%;
  height: 500px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const MagazineInterface = ({ magazineData, onClose }) => {
  useEffect(() => {
    
    window.history.pushState(
      null,
      null,
      `/resources/magazine#/${magazineData.id}` 
    );

    
    return () => {
      window.history.replaceState(null, null, "/resources/magazine");
    };
  }, [magazineData.id]);

  return (
    <InterfaceWrapper>
      <BackButton onClick={onClose}>{"<"}</BackButton>
      <h1>{magazineData.type === "7d02fa6b-cc7d-466b-aa11-19adcbe64216" ? "Industrial Vision" : "Shilpa Magazine"}</h1>
      <Container>
        <ReportsContainer>
          <ReportCard>
            <ItemText>
              <ItemTitle>{magazineData.title}</ItemTitle>
            </ItemText>
          </ReportCard>
        </ReportsContainer>
        <EmbeddedContainer>
          <PdfCraftViewer src={magazineData.file} />
        </EmbeddedContainer>
      </Container>
    </InterfaceWrapper>
  );
};

export default MagazineInterface;
