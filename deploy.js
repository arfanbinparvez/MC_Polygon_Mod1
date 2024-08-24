async function main() {
  // Compile the contract
  await hre.run('compile');

  // Deploy the MetaNFT contract
  const MetaNFT = await hre.ethers.getContractFactory("MetaNFT");
  const baseURI = "https://ipfs.io/ipfs/QmWpwffhiAJBS6gvi5iQtKxsQPEqKPe2jUkYVmYgznKjTF";
  const metaNFT = await MetaNFT.deploy(baseURI);

  console.log("MetaNFT deployed to:", metaNFT.address);

  // Mint 5 tokens in a batch
  await metaNFT.mintBatch(metaNFT.address, 5);

  // Set prompt descriptions for the minted tokens
  await metaNFT.setPromptDescription(1, "Generate a futuristic cityscape with flying cars and neon lights");
  await metaNFT.setPromptDescription(2, "Generate a silhouette of a lone cowboy on horseback silhouetted against a vibrant, colorful sunset sky");
  await metaNFT.setPromptDescription(3, "Generate an image of a cloaked rider on a horseback who ventures through a snow-covered forest path, surrounded by tall, frost-laden trees");
  await metaNFT.setPromptDescription(4, "Generate an image of mesmerizing merge of galaxies with vibrant clouds of color as they merge in the vastness of space");
  await metaNFT.setPromptDescription(5, "Generate a beautiful scenery of lush green village with snowy mountains in the background");

  console.log("Prompt descriptions set for tokens");
}

main().catch((error) => {
  console.error("Deployment failed:", error);
  process.exitCode = 1;
});
