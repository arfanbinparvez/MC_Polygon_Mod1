MetaNFT Project
Description
The MetaNFT project is an advanced NFT solution that utilizes the ERC721A standard on both the Ethereum and Polygon networks. This project involves generating a 5-item NFT collection using DALLE 2 or Midjourney, storing the images and metadata on IPFS, deploying an ERC721A smart contract, and managing NFT transfers across different blockchain networks.

Getting Started
Prerequisites
Node.js: Make sure Node.js is installed on your machine. It is required for running Hardhat scripts.
Hardhat: A development environment for Ethereum software.
MetaMask: A browser extension to manage your Ethereum accounts and interact with the blockchain.
Infura or Alchemy: To connect to Ethereum networks.
Pinata: To upload assets to IPFS.
Polygon Bridge: To transfer NFTs between Ethereum and Polygon networks.
Steps to Set Up
Generate NFT Collection

Use DALLE 2 or Midjourney to create 5 unique images.
Download the generated images.
Upload to IPFS

Sign up for Pinata and upload your images.
Create and upload metadata JSON files to IPFS that link to your images and include the prompt descriptions used for generation.
Deploy Smart Contract

Use the provided deployment script to deploy the ERC721A contract to the Ethereum Sepolia Testnet.
Set the base URI of the contract to point to the IPFS CID of your metadata folder.
Add prompt descriptions for each NFT.
Mint NFTs

Execute the batch minting script to mint all 5 NFTs.
Bridge NFTs to Polygon

Use the provided transfer script to approve and transfer your NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge.
Configuration
MetaNFT Smart Contract: Manages NFT creation and metadata.
Deployment Script: Deploys the MetaNFT contract to the Ethereum network.
Minting Script: Mints NFTs in batch.
Transfer Script: Bridges NFTs from Ethereum to Polygon.

Authors
Metacrafter Chris
@metacraftersio
