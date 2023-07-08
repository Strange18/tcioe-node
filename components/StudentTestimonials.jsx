"use client"
import React from 'react'
import styled from 'styled-components'
import Image from "next/legacy/image"
import StudentTestimonialCard from './StudentTestimonialCard'
import usePosition from '../utils/usePosition'
import Bikrant from '../public/bikrant.jpg'
import Khemraj from '../public/khemraj.jpg'
import Shubham from '../public/shubham.jpg'
import Prashant from '../public/prashant.jpg'
import vectortest from '../assets/testimonialVector.png'
import quote from '../assets/quotevector.png'


const Container = styled.section`
    position: relative;
    width: 100%;
    min-height: 50vh;
    background-color: #fffff;
    padding: 5rem 0rem;
    margin-top: 250px;
    display:flex;
    flex-direction:column;

`
const Wrapper= styled.div`
    display:flex;
    flex-direction:column;
    background-color:#7177FF;
    position:relative;
`

const H1 = styled.h1`
    font-size: 26px;
    color: #fff;
    text-align: center;
    margin: 24px 0;
`



const IconContainer = styled('div')`
    height:135px;
    width:185px;
    z-index:10;
    position:absolute;
    right:20px;
    top:0px;

    @media (max-width: 950px) {
        height:20px;
        width:50px;
    }
`
const Icon = styled.div`
    position:relative;
    height:100%;
    width:100%;
`

const CurveContainer = styled('div')`
    width: 100%;
    height:130px;
    position: absolute;
    top:-49px;
    right:0px;
    // overflow-y: hidden;

    @media (max-width: 950px) {
        height:100px;
        top:-18px;
    right:0px;
    }

`

const Curve =styled.div`
    width: 100%;
    height:100%;
    posistion:relative;
`

export const CarouserContainer = styled('div')`
  position: relative;
  overflow: hidden;
  margin-bottom:32px;
  height:400px;

  @media(max-width:950px){
    height:600px;
    width:100%;
  }
`

export const CarouserContainerInner = styled('div')`
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    & > * {
        scroll-snap-align: center;
        margin-left: 3rem;
    }
`

export const ArrowLeft = ({size = 30, color = '#000000'}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H6M12 5l-7 7 7 7" />
    </svg>
  )
  
export const ArrowRight = ({size = 30, color = '#000000'}) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
>
    <path d="M5 12h13M12 5l7 7-7 7" />
</svg>
)


export const CarouselButton = styled('button')`
  position: absolute;
  cursor: pointer;
  top: 50%;
  z-index: 1;
  transition: transform 0.1s ease-in-out;
  background: white;
  border-radius: 15px;
  border: none;
  padding: 0.5rem;
`

export const LeftCarouselButton = styled(CarouselButton)`
  left: 0;
  transform: translate(-100%, -50%);

  ${CarouserContainer}:hover & {
    transform: translate(0%, -50%);
  }
  
  visibility: ${({hasitemsonleft}) => (hasitemsonleft ? `all` : `hidden`)};
`

export const RightCarouselButton = styled(CarouselButton)`
  right: 0;
  transform: translate(100%, -50%);

  ${CarouserContainer}:hover & {
    transform: translate(0%, -50%);
  }

  visibility: ${({hasitemsonright}) => (hasitemsonright ? `all` : `hidden`)};
`

const StudentTestimonials = () => {
    const ref = React.useRef()
    const {
        hasitemsonleft,
        hasitemsonright,
        scrollLeft,
        scrollRight
    } = usePosition(ref)

    const testimonial_api = [
        {
            id: 1,
            name: 'Bikrant Bidari',
            content: 'Enrolling at Thapathali Campus, the best Engineering College in Nepal, was a game-changer for me. The top-notch education and resources provided paved the way for my success in the engineering field. I am forever grateful for the exceptional exposure I received, which broadened my horizons and opened doors to incredible opportunities.',
            student_id: 'BCT, 076',
            student_profile: Bikrant
        },
        {
            id: 2,
            name: 'Khemraj Shrestha',
            content: 'Attending Thapathali Campus was a dream come true. The outstanding faculty, well-equipped labs, and stimulating learning environment propelled my growth and nurtured my passion for engineering. I can confidently say that my experience at this esteemed institution has shaped me into a competent professional, ready to tackle any challenge in the real world.',
            student_id: 'BCT, 077',
            student_profile: Khemraj
        },
        {
            id: 3,
            name: 'Shubham Regmi',
            content: 'Thapathali Campus holds a special place in my heart. The dedication and expertise of the professors, coupled with state-of-the-art facilities, made my learning journey truly remarkable. The practical knowledge I gained, combined with the guidance I received, has given me the confidence to excel in the engineering industry. I owe my success to this exceptional institution.',
            student_id: 'B.Arch, 076',
            student_profile: Shubham
        },
        {
            id: 4,
            name: 'Prashant Raj Bista',
            content: 'Studying at Thapathali Campus was an enriching and transformative experience. The engaging learning environment, coupled with a strong emphasis on research and innovation, nurtured my intellectual curiosity and instilled in me a lifelong love for engineering. The exposure to cutting-edge technologies and industry connections provided by the college broadened my perspective and opened doors to exciting career opportunities. I owe my success to Thapathali Campus and its exceptional faculty.',
            student_id: 'BCE, 077',
            student_profile: Prashant
        }

    ]
  return (
    <Container>
        <CurveContainer>
            <Curve>

            <Image src={vectortest} layout="fill" objectFit="cover" alt="Campus Chief" />
            </Curve>
        </CurveContainer>
        <Wrapper>
        <IconContainer>
            <Icon>
                < Image src={quote} layout="fill" objectFit="contain" alt="Campus Chief" />
            </Icon>
        </IconContainer>
        <H1>Student Testimonials</H1>
        <CarouserContainer>
            <CarouserContainerInner ref={ref}>
                { testimonial_api.map((testimonial) => (
                    <StudentTestimonialCard key={testimonial.id} testimonial={testimonial} />)
                )}
            </CarouserContainerInner>
            <LeftCarouselButton hasitemsonleft={hasitemsonleft} onClick={scrollLeft}>
                <ArrowLeft />
            </LeftCarouselButton>

            <RightCarouselButton hasitemsonright={hasitemsonright} onClick={scrollRight}>
                <ArrowRight />
            </RightCarouselButton>
        </CarouserContainer>
        </Wrapper>
    </Container>
  )
}

export default StudentTestimonials