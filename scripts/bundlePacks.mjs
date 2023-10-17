import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import {PACK_ADDRESS,EDITION_ADDRESS } from "../const/addresses";

import dotenv from "dotenv";
dotenv.config();
import fs from "fs";

(async () => {
console.log("setting up SDK...");

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY,"goerli",{
    secretKey: process.env.SECRET_KEY,
    clientId: process.env.CLIENT_ID2,
}) ;// your private key here

console.log("SDK set up");
console.log("Getting contracts");
const pack = sdk.getContract(PACK_ADDRESS,"pack");
const edition = sdk.getContract(EDITION_ADDRESS,"edition");



(await edition).setApprovalForAll(PACK_ADDRESS,true);
console.log("Approved for edition contract");

// Read in the chest.ng as a file using fs
const chestFile = fs.readFileSync("./scripts/chest.png");

//Upload the chest to IPFS
const ipfsHash = await sdk.storage.upload(chestFile);
console.log("Uploaded chest to IPFS",ipfsHash);
const url = ipfsHash;

console.log("Creating pack");
const packNfts = (await pack).create({
    name: "Chest",
    packMetadata: {
    description: "A chest with a random item inside",
    image: url
    },
    erc1155Rewards: [
        {
            // Blue nft
            contractAddress: EDITION_ADDRESS,
            tokenId: 0,
            quantityPerReward: 1,
            totalRewards: 45,

        },
        {
            // Red nft
            contractAddress: EDITION_ADDRESS,
            tokenId: 1,
            quantityPerReward: 1,
            totalRewards: 45,

        },
        
    ],
    rewardsPerPack: 1,
});


})();