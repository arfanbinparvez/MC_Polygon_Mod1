# MetaNFT Project

## Overview

This project involves creating, deploying, and managing an ERC721A NFT collection. The NFTs are generated using DALLE 2 or Midjourney, stored on IPFS using Pinata, and deployed to the Sepolia Ethereum Testnet. The project also includes scripts for batch minting and transferring NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge.

## Prerequisites

1. **Node.js** and **npm** installed.
2. **Hardhat** framework.
3. **Infura Project ID** for Sepolia network.
4. **Pinata** account for IPFS storage.
5. **Polygon** account and **FxPortal Bridge** setup.

## Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. **Install Dependencies**

bash
Copy code
npm install
Configure Environment Variables

3. **Create a .env file in the root directory and add private key and Infura Project ID:**

plaintext
Copy code
PRIVATE_KEY
INFURA_PROJECT_ID
Ensure .env is included in .gitignore to avoid sharing sensitive information.

4. **Update Hardhat Configuration**

Modify hardhat.config.js to include Infura Project ID.

5. **Steps to Deploy**
Generate and Upload Images

Use DALLE 2 or Midjourney to generate 5 images.
Upload these images to Pinata and obtain their IPFS CIDs.
Create Metadata

Create a JSON file for each NFT including the IPFS image link and prompt description.
Upload these JSON files to Pinata and obtain their IPFS CIDs.
Deploy the Contract

Modify scripts/deploy.js to include the base URI from Pinata.
Deploy the contract to the Sepolia network using Hardhat.
Batch Mint NFTs

Modify scripts/mint.js to mint the NFTs.
Run the minting script to create the NFTs in bulk.
Batch Transfer NFTs

Modify scripts/transfer.js to handle NFT transfers using the FxPortal Bridge.
Run the transfer script to move NFTs from Ethereum to Polygon Mumbai.
Additional Notes
Ensure you have enough ETH in the Sepolia account to cover gas fees.
Replace placeholder values like <BaseCID> and contract addresses with actual values.
## Author
Arfan
