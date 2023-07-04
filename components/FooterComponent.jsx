"use client"
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'
import footervector from '@/assets/footerVector.png'
import call from '@/assets/call.svg'
import mail from '@/assets/mail.svg'
import location from '@/assets/location.svg'
import Linkedin from '@/assets/Linkedin.svg'
import Facebook from '@/assets/Facebook.svg'

const Footer = styled.footer`
    min-height:345px;
    width:100%;
    background-color: #111111;
    position: relative;
    padding-top:32px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    @media(max-width: 950px){
        min-height:450px;
    }
`
const Container = styled.div`
    width:100%;
    height:50%;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    padding: 0 32px;
    z-index:2;

    @media(max-width: 950px){
        /* flex-direction:column;
        justify-content: center;
        align-items:center;
        gap:32px; */
        flex-wrap:wrap;
        gap:32px;
        
    }
`
const LogoContainer = styled.div`
    width:30%;
    height:100%;
    display:flex;
    gap:12px;
    

    @media(max-width: 950px){
        width:90%;
    }
`

const Logo = styled.div`
    width:70px;
    height:85px;
    position:relative;
`
const LogoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    `
const LogoTextsub = styled.div`
    font-size: 20px;
    color:#ffffff;
    padding-bottom: 1px;
`
const LogoText = styled.div`
    font-size: 30px;
    font-weight: 700;
    color:#ffffff;
    padding-bottom:4px;
`
const Description = styled.div`
    font-size:16px;
    color:#B0B0B0;
`

const FooterVector = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    min-height:199px;
    width: 100%;
    z-index:0;
`
const QuickLinks = styled.div`
    width:20%;
    height:100%;
    display:flex;
    flex-direction: column;
    gap:8px;
    @media(max-width: 950px){
        min-width:35%;
    }
`

const Heading = styled.div`
    font-size:24px;
    font-weight:500;
    color:#ffffff;
    padding-bottom:0.75rem;
    @media(max-width: 950px){
        font-size:18px;
    }
`
const Links = styled(Link)`
    text-decoration:none;
    font-size:18px;
    color:#949494;
    line-height: 1.3rem;
    width:50px;
    @media(max-width: 950px){
        font-size:16px;
    }
`

const Contact = styled.div`
    width:20%;
    height:100%;
    display:flex;
    flex-direction: column;
    gap:8px;
    @media(max-width: 950px){
        width:55%;
    }
    
`
const ContactItem = styled.div`
    display:flex;
    gap:24px;
    width:100%;
    padding-bottom:5px;
    
`
const ContactText = styled.div`
    font-size:18px;
    color:#949494;
    line-height: 1.3rem;
    @media(max-width: 950px){
        font-size:16px;
    }
`
const BottomSection= styled.div`
    display:flex;
    padding: 0 64px 24px 64px;
    justify-content:space-between;
    align-items:center;
    height:1.5rem;
    z-index:2;
    @media(max-width: 950px){
        padding: 0 16px 32px 16px;
    }

`
const SocialMedia = styled.div`
    display:flex;
    gap:16px;
`
const Copyright = styled.div`
    font-size:18px;
    color:#FFFBFB;
    @media(max-width: 950px){
        font-size:12px;
    }
`
const RandComponent = styled.div`
    font-size: 18px;
    color:#ffffff;
`




const FooterComponent = () => {
    return (
        <Footer>
            <Container>
                <LogoContainer>
                    <Logo>
                        <Image src={logo} layout="fill" objectFit="contain" alt="" />
                    </Logo>
                    <LogoTextContainer>
                        <LogoTextsub>Institute of Engineering</LogoTextsub>
                        <LogoText>Thapathali Campus</LogoText>
                        <Description> Quality education since 1930 AD.</Description>
                    </LogoTextContainer>
                </LogoContainer>

                <QuickLinks>
                    <Heading>
                        Quick Links
                    </Heading>
                    <Links href="/admission">About</Links>
                    <Links href="/about">Admission</Links>
                    <Links href="/resources">Resources</Links>
                    <Links href="/notice">Notices</Links>
                </QuickLinks>
                <Contact>
                    <Heading>Contact</Heading>
                    <ContactItem>
                        <Image src={call} width={24} height={24} alt="icon" color="#ffffff"/>
                        <ContactText>
                        +977-01-4246307
                        </ContactText>
                    </ContactItem>
                    <ContactItem>
                        <Image src={mail} width={24} height={24} alt="icon" color="#ffffff"/>
                        <ContactText>
                        info@tcioe.edu.np
                        </ContactText>
                    </ContactItem>
                    <ContactItem>
                        <Image src={location} width={24} height={24} alt="icon" color="#ffffff"/>
                        <ContactText>
                        Thapathali, Nepal
                        </ContactText>
                    </ContactItem>

                </Contact>
            </Container>
            <BottomSection>
                <SocialMedia>
                    <Link href="">
                    <Image src={Linkedin} width={30} height={30} alt="icon" color="#ffffff"/>
                    </Link>
                    <Link href="">
                    <Image src={Facebook} width={30} height={30} alt="icon" color="#ffffff"/>
                    </Link>

                </SocialMedia>
                <Copyright>Copyright © 2023 Thapathali campus </Copyright>
                <RandComponent>^_^</RandComponent>

            </BottomSection>

            <FooterVector>
                <Image src={footervector} layout="fill" objectFit="cover" alt="" />
            </FooterVector>
        </Footer>
    )
}

export default FooterComponent