import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployments, ethers } from "hardhat";

const func: DeployFunction = async function(
  hardhat: HardhatRuntimeEnvironment
) {
  const vesting = await deployments.deploy("Celostrials", {
    from: (await hardhat.ethers.getSigners())[0].address,
    args: [],
  });
};
export default func;
func.tags = ["Celostrials"];
