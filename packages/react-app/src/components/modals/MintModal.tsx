import {
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  Heading,
  Center,
  Button,
} from "@chakra-ui/react";
import { gradients } from "../../theme/foundations/colors";
import Slider from "react-slick";
import config from "../../config";

export interface Token {
  id: string;
  txHash: string;
}

export interface MintModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokens: Token[];
}

const MintModal = ({ isOpen, onClose, tokens }: MintModalProps) => {
  const getTokenImage = (tokenId: string) => {
    return `https://celostrials.mypinata.cloud/ipfs/QmZ3EFB1XhncBqg723mDPLjyyy3V6HnxtzKSt8bKwktXxo/${tokenId}.png`;
  };
  const getTransactionLink = (txHash: string) => {
    return `${config.NETWORK_EXPLORER_URL}/${txHash}`;
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Modal size="4xl" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent m="1em">
          <ModalHeader alignSelf={"center"}>
            <Heading color="white" size="xl">
              Minted nfETs
            </Heading>
          </ModalHeader>
          <ModalBody>
            <Slider {...settings}>
              {tokens.map((token) => {
                return (
                  <VStack>
                    <Center>
                      <Image
                        height={"70vmin"}
                        className="mintCard"
                        src={getTokenImage(token.id)}
                      />
                      <Button
                        size="lg"
                        background={gradients.primary}
                        as="a"
                        target="_blank"
                        href={getTransactionLink(token.txHash)}
                      >
                        View Transaction
                      </Button>
                    </Center>
                  </VStack>
                );
              })}
            </Slider>
          </ModalBody>
          <ModalFooter>
            <HStack alignItems="center"></HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default MintModal;
