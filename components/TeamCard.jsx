"use client";

import Image from "next/image";
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
  height: 75px;
`;

const CardInfoWithoutImg = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.4em;
  justify-content: center;
  padding-top: 3em;
  height: 75px;
  border-top: 5px solid #f97a00;
  // min-width: 300px;
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
  font-size: 0.8rem;
  text-align: center;
`;
const Responsibility = styled.h4`
  color: #777;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
`;
const TeamCard = ({ detail }) => {
    return (
        <CardWrapper>
            {detail.Image ? (
                <>
                    <CardImg>
                        <ImgDiv>
                            <Image src={detail.Image} layout="fill" objectFit="cover" />
                        </ImgDiv>
                        <EmptyDiv></EmptyDiv>
                    </CardImg>
                    <CardInfo>
                        <Title>{detail.Name}</Title>
                        {detail.Responsibility && (
                            <Responsibility>{detail.Responsibility}</Responsibility>
                        )}
                        <Designation>{detail.Designation}</Designation>
                    </CardInfo>
                </>
            ) : (
                <CardInfoWithoutImg>
                    <Title>{detail.Name}</Title>
                    {detail.Responsibility && (
                        <Responsibility>{detail.Responsibility}</Responsibility>
                    )}
                    <Designation>{detail.Designation}</Designation>
                </CardInfoWithoutImg>
            )}
        </CardWrapper>
    );
};

export default TeamCard;