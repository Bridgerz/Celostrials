import { VStack, Heading, HStack } from "@chakra-ui/layout";
import {
  Center,
  Image,
  Button,
  useBreakpointValue,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";

import { useRef } from "react";

import basicImage from "../../../assets/preview.gif";

import logoImage from "../../../assets/Celostrials_Logo.png";
import ufo from "../../../assets/ufo.svg";
import { useDisclosure } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import colors, { gradients } from "../../../theme/foundations/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Partnerships from "../../../components/Partnerships";
import Mint from "../../../components/Mint";
import About from "../../../components/About";
import Roadmap from "../../../components/Roadmap";
import Countdown from "react-countdown";
import FAQ from "../../../components/FAQ";

const HomePage = () => {
  const device = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isMobile = device === "mobile";
  const { isOpen, onOpen, onClose } = useDisclosure();

  const myRef = useRef<null | HTMLDivElement>(null);
  const executeScroll = () => {
    onOpen();
  };

  return (
    <>
      <Center mt="5em" zIndex={10}>
        <VStack w="100%" h="100%">
          <VStack zIndex={1} w="100%" h="100%">
            <Center>
              <Image w="30em" maxW="90%" src={logoImage} />
            </Center>
            <HStack mb="3em !important">
              <Countdown
                renderer={countDown}
                date={Date.parse("15 Feb 2022 14:00:00 GMT")}
              />
            </HStack>
            {/* <VStack className="preview" mb="5em">
              <VStack className="homeCardContainer">
                <Image className="homeCard" src={basicImage} />
              </VStack>
              <Button
                size="lg"
                onClick={executeScroll}
                background={gradients.primary}
                justifyContent="space-between"
                rightIcon={<Image className="ufo" width="2em" src={ufo} />}
              >
                Mint
              </Button>
            </VStack> */}
            <VStack mb="10em !important">
              <VStack>
                <Mint myRef={myRef} />
              </VStack>
            </VStack>
            <Partnerships />
            <About />
            <Roadmap />
            <FAQ />
          </VStack>
          {isMobile && <Socials color={"white"} margin="1em !important" />}
        </VStack>
      </Center>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading>Coming Soon!</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Follow our socials to get updates on the upcoming launch!
          </ModalBody>
          <ModalFooter>
            <Socials color={"black"} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const Socials = ({ ...props }) => {
  return (
    <HStack {...props}>
      <Wrap justifyContent="space-between">
        <WrapItem>
          <IconButton
            variant="ghost"
            as={"a"}
            href={"https://discord.gg/qgCWPrkWaW"}
            target={"_blank"}
            aria-label="Telegram"
            size="lg"
            icon={<FontAwesomeIcon icon={faDiscord} />}
          />
        </WrapItem>
        <WrapItem>
          <IconButton
            variant="ghost"
            as={"a"}
            href={"https://www.instagram.com/celostrials/"}
            target={"_blank"}
            aria-label="Discord"
            size="lg"
            icon={<FontAwesomeIcon icon={faInstagram} />}
          />
        </WrapItem>
        <WrapItem>
          <IconButton
            variant="ghost"
            as={"a"}
            href={"https://twitter.com/celostrials"}
            target={"_blank"}
            aria-label="Twitter"
            size="lg"
            icon={<FontAwesomeIcon icon={faTwitter} />}
          />
        </WrapItem>
      </Wrap>
    </HStack>
  );
};

const countDown = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (
      <Heading color="white" size="xl">
        Minting is live!
      </Heading>
    );
  } else {
    // Render a countdown
    return (
      <VStack mt="2em">
        <HStack spacing="1.5em">
          <VStack>
            <Heading className="countdown-gradient" size="2xl">
              {days}
            </Heading>
            <Text mt="0 !important" color="white">
              days
            </Text>
          </VStack>
          <VStack>
            <Heading className="countdown-gradient" size="2xl">
              {hours}
            </Heading>
            <Text mt="0 !important" color="white">
              hours
            </Text>
          </VStack>
          <VStack>
            <Heading className="countdown-gradient" size="2xl">
              {minutes}
            </Heading>
            <Text mt="0 !important" color="white">
              minutes
            </Text>
          </VStack>
          <VStack w="4em">
            <Heading className="countdown-gradient" size="2xl">
              {seconds}
            </Heading>
            <Text mt="0 !important" color="white">
              seconds
            </Text>
          </VStack>
        </HStack>
      </VStack>
    );
  }
};

export default HomePage;
