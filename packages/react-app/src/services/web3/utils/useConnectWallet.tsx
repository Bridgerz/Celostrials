import { useEffect } from "react";
import { useWeb3Context } from "web3-react";
import { ethers } from "ethers";
import config from "../../../config";

export const useConnectWallet = () => {
  const context = useWeb3Context();

  useEffect(() => {
    if (context.error) {
      context.unsetConnector();
    }
  }, [context]);

  const connect = async () => {
    Promise.all([
      requestAddNetwork(),
      context.setFirstValidConnector(["MetaMask"]),
    ]).then(() => {
      context.setFirstValidConnector(["MetaMask"]);
    });
  };

  const requestAddNetwork = async () => {
    const _window = window as any;

    await _window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: ethers.utils.parseUnits(
            config.NETWORK_CHAIN_ID.toString(),
            "wei"
          )._hex,
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
    });
  };

  return connect;
};
