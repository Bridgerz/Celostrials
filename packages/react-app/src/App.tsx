import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { useWeb3Context } from "web3-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";

import Web3Provider from "./services/web3/Web3Provider";
import { ThemeProvider } from "./theme";
import "./theme/App.scss";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <RecoilRoot>
          <Web3Provider>
            <HashRouter>
              <AppLayout />
            </HashRouter>
          </Web3Provider>
        </RecoilRoot>
      </ThemeProvider>
    </div>
  );
}

const AppLayout = () => {
  const connectModal = useDisclosure();

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
