"use client"
import React from 'react'
import styled from 'styled-components'
import StudentTestimonialCard from './StudentTestimonialCard'
import usePosition from '../utils/usePosition'
import Bikrant from '../public/bikrant.jpg'
import Khemraj from '../public/khemraj.jpg'
import Shubham from '../public/shubham.jpg'
import Prashant from '../public/prashant.jpg'


const Container = styled.section`
    position: relative;

    width: 100%;
    height: 100%;
    background-color: #7177FF;
    padding: 5rem 0rem;
    margin-top: 276px;

`

const H1 = styled.h1`
    font-size: 26px;
    color: #fff;
    text-align: center;
    margin: 24px 0;
`

const Quote = ({ width = 185, height = 136}) => (
    <svg width={width} height={height} viewBox="0 0 185 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M115.625 125.135C115.625 131.412 120.749 136.596 126.944 135.586C159.766 130.235 185 102.03 185 68.3126L185 19.1253C185 8.63187 176.493 0.125275 166 0.125275H134.625C124.132 0.125275 115.625 8.63186 115.625 19.1253V49.3126C115.625 59.806 124.132 68.3126 134.625 68.3126H142.875C153.368 68.3126 162.245 77.1872 157.95 86.7617C152.26 99.4479 140.857 109.035 126.886 112.431C120.787 113.914 115.625 118.859 115.625 125.135ZM0 125.135C0 131.412 5.12427 136.596 11.319 135.586C44.1414 130.235 69.375 102.03 69.375 68.3126V19.1253C69.375 8.63187 60.8684 0.125275 50.375 0.125275H19C8.50659 0.125275 0 8.63186 0 19.1253L0 49.3126C0 59.806 8.50659 68.3126 19 68.3126H27.25C37.7434 68.3126 46.6195 77.1872 42.3252 86.7617C36.6352 99.4479 25.2319 109.035 11.2605 112.431C5.16168 113.914 0 118.859 0 125.135Z" fill="#C6C9FF"/>
    </svg>
)

const Curve = ({ width = 1200, height = 136}) => (
    <svg width={width} height={height} viewBox="0 0 1439 132" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1053.6 64.3214C984.048 77.0975 916.703 99.9972 847.343 113.886C748.544 133.684 645.655 134.88 547.012 114.348C451.15 94.444 351.752 45.8974 257.029 21.2334C173.028 -0.648045 81.3155 -9.65876 0 17.6812V131.15L1439 131.15V98.7658C1316.13 52.7601 1182.84 40.848 1053.6 64.3214Z" fill="#7177FF"/>
    </svg>
)

const IconContainer = styled('div')`
    position: absolute;
    right: 2rem;
    top: 0;
`

const CurveContainer = styled('div')`
    position: absolute;
    width: 100%;
    height:135px;
    bottom: 100%;
    left: 0;
    overflow-y: hidden;

    &>svg {
        position: relative;
        display: block;
        width: 100%;
        height: 140px;
    }
`

export const CarouserContainer = styled('div')`
  position: relative;
  overflow: hidden;
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
  
  visibility: ${({hasItemsOnLeft}) => (hasItemsOnLeft ? `all` : `hidden`)};
`

export const RightCarouselButton = styled(CarouselButton)`
  right: 0;
  transform: translate(100%, -50%);

  ${CarouserContainer}:hover & {
    transform: translate(0%, -50%);
  }

  visibility: ${({hasItemsOnRight}) => (hasItemsOnRight ? `all` : `hidden`)};
`

const StudentTestimonials = () => {
    const ref = React.useRef()
    const {
        hasItemsOnLeft,
        hasItemsOnRight,
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
            student_id: 'BCT, 077',
            student_profile: Prashant
        }

    ]
  return (
    <Container>
        <CurveContainer>
            <Curve />
        </CurveContainer>
        <IconContainer>
            <Quote />
        </IconContainer>
        <H1>Student Testimonials</H1>
        <CarouserContainer>
            <CarouserContainerInner ref={ref}>
                { testimonial_api.map((testimonial) => (
                    <StudentTestimonialCard key={testimonial.id} testimonial={testimonial} />)
                )}
            </CarouserContainerInner>
            <LeftCarouselButton hasItemsOnLeft={hasItemsOnLeft} onClick={scrollLeft}>
                <ArrowLeft />
            </LeftCarouselButton>

            <RightCarouselButton hasItemsOnRight={hasItemsOnRight} onClick={scrollRight}>
                <ArrowRight />
            </RightCarouselButton>
        </CarouserContainer>
    </Container>
  )
}

export default StudentTestimonials