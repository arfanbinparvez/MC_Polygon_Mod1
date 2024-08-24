const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const MetaNFT = require("../artifacts/contracts/MetaNFT.sol/MetaNFT.json");

const tokenAddress = "0x4F735B40e72c138EaA2D3E38c6f4ce2117d774A1"; 
const tokenABI = MetaNFT.abi;
const fxERC20RootAddress = "0x13B0Edd9312886Ac0C73116e767208bEd1199679"; // FxPortal Root contract address on Sepolia
const numberOfTokens = 5; // Number of NFTs to transfer

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deployer address:", deployer.address);

    const contract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC20RootAddress);

    for (let i = 0; i < numberOfTokens; i++) {
        const tokenId = i + 1;

        // Approve the FxPortal contract to transfer the token
        const approveTx = await contract.approve(fxERC20RootAddress, tokenId);
        await approveTx.wait();
        console.log(`Approved token ${tokenId} for transfer`);

        // Deposit the NFT into the FxPortal contract
        const depositTx = await fxContract.deposit(tokenAddress, deployer.address, tokenId, "0x6556");
        await depositTx.wait();
        console.log(`Transferred token ${tokenId} to Polygon`);
    }

    console.log("Batch transfer complete");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
