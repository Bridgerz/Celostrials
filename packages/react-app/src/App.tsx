import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";
import { ThemeProvider } from "./theme";
import "./theme/App.scss";
import {
  Alfajores,
  ContractKitProvider,
  Mainnet,
} from "@celo-tools/use-contractkit";
import "@celo-tools/use-contractkit/lib/styles.css";
import { config } from "./config";

function App() {
  const prod = config.NETWORK_NAME === "celo";
  return (
    <div className="App">
      <ThemeProvider>
        <RecoilRoot>
          <HashRouter>
            <ContractKitProvider
              dapp={{
                name: "Celostrials",
                icon: "",
                description:
                  "An intergalactic collection of unique beings, found exclusively on the Celo Blockchain.",
                url: "https://celostrials.com",
              }}
              networks={[Alfajores]}
              network={{
                name: prod ? Mainnet.name : Alfajores.name,
                rpcUrl: prod ? Mainnet.rpcUrl : Alfajores.rpcUrl,
                graphQl: prod ? Mainnet.graphQl : Alfajores.graphQl,
                explorer: prod ? Mainnet.explorer : Alfajores.explorer,
                chainId: prod ? Mainnet.chainId : Alfajores.chainId,
              }}
            >
              <AppLayout />
            </ContractKitProvider>
            ,
          </HashRouter>
        </RecoilRoot>
      </ThemeProvider>
    </div>
  );
}

const AppLayout = () => {
  return (
    <>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <Routes />
      <Header />
      <Footer />
    </>
  );
};

export default App;
