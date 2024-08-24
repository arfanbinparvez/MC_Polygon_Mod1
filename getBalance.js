const hre = require("hardhat");
const MetaNFT = require("../artifacts/contracts/MetaNFT.sol/MetaNFT.json");

const tokenAddress = "0x13B0Edd9312886Ac0C73116e767208bEd1199679"; 
const tokenABI = MetaNFT.abi;
const walletAddress = "0xEbD04f411D295086497E4686b15D7c9d87ad434D"; 

async function main() {
    const contract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await contract.balanceOf(walletAddress);

    console.log("Your NFT balance is:", balance.toString());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
