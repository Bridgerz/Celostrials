import React from "react";
import { getToken } from "../util";

export const NFT = (nft) => {
  return (
    <>
      <a
        className="text-left w-24
        cursor-pointer rounded-md shadow-xs
        mr-3 mb-3 sm:mr-4 hover:underline text-center"
        href={`/${nft.id}`}
      >
        <img
          src={`https://celostrials.s3.us-west-2.amazonaws.com/${getToken(
            nft.image
          )}`}
          className="rounded-md px-2 pt-2 h-auto bg-black"
        />
        <div className="rounded-b-md py-2 px-2">
          <h3 className="text-xs text-gray-600">#{nft.id}</h3>
        </div>
      </a>
    </>
  );
};
