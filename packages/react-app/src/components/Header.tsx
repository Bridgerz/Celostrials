import {
  Flex,
  Text,
  HStack,
  Link,
  StackProps,
  VStack,
} from "@chakra-ui/layout";
import {
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "./Button";
import AddressInfo from "./wallet/AddressInfo";
import logoImage from "../assets/logo.png";

import colors, { gradients } from "../theme/foundations/colors";
import { useContractKit } from "@celo-tools/use-contractkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Socials } from "../pages/home/pages/HomePage";
import { faBars, faWallet } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const device = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isMobile = device === "mobile";
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const scrollToElement = (name) => {
    close();
    const about = document?.getElementById(name);
    about?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const { connect, address } = useContractKit();

  return (
    <>
      <Flex {...containerStyles}>
        <HStack>
          {isMobile && (
            <Popover isOpen={isOpen} onClose={close}>
              <PopoverTrigger>
                <IconButton
                  onClick={open}
                  variant="ghost"
                  color="white"
                  aria-label="Add to friends"
                  icon={<FontAwesomeIcon icon={faBars} />}
                />
              </PopoverTrigger>
              <PopoverContent
                ml="1em"
                width={"fit-content"}
                mt="1em"
                border="0px"
                boxShadow="white 0px 0px 20px !important"
                background="rgba(0, 0, 0, 0.9) !important"
              >
                <PopoverArrow
                  ml="-.5em"
                  boxShadow="white 0px 0px 20px !important"
                />
                <PopoverBody width={"fit-content"} m=".5em">
                  <VStack width="fit-content" alignItems={"flex-start"}>
                    <Link
                      isExternal={true}
                      color={colors.secondary.main}
                      onClick={() => {
                        scrollToElement("about");
                      }}
                    >
                      <Text fontSize="lg" color="white" fontWeight="bold">
                        About
                      </Text>
                    </Link>
                    <Link
                      isExternal={true}
                      color={colors.secondary.main}
                      onClick={() => {
                        scrollToElement("partnerships");
                      }}
                    >
                      <Text fontSize="lg" color="white" fontWeight="bold">
                        Partnerships
                      </Text>
                    </Link>
                    <Link
                      isExternal={true}
                      color={colors.secondary.main}
                      onClick={() => {
                        scrollToElement("roadmap");
                      }}
                    >
                      <Text fontSize="lg" color="white" fontWeight="bold">
                        Roadmap
                      </Text>
                    </Link>
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )}
          <Image w="2em" src={logoImage} />
          {!isMobile && <Socials pl={"1em"} color={"white"} />}
        </HStack>
        <HStack align="center" spacing={6}>
          {address && (
            <>
              <AddressInfo />
            </>
          )}
          {!address && (
            <Button
              size="md"
              onClick={async () => await connect()}
              background={gradients.primary}
              justifyContent="space-between"
              rightIcon={<FontAwesomeIcon icon={faWallet} />}
            >
              Connect Wallet
            </Button>
          )}
        </HStack>
      </Flex>
    </>
  );
};

export const headerHeight = 51;

const containerStyles: StackProps = {
  px: { base: 4, md: 6 },
  py: { base: 2, md: 3 },
  justify: "space-between",
  alignItems: "center",
  border: "none",
  bgColor: "rgb(255,255,255,0.15) !important",
  height: headerHeight,
  position: "fixed",
  w: "100vw",
  zIndex: 10,
};

export default Header;
