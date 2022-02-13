import { config, deployments, ethers } from "hardhat";
import { Celostrials__factory } from "../types";
const whitelist = "./scripts/whitelist.json";
const fs = require("fs");

async function main(): Promise<void> {
  if (!fs.existsSync(whitelist)) {
    throw Error("recipients file not found");
  }
  let addresses = fs.readFileSync(whitelist).toString();
  addresses = JSON.parse(addresses);

  const signer = (await ethers.getSigners())[0];
  let deployment = await deployments.getOrNull("Celostrials");
  if (!deployment) throw Error("No deployment");
  const celostrials = Celostrials__factory.connect(deployment.address, signer);
  for (let address of addresses) {
    await (await celostrials.addUser(address)).wait();
  }
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
