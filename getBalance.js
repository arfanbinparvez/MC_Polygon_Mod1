const hre = require("hardhat");

async function main() {
  // Address of the deployed MetaToken contract
  const contractAddress = "0xdb7B94aeAEf9d4BcAA1b1A8ce2D4aA06982ae43b";
  const nftContract = await hre.ethers.getContractAt("MetaToken", contractAddress);

  // Address of the wallet to check
  const walletAddress = "0xEbD04f411D295086497E4686b15D7c9d87ad434D"; 

  // Get the balance of the wallet
  const balance = await nftContract.balanceOf(walletAddress);
  console.log(`Wallet ${walletAddress} has ${balance} NFTs.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
