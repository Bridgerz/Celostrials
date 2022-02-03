import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";
import { ThemeProvider } from "./theme";
import "./theme/App.scss";
import { ContractKitProvider } from "@celo-tools/use-contractkit";
import "@celo-tools/use-contractkit/lib/styles.css";

function App() {
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
