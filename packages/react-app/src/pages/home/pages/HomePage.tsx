import { VStack, Heading, HStack } from "@chakra-ui/layout";
import { Center, Text, Image } from "@chakra-ui/react";

import basicImage from "../../../assets/preview.gif";
import Button from "../../../components/Button";
import { gradients } from "../../../theme/foundations/colors";

const HomePage = () => {
  return (
    <Center height="100vh" mt="5em" zIndex={10}>
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
          </Heading>
          <VStack className="preview">
            <VStack className="homeCardContainer">
              <Image className="homeCard" src={basicImage} />
            </VStack>
          </VStack>
        </VStack>
        {/* <VStack m="5em !important">
          <HStack>
            <Button
              size="lg"
              onClick={async () => console.log("1 pack")}
              colorScheme={"primary"}
              justifyContent="space-between"
              // rightIcon={<Image width="2em" src={metaMaskIcon} />}
            >
              Mint 1
            </Button>
            <Button
              size="lg"
              onClick={async () => console.log("3 pack")}
              colorScheme={"primary"}
              justifyContent="space-between"
              // rightIcon={<Image width="2em" src={metaMaskIcon} />}
            >
              Mint 3
            </Button>
            <Button
              size="lg"
              onClick={async () => console.log("5 pack")}
              colorScheme={"primary"}
              justifyContent="space-between"
              // rightIcon={<Image width="2em" src={metaMaskIcon} />}
            >
              Mint 5
            </Button>
          </HStack>
        </VStack> */}
      </VStack>
    </Center>
  );
};

export default HomePage;
