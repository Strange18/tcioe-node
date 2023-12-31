"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { menuItems } from "@/utils/menuItems";
import HeaderComponent from "@/components/HeaderComponent";
import MagazineInterface from "./page2";

const MagazinePageWrapper = styled.div`
  padding: 32px 32px 64px 32px;
  text-align: center;

  h1 {
    font-size: 2rem;
    color: #2c3e50;
    font-weight: bold;
    margin-bottom: 32px;
    position: relative;
    display: inline-block;
  }

  h1::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 100%;
    height: 5px;
    background-color: #f97a00;
    transform: translateX(-50%);
  }
`;

const MagazineList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px; /* Increased gap between cards for large screens */
  margin-top: 20px;
`;

const MagazineCard = styled.div`
  width: calc(40% - 20px); /* Reduced width for better responsiveness */
  max-width: 350px;
  height: 460px; /* Slightly reduced height of the card */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.025);
  }

  @media (max-width: 1200px) {
    width: calc(45% - 20px); /* Slightly adjusted width for smaller screens */
    max-width: 350px;
    height: 460px; /* Slightly reduced height of the card */
  }

  @media (max-width: 768px) {
    width: 80%; /* Adjusted width for small screens */
    max-width: 300px; /* Reduced max-width for small screens */
    height: 420px; /* Reduced height of the card for small screens */
    margin: 0 auto 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px; /* Reduced max-width for small screens */
    height: 420px; /* Reduced height of the card for small screens */
    margin: 0 auto 20px;
  }
`;

const MagazineImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const MagazineInfo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 50%;
`;

const MagazineName = styled.h2`
  font-size: 1.2rem;
  font-weight: normal; /* Reduced font weight for small screens */
  margin-bottom: 8px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const MagazineDescription = styled.p`
  font-size: 0.85rem; /* Increased font size a bit */
  font-weight: normal; /* Reduced font weight for small screens */
  color: #666;
  margin-bottom: 12px;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: 0.75rem; /* Further reduced font size for smaller screens */
  }
`;

const ViewButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: auto;
`;

const ViewButton = styled.a`
  padding: 8px 16px;
  background-color: #7177ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #7177ff;
    transform: scale(1.05);
  }
`;

const MagazinePage = () => {
  const [magazines, setMagazines] = useState([]);
  const [selectedMagazine, setSelectedMagazine] = useState(null);

  const openMagazineInterface = (magazine) => {
    setSelectedMagazine(magazine);
  };

  const closeMagazineInterface = () => {
    setSelectedMagazine(null);
  };

  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        const response = await fetch("https://notices.tcioe.edu.np/api/report/");
        const data = await response.json();

        const filteredMagazines = data.filter(
          (magazine) => magazine.type === "7d02fa6b-cc7d-466b-aa11-19adcbe64216" || magazine.type === "ae68d10e-f681-4a99-ada5-101eabb2c9c1"
        );

        // Sort magazines by uploaded_at in descending order
        const sortedMagazines = filteredMagazines.sort(
          (a, b) => new Date(b.uploaded_at) - new Date(a.uploaded_at)
        );

        setMagazines(sortedMagazines);
      } catch (error) {
        console.error("Error fetching magazines:", error);
      }
    };

    fetchMagazines();
  }, []);


  return (
    <>
      <HeaderComponent menuItems={menuItems} />
      {selectedMagazine ? (
        <MagazineInterface
          magazineData={selectedMagazine}
          onClose={closeMagazineInterface}
        />
      ) : (
        <MagazinePageWrapper>
          <h1>Magazines</h1>
          <MagazineList>
            {magazines.map((magazine) => (
              <MagazineCard key={magazine.id}>
                <MagazineImage src={magazine.type === "7d02fa6b-cc7d-466b-aa11-19adcbe64216" ? "/industrial.jpeg" : "/shilpa.jpeg"} alt={magazine.title} />
                <MagazineInfo>
                  <MagazineName>{magazine.type === "7d02fa6b-cc7d-466b-aa11-19adcbe64216" ? "Industrial Vision" : "Shilpa Magazine"}</MagazineName>
                  <MagazineDescription>{magazine.type === "7d02fa6b-cc7d-466b-aa11-19adcbe64216"
                    ? "Industrial Vision is an annual magazine published by the Society of Industrial Engineering Students - Nepal. The magazine discovers the latest industrial breakthroughs and innovations by exploring the dynamic field of Industrial Engineering."
                    : "SHILPA, ASIS's yearly magazine, showcases the world of architecture at Thapathali Campus. It unfolds a collection of articles, insights, activities, and stories, beautifully narrated by the students of architecture themselves."
                  }</MagazineDescription>
                  <ViewButtonContainer>
                    <ViewButton onClick={() => openMagazineInterface(magazine)}>View</ViewButton>
                  </ViewButtonContainer>
                </MagazineInfo>
              </MagazineCard>
            ))}
          </MagazineList>
        </MagazinePageWrapper>
      )}
    </>
  );
};

export default MagazinePage;