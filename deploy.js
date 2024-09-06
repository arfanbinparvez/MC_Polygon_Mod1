const hre = require("hardhat");

async function main() {
  // Deploy the MetaToken contract
  const nftContract = await hre.ethers.deployContract("MetaToken");
  console.log("MetaToken (MTA) deployed at:", nftContract.target); // Correct way to get the deployed contract address
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
