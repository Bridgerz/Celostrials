import { VStack, Center, Heading, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import ari from "../assets/partnerships/ari.jpg";
import celo from "../assets/partnerships/celo.jpg";
import celoPunks from "../assets/partnerships/celo-punks.jpeg";
import celoApes from "../assets/partnerships/celo-apes.jpg";
import goodGhosting from "../assets/partnerships/goodGhosting.jpg";
import cybertime from "../assets/partnerships/cybertime.jpg";
import nomspace from "../assets/partnerships/nomspace.jpg";
import resource from "../assets/partnerships/ReSource.jpeg";
import impactMarket from "../assets/partnerships/ImpactMarket.png";
import { gradients } from "../theme/foundations/colors";

const Partnerships = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    arrows: false,
    dotsClass: "slick-dots slick-thumb custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <VStack pb="10em !important" w="100%" id="partnerships" pt="4em">
      <Heading color="white" size="xl">
        Partnerships
      </Heading>
      <VStack w="100%" maxW="75em" padding="2em">
        <Slider {...settings} styles={{ width: "inherit" }}>
          <VStack>
            <Heading
              background={gradients.primary}
              position="absolute"
              padding=".5em"
              borderRadius="1em"
              w="fit-content"
              color="white"
              ml={{ sm: "0em", md: "1em" }}
            >
              Celo
            </Heading>
            <Center>
              <Image borderRadius="1em" h="auto" w="20em" src={celo} />
            </Center>
          </VStack>
          <VStack>
            <Heading
              background={gradients.primary}
              position="absolute"
              padding=".5em"
              borderRadius="1em"
              w="fit-content"
              color="white"
              ml={{ sm: "0em", md: "1em" }}
            >
              Ariswap
            </Heading>
            <Center>
              <Image borderRadius="1em" h="auto" w="20em" src={ari} />
            </Center>
          </VStack>
          <VStack>
            <Heading
              background={gradients.primary}
              position="absolute"
              padding=".5em"
              borderRadius="1em"
              w="fit-content"
              color="white"
              ml={{ sm: "0em", md: "1em" }}
            >
              CeloPunks
            </Heading>
            <Center>
              <Image borderRadius="1em" h="auto" w="20em" src={celoPunks} />
            </Center>
          </VStack>
          <VStack>
            <Heading
              background={gradients.primary}
              position="absolute"
              padding=".5em"
              borderRadius="1em"
              w="fit-content"
              color="white"
              ml={{ sm: "0em", md: "1em" }}
            >
              Celo Apes
            </Heading>
            <Center>
              <Image borderRadius="1em" h="auto" w="20em" src={celoApes} />
            </Center>
          </VStack>
          <VStack>
            <Heading
              background={gradients.primary}
              position="absolute"
              padding=".5em"
              borderRadius="1em"
              w="fit-content"
              color="white"
              ml={{ sm: "0em", md: "1em" }}
            >
              GoodGhosting
            </Heading>
            <Center>
              <Image borderRadius="1em" h="auto" w="20em" src={goodGhosting} />
            </Center>
          </VStack>
          <VStack>
            <Heading
              background={gradients.primary}
              position="absolute"
              padding=".5em"
              borderRadius="1em"
              w="fit-content"
              color="white"
              ml={{ sm: "0em", md: "1em" }}
            >
              CyberTime
            </Heading>
            <Center>
              <Image borderRadius="1em" h="auto" w="20em" src={cybertime} />
            </Center>
          </VStack>
          <VStack>
            <Heading
              background={gradients.primary}
              position="absolute"
              padding=".5em"
              borderRadius="1em"
              w="fit-content"
              color="white"
              ml={{ sm: "0em", md: "1em" }}
            >
              NomSpace
            </Heading>
            <Center>
              <Image borderRadius="1em" h="auto" w="20em" src={nomspace} />
            </Center>
          </VStack>
          <VStack>
            <Heading
              background={gradients.primary}
              position="absolute"
              padding=".5em"
              borderRadius="1em"
              w="fit-content"
              color="white"
              ml={{ sm: "0em", md: "1em" }}
            >
              Impact Market
            </Heading>
            <Center>
              <Image borderRadius="1em" h="auto" w="20em" src={impactMarket} />
            </Center>
          </VStack>
          <VStack>
            <Heading
              background={gradients.primary}
              position="absolute"
              padding=".5em"
              borderRadius="1em"
              w="fit-content"
              color="white"
              ml={{ sm: "0em", md: "1em" }}
            >
              ReSource
            </Heading>
            <Center>
              <Image borderRadius="1em" h="auto" w="20em" src={resource} />
            </Center>
          </VStack>
        </Slider>
      </VStack>
    </VStack>
  );
};
export default Partnerships;
