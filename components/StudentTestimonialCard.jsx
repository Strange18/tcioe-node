"use client"
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Container = styled('div')`
    min-height: 200px;
    min-width: 600px;
    background-color: #fff;
    padding: 3rem;
    border: 5px solid #DBDEE7;
    border-radius: 16px;
    box-shadow: 5px 8px 10px 0px rgba(0,0,0,0.25);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const Content = styled('p')`
    font-size: 1rem;
`

const CardContainer = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
`

const StudentProfile = styled('div')`
    position: relative;
    height: 74px;
    width: 74px;

    &>* {
        border-radius: 100%;
    }
`

const StudentName = styled('h1')`
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: center;
`

const StudentId = styled('h2')`
    font-weight: 400;
    font-size: 0.8rem;
    text-align: center;
`

const StudentTestimonialCard = ({ testimonial }) => {
  return (
    <Container>
        <Content>"{ testimonial.content }"</Content>
        <CardContainer>
            <StudentProfile>
                <Image src={ testimonial.student_profile } layout="fill" objectFit="cover" alt="Campus Chief" styles={{borderRadius: "100%"}}/>
            </StudentProfile>
            <StudentName>{ testimonial.name }</StudentName>
            <StudentId>{ testimonial.student_id }</StudentId>
        </CardContainer>
    </Container>
  )
}

export default StudentTestimonialCard