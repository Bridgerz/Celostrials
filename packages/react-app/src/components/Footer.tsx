import { BoxProps, HStack, Text } from "@chakra-ui/layout"
import { Flex } from "@chakra-ui/react"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from "react"
import { useWeb3Context } from "web3-react"
import colors from "../theme/foundations/colors"
import Icon from "./Icon"

const Footer = ({ ...rest }: BoxProps) => {
  const active = useWeb3Context().active
  const [label, setLabel] = useState("Disconnected")
  const [iconColor, setIconColor] = useState("Disconnected")

  useEffect(() => {
    setLabel(active ? "Live" : "Disconnected")
    setIconColor(active ? colors.green.main : colors.gray.cement)
  }, [active])

  return (
    <Flex {...footerStyles} {...rest}>
      Foot
    </Flex>
  )
}

export const footerHeight = 41

const footerStyles: BoxProps = {
  px: { base: 4, md: 6 },
  py: { base: 2, md: 3 },
  justifyContent: "space-between",
  borderTop: "solid 1px",
  borderColor: "primary.main",
  bgColor: "white !important",
  height: footerHeight,
  bottom: 0,
  position: "fixed",
  w: "full",
}

export default Footer
