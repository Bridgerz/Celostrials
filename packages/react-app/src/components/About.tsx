import {
  VStack,
  Text,
  Heading,
  Image,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import basicImage from "../assets/basic.jpg";

const About = () => {
  const device = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isMobile = device === "mobile";

  return !isMobile ? (
    <VStack
      p="2em"
      backgroundColor="#ffffff1f"
      w="100%"
      pt="1em"
      mb="15em !important"
    >
      <HStack maxW="50em" textAlign="initial" mt="1em">
        <Image w="50%" maxW="9em" src={basicImage} mr="1em" />

        <VStack>
          <Heading alignSelf="start" color="white" size="xl">
            What are Celostrials?
          </Heading>
          <Text fontSize="m" color="white">
            Celostrials are an intergalactic collection of unique beings, found
            exclusively on the Celo Blockchain. They are algorithmically
            generated at random. Very soon you will be able to mint your own
            interstellar explorer. There will only ever be 10,000 Celostrials in
            the entire galaxy, so be sure to grab yours at launch. Follow our
            socials to stay up to date on launch updates and get sneak previews
            of the collection!
          </Text>
        </VStack>
      </HStack>
    </VStack>
  ) : (
    <VStack p="2em" backgroundColor="#ffffff1f" w="100%" pt="1em">
      <VStack maxW="50em" textAlign="initial">
        <VStack>
          <Heading alignSelf="start" color="white" size="xl">
            What are Celostrials?
          </Heading>
          <Image w="100%" src={basicImage} />
          <Text fontSize="m" color="white">
            Celostrials are an intergalactic collection of unique beings, found
            exclusively on the Celo Blockchain. They are algorithmically
            generated at random. Very soon you will be able to mint your very
            own interstellar explorer. There will only ever be 10,000
            Celostrials in any solar system, so be sure to grab yours at launch.
            Be sure to follow our socials to stay up to date on launch updates
            and sneak previews of the collection!
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};
export default About;
