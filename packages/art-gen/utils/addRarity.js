const fs = require("fs");

const rarityFile = "../rarity/ranks.json";
const jsonPath = "./build/json/";
const metadataFile = "./build/json/_metadata.json";

const addRarity = () => {
  try {
    if (fs.existsSync(rarityFile)) {
      nfts = fs.readFileSync(rarityFile).toString();
      nfts = JSON.parse(nfts);
    } else {
      throw Error("No rarity file");
    }
  } catch (e) {
    console.log(e);
  }

  try {
    for (var nft of nfts) {
      let fileName = jsonPath + nft.id + ".json";
      if (!fs.existsSync(fileName)) {
        throw Error("File ", fileName, " does not exist");
      }
      fs.writeFileSync(fileName, JSON.stringify(nft, null, 2));
    }
  } catch (e) {
    console.log(e);
  }

  if (!fs.existsSync(metadataFile)) {
    throw Error("File ", metadataFile, " does not exist");
  }
  fs.writeFileSync(metadataFile, JSON.stringify(nfts, null, 2));
};

(() => {
  addRarity();
})();
