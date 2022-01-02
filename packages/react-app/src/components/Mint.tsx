import {
  Image,
  VStack,
  Heading,
  Wrap,
  WrapItem,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import { useState } from "react";
import { useCelostrialsContract } from "../services/web3/contracts/celostrials";
import { getTxEvents } from "../services/web3/utils/getTxEvent";
import {
  getVMErrorMessage,
  tryGetErrorMessage,
} from "../services/web3/utils/getVMErrorMessage";
import mint1Image from "../assets/mint_green.jpg";
import mint3Image from "../assets/mint_blue.jpg";
import mint5Image from "../assets/mint_purple.jpg";
import mint10Image from "../assets/mint_orange.jpg";
import { useConnectWallet } from "../services/web3/utils/useConnectWallet";
import MintModal, { Token } from "./modals/MintModal";

const Mint = ({ myRef }: any) => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const { mint, totalSupply } = useCelostrialsContract();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const mintModal = useDisclosure();

  const connect = useConnectWallet();

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

  const submitTx = async (amount: number) => {
    const test = ethers.utils.formatUnits((await totalSupply()) || 0, "wei");
    setLoading(true);
    let tx;
    try {
      tx = await mint(amount);
    } catch (e) {
      const error = e as any;
      if (error.data)
        toast({
          title: getVMErrorMessage(error.data.message),
          status: "error",
        });
      else {
        let internalError = tryGetErrorMessage(error.message);
        if (internalError)
          toast({
            title: internalError,
            status: "error",
          });
        else
          toast({
            title: error.message,
            status: "error",
          });
      }
    }
    if (!tx) {
      connect();
      return;
    }
    const receipt = await tx.wait();
    const events = getTxEvents(receipt, "Transfer");
    const tokens = events.map((event) => getTokens(event, receipt));
    setTokens(tokens);
    mintModal.onOpen();
    setLoading(false);
  };

  return (
    <VStack m="5em !important" mb="20em !important">
      <Heading color="white" size="xl" ref={myRef}>
        Mint
      </Heading>
      <Wrap justify="center" mt="6em !important" spacing="2em">
        <WrapItem>
          <VStack
            cursor={"pointer"}
            onClick={() => {
              submitTx(1);
            }}
          >
            <Image height={"30vmin"} className="mintCard" src={mint1Image} />
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
            <CardStack image={mint3Image} className="card card-top-left">
              <VStack className="card-inner">
                <Image
                  height={"30vmin"}
                  className="mintCard"
                  src={mint3Image}
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
            <CardStack image={mint5Image} className="card card-top-left">
              <VStack className="card-inner">
                <Image
                  height={"30vmin"}
                  className="mintCard"
                  src={mint5Image}
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
            <CardStack image={mint10Image} className="card card-top-left">
              <VStack className="card-inner">
                <Image
                  height={"30vmin"}
                  className="mintCard"
                  src={mint10Image}
                />
              </VStack>
            </CardStack>
            <Heading color="white" size="2xl">
              10
            </Heading>
          </VStack>
        </WrapItem>
      </Wrap>
      <MintModal
        isOpen={mintModal.isOpen}
        onClose={mintModal.onClose}
        tokens={tokens}
      />
    </VStack>
  );
};

const CardStack = ({ children, image, ...props }) => {
  return (
    <VStack
      {...props}
      _after={{
        background: `url(${image})`,
        backgroundSize: "cover",
      }}
      _before={{
        background: `url(${image})`,
        backgroundSize: "cover",
      }}
      className="card card-top-left"
    >
      {children}
    </VStack>
  );
};

export default Mint;
