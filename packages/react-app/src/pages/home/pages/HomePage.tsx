import { VStack, Heading, HStack, Link } from "@chakra-ui/layout";
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

import { useEffect, useRef, useState } from "react";

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
import { useCelostrialsContract } from "../../../services/web3/contracts/celostrials";
import { useContractKit } from "@celo-tools/use-contractkit";

const HomePage = () => {
  const device = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isMobile = device === "mobile";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isWhiteListed, onlyWhitelist, isPaused } = useCelostrialsContract();
  const { connect, initialised, address } = useContractKit();

  const myRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <Center mt="5em" zIndex={10}>
        <VStack w="100%" h="100%">
          <VStack zIndex={1} w="100%" h="100%" mt="1em">
            <Center>
              <Image w="30em" maxW="90%" src={logoImage} />
            </Center>
            <HStack mb="3em !important">
              <Countdown
                renderer={countDown}
                date={Date.parse("15 Feb 2022 13:00:00 GMT")}
              />
            </HStack>

            <VStack>
              <Mint myRef={myRef} />
            </VStack>

            <VStack
              width={"100%"}
              background={gradients.primaryTransparent}
              padding="1em"
              mt="5em !important"
            >
              <Heading color="white">Impact Market Donations</Heading>
              <Text color="white">
                5% of the mint funds go to eradicating poverty around the world
                via the{" "}
                <Link
                  fontWeight={"bold"}
                  isExternal={true}
                  href="https://www.impactmarket.com/"
                >
                  {" "}
                  Impact Market's{" "}
                </Link>
                decentralized poverty alleviation protocol.{" "}
              </Text>
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
