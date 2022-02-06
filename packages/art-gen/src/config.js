const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Celostrial";
const description = "The worlds first nfETs";
const baseUri = "ipfs://QmYjqN6roir7FkZqwSYAf1C1LUc8qvBJeZZFwJkD5nzSLA";

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

// head can't be with head-gear
// head-gear can't be with head
// special can't be with mouth

const layerConfigurations = [
  {
    growEditionSizeTo: 1100,
    layersOrder: [
      {
        name: "background",
      },
      { name: "special_effect" },
      { name: "skin" },
      { name: "eyes" },
      { name: "clothes" },
      { name: "mouth" },
      { name: "facial_hair" },
      { name: "head" },
      { name: "glasses" },
      { name: "laser" },
    ],
  },
  {
    growEditionSizeTo: 1700,
    layersOrder: [
      {
        name: "background",
      },
      { name: "special_effect" },
      { name: "skin" },
      { name: "eyes" },
      { name: "clothes" },
      { name: "mouth" },
      { name: "facial_hair" },
      { name: "special_head" },
      { name: "laser" },
    ],
  },
  {
    growEditionSizeTo: 1800,
    layersOrder: [
      {
        name: "background",
      },
      { name: "special_effect" },
      { name: "skin" },
      { name: "eyes" },
      { name: "clothes" },
      { name: "facial_hair" },
      { name: "head" },
      { name: "glasses" },
      { name: "special_mouth" },
      { name: "laser" },
    ],
  },
  {
    growEditionSizeTo: 1950,
    layersOrder: [
      {
        name: "background",
      },
      { name: "special_effect" },
      { name: "skin" },
      { name: "eyes" },
      { name: "clothes" },
      { name: "mouth" },
      { name: "special_facial_hair" },
      { name: "glasses" },
      { name: "laser" },
    ],
  },
  {
    growEditionSizeTo: 2000,
    layersOrder: [
      {
        name: "background",
      },
      { name: "special_effect" },
      { name: "special_skin" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "facial_hair" },
      { name: "head" },
      { name: "glasses" },
      { name: "laser" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 560,
  height: 720,
  smoothing: false,
};

const gif = {
  export: false,
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
