# 🏄‍♂️ Quick Start

> start all processes

```bash
yarn start-all
```

# 🏗 Run Contract Tests

```bash
yarn test
```

# 🤓 Details

> install and start the 👷‍ Hardhat chain:

```bash
yarn
yarn chain
```

> 🛰 deploy contracts:

```bash
yarn deploy
```

# 👽 Create a new collection

A few things to keep in mind.

1. The skin and background layers shouldn't have "base" attributes
2.

> 🎨 Generate the collection images and metadata

```bash
yarn build-art
```

> ↗️ Upload the collection images to pinata

1. upload the `packages/art-gen/build/images` directory to pinata
2. copy the generated IPFS CID
3. paste the CID in `packages/art-gen/src/config.ts` as the "baseUri"

> ➕ Update the collection metadata

```bash
yarn update_info
```

> © Generate rarity

1. copy the contents of `packages/art-gen/build/json/_metadata.json`
2. paste over the value of `packages/rarity/data/collection.json`
3. start the rarity app by running `yarn start-rarity`
4. update the collection metadata again by running `yarn generate_rarity`

> ↗️ Upload the collection metadata to pinata

1. upload the `packages/art-gen/build/json` directory to pinata
2. copy the generated IPFS CID
3. paste the CID in `packages/hardhat/contracts/Celostrials.sol` in the constructor of the contract
4. deploy the contract

> 🔄 Update contract and CID references

1. paste the deployed contract address, and generated CID in the react-app env

🔏 smart contracts in `packages/hardhat/contracts`

💼 Deployment scripts in `packages/hardhat/deploy`
