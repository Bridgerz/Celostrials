import { useContractKit } from "@celo-tools/use-contractkit";
import { BoxProps, HStack, Text } from "@chakra-ui/layout";
import { VStack, Center } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import colors from "../theme/foundations/colors";
import Icon from "./Icon";

const Footer = ({ ...rest }: BoxProps) => {
  const { address } = useContractKit();
  const [label, setLabel] = useState("Disconnected");
  const [iconColor, setIconColor] = useState("Disconnected");

  useEffect(() => {
    setLabel(address ? "Live" : "Disconnected");
    setIconColor(address ? colors.green.main : colors.gray.cement);
  }, [address]);

  return (
    <Center {...footerStyles} {...rest}>
      <VStack>
        <Text>© 2021 Celostrials. All Rights Reserved</Text>
        <Text>
          Official Contract Address -{" "}
          <Text
            as="a"
            target={"_blank"}
            fontWeight={"bold"}
            href="https://explorer.celo.org/"
          >
            Coming soon!
          </Text>
        </Text>
      </VStack>
    </Center>
  );
};

export const footerHeight = 41;

const footerStyles: BoxProps = {
  px: { base: 4, md: 6 },
  py: { base: 2, md: 3 },
  justifyContent: "center",
  bgColor: "rgb(255,255,255,0.15) !important",

  w: "full",
  color: "white",
  zIndex: 10,
};

export default Footer;
