import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const FAQ = () => {
  const device = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isMobile = device === "mobile";

  return (
    <VStack
      mb={isMobile ? "0em" : "10em !important"}
      w="100%"
      id="partnerships"
      pt="4em"
    >
      <Heading color="white" size="xl">
        Frequently Asked Questions
      </Heading>
      <VStack w="100%" maxW="75em" padding="2em">
        <Accordion allowToggle w="100%">
          <AccordionItem>
            <AccordionButton justifyContent="space-between">
              <Text
                fontSize="lg"
                color="white"
                fontWeight="bold"
                textAlign={"left"}
              >
                What are celostrials?
              </Text>
              <AccordionIcon color="white" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white" textAlign={"left"}>
                Celostrials are an intergalactic collection of unique beings,
                found exclusively on the Celo Blockchain. They are
                algorithmically generated at random. Very soon you can mint your
                very own interstellar explorer and join our galactic empire at
                Celostrials.com.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton justifyContent="space-between">
              <Text
                fontSize="lg"
                color="white"
                fontWeight="bold"
                textAlign={"left"}
              >
                How can i mint a celostrial?
              </Text>
              <AccordionIcon color="white" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white" textAlign={"left"}>
                Celostrials can be minted through our website at launch. There
                will only be 10,000 Celostrials in the solar system for minting
                so make sure to make first contact. If you are late you will
                have to purchase the Celostrial from the secondary marketplace.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton justifyContent="space-between">
              <Text
                fontSize="lg"
                color="white"
                fontWeight="bold"
                textAlign={"left"}
              >
                What is the minting price?
              </Text>
              <AccordionIcon color="white" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white" textAlign={"left"}>
                You can acquire a Celostrial for only 3 Celo if you mint them at
                launch. The price will vary in the secondary market.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton justifyContent="space-between">
              <Text
                fontSize="lg"
                color="white"
                fontWeight="bold"
                textAlign={"left"}
              >
                When is launch?
              </Text>
              <AccordionIcon color="white" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white" textAlign={"left"}>
                February 15th
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton justifyContent="space-between">
              <Text
                fontSize="lg"
                color="white"
                fontWeight="bold"
                textAlign={"left"}
              >
                Which wallet is supported for minting celostrials?
              </Text>
              <AccordionIcon color="white" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white" textAlign={"left"}>
                We currently only support Metamask for minting at launch, you
                can transfer your nfET to any wallet of your choice after you've
                minted.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton justifyContent="space-between">
              <Text
                fontSize="lg"
                color="white"
                fontWeight="bold"
                textAlign={"left"}
              >
                How many celostrials are reserved?
              </Text>
              <AccordionIcon color="white" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="white" textAlign={"left"}>
                We have reserved 200 Celostrials for community building, events,
                and giveaways.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </VStack>
  );
};
export default FAQ;
