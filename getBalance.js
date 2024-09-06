const hre = require("hardhat");

async function main() {
  // Address of the deployed MetaToken contract
  const contractAddress = "0x7f3838051489595Aec7981fC13493752c99db792";
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
