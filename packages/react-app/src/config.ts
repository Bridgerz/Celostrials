import dotenv from "dotenv";
import { NETWORKS } from "./constants";
dotenv.config();

export const isProd = process.env.NODE_ENV === "production";

const getNetworkUrl = (name: string) => {
  const url = NETWORKS[name].rpcUrl;
  if (!url) throw new Error("Invalid Network name in env");
  return url;
};

const getNetworkID = (name: string) => {
  const url = NETWORKS[name].chainId;
  if (!url) throw new Error("Invalid Network name in env");
  return url;
};

const getExplorerUrl = (name: string) => {
  const url = NETWORKS[name].blockExplorer;
  if (!url) throw new Error("Invalid Network name in env");
  return url;
};

const getCurrencyName = (name: string) => {
  const currencyName = NETWORKS[name].currencyName;
  if (!currencyName) throw new Error("Invalid Network name in env");
  return currencyName;
};

const getCurrencySymbol = (name: string) => {
  const currencySymbol = NETWORKS[name].currencySymbol;
  if (!currencySymbol) throw new Error("Invalid Network name in env");
  return currencySymbol;
};

export const config = {
  NETWORK_URL: getNetworkUrl(process.env.REACT_APP_NETWORK_NAME!),
  NETWORK_EXPLORER_URL: getExplorerUrl(process.env.REACT_APP_NETWORK_NAME!),
  NETWORK_CHAIN_ID: getNetworkID(process.env.REACT_APP_NETWORK_NAME!),
  NETWORK_CURRENCY_NAME: getCurrencyName(process.env.REACT_APP_NETWORK_NAME!),
  NETWORK_CURRENCY_SYMBOL: getCurrencySymbol(
    process.env.REACT_APP_NETWORK_NAME!
  ),
  NETWORK_NAME: process.env.REACT_APP_NETWORK_NAME!,
  CELOSTRIALS_ADDRESS: process.env.REACT_APP_CELOSTRIALS_ADDRESS!,
  IPFS_JSON_CID: process.env.REACT_APP_IPFS_JSON_CID!,
  IPFS_IMAGE_CID: process.env.REACT_APP_IPFS_IMAGE_CID!,
  RARITY_URL: process.env.REACT_APP_RARITY_URL!,
  CONTRACT_URL: process.env.REACT_APP_CONTRACT_URL!,
};

export default config;
