'use client';

import styled from 'styled-components'
import { menuItems } from "@/utils/menuItems";
import HeaderComponent from "@/components/HeaderComponent";

const Heading = styled.h1`

text-align: center;
margin: 8rem 0;
color: #20068E;


`;

const Page = () => {
  return (
    <>
    <HeaderComponent menuItems={menuItems} />
    <Heading>Work in Progress...!</Heading>
    </>
  );
};

export default Page;
