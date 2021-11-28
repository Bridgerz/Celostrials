import { Flex, HStack, StackProps } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

import { faChartPie, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useWeb3Context } from "web3-react";
import Button from "./Button";
import AddressInfo from "./wallet/AddressInfo";
import logoImage from "../assets/logo.png";

export const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const context = useWeb3Context();

  return (
    <Flex {...containerStyles}>
      <Image w="2em" src={logoImage} />
      <HStack align="center" spacing={6}>
        {context.library && (
          <>
            <AddressInfo />
          </>
        )}
      </HStack>
    </Flex>
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
