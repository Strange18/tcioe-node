"use client"

import styled from 'styled-components'

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

const Scholarship = () => {
    return (
        <>
            <Container>
                <RightContainer>
                    <Heading>Scholarships systems</Heading>
                    <BodyText>
                        <ol>
                            <li>
                                For each program, 25% of regular students are provided scholarships as per the rules of Tribhuvan University (TU).
                            </li>
                            <li>
                                The 20% of regular students are given free ship for the semester fee.
                            </li>
                            <li>
                                One who has one scholarship or free ship is not provided the next type of scholarships and free ships.
                            </li>
                            <li>
                                The student who fails in any semester exam is not allowed any free ships and scholarships.
                            </li>
                        </ol>
                    </BodyText>
                </RightContainer>
            </Container>
        </>
    )
}

export default Scholarship
