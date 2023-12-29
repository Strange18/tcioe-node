import tw from "tailwind-styled-components";
import Image from "next/image";

export const Wrapper = tw.div`
bg-[#f8f8f8]
flex
flex-1
p-[64px]
md:p-[32px]
gap-14
lg:flex-col
`;
const Line = tw.div`
  h-[5px]
  bg-[#f97a01]
`;
export const Container = tw.div`
  w-[30%]
  lg:w-full
  flex
  flex-col
  gap-8
`;
export const Heading = tw.div`
uppercase
text-[#090d4c]
font-bold
`;
export const Title = tw.div`
uppercase
text-[#090d4c]
font-bold
text-2xl
lg:text-xl
sm:lg
`;
export const Description = tw.div`
  text-[#8a8a8a]
`;

const MVVContainer = ({ heading, title, description }) => {
  return (
    <Container>
      <div className="flex flex-col gap-2 w-fit">
        <Heading>{heading}</Heading>
        <Line />
      </div>

      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

const MissionsComponent = ({ mission, vision, values }) => {
  return (
    <>
      <Wrapper>
        <MVVContainer
          heading={mission.heading}
          title={mission.title}
          description={mission.description}
        />
        <MVVContainer
          heading={vision.heading}
          title={vision.title}
          description={vision.description}
        />
        <MVVContainer
          heading={values.heading}
          title={values.title}
          description={values.description}
        />
      </Wrapper>
    </>
  );
};

export default MissionsComponent;
