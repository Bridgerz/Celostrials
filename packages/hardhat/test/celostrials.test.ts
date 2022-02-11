import { upgrades, ethers, network } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";
import { assert, expect } from "chai";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { Celostrials } from "../types/Celostrials";
import { BigNumber } from "ethers";

chai.use(solidity);

describe("Celostrials Tests", function() {
  let deployer: SignerWithAddress;
  let memberA: SignerWithAddress;
  let celostrials: Celostrials;

  before(async function() {
    const accounts = await ethers.getSigners();
    deployer = accounts[0];
    memberA = accounts[1];
  });

  it("Successfully deploys Contracts", async function() {
    const celostrialsFactory = await ethers.getContractFactory("Celostrials");

    celostrials = (await celostrialsFactory.deploy()) as Celostrials;
    await (await celostrials.closeWhitelist()).wait();
    expect(celostrials.address).to.properAddress;
  });

  it("Successfully mints 1", async function() {
    let tx = await (await celostrials.mint(memberA.address, 1)).wait();
    const tokenId = ethers.utils.formatUnits(
      tx.events?.find(
        (e: any) => e.eventSignature == "Transfer(address,address,uint256)"
      )?.args?.tokenId,
      "wei"
    );
    // console.log("minted: ", tokenId);

    expect(Number(tokenId)).to.be.greaterThan(0);
  });

  it("Successfully mints 3", async function() {
    let tx = await (await celostrials.mint(memberA.address, 3)).wait();

    const events = tx.events ? tx.events : [];

    for (let value of events) {
      // console.log(
      //   "minted: ",
      //   ethers.utils.formatUnits(value.args?.tokenId, "wei")
      // );
      expect(Number(value.args?.tokenId)).to.be.greaterThan(0);
    }
  });

  it("Successfully mints 6", async function() {
    let tx = await (await celostrials.mint(memberA.address, 6)).wait();

    const events = tx.events ? tx.events : [];

    for (let value of events) {
      // console.log(
      //   "minted: ",
      //   ethers.utils.formatUnits(value.args?.tokenId, "wei")
      // );
      expect(Number(value.args?.tokenId)).to.be.greaterThan(0);
    }
  });

  it("Successfully mints 10", async function() {
    let tx = await (await celostrials.mint(memberA.address, 10)).wait();

    const events = tx.events ? tx.events : [];

    for (let value of events) {
      // console.log(
      //   "minted: ",
      //   ethers.utils.formatUnits(value.args?.tokenId, "wei")
      // );
      expect(Number(value.args?.tokenId)).to.be.greaterThan(0);
    }
  });

  it("Successfully mints 10", async function() {
    let tx = await (await celostrials.mint(memberA.address, 10)).wait();

    const events = tx.events ? tx.events : [];

    for (let value of events) {
      // console.log(
      //   "minted: ",
      //   ethers.utils.formatUnits(value.args?.tokenId, "wei")
      // );
      expect(Number(value.args?.tokenId)).to.be.greaterThan(0);
    }
  });

  it("Successfully mints 10", async function() {
    let tx = await (await celostrials.mint(memberA.address, 10)).wait();

    const events = tx.events ? tx.events : [];

    for (let value of events) {
      // console.log(
      //   "minted: ",
      //   ethers.utils.formatUnits(value.args?.tokenId, "wei")
      // );
      expect(
        Number(ethers.utils.formatUnits(value.args?.tokenId, "wei"))
      ).to.be.greaterThan(0);
    }
  });

  it("Successfully mints 160", async function() {
    for (var i = 0; i <= 15; i++) {
      // console.log(`minting batch ${i} of 16`);
      let tx = await (
        await celostrials.mint(memberA.address, 10, { gasLimit: 20000000 })
      ).wait();

      const events = tx.events ? tx.events : [];

      for (let value of events) {
        // console.log(
        //   "minted: ",
        //   ethers.utils.formatUnits(value.args?.tokenId, "wei")
        // );
        expect(Number(value.args?.tokenId)).to.be.greaterThan(0);
      }
    }
  });
});
