import {
  HStack,
  Image,
  VStack,
  Heading,
  Center,
  Button,
  Badge,
  Text,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Spinner,
} from "@chakra-ui/react";
import { gradients } from "../theme/foundations/colors";
import config from "../config";
import { useEffectOnce } from "react-use";
import { useState } from "react";
import ufo from "../assets/ufo.svg";
import {
  faExternalLinkAlt,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Token {
  id: string;
  txHash: string;
}

export interface TokenData {
  attributes: any;
  date: number;
  description: string;
  dna: string;
  id: number;
  image: string;
  missing_traits: any;
  name: string;
  rarity_rank: number;
  rarity_score: number;
  trait_count: any;
}

export interface MintProps {
  token: Token;
  txHash: String;
}

const Minted = ({ token, txHash }: MintProps) => {
  const getTokenImage = (tokenId: string) => {
    return `https://celostrials.s3.us-west-2.amazonaws.com/${tokenId}.png`;
  };

  const [tokenData, setTokenData] = useState<TokenData>();
  const [loading, setLoading] = useState(true);

  useEffectOnce(() => {
    getTokenStats(token.id).then((result) => {
      setTokenData(result);
      setLoading(false);
    });
  });

  const getTokenStats = async (tokenId: string) => {
    return fetch(`https://celostrials.vercel.app/api/nft?id=${tokenId}`).then(
      (result) => {
        return result.json().then((value) => {
          return value;
        });
      }
    );
  };

  useEffectOnce(() => {});

  const getTransactionLink = () => {
    return `${config.NETWORK_EXPLORER_URL}/tx/${txHash}`;
  };

  const getRarityLink = (token: string) => {
    return `${config.RARITY_URL}/${token}`;
  };

  return (
    <VStack>
      <Center>
        <VStack>
          <VStack className="preview" mb="5em" marginBottom="0em">
            <VStack className="homeCardContainer" marginTop="2em">
              {tokenData?.name && (
                <HStack>
                  <Heading size="lg">{tokenData.name}</Heading>
                </HStack>
              )}
              <Image className="homeCard" src={getTokenImage(token.id)} />
            </VStack>
          </VStack>
          <VStack>
            <HStack>
              {tokenData?.rarity_rank && (
                <>
                  <Popover>
                    <PopoverTrigger>
                      <IconButton
                        size="sm"
                        margin="0"
                        variant="ghost"
                        aria-label="copy"
                        color="white"
                        icon={<FontAwesomeIcon icon={faQuestionCircle} />}
                      />
                    </PopoverTrigger>
                    <PopoverContent color="black" zIndex="10000000">
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Rarity Rank</PopoverHeader>
                      <PopoverBody>
                        This is the nfET's rank out of 10,000. The lower the
                        number, the rarer it is!
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Heading margin="0 !important">Rarity Rank: </Heading>
                  <Badge colorScheme="red" fontSize={"1.5em"}>
                    #{tokenData?.rarity_rank + 1}
                  </Badge>
                  <Heading margin="0 !important" ml=".5em !important">
                    / 10,000
                  </Heading>
                </>
              )}
              {loading && <Spinner />}
            </HStack>
            <Button
              size="lg"
              as="a"
              target="_blank"
              href={getRarityLink(token.id)}
              leftIcon={<Image className="ufo" width="1.5em" src={ufo} />}
            >
              View Score
            </Button>
            <Button
              size="sm"
              variant="ghost"
              as="a"
              target="_blank"
              href={getTransactionLink()}
              rightIcon={<FontAwesomeIcon icon={faExternalLinkAlt} />}
            >
              View Transaction
            </Button>
          </VStack>
        </VStack>
      </Center>
    </VStack>
  );
};
export default Minted;
