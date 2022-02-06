import {
  useContractKit,
  useGetConnectedSigner,
} from "@celo-tools/use-contractkit";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { CONTRACTS } from "../constants";
import { Celostrials, Celostrials__factory } from "../types";

export const useCelostrialsContract = () => {
  const getSigner = useGetConnectedSigner();
  const { address, network } = useContractKit();

  const [contract, setContract] = useState<Celostrials | null>();

  useEffect(() => {
    async function loadBalance() {
      let signer;
      if (address) {
        signer = await getSigner();
      } else {
        const provider = new ethers.providers.JsonRpcProvider(network.rpcUrl);
        signer = new ethers.VoidSigner(
          "0x97597d6f7308281fe364c57d8492c058132281fa",
          provider
        );
      }
      setContract(Celostrials__factory.connect(CONTRACTS.Celostrials, signer));
    }
    loadBalance();
  }, [address, getSigner, network]);

  return {
    contract,
    mint: async (amount: number) => {
      if (address && contract) {
        const gas = await contract.estimateGas.mint(address, amount, {
          value: ethers.utils.parseEther(String(amount * 3)),
        });
        return contract.mint(address, amount, {
          value: ethers.utils.parseEther(String(amount * 3)),
          gasLimit: gas.mul(10),
        });
      }
    },
    getTotalSupply: async () => {
      if (contract) {
        return contract.totalSupply();
      }
    },
    getMaxSupply: async () => {
      if (contract) {
        return contract.maxSupply();
      }
    },
    onlyWhitelist: async () => {
      if (contract) {
        return contract.onlyWhitelist();
      }
    },
  };
};
