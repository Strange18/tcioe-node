"use client"
import styled from 'styled-components'
import Image from 'next/image'

import vector from "@/assets/herovector.png";

const Hero = styled.div`
    position: relative;
    /* top:80px; */
    width: 100%;
    height: calc(100vh - 80px);
    /* border: 1px solid #000000; */
`

const HeroVideoContainer = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 81px 65px -19px rgba(255,255,255,1) inset;
-webkit-box-shadow: 0px 81px 65px -10px rgba(255,255,255,1) inset;
-moz-box-shadow: 0px 81px 65px -19px rgba(255,255,255,1) inset;

`
const HeroVideo = styled(Image)`
    z-index: -1;
`

const HeroVector = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height:111px;
    width: 100%;
`

const HeroComponent = ({img}) => {
    return (
        <Hero>
            <HeroVideoContainer>
                <HeroVideo src={img} layout="fill" objectFit="cover" alt="" />
            </HeroVideoContainer>
            <HeroVector >
                <Image src={vector} layout="fill" objectFit="cover" alt="" />
            </HeroVector>

        </Hero>
    )
}

export default HeroComponent