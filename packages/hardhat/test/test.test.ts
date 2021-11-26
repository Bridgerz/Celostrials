import { upgrades, ethers, network } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";
import { expect } from "chai";
import chai from "chai";
import { solidity } from "ethereum-waffle";

chai.use(solidity);

describe("ReSourcetoken Tests", function() {
  let deployer: SignerWithAddress;
  let memberA: SignerWithAddress;

  before(async function() {
    const accounts = await ethers.getSigners();
    deployer = accounts[0];
    memberA = accounts[1];
  });

  it("Successfully deploys Contracts", async function() {});
});
