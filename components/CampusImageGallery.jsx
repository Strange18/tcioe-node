"use client"
import React from 'react'
import { BodyText } from './AboutThapathaliComponent'
import styled from 'styled-components'
import CampusImageIndividual from './CampusImageIndividual'
import One from '../public/1.jpg'
import Two from '../public/2.jpg'
import Three from '../public/3.jpg'
import Four from '../public/4.jpg'
import Five from '../public/5.jpg'
import Six from '../public/6.png'
import Seven from '../public/7.png'
import Eight from '../public/8.png'
import Nine from '../public/9.jpg'

const HeadingText = styled('h1')`
    font-size: 26px;
    color: #090C4C;
    text-align: center;
`

const SubHeading = styled(HeadingText)`
    font-weight: 400;
    margin-top: 144px;
`

const Heading = styled(HeadingText)`
    font-weight: 700;
`

const SubText = styled(BodyText)`
    text-align: center;
    width: 60%;
    margin: 26px auto;
`

const Container = styled('div')`
    width: 90vw;
    margin: 26px auto;
`

const GridWrapper = styled('div')`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 200px;

    &>div:nth-child(3) {
        grid-row: span 2 / auto;
    }

    &>div:nth-child(5) {
        grid-column: span 2 / auto;
    }

    &>div:nth-child(6) {
        grid-row: span 2 / auto;
    }
`

const CampusImageGallery = () => {
    const images_api = [
        {
            id: 1,
            image_src: One,
            image_context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 3,
            image_src: Three,
            image_context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 4,
            image_src: Four,
            image_context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 5,
            image_src: Five,
            image_context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 6,
            image_src: Six,
            image_context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 7,
            image_src: Seven,
            image_context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 2,
            image_src: Two,
            image_context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 8,
            image_src: Eight,
            image_context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 9,
            image_src: Nine,
            image_context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ]
  return (
  <>
    <SubHeading>The Thapathali</SubHeading>
    <Heading>Experience</Heading>
    <SubText>A college experience transcending beyond just classrooms and lectures. Come and live the Thapathali Experience!</SubText>
    <Container>
        <GridWrapper>
            {images_api.map((image) => (
                <CampusImageIndividual key={image.id} content={image} />)
            )}
        </GridWrapper>
    </Container>
  </>
  )
}

export default CampusImageGallery