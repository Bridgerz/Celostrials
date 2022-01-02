import { VStack, Center, Heading, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import ari from "../assets/partnerships/ari.jpeg";
import celoPunks from "../assets/partnerships/celo-punks.jpeg";
import cybertime from "../assets/partnerships/cybertime.jpeg";
import nomspace from "../assets/partnerships/nomspace.jpeg";
import resource from "../assets/partnerships/ReSource.jpeg";
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
    <VStack pb="15em !important" pt="1em" w="100%">
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