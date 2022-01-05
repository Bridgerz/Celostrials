import {
  VStack,
  Center,
  Text,
  Heading,
  Image,
  HStack,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import downArrows from "../assets/down-arrows.svg";
import roadmap1 from "../assets/roadmap/roadmap_1.jpg";
import roadmap2 from "../assets/roadmap/roadmap_2.jpg";
import roadmap3 from "../assets/roadmap/roadmap_3.jpg";
import roadmap4 from "../assets/roadmap/roadmap_4.jpg";
import roadmap5 from "../assets/roadmap/roadmap_5.png";
import colors from "../theme/foundations/colors";

const Roadmap = () => {
  const device = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isMobile = device === "mobile";

  return !isMobile ? (
    <VStack pb="5em !important" pt="1em" w="100%" maxW="75em">
      <Heading color="white" size="xl" mb="1em">
        Celostrials Roadmap
      </Heading>
      <VStack w="100%">
        <HStack mb="2em !important" w="100%" alignItems="start">
          <VStack width="50%" mr="3em !important" alignItems="flex-end">
            <Image src={roadmap1} />
            <Image
              src={downArrows}
              className="ufo"
              width="5em"
              mt="-3em !important"
              mr="6.5em !important"
            />
          </VStack>
          <VStack
            borderTop="2px solid white"
            borderLeft="2px solid white"
            p="2em"
            width="50%"
            alignItems="start"
            textAlign="start"
          >
            <Heading color="white" size="3xl">
              1.
            </Heading>
            <Text fontSize="3xl" color="white" fontWeight="bold">
              Community building and giveaways
            </Text>
            <Text fontSize="1xl" color="white" fontWeight="bold">
              Head over to the{" "}
              <Link
                isExternal={true}
                color={colors.secondary.main}
                href="https://twitter.com/celostrials"
              >
                @celostrials
              </Link>{" "}
              twitter to learn more about giveaways and partnerships
            </Text>
          </VStack>
        </HStack>

        <HStack mb="2em !important" w="100%" alignItems="start">
          <VStack
            borderTop="2px solid white"
            borderRight="2px solid white"
            p="2em"
            width="50%"
            mr="3em !important"
            alignItems="flex-end"
          >
            <Heading color="white" size="3xl">
              2.
            </Heading>
            <Text fontSize="3xl" color="white" fontWeight="bold">
              Whitelist mint
            </Text>
            <Text fontSize="1xl" color="white" fontWeight="bold">
              Check out the{" "}
              <Link
                isExternal={true}
                color={colors.secondary.main}
                href="https://discord.gg/qgCWPrkWaW"
              >
                Discord
              </Link>{" "}
              to learn more!
            </Text>
          </VStack>
          <VStack width="50%" alignItems="flex-start" ml="0 !important">
            <Image src={roadmap2} />
            <Image
              src={downArrows}
              className="ufo"
              width="5em"
              mt="-3em !important"
            />
          </VStack>
        </HStack>

        <HStack mb="2em !important" w="100%" alignItems="start">
          <VStack width="50%" mr="3em !important" alignItems="flex-end">
            <Image src={roadmap3} />
            <Image
              src={downArrows}
              className="ufo"
              width="5em"
              mt="-3em !important"
              mr="6.5em !important"
            />
          </VStack>
          <VStack
            borderTop="2px solid white"
            borderLeft="2px solid white"
            p="2em"
            width="50%"
            alignItems="start"
          >
            <Heading color="white" size="3xl">
              3.
            </Heading>
            <Text fontSize="3xl" color="white" fontWeight="bold">
              Public mint
            </Text>
            <Text fontSize="1xl" color="white" fontWeight="bold">
              Date to be announced soon!
            </Text>
          </VStack>
        </HStack>

        <HStack mb="2em !important" w="100%" alignItems="start">
          <VStack
            borderTop="2px solid white"
            borderRight="2px solid white"
            p="2em"
            width="50%"
            mr="3em !important"
            alignItems="flex-end"
          >
            <Heading color="white" size="3xl">
              4.
            </Heading>
            <Text fontSize="3xl" color="white" fontWeight="bold">
              Ethestrials
            </Text>
            <Text fontSize="1xl" color="white" fontWeight="bold">
              Ethereum special collection
            </Text>
          </VStack>
          <VStack width="50%" alignItems="flex-start">
            <Image src={roadmap4} />
            <Image
              src={downArrows}
              className="ufo"
              width="5em"
              mt="-3em !important"
              ml="6.5em !important"
            />
          </VStack>
        </HStack>

        <HStack mb="2em !important" w="100%" alignItems="start">
          <VStack width="50%" mr="3em !important" alignItems="flex-end">
            <Image src={roadmap5} />
            <Image
              src={downArrows}
              className="ufo"
              width="5em"
              mt="-3em !important"
              mr="6.5em !important"
            />
          </VStack>
          <VStack
            borderTop="2px solid white"
            borderLeft="2px solid white"
            p="2em"
            width="50%"
            alignItems="start"
          >
            <Heading color="white" size="3xl">
              5.
            </Heading>
            <Text fontSize="3xl" color="white" fontWeight="bold">
              Solestrials
            </Text>
            <Text fontSize="1xl" color="white" fontWeight="bold">
              Solana special collection
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  ) : (
    <VStack pt="1em" w="100%">
      <Heading color="white" size="xl" mb="1em">
        Celostrials Roadmap
      </Heading>
      <VStack w="100%">
        <VStack w="100%" alignItems="start">
          <VStack width="100%" alignItems="flex-end">
            <Image src={roadmap1} />
            <Image
              src={downArrows}
              className="ufo"
              width="5em"
              mt="-3em !important"
            />
          </VStack>
          <VStack
            borderTop="2px solid white"
            borderLeft="2px solid white"
            p="2em !important"
            m="2em !important"
            alignItems="start"
          >
            <Heading color="white" size="3xl">
              1.
            </Heading>
            <Text
              fontSize="3xl"
              color="white"
              fontWeight="bold"
              textAlign="left"
            >
              Community building and giveaways
            </Text>

            <Text
              fontSize="1xl"
              color="white"
              fontWeight="bold"
              textAlign="left"
            >
              Head over to the{" "}
              <Link
                isExternal={true}
                color={colors.secondary.main}
                href="https://twitter.com/celostrials"
              >
                @celostrials
              </Link>{" "}
              twitter to learn more about giveaways and partnerships
            </Text>
          </VStack>
        </VStack>

        <VStack w="100%" alignItems="start">
          <VStack width="100%" alignItems="flex-start" ml="0 !important">
            <Image src={roadmap2} />
            <Image
              src={downArrows}
              className="ufo"
              width="5em"
              mt="-3em !important"
            />
          </VStack>
          <VStack
            borderTop="2px solid white"
            borderRight="2px solid white"
            p="2em !important"
            m="2em !important"
            alignItems="flex-end !important"
          >
            <Heading color="white" size="3xl" textAlign="end">
              2.
            </Heading>
            <Text
              fontSize="3xl"
              color="white"
              fontWeight="bold"
              textAlign="end"
            >
              Whitelist mint
            </Text>
            <Text
              fontSize="1xl"
              color="white"
              fontWeight="bold"
              textAlign="end"
            >
              Check out the{" "}
              <Link
                isExternal={true}
                color={colors.secondary.main}
                href="https://discord.gg/qgCWPrkWaW"
              >
                Discord
              </Link>{" "}
              to learn more!
            </Text>
          </VStack>
        </VStack>

        <VStack w="100%" alignItems="start">
          <VStack width="100%" alignItems="flex-end">
            <Image src={roadmap3} />
            <Image
              src={downArrows}
              className="ufo"
              width="5em"
              mt="-3em !important"
            />
          </VStack>
          <VStack
            borderTop="2px solid white"
            borderLeft="2px solid white"
            p="2em !important"
            m="2em !important"
            alignItems="start"
          >
            <Heading color="white" size="3xl">
              3.
            </Heading>
            <Text
              fontSize="3xl"
              color="white"
              fontWeight="bold"
              textAlign="left"
            >
              Public mint
            </Text>

            <Text
              fontSize="1xl"
              color="white"
              fontWeight="bold"
              textAlign="left"
            >
              Date to be announced soon!
            </Text>
          </VStack>
        </VStack>

        <VStack w="100%" alignItems="start">
          <VStack width="100%" alignItems="flex-start" ml="0 !important">
            <Image src={roadmap4} />
            <Image
              src={downArrows}
              className="ufo"
              width="5em"
              mt="-3em !important"
            />
          </VStack>
          <VStack
            borderTop="2px solid white"
            borderRight="2px solid white"
            p="2em !important"
            m="2em !important"
            alignItems="flex-end"
            textAlign="end"
          >
            <Heading color="white" size="3xl" textAlign="end">
              4.
            </Heading>
            <Text
              fontSize="3xl"
              color="white"
              fontWeight="bold"
              textAlign="end"
            >
              Ethestrials
            </Text>
            <Text
              fontSize="1xl"
              color="white"
              fontWeight="bold"
              textAlign="end"
            >
              Ethereum special collection
            </Text>
          </VStack>
        </VStack>

        <VStack w="100%" alignItems="start">
          <VStack width="100%" alignItems="flex-end">
            <Image src={roadmap5} />
            <Image
              src={downArrows}
              className="ufo"
              width="5em"
              mt="-3em !important"
            />
          </VStack>
          <VStack
            borderTop="2px solid white"
            borderLeft="2px solid white"
            p="2em !important"
            m="2em !important"
            alignItems="start"
          >
            <Heading color="white" size="3xl">
              5.
            </Heading>
            <Text
              fontSize="3xl"
              color="white"
              fontWeight="bold"
              textAlign="left"
            >
              Solestrials
            </Text>

            <Text
              fontSize="1xl"
              color="white"
              fontWeight="bold"
              textAlign="left"
            >
              Solana special collection
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
export default Roadmap;
