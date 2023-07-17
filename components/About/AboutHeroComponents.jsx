import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/legacy/image";
const Container = tw.div`
  relative
`;
const UpperWrapper = tw.div`
  flex flex-col
  gap-3
  bg-gradient-to-b from-[#012454] to-blue-900
  z-2
  px-[64px]
  py-[64px]
  text-[#f8f8f8]
`;
const LowerWrapper = tw.div`
  px-[64px]
  py-[64px]
  text-[#484848]
`;
const ImgWrapper = tw.div`
    rounded-[10px] absolute right-[64px] top-[25%] xl:static xl:h-[100%] xl:flex xl:justify-center xl:pt-[64px] 
    xl:w-full
    md:px-[64px]
`;

const Line = tw.div`
  h-[7px]
  w-[100px]
  bg-[#f97a01]
`;
const Text = tw.p`
  w-[60%]
  text-justify
  text-lg
  xl:w-[100%]
  xl:text-lg
  md:text-sm
`;
const AboutHeroComponents = (props) => {
  return (
    <Container>
      <UpperWrapper>
        <Line />
        <Text>{props.text1}</Text>
      </UpperWrapper>
      <ImgWrapper>
        <Image
          src={props.img}
          alt="picture of thapathali campus"
          className="object-cover rounded-lg"
          width={400}
          height={500}
        />
      </ImgWrapper>
      <LowerWrapper>
        <Text>{props.text2}</Text>
      </LowerWrapper>
    </Container>
  );
};

export default AboutHeroComponents;
