import {
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  Center,
  useDisclosure,
  Button,
} from "@chakra-ui/react"
import muIcon from "../../assets/glyphs/mu-solid.svg"
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ethers } from "ethers"
import React, { useEffect, useState } from "react"
import { useWeb3Context } from "web3-react"
import celo from "../../assets/web3/celo-wallet-extension.svg"
import ledger from "../../assets/web3/ledger.svg"
import { config } from "../../config"
import { CONTRACTS } from "../../services/web3/constants"
import { getAbbreviatedAddress } from "../../utils/stringFormat"
import { gradients } from "../../theme/foundations/colors"

const metaMaskIcon = "https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"

const ConnectWalletModal = ({ isOpen, onClose }) => {
  const callToActionModal = useDisclosure()
  const context = useWeb3Context()
  const [callToAction, setCallToAction] = useState(false)
  const errorMessage = useConnectorErrorMessage(setCallToAction)

  useEffect(() => {
    if (callToAction && isOpen && context.active) callToActionModal.onOpen()
    else callToActionModal.onClose()
  }, [callToAction, isOpen])

  useEffect(() => {
    connect()
  }, [])

  const connect = async () => {
    Promise.all([requestAddNetwork(), context.setFirstValidConnector(["MetaMask"])]).then(() => {
      context.setFirstValidConnector(["MetaMask"])
    })
  }

  return (
    <>
      <Modal size="sm" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent m="1em">
          <ModalHeader>Connect your wallet</ModalHeader>
          <ModalBody>
            <VStack align="stretch">
              <Button
                size="lg"
                onClick={async () => await connect()}
                background={gradients.primary}
                justifyContent="space-between"
                rightIcon={<Image width="2em" src={metaMaskIcon} />}
              >
                {context.active ? getAbbreviatedAddress(context.account || "") : "Connect Wallet"}
              </Button>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <HStack alignItems="center">
              <Text color="red.main">{errorMessage}</Text>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const requestAddNetwork = async () => {
  const _window = window as any

  await _window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: ethers.utils.parseUnits(config.NETWORK_CHAIN_ID.toString(), "wei")._hex,
        chainName: config.NETWORK_NAME,
        nativeCurrency: {
          name: config.NETWORK_CURRENCY_NAME,
          symbol: config.NETWORK_CURRENCY_SYMBOL,
          decimals: 18,
        },
        rpcUrls: [config.NETWORK_URL],
        blockExplorerUrls: [config.NETWORK_EXPLORER_URL],
        iconUrls: ["future"],
      },
    ],
  })
}

const requestChangeAccount = async () => {
  const _window = window as any
  await _window.ethereum.request({
    method: "wallet_requestPermissions",
    params: [
      {
        eth_accounts: {},
      },
    ],
  })
}

const useConnectorErrorMessage = (setCallToAction) => {
  const context = useWeb3Context()
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (!context) return

    setCallToAction(false)
    if (context.error?.message.includes("Ethereum account locked.")) {
      window.location.reload()
    } else {
      setMessage("")
    }
  }, [context])

  return message
}
export default ConnectWalletModal
