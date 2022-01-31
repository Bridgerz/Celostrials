import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
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
