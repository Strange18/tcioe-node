"use client"
import styled from 'styled-components'
import Image from 'next/legacy/image'

import vector from "@/assets/herovector.png";

const Hero = styled.div`
    position: relative;
    width: 100%;
`

const HeroVideoContainer = styled.div`
position: relative;
  width: 100%;
`
const HeroVideo = styled(Image)`
height: auto;
`

const HeroVector = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height:111px;
    width: 100%;

    @media (max-width: 1200px) {
        height: 15%;
        width: 100%;
      }
`

const HeroComponent = ({img}) => {
    return (
        <Hero>
            <HeroVideoContainer>
                <HeroVideo src={img}alt="" />
            </HeroVideoContainer>
            <HeroVector >
                <Image src={vector} layout="fill" alt="" />
            </HeroVector>

        </Hero>
    )
}

export default HeroComponent