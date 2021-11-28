export const NETWORKS = {
  localhost: {
    chainId: 31337,
    blockExplorer: "https://alfajores-forno.celo-testnet.org",
    rpcUrl: "http://127.0.0.1:8545",
    currencySymbol: "CELO",
    currencyName: "Celo",
  },
  "celo-alfajores": {
    chainId: 44787,
    rpcUrl: `https://alfajores-forno.celo-testnet.org`,
    blockExplorer: "https://alfajores-blockscout.celo-testnet.org",
    currencySymbol: "A-CELO",
    currencyName: "Celo",
  },
  celo: {
    chainId: 42220,
    rpcUrl: `https://forno.celo.org`,
    blockExplorer: "https://explorer.celo.org",
    currencySymbol: "CELO",
    currencyName: "Celo",
  },
}
