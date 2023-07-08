"use client"
import styled from 'styled-components'
import Image from "next/legacy/image"

const Container = styled.div`
    width: 100%;
    min-height: 525px;
    display: flex;
    gap: 32px;
    padding: 12px 64px 12px 64px;

    @media (max-width: 950px) {
        flex-direction: column;
        padding: 12px 32px 12px 32px;
    }

`
const RightContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 75px 0 0px 0;
`
const Heading = styled.div`
    font-size: 24px;
    font-weight: 700;
    color:#090C4C;
    text-align: center;

`
export const BodyText = styled.div`
    font-size: 18px;
    color: #8A8A8A;
    line-height: 2rem;
    text-align: justify;
`
const LeftContainer = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 75px;
    
    @media (max-width: 950px) {
        display: none;
    }
`

const AboutComponent = ({heading, body_text, img}) => {
    return (
        <>
            <Container>
                <LeftContainer>   
                    <Image src={img} layout="fill" objectFit="contain" alt={heading} />
                </LeftContainer>
                <RightContainer>
                    <Heading>{heading}</Heading>
                    <BodyText>
                        {body_text}
                    </BodyText>
                </RightContainer>
            </Container>
        </>
    )
}

export default AboutComponent