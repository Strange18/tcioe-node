"use client";
import Link from "next/link";
import {React, useState} from "react";
import styled from "styled-components";
import logo from "@/assets/logo.svg";
import Image from "next/legacy/image";
import NavBar from "./NavBar";
import SearchNotice from "./SearchNotice";

const Header = styled("header")`
  width: 100%;
  padding: 0 64px;
  display: flex;
  gap: 2rem;
  // justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 100;
  box-shadow: 0 2px 2px rgba(0,0,0,0.15);
  position: sticky;
  top: 0;
  @media (max-width: 920px) {
    padding: 0 32px;
  }
`;

const Flexbox = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

const Logo = styled.div`
  width: 70px;
  height: 85px;
  position: relative;
  }
`;
const MiniSubtitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #4b4a4a;
`;
const Subtitle = styled("h2")`
  font-size: 16px;
  font-weight: 400;
  color: #090d4c;
`;

const Title = styled("h1")`
  font-size: 16px;
  font-weight: 700;
  color: #090d4c;
  @media (max-width: 760px) {
    font-weight: 500;
  }
`;

const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

const HeaderComponent = ({ menuItems }) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
    document.body.style.overflow = event.target.checked ? 'hidden' : 'auto';
  };
  return (
    <Header className="header-container">
      <Link href="/" style={{ textDecoration: "none" }}>
        <Flexbox>
          <Logo>
            <Image src={logo} layout="fill" objectFit="contain" alt="" />
          </Logo>
          <TextContainer>
            <MiniSubtitle>Tribhuvan University</MiniSubtitle>
            <Subtitle>Institute of Engineering</Subtitle>
            <Title>Thapathali Campus</Title>
          </TextContainer>
        </Flexbox>
      </Link>

      <input type="checkbox" name="" id="check"  checked={isCheckboxChecked}
          onChange={handleCheckboxChange} / >

      <div className="hamburger-menu-container">
        <div className="hamburger-menu">
          <div></div>
        </div>
      </div>

      <div className="header-right-container">
        <NavBar menuItems={menuItems} />

        <SearchNotice />
      </div>
    </Header>
  );
};

export default HeaderComponent;