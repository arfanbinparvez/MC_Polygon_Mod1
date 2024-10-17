const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0xdb7B94aeAEf9d4BcAA1b1A8ce2D4aA06982ae43b"; 
const tokenABI = tokenContractJSON.abi;
const fxERC20RootAddress = "0x3658ccFDE5e9629b0805EB06AaCFc42416850961";
const walletAddress = "0xEbD04f411D295086497E4686b15D7c9d87ad434D"; 

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC20RootAddress);

    const approveTx = await tokenContract.approve(fxERC20RootAddress, 2);
    await approveTx.wait();

    console.log('Approval confirmed');


    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, 2, "0x6556");
    await depositTx.wait();

    console.log("Tokens deposited");
  
  }

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
