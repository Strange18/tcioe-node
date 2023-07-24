"use client"
import React from 'react'
import styled from 'styled-components'
import Image from 'next/legacy/image'

const Container = styled.div`
    max-height: 400px;
    min-width: 580px;
    background-color: #fff;
    padding: 3rem;
    border: 5px solid #DBDEE7;
    border-radius: 16px;
    box-shadow: 5px 8px 10px 0px rgba(0,0,0,0.25);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin: 0 1.5rem;

    @media(max-width:950px){
        min-height:500px;
        min-width:350px;
        padding: 1px;
        // color:red;
      }
`

const Content = styled('p')`
    font-size: 1rem;
    width:90%;
    text-align:justify;
    @media(max-width:950px){
        size:0.5rem;
        width:90%;
      }
    
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
    @media(max-width:950px){
        // display:none;
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