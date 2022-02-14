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
  Spinner,
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
import { useEffect, useState } from "react";
import { useCelostrialsContract } from "../services/web3/contracts/celostrials";
import { useInterval } from "react-use";

export const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const device = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isMobile = device === "mobile";
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const { connect, address } = useContractKit();

  const scrollToElement = (name) => {
    close();
    const about = document?.getElementById(name);
    about?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
          {!isMobile && <TotalMintedInfo />}
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

export const TotalMintedInfo = () => {
  const [maxSupply, setMaxSupply] = useState("1500");
  const [totalSupply, setTotalSupply] = useState("----");
  const [isOnlyWhiteList, setIsOnlyWhiteList] = useState(true);
  const { getMaxSupply, getTotalSupply, onlyWhitelist } =
    useCelostrialsContract();

  const { connect, initialised, address } = useContractKit();

  useInterval(async () => {
    console.log("checking total supply");
    const _totalSupply = Number(await getTotalSupply());
    if (_totalSupply != undefined) {
      setTotalSupply(
        _totalSupply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
    }
  }, 2000);

  useEffect(() => {
    async function loadBalance() {
      const _maxSupply = Number(await getMaxSupply());
      const _totalSupply = Number(await getTotalSupply());
      const _isOnlyWhiteList = await onlyWhitelist();
      setIsOnlyWhiteList(_isOnlyWhiteList || false);
      setMaxSupply(
        _maxSupply
          ? _maxSupply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          : "0"
      );
      setTotalSupply(
        _totalSupply
          ? _totalSupply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          : "0"
      );
    }
    loadBalance();
  }, [initialised, address, connect, getMaxSupply, getTotalSupply]);
  if (isOnlyWhiteList) return <></>;
  return (
    <HStack>
      <Text color={colors.orange.dark} fontWeight={"bold"}>
        {totalSupply === "0" ? <Spinner /> : totalSupply}
      </Text>
      <Text ml=".4em !important" color={colors.gray.cement}>
        {" "}
        / {maxSupply === "0" ? <Spinner /> : maxSupply} MINTED
      </Text>
    </HStack>
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
