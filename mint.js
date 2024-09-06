const hre = require("hardhat");

async function main() {
  // Address of the deployed MetaToken contract
  const contractAddress = "0x7f3838051489595Aec7981fC13493752c99db792";
  const nftContract = await hre.ethers.getContractAt("MetaToken", contractAddress);

  const ipfsURIs = [
    "ipfs://Qma1Vs75sEx4sgZRByx27K3QW8MoRuca8KgyddLhKUsCSK/img1.json",
    "ipfs://QmUEmFdPKE7YCu6deYSDbYTQRDjb5dBaZkoSzz8E3KstnR/img2.json",
    "ipfs://QmS4qq5hAqnfiMs5UF7WrBgYZAbogWvJR5zu9z9P44DEGA/img3.json",
    "ipfs://QmbHfwRYDYeKWDj7KbiUdzydzPVZMLNstVLTMy1dinLrPo/img4.json",
    "ipfs://QmWoeKJxQEaFMae3q5VCkyzfh53DUFPU5ew5zrhmAKwttQ/img5.json"
  ];

  // Prompt descriptions for the NFTs
  const promptDescriptions = [
    "Generate a futuristic cityscape with flying cars and neon lights",
    "Generate a silhouette of a lone cowboy on horseback silhouetted against a vibrant, colorful sunset sky",
    "Generate an image of a cloaked rider on horseback who ventures through a snow-covered forest path, surrounded by tall, frost-laden trees",
    "Generate an image of a mesmerizing merge of galaxies with vibrant clouds of color as they merge in the vastness of space",
    "Generate a beautiful scenery of a lush green village with snowy mountains in the background"
  ];

  // Mint tokens with metadata
  const mintTx = await nftContract.mintWithMetadata(
    "0xEbD04f411D295086497E4686b15D7c9d87ad434D", // Replace with the desired recipient address
    5,
    ipfsURIs,
    promptDescriptions
  );
  await mintTx.wait();
  console.log("Tokens minted with metadata successfully.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
