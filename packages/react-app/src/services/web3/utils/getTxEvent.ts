import { ethers } from "ethers";

export const getTxEvents = (
  tx: ethers.ContractReceipt,
  eventName: string
): ethers.Event[] => {
  return tx.events?.filter((e) => e.event === eventName) || Event[0];
};
