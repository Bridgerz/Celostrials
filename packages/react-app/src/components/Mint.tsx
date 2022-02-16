import {
  Image,
  VStack,
  Heading,
  useToast,
  useDisclosure,
  useNumberInput,
  HStack,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import { useState } from "react";
import { useCelostrialsContract } from "../services/web3/contracts/celostrials";
import { getTxEvents } from "../services/web3/utils/getTxEvent";
import {
  getVMErrorMessage,
  tryGetErrorMessage,
} from "../services/web3/utils/getVMErrorMessage";
import MintModal, { Token } from "./modals/MintModal";
import Button from "./Button";
import { useContractKit } from "@celo-tools/use-contractkit";
import { gradients } from "../theme/foundations/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import basicImage from "../assets/no_background.png";
import basicImage2 from "../assets/no_background_2.png";
import colors from "../theme/foundations/colors";
import ufo from "../assets/ufo.svg";
import { TotalMintedInfo } from "./Header";

const Mint = ({ myRef }: any) => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [txHash, setTxHash] = useState("");
  const { mint, getTotalSupply } = useCelostrialsContract();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const mintModal = useDisclosure();
  const disabled = false;

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
    setLoading(true);
    let tx;
    try {
      tx = await mint(amount);
    } catch (e) {
      setLoading(false);
      const error = e as any;
      if (error.message.includes("denied")) {
        toast({
          title: "Transaction Denied",
          status: "error",
        });
      } else if (error.data) {
        toast({
          title: getVMErrorMessage(error.data.message),
          status: "error",
        });
      } else {
        toast({
          title: "Mint Error",
          description:
            "Make sure you're connected to Celo and you have sufficient funds!",
          status: "error",
        });
      }
    }
    if (!tx) {
      setLoading(false);
      return;
    }
    const receipt = await tx.wait();
    const events = getTxEvents(receipt, "Transfer");
    const tokens = events.map((event) => getTokens(event, receipt));
    setLoading(false);
    setTokens(tokens);
    setTxHash(receipt.transactionHash);
    mintModal.onOpen();
  };

  const { connect, address } = useContractKit();
  const [mintAmount, setMintAmount] = useState(1);

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
      precision: 0,
      onChange: (val) => {
        setMintAmount(Number(val));
      },
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ readOnly: true });
  const device = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isMobile = device === "mobile";

  return (
    <VStack m="3em !important">
      <HStack w="100%" justifyContent={"space-between"}>
        <Image
          w="70%"
          maxW="18em"
          src={basicImage}
          mr="-19em"
          mb="-.5em !important"
          zIndex="1"
          mt="0 !important"
        />
        <Image
          w="70%"
          maxW="18em"
          src={basicImage2}
          mr="-19em"
          mb="-.5em !important"
          zIndex="auto"
          mt="0 !important"
        />
      </HStack>
      <HStack
        borderRadius="1em"
        padding="2em"
        backgroundColor="#ffffff1f"
        flexFlow="wrap"
        justifyContent={"center"}
      >
        <HStack
          border="3px solid"
          borderRadius={"1em"}
          padding="1em"
          backgroundColor={"#525252"}
          borderColor={colors.gray.cement}
          marginBottom={!isMobile ? "0em" : "2em"}
          marginRight={!isMobile ? "2em" : "0em"}
        >
          <Button background={colors.gray.cement} {...dec}>
            -
          </Button>
          <Input
            w="5em"
            textAlign="center"
            border="none !important"
            backgroundColor="transparent !important"
            color="white"
            fontSize={"2xl"}
            fontWeight="bold"
            {...input}
          />
          <Button background={colors.gray.cement} {...inc}>
            +
          </Button>
        </HStack>
        {address ? (
          <Button
            minW="8em"
            size="md"
            onClick={async () => await submitTx(mintAmount)}
            background={gradients.primary}
            justifyContent="space-between"
            rightIcon={<Image className="ufo" width="2em" src={ufo} />}
            isLoading={loading}
            disabled={disabled}
          >
            Mint
          </Button>
        ) : (
          <Button
            minW="14em"
            size="md"
            onClick={async () => await connect()}
            background={gradients.primary}
            justifyContent="space-between"
            rightIcon={<FontAwesomeIcon icon={faWallet} />}
          >
            Connect Wallet
          </Button>
        )}
        {isMobile && (
          <HStack pt="2em">
            <TotalMintedInfo />
          </HStack>
        )}
      </HStack>

      <MintModal
        isOpen={mintModal.isOpen}
        onClose={mintModal.onClose}
        tokens={tokens}
        txHash={txHash}
      />
    </VStack>
  );
};

export default Mint;
