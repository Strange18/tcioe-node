import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/legacy/image";
const HistoryContainer = tw.div`
  flex
  lg:flex-col
  flex-row
  gap-10
  justify-center
  items-center
  p-[64px]
`;

const PhotoSection = tw.div`
  flex
  flex-col
  justify-center
  items-center
  gap-8
`;

const ImageContainer = tw.div`
  h-[75%]
  w-[75%]
  rounded-lg
  overflow-hidden
  bg-[#f97a01]
`;

const Caption = tw.p`
  text-center
`;

const Photo = ({ src, alt, caption }) => (
  <PhotoSection>
    <ImageContainer>
      <Image src={src} alt={alt} />
    </ImageContainer>
    <Caption>{caption}</Caption>
  </PhotoSection>
);

const HistoryComponent = ({ photo1, photo2 }) => {
  return (
    <HistoryContainer>
      <Photo src={photo1.src} alt={photo1.alt} caption={photo1.caption} />
      <Photo src={photo2.src} alt={photo2.alt} caption={photo2.caption} />
    </HistoryContainer>
  );
};

export default HistoryComponent;
