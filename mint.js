const hre = require("hardhat");

async function main() {
  // Connect to the deployed contract
  const MetaNFT = await hre.ethers.getContractFactory("MetaNFT");
  const contractAddress = "0x4F735B40e72c138EaA2D3E38c6f4ce2117d774A1"; 
  const metaNFT = MetaNFT.attach(contractAddress);

  // Get the deployer's account
  const [deployer] = await hre.ethers.getSigners();
  console.log("Minting tokens with account:", deployer.address);

  // Mint tokens
  const mintQuantity = 5; // Number of tokens to mint
  const tx = await metaNFT.mintBatch(deployer.address, mintQuantity);
  await tx.wait();
  console.log(`Minted ${mintQuantity} tokens to ${deployer.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
