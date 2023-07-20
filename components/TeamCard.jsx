"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  min-width: 300px;
  border-top: 0px;
  margin-top: 10em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 4px -4px gray;
    scale: 1.1;
  }
`;

const CardImg = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const ImgDiv = styled.section`
  display: flex;
  position: absolute;
  top: -100px;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  overflow: hidden;
`;
const EmptyDiv = styled.section`
  height: 70px;
  width: 100%;
  border-top: 5px solid #f97a00;
  border-bottom: 0px;
`;

const CardInfo = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 4px 4px -4px gray;
  gap: 0.4em;
  justify-content: center;
  padding-bottom: 1.5em;
  height: 95px;
`;

const CardInfoWithoutImg = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 0.3em;
  height: 110px;
  border-top: 5px solid #f97a00;
`;

const Title = styled.h2`
  font-weight: 400;
  color: #333333;
  text-align: center;
  font-size: 1.2rem;
`;
const Designation = styled.h4`
  color: #777;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  width: 90%;
  margin: auto;
  margin-top: 0px;
  margin-bottom: 0px;
`;
const Email = styled.h4`
  color: #777;
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
  color: #7177ff;
`;
const TeamCard = ({ detail }) => {
  const { photo } = detail;
  const modifiedPhoto = photo
    ? photo.replace(
        "http://10.10.100.246:9000/",
        "https://notices.tcioe.edu.np/"
      )
    : null;
  return (
    <CardWrapper>
      {modifiedPhoto ? (
        <>
          <CardImg>
            <ImgDiv>
              <Image src={modifiedPhoto} layout="fill" objectFit="cover" />
            </ImgDiv>
            <EmptyDiv></EmptyDiv>
          </CardImg>
          <CardInfo>
            <Title>{detail.name}</Title>
            <Designation>{detail.staff_designation}</Designation>
            {detail.email && <Email>{detail.email}</Email>}
          </CardInfo>
        </>
      ) : (
        <CardInfoWithoutImg>
          <Title>{detail.name}</Title>
          <Designation>{detail.staff_designation}</Designation>
          {detail.email && (
            <Email>
              <a href={`mailto:${detail.email}`}>{detail.email}</a>
            </Email>
          )}
        </CardInfoWithoutImg>
      )}
    </CardWrapper>
  );
};

export default TeamCard;
