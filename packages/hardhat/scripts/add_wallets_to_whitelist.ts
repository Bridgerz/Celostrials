import { config, deployments, ethers } from "hardhat";
import { Celostrials__factory } from "../types";
const whitelist = "./scripts/whitelist.json";
const fs = require("fs");

const whiteListReceipt = "./whitelist_receipts.json";

async function main(): Promise<void> {
  if (!fs.existsSync(whitelist)) {
    throw Error("recipients file not found");
  }
  let addresses = fs.readFileSync(whitelist).toString();
  addresses = JSON.parse(addresses);

  if (!fs.existsSync(whiteListReceipt))
    fs.writeFileSync(whiteListReceipt, JSON.stringify({}, null, 2));
  let receipts = fs.readFileSync(whiteListReceipt).toString();
  receipts = JSON.parse(receipts);

  const signer = (await ethers.getSigners())[0];
  let deployment = await deployments.getOrNull("Celostrials");
  if (!deployment) throw Error("No deployment");
  const celostrials = Celostrials__factory.connect(deployment.address, signer);

  for (let address of addresses) {
    try {
      if (receipts[address] && receipts[address].isSuccess) {
        console.log("✅ Transfer already sent to " + address);
        continue;
      }
      receipts[address] = {
        address: address,
        isSuccess: true,
        error: "",
      };
      fs.writeFileSync(whiteListReceipt, JSON.stringify(receipts, null, 2));

      await (await celostrials.addUser(address)).wait();
      console.log("💵 whitelisted ", address);
    } catch (e) {
      console.log("❌ Error adding: ", address);
      receipts[address] = {
        address: address,
        isSuccess: false,
        error: e,
      };
      fs.writeFileSync(whiteListReceipt, JSON.stringify(receipts, null, 2));
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
