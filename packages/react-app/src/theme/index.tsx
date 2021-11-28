import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import components from "./components"
import foundations from "./foundations"
import { styles as globalStyles } from "./styles"
import { textStyles } from "./textStyles"
import { layerStyles } from "./layerStyles"

const overrides: any = {
  ...foundations,
  components,
  styles: globalStyles,
  textStyles,
  layerStyles,
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
}

export const dappTheme = extendTheme(overrides)

export const ThemeProvider = (props: any) => {
  return <ChakraProvider theme={dappTheme}>{props.children}</ChakraProvider>
}
