import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useWeb3Context } from "web3-react";

export const useGetEthersProviderAndSigner = () => {
  const context = useWeb3Context();
  const [provider, setProvider] = useState(
    context.library
      ? new ethers.providers.Web3Provider(context.library.provider)
      : null
  );
  const [signer, setSigner] = useState(provider ? provider.getSigner() : null);

  useEffect(() => {
    if (context?.library?.provider) {
      const newProvider = new ethers.providers.Web3Provider(
        context.library.provider
      );
      setProvider(newProvider);
      setSigner(newProvider.getSigner());
    }
  }, [context?.library?.provider]);

  return { provider, signer };
};
