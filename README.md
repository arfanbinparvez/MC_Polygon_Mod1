# MetaNFT Project

## Overview

The MetaNFT project involves creating, deploying, and managing an ERC721A NFT collection. The NFTs are generated using DALLE 2 or Midjourney, stored on IPFS using Pinata, and deployed to the Sepolia Ethereum Testnet. This project also includes scripts for batch minting and transferring NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge.

## Prerequisites

- **Node.js** and **npm** installed on your machine.
- **Hardhat** framework for Ethereum development.
- **Infura Project ID** for connecting to the Sepolia network.
- **Pinata** account for IPFS storage.
- **Polygon** account and setup for using the FxPortal Bridge.

## Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
PRIVATE_KEY=your-private-key
INFURA_PROJECT_ID=your-infura-project-id
Generate and Upload Images
## Deployment and Management
1. Generate 5 unique images using DALLE 2 or Midjourney.
--Upload the images to Pinata and note down the IPFS CIDs.
--Create Metadata

3. Create a JSON metadata file for each NFT with the IPFS link to the image and prompt description.
--Upload these JSON files to Pinata and record their IPFS CIDs.
--Deploy the Contract

5. Modify the scripts/deploy.js file to include the base URI from Pinata.
--Deploy the MetaNFT contract to the Sepolia network.
--Batch Mint NFTs

6. Edit scripts/mint.js to specify the number of NFTs to mint.
--Execute the minting script to create the NFTs in bulk.
--Batch Transfer NFTs

# Adjust scripts/transfer.js for transferring NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge.
# Run the transfer script to complete the batch transfer.
*Author*
Arfan
