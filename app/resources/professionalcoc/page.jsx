"use client";

import React from "react";
import styled from "styled-components";
import { menuItems } from "@/utils/menuItems";
import HeaderComponent from "@/components/HeaderComponent";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const SubHeading = styled.h3`
  text-align: left;
  margin: 2rem auto;
`;

const BulletList = styled.ul`
  list-style-type: decimal;
  margin-left: 20px;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 13px;
  span {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const Para = styled.p`
  text-align: center;

  a {
    text-decoration: underline;
    color: blue;
  }
`;

const ParaHeading = styled.p`
  text-align: center;
  font-weight: bold;
  margin-top: 3rem;
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

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
const Line = styled.div`
  height: 5px;
  width: 100%;
  background-color: #f97a00;
`;

const CodeOfConduct = () => {
  return (
    <>
      <HeaderComponent menuItems={menuItems} />
      <Container>
        <Header>
          <Title>Professional Code of Conduct</Title>
          <Line width={"100px"} />
        </Header>
        <SubHeading>
          The Professional Code of Conduct to be followed by the registered
          Engineers of the Council, subject to the provision of the Nepal
          Engineering Council (NEC) Act, 2055 (1998) and the Nepal Engineering
          Council Regulation, 2057(2000), has been published as follows :{" "}
        </SubHeading>
        <BulletList>
          <ListItem>
            <span>Discipline and Honesty:</span> The Engineering
            service/profession must be conducted in a disciplined manner with
            honesty, not contravening professional dignity and well-being.
          </ListItem>
          <ListItem>
            <span>Politeness and Confidentiality:</span> Engineering services
            for customers should be dealt with in a polite manner and
            professional information should remain confidential except with
            written or verbal consent of the customers concerned. This, however,
            is not deemed to be a restriction to provide such information to the
            concerned authority as per the existing laws.
          </ListItem>
          <ListItem>
            <span>Non-discrimination:</span> No discrimination should be made
            against customers on the grounds of religion, race, sex, caste or
            any other things while applying professional knowledge and skills.
          </ListItem>
          <ListItem>
            <span>Professional Work:</span> Individuals should only do
            professional work in their field or provide recommendations or
            suggestions only within the area of their subject of study or
            obtained knowledge or skills. With regard to the works not falling
            within the subject of one's profession, such works should be
            recommended to be done by an expert of that subject matter.
          </ListItem>
          <ListItem>
            <span>
              Deeds which may cause harm to the engineering profession:
            </span>{" "}
            With the exception of salary, allowance and benefits to be received
            for services provided, one shall not obtain improper financial gain
            of any kind or conduct improper activities of any kind, which would
            impair the engineering profession.
          </ListItem>
          <ListItem>
            <span>Personal responsibility:</span> All individuals will be
            personally responsible for all works performed in connection with
            his/her engineering profession.
          </ListItem>
          <ListItem>
            <span>State name, designation and registration no:</span> While
            signing the documents or descriptions such as the design, map,
            specifications and estimates etc, relating to the engineering
            profession, the details should include the name, designation and NEC
            registration No. and should be stated in a clear and comprehensible
            manner.
          </ListItem>
          <ListItem>
            <span>
              No publicity or advertisement must be made which may cause
              unnecessary effect:
            </span>{" "}
            In connection with the professional activities to be carried out, no
            publicity or advertisement shall be made so as to cause unnecessary
            effect upon the customers.
          </ListItem>
        </BulletList>
        <ParaHeading>Nepal Engineering Council</ParaHeading>
        <Para>Bhagwati Marga 742/4, Naxal, Kathmandu - 1 </Para>
        <Para>Post Box No. 2049, Phone No.: 977-01-4420655, 4420656</Para>
        <Para>Fax: 977-01-4422099</Para>
        <Para>
          Website:{" "}
          <a href="https://www.nec.gov.np/" target="_blank">
            www.nec.gov.np
          </a>
          , Email: necgov@ntc.net.np
        </Para>
      </Container>
    </>
  );
};

export default CodeOfConduct;