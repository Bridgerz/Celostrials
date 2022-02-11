export const getDesc = (nft) => {
  let desc;
  desc = `
  🔷ID: ${nft.id}
  
  🔷Rarity score: ${nft.rarity_score.toFixed(2)}
  
  🔷Rarity rank: ${nft.rarity_rank + 1}
  
  ${
    nft.current_price !== "-"
      ? `🔷Price: Ξ${formatPrice(nft.current_price)}`
      : ""
  }
  `;
  return desc;
};

export const getToken = (ipfs_url) => {
  "ipfs://QmbvPkRjZbNSjM5rKUTAPHfkeZZfngqoLpDPjqs3jL8Jz3/6186.png";
  if (ipfs_url) {
    return ipfs_url.split("/")[3];
  } else {
    return "";
  }
};

export const fetcher = (url) => fetch(url).then((r) => r.json());

export const json2query = (json) => {
  return Object.keys(json)
    .map((key) => key + "=" + json[key])
    .join("&");
};

export const formatPrice = (price) => {
  // wei = 10^18
  if (price !== "-") return (price / 10 ** 18).toFixed(2);
  else return "-";
};
