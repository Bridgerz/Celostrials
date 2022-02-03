import { useContractKit } from "@celo-tools/use-contractkit";
import { BoxProps, Text } from "@chakra-ui/layout";
import { HStack, useDisclosure } from "@chakra-ui/react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import colors from "../../theme/foundations/colors";
import { getAbbreviatedAddress } from "../../utils/stringFormat";
import WalletInfoModal from "./WalletInfoModal";

const AddressInfo = ({ ...rest }: BoxProps) => {
  const { address } = useContractKit();

  const walletInfoModal = useDisclosure();

  if (!address) return null;

  return (
    <>
      <HStack
        {...walletPillContainerStyles}
        onClick={walletInfoModal.onOpen}
        px={3}
      >
        <FontAwesomeIcon size="xs" icon={faCircle} color={colors.green.main} />
        <Text as="span" lineHeight="2">
          {getAbbreviatedAddress(address)}
        </Text>
      </HStack>
      <WalletInfoModal
        isOpen={walletInfoModal.isOpen}
        onClose={walletInfoModal.onClose}
        address={address}
      />
    </>
  );
};

const walletPillContainerStyles: BoxProps = {
  cursor: "pointer",
  bgColor: "gray.cultured",
  _hover: { shadow: "xs" },
  borderRadius: "2xl",
  border: `1px solid ${colors.gray.cultured}`,
  py: 1,
  px: 2,
  marginLeft: "1em !important",
};

export default AddressInfo;
