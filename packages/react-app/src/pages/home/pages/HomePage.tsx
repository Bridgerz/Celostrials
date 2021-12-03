import { VStack, Heading, HStack } from "@chakra-ui/layout";
import {
  Center,
  Text,
  Image,
  Button,
  useToast,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";

import { useRef, useState } from "react";

import basicImage from "../../../assets/preview.gif";
import mintImage from "../../../assets/basic.jpg";
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

const HomePage = () => {
  // const { mint, totalSupply } = useCelostrialsContract();
  const mintModal = useDisclosure();
  const connect = useConnectWallet();

  const device = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isMobile = device === "mobile";

  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(false);

  const myRef = useRef<null | HTMLDivElement>(null);

  const toast = useToast();

  const executeScroll = () =>
    myRef?.current?.scrollIntoView({ behavior: "smooth" });

  const getTokens = (
    event: ethers.Event,
    receipt: ethers.ContractReceipt
  ): Token => {
    return {
      id: Number(
        ethers.utils.formatUnits(event?.args?.tokenId, "wei")
      ).toString(),
      txHash: receipt.transactionHash,
    };
  };

  // const submitTx = async (amount: number) => {
  //   const test = ethers.utils.formatUnits((await totalSupply()) || 0, "wei");
  //   setLoading(true);
  //   let tx;
  //   try {
  //     tx = await mint(amount);
  //   } catch (e) {
  //     const error = e as any;
  //     if (error.data)
  //       toast({
  //         title: getVMErrorMessage(error.data.message),
  //         status: "error",
  //       });
  //     else {
  //       let internalError = tryGetErrorMessage(error.message);
  //       if (internalError)
  //         toast({
  //           title: internalError,
  //           status: "error",
  //         });
  //       else
  //         toast({
  //           title: error.message,
  //           status: "error",
  //         });
  //     }
  //   }
  //   if (!tx) {
  //     connect();
  //     return;
  //   }
  //   const receipt = await tx.wait();
  //   const events = getTxEvents(receipt, "Transfer");
  //   const tokens = events.map((event) => getTokens(event, receipt));
  //   setTokens(tokens);
  //   mintModal.onOpen();
  //   setLoading(false);
  // };

  return (
    <>
      <Center mt="5em" zIndex={10}>
        <VStack w="100%" h="100%">
          <VStack zIndex={1} w="100%" h="100%">
            <Heading color="white" size="xl">
              Celostrials
            </Heading>
            <Heading
              size="subtitle"
              color="gray.500"
              mb="1em !important"
              maxW="350px"
            >
              nfETs on the Celo blockchain
              {/* https://www.npmjs.com/package/react-date-countdown-timer  FOR WHEN WE HAVE A DATE */}
            </Heading>
            <VStack h="100vh">
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
            <VStack m="5em !important" mb="20em !important">
              <Heading color="white" size="xl" ref={myRef}>
                Mint - Coming Soon
              </Heading>
              {/* <Wrap justify="center" mt="6em !important" spacing="2em">
                <WrapItem>
                  <VStack
                    cursor={"pointer"}
                    onClick={() => {
                      submitTx(1);
                    }}
                  >
                    <Image
                      height={"30vmin"}
                      className="mintCard"
                      src={mintImage}
                    />
                    <Heading color="white" size="2xl">
                      1
                    </Heading>
                  </VStack>
                </WrapItem>
                <WrapItem>
                  <VStack
                    onClick={() => {
                      submitTx(3);
                    }}
                  >
                    <CardStack className="card card-top-left">
                      <VStack className="card-inner">
                        <Image
                          height={"30vmin"}
                          className="mintCard"
                          src={mintImage}
                        />
                      </VStack>
                    </CardStack>
                    <Heading color="white" size="2xl">
                      3
                    </Heading>
                  </VStack>
                </WrapItem>
                <WrapItem>
                  <VStack
                    onClick={() => {
                      submitTx(5);
                    }}
                  >
                    <CardStack className="card card-top-left">
                      <VStack className="card-inner">
                        <Image
                          height={"30vmin"}
                          className="mintCard"
                          src={mintImage}
                        />
                      </VStack>
                    </CardStack>
                    <Heading color="white" size="2xl">
                      5
                    </Heading>
                  </VStack>
                </WrapItem>
                <WrapItem>
                  <VStack
                    onClick={() => {
                      submitTx(10);
                    }}
                  >
                    <CardStack className="card card-top-left">
                      <VStack className="card-inner">
                        <Image
                          height={"30vmin"}
                          className="mintCard"
                          src={mintImage}
                        />
                      </VStack>
                    </CardStack>
                    <Heading color="white" size="2xl">
                      10
                    </Heading>
                  </VStack>
                </WrapItem>
              </Wrap> */}
            </VStack>
          </VStack>
          {isMobile && <Socials />}
        </VStack>
      </Center>
      <MintModal
        isOpen={mintModal.isOpen}
        onClose={mintModal.onClose}
        tokens={tokens}
      />
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
            color={colors.gray.cement}
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
            color={colors.gray.cement}
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
            color={colors.gray.cement}
            icon={<FontAwesomeIcon icon={faTwitter} />}
          />
        </WrapItem>
      </Wrap>
    </HStack>
  );
};

const CardStack = ({ children, ...props }) => {
  return (
    <VStack
      {...props}
      _after={{
        background: `url(${mintImage})`,
        backgroundSize: "cover",
      }}
      _before={{
        background: `url(${mintImage})`,
        backgroundSize: "cover",
      }}
      className="card card-top-left"
    >
      {children}
    </VStack>
  );
};
export default HomePage;
