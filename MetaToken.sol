// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MetaToken is ERC721A, Ownable {
    // Store IPFS URIs and prompt descriptions by token ID
    mapping(uint256 => string) private _tokenURIs;
    mapping(uint256 => string) private _promptDescriptions;

    constructor() ERC721A("MetaToken", "MTA") {}

    // Mint function for the owner to mint tokens with metadata
    function mintWithMetadata(
        address to, 
        uint256 amount, 
        string[] memory uris, 
        string[] memory descriptions
    ) public onlyOwner {
        require(amount == uris.length && amount == descriptions.length, "Mismatched input lengths");
        uint256 startTokenId = _nextTokenId();
        _safeMint(to, amount);

        for (uint256 i = 0; i < amount; i++) {
            _tokenURIs[startTokenId + i] = uris[i];
            _promptDescriptions[startTokenId + i] = descriptions[i];
        }
    }

    // Function to get the IPFS URI for a specific token ID
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return _tokenURIs[tokenId];
    }

    // Function to get the prompt description for a specific token ID
    function promptDescription(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return _promptDescriptions[tokenId];
    }
}
