import { useContractKit } from "@celo-tools/use-contractkit";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export const useGetEthersProviderAndSigner = () => {
  const { getConnectedKit, address } = useContractKit();

  const getProvider = async () => {
    const kit = await getConnectedKit();
    return kit.web3.currentProvider;
  };

  const [provider, setProvider] = useState(
    address ? new ethers.providers.Web3Provider(getProvider) : null
  );
  const [signer, setSigner] = useState(provider ? provider.getSigner() : null);
  useEffect(() => {
    if (address) {
      const newProvider = new ethers.providers.Web3Provider(getProvider);
      setProvider(newProvider);
      setSigner(newProvider.getSigner());
    }
  }, [address]);
  return { provider, signer };
};
