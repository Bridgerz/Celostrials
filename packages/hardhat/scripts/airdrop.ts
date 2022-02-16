import { config, deployments, ethers } from "hardhat";
import { Celostrials__factory } from "../types";
const airdrops = "./scripts/airdrops.json";
const fs = require("fs");

const airdropReceipt = "./airdrop_receipts.json";

async function main(): Promise<void> {
  if (!fs.existsSync(airdrops)) {
    throw Error("recipients file not found");
  }
  let addresses = fs.readFileSync(airdrops).toString();
  addresses = JSON.parse(addresses);

  if (!fs.existsSync(airdropReceipt))
    fs.writeFileSync(airdropReceipt, JSON.stringify({}, null, 2));
  let receipts = fs.readFileSync(airdropReceipt).toString();
  receipts = JSON.parse(receipts);

  const signer = (await ethers.getSigners())[0];
  let deployment = await deployments.getOrNull("Celostrials");
  if (!deployment) throw Error("No deployment");
  const celostrials = Celostrials__factory.connect(deployment.address, signer);

  let tokenID = 18;

  for (let address of addresses) {
    try {
      receipts[address] = {
        address: address,
        isSuccess: true,
        error: "",
      };
      fs.writeFileSync(airdropReceipt, JSON.stringify(receipts, null, 2));

      await (
        await celostrials.transferFrom(signer.address, address, tokenID)
      ).wait();
      console.log("📦 airdropeed ", tokenID, " to ", address);
      tokenID++;
    } catch (e) {
      console.log("❌ Error adding: ", address);
      receipts[address] = {
        address: address,
        isSuccess: false,
        error: e,
      };
      fs.writeFileSync(airdropReceipt, JSON.stringify(receipts, null, 2));
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
