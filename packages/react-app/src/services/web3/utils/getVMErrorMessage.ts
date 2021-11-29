import { ethers } from "ethers";

export const getVMErrorMessage = (errorMessage: string): string => {
  const match = errorMessage.match(/'([^']+)'/);
  return match ? match[1] : "An unknown error occured";
};

export const tryGetErrorMessage = (errorMessage: string): string | null => {
  const match = getVMErrorMessage(errorMessage);
  const message = JSON.parse(match).value.data.message;
  if (!message) return "An unknown error occured";
  return message;
};
