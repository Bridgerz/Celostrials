const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Celostrials";
const description = "The worlds first nfETs";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 100, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://celostrials.com",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const layerConfigurations = [
  {
    growEditionSizeTo: 50,
    layersOrder: [
      { name: "background" },
      { name: "skin" },
      { name: "eyes" },
      // { name: "glasses" },
      { name: "clothes" },
      { name: "mouth" },
      // { name: "facial_hair" },
      // { name: "hats" },
      // { name: "laser" },
      // { name: "special" },
    ],
  },
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "background" },
      { name: "skin" },
      { name: "eyes" },
      // { name: "glasses" },
      // { name: "clothes" },
      { name: "mouth" },
      // { name: "facial_hair" },
      // { name: "hats" },
      // { name: "laser" },
      // { name: "special" },
    ],
  },
  {
    growEditionSizeTo: 150,
    layersOrder: [
      { name: "background" },
      { name: "skin" },
      { name: "eyes" },
      { name: "glasses" },
      { name: "clothes" },
      { name: "mouth" },
      { name: "facial_hair" },
      // { name: "hats" },
      // { name: "laser" },
      // { name: "special" },
    ],
  },
  {
    growEditionSizeTo: 175,
    layersOrder: [
      { name: "background" },
      { name: "skin" },
      { name: "eyes" },
      { name: "glasses" },
      { name: "clothes" },
      { name: "mouth" },
      { name: "facial_hair" },
      { name: "hats" },
      // { name: "laser" },
    ],
  },
  {
    growEditionSizeTo: 200,
    layersOrder: [
      { name: "background" },
      { name: "skin" },
      { name: "eyes" },
      { name: "glasses" },
      { name: "clothes" },
      { name: "mouth" },
      { name: "facial_hair" },
      { name: "hats" },
      { name: "laser" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

// const format = {
//   width: 702,
//   height: 905,
//   smoothing: false,
// };
const format = {
  width: 70,
  height: 90,
  smoothing: false,
};

const gif = {
  export: true,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 10,
  thumbWidth: 500,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 17,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
