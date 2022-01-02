import { VStack, Heading, HStack } from "@chakra-ui/layout";
import {
  Center,
  Text,
  Image,
  Button,
  useToast,
  useBreakpointValue,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

import { useEffect, useRef, useState } from "react";

import basicImage from "../../../assets/preview.gif";

import logoImage from "../../../assets/Celostrials_Logo.png";
import ufo from "../../../assets/ufo.svg";
import { useDisclosure } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import colors, { gradients } from "../../../theme/foundations/colors";
import MintModal, { Token } from "../../../components/modals/MintModal";
import { useCelostrialsContract } from "../../../services/web3/contracts/celostrials";
import { useConnectWallet } from "../../../services/web3/utils/useConnectWallet";
import { ethers } from "ethers";
import {
  getVMErrorMessage,
  tryGetErrorMessage,
} from "../../../services/web3/utils/getVMErrorMessage";
import { getTxEvents } from "../../../services/web3/utils/getTxEvent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Partnerships from "../../../components/Partnerships";
import Mint from "../../../components/Mint";
import About from "../../../components/About";

const HomePage = () => {
  const device = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isMobile = device === "mobile";
  const { isOpen, onOpen, onClose } = useDisclosure();

  const myRef = useRef<null | HTMLDivElement>(null);

  const executeScroll = () => {
    onOpen();
    // myRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Center mt="5em" zIndex={10}>
        <VStack w="100%" h="100%">
          <VStack zIndex={1} w="100%" h="100%">
            <Center>
              <Image w="30em" maxW="90%" src={logoImage} />
            </Center>
            <Heading
              size="subtitle"
              color="gray.500"
              mb="1em !important"
              maxW="350px"
            >
              nfETs on the Celo blockchain
              {/* https://www.npmjs.com/package/react-date-countdown-timer  FOR WHEN WE HAVE A DATE */}
            </Heading>
            <VStack h="90vh">
              <VStack className="preview" mb="5em">
                <VStack className="homeCardContainer">
                  <Image className="homeCard" src={basicImage} />
                </VStack>
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
            </VStack>
            <Partnerships />
            <About />
            {/* <Mint myRef={myRef} /> */}
          </VStack>
          {isMobile && (
            <Socials color={colors.gray.cement} margin="1em !important" />
          )}
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
            <Socials color={colors.gray.cement} />
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

export default HomePage;
