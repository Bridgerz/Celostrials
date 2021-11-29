import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useWeb3Context } from "web3-react";

import { CONTRACTS } from "../constants";
import { Celostrials, Celostrials__factory } from "../types";
import { useGetEthersProviderAndSigner } from "../utils/useGetEthersProviderAndSigner";

export const useCelostrialsContract = () => {
  const context = useWeb3Context();
  const { provider, signer } = useGetEthersProviderAndSigner();
  const [contract, setContract] = useState<Celostrials | null>(
    provider ? getCelostrialsContract(provider) : null
  );

  useEffect(() => {
    if (provider && !contract?.provider) {
      setContract(getCelostrialsContract(provider));
    }
  }, [provider]);

  return {
    contract,
    mint: async (amount: number) => {
      if (contract && signer) {
        const gas = await contract
          .connect(signer)
          .estimateGas.mint(await signer.getAddress(), amount, {
            value: ethers.utils.parseEther(String(amount * 3)),
          });
        return contract
          .connect(signer)
          .mint(await signer.getAddress(), amount, {
            value: ethers.utils.parseEther(String(amount * 3)),
            gasLimit: gas.mul(10),
          });
      }
    },
    totalSupply: async () => {
      if (contract && signer) {
        return contract?.connect(await signer.getAddress()).totalSupply();
      }
    },
  };
};

export const getCelostrialsContract = (
  provider: ethers.providers.Web3Provider
) =>
  new ethers.Contract(
    CONTRACTS.Celostrials,
    Celostrials__factory.createInterface(),
    provider
  ) as Celostrials;
