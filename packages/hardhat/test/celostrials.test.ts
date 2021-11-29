import { upgrades, ethers, network } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";
import { assert, expect } from "chai";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { Celostrials } from "../types/Celostrials";
import { BigNumber } from "ethers";

chai.use(solidity);

describe("ReSourcetoken Tests", function() {
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
    console.log("printed: ", tokenId, " at ", 21);

    expect(Number(tokenId)).to.be.greaterThan(0);
  });

  it("Successfully mints 3", async function() {
    let tx = await (await celostrials.mint(memberA.address, 3)).wait();

    const events = tx.events ? tx.events : [];

    for (let value of events) {
      console.log(
        "printed: ",
        ethers.utils.formatUnits(value.args?.tokenId, "wei")
      );
      expect(Number(value.args?.tokenId)).to.be.greaterThan(0);
    }
  });

  it("Successfully mints 6", async function() {
    let tx = await (await celostrials.mint(memberA.address, 6)).wait();

    const events = tx.events ? tx.events : [];

    for (let value of events) {
      console.log(
        "printed: ",
        ethers.utils.formatUnits(value.args?.tokenId, "wei")
      );
      expect(Number(value.args?.tokenId)).to.be.greaterThan(0);
    }
  });

  it("Successfully mints 35", async function() {
    let tx = await (await celostrials.mint(memberA.address, 35)).wait();

    const events = tx.events ? tx.events : [];

    for (let value of events) {
      console.log(
        "printed: ",
        ethers.utils.formatUnits(value.args?.tokenId, "wei")
      );
      expect(Number(value.args?.tokenId)).to.be.greaterThan(0);
    }
  });

  it("Successfully mints 35", async function() {
    let tx = await (await celostrials.mint(memberA.address, 35)).wait();

    const events = tx.events ? tx.events : [];

    for (let value of events) {
      console.log(
        "printed: ",
        ethers.utils.formatUnits(value.args?.tokenId, "wei")
      );
      expect(Number(value.args?.tokenId)).to.be.greaterThan(0);
    }
  });

  it("Successfully mints 10", async function() {
    let tx = await (await celostrials.mint(memberA.address, 10)).wait();

    const events = tx.events ? tx.events : [];

    for (let value of events) {
      console.log(
        "printed: ",
        ethers.utils.formatUnits(value.args?.tokenId, "wei")
      );
      expect(Number(ethers.utils.formatUnits(value.args?.tokenId, "wei")))
        .to.be.greaterThan(100)
        .but.lessThan(201);
    }
  });

  // it("Successfully mints 20", async function() {
  //   let tx = await (await celostrials.mint(memberA.address, 20)).wait();

  //   const events = tx.events ? tx.events : [];

  //   for (let value of events) {
  //     console.log(
  //       "printed: ",
  //       ethers.utils.formatUnits(value.args?.tokenId, "wei")
  //     );
  //     expect(Number(ethers.utils.formatUnits(value.args?.tokenId, "wei")))
  //       .to.be.greaterThan(100)
  //       .but.lessThan(201);
  //   }
  // });

  // it("Successfully mints 20", async function() {
  //   let tx = await (await celostrials.mint(memberA.address, 20)).wait();

  //   const events = tx.events ? tx.events : [];

  //   for (let value of events) {
  //     console.log(
  //       "printed: ",
  //       ethers.utils.formatUnits(value.args?.tokenId, "wei")
  //     );
  //     expect(Number(ethers.utils.formatUnits(value.args?.tokenId, "wei")))
  //       .to.be.greaterThan(100)
  //       .but.lessThan(201);
  //   }
  // });

  // it("Successfully mints the rest of the supply", async function() {
  //   this.timeout(10000000);
  //   const maxSupply = Number(
  //     ethers.utils.formatUnits(await celostrials.maxSupply(), "wei")
  //   );
  //   const totalSupply = Number(
  //     ethers.utils.formatUnits(await celostrials.totalSupply(), "wei")
  //   );

  //   let gas = BigNumber.from(1000000);
  //   for (var i = 0; i < maxSupply - totalSupply; i++) {
  //     await ethers.provider.send("evm_increaseTime", [30]); // wait 30 seconds
  //     await ethers.provider.send("evm_mine", []);
  //     let confirmed = false;
  //     let tx;
  //     while (!confirmed) {
  //       try {
  //         tx = await (
  //           await celostrials.mint(memberA.address, 1, {
  //             gasLimit: gas,
  //           })
  //         ).wait();
  //         confirmed = true;
  //       } catch (e) {
  //         console.log(e);
  //         gas = gas.mul(2);
  //       }
  //     }
  //     const tokenId = ethers.utils.formatUnits(
  //       tx.events?.find(
  //         (e: any) => e.eventSignature == "Transfer(address,address,uint256)"
  //       )?.args?.tokenId,
  //       "wei"
  //     );
  //     console.log("printed: ", tokenId, " at ", i);
  //   }
  // });
});
