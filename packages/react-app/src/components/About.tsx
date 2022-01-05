import {
  VStack,
  Text,
  Heading,
  Image,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import basicImage from "../assets/no_background.png";

const About = () => {
  const device = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isMobile = device === "mobile";

  return !isMobile ? (
    <VStack
      p="2em"
      backgroundColor="#ffffff1f"
      w="100%"
      pt="1em"
      mb="5em !important"
    >
      <HStack textAlign="initial" mt="1em">
        <Image
          w="50%"
          maxW="18em"
          src={basicImage}
          mr="-19em"
          mb="2.5em"
          zIndex="1"
        />

        <VStack
          maxWidth="66em"
          border="2px solid white"
          padding="2em"
          paddingLeft="20em"
        >
          <Heading alignSelf="start" color="white" size="xl">
            What are Celostrials?
          </Heading>
          <Text fontSize="m" color="white">
            Celostrials are an intergalactic collection of unique beings, found
            exclusively on the Celo Blockchain. Their features are
            algorithmically generated resulting in a interstellar collectible
            completely unique to you! Minting will be available soon.
            <br />
            <br />
            There will only ever be 10,000 Celostrials in our solar system, so
            pay close attention for our launch announcement!
            <br />
            <br />
            Follow our socials in order to stay up to date on the latest launch
            updates, future giveaways and sneak previews of the collection! 🛸{" "}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  ) : (
    <VStack p="2em" backgroundColor="#ffffff1f" w="100%" pt="1em">
      <VStack maxW="50em" textAlign="center">
        <VStack>
          <Heading alignSelf="start" color="white" size="xl">
            What are Celostrials?
          </Heading>

          <Text marginTop="2em !important" fontSize="m" color="white">
            Celostrials are an intergalactic collection of unique beings, found
            exclusively on the Celo Blockchain. Their features are
            algorithmically generated resulting in a interstellar collectible
            completely unique to you! Minting will be available soon.
            <br />
            <br />
            There will only ever be 10,000 Celostrials in our solar system, so
            pay close attention for our launch announcement!
            <br />
            <br />
            Follow our socials in order to stay up to date on the latest launch
            updates, future giveaways and sneak previews of the collection! 🛸{" "}
          </Text>
          <Image w="100%" src={basicImage} mb="-2em !important" />
        </VStack>
      </VStack>
    </VStack>
  );
};
export default About;
