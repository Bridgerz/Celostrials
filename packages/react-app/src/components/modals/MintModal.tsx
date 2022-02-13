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
import alien from "../../assets/alien.svg";
import { gradients } from "../../theme/foundations/colors";
import Slider from "react-slick";
import config from "../../config";
import { useEffectOnce } from "react-use";
import Minted from "../Minted";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export interface Token {
  id: string;
  txHash: string;
}

export interface MintModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokens: Token[];
  txHash: String;
}

const MintModal = ({ isOpen, onClose, tokens, txHash }: MintModalProps) => {
  const [mint, setMint] = useState(1);

  useEffect(() => {
    if (!isOpen) {
      setMint(1);
    }
  }, [isOpen]);

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <HStack
        className={className}
        style={{ ...style, display: "block" }}
        _before={{ color: "white" }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <HStack
        className={className}
        style={{ ...style, display: "block" }}
        _before={{ color: "white" }}
        onClick={onClick}
      >
        <Heading>Next</Heading>
      </HStack>
    );
  }

  var settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    beforeChange: (current, next) => setMint(next + 1),
    customPaging: function (i) {
      return <FontAwesomeIcon size="xs" icon={faCircle} />;
    },
    dotsClass: "slick-dots slick-thumb",
  };
  return (
    <>
      <Modal size="4xl" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          m={{ sm: "0em", md: "1em" }}
          color="white"
          background="rgb(36 36 36 / 95%)"
        >
          <ModalHeader alignSelf={"center"}>
            <Heading size="xl">
              {mint}/{tokens.length}
            </Heading>
          </ModalHeader>
          <ModalBody padding="0em 2em">
            <Slider {...settings}>
              {tokens.map((token) => {
                return <Minted token={token} txHash={txHash} />;
              })}
            </Slider>
            <VStack>
              <Button
                size="lg"
                w="100%"
                maxWidth="20em !important"
                mt="3em"
                background={gradients.primary}
                onClick={onClose}
                leftIcon={<Image width="1.5em" src={alien} />}
              >
                Mint More
              </Button>
            </VStack>
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
