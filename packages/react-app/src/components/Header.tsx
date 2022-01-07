import { Flex, HStack, StackProps } from "@chakra-ui/layout";
import {
  IconButton,
  Image,
  useBreakpointValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";
import { useWeb3Context } from "web3-react";
import Button from "./Button";
import AddressInfo from "./wallet/AddressInfo";
import logoImage from "../assets/logo.png";

import colors, { gradients } from "../theme/foundations/colors";
import { useConnectWallet } from "../services/web3/utils/useConnectWallet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Socials } from "../pages/home/pages/HomePage";

const metaMaskIcon =
  "https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png";

export const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const context = useWeb3Context();
  const device = useBreakpointValue({ base: "mobile", md: "desktop" });
  const isMobile = device === "mobile";

  const connect = useConnectWallet();

  return (
    <>
      <Flex {...containerStyles}>
        <HStack>
          <Image w="2em" src={logoImage} />
          {!isMobile && <Socials pl={"1em"} color={"white"} />}
        </HStack>
        <HStack align="center" spacing={6}>
          {context.library && (
            <>
              <AddressInfo />
            </>
          )}
          {!context.library && (
            <Button
              size="md"
              onClick={async () => await connect()}
              background={gradients.primary}
              justifyContent="space-between"
              rightIcon={<Image width="2em" src={metaMaskIcon} />}
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
