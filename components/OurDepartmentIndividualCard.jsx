"use client"
import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
    width: 100%;
    min-height: 250px;
    border: 1px solid #fff;
    padding: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &:hover {
        box-shadow: 0px -131px 57px 14px rgba(114,119,255,0.46) inset; 
        cursor: pointer;
    }
`

const Heading = styled('h1')`
    font-size: 24px;
    font-weight: 700;
    color: #fff;

    max-width: 40%;
    text-align: center;

    ${Container}:hover & {
        max-width: 100%;
    }
`

const Subtext = styled('p')`
    display: none;
    color: #fff;

    ${Container}:hover & {
        display: block;
    }
`

const OurDepartmentIndividualCard = ({ content }) => {
  return (
    <Container>
        <Heading>{ content.title }</Heading>
        <Subtext>{ content.subtitle }</Subtext>
        {/* read more section and buttons ? */}
    </Container>
  )
}

export default OurDepartmentIndividualCard