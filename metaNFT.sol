// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MetaNFT is ERC721A, Ownable {
    string private _baseTokenURI;
    mapping(uint256 => string) private _promptDescriptions;

    constructor(string memory baseURI) ERC721A("MetaNFT", "MNFT") {
        _baseTokenURI = baseURI;
    }

    function mintBatch(address to, uint256 quantity) external onlyOwner {
        _mint(to, quantity);
    }

    function setBaseURI(string memory baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
    }

    event PromptDescriptionSet(uint256 indexed tokenId, string description);
    function setPromptDescription(uint256 tokenId, string memory description) external onlyOwner {
        require(_exists(tokenId), "ERC721Metadata: Set description for nonexistent token");
        _promptDescriptions[tokenId] = description;
        emit PromptDescriptionSet(tokenId, description);
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return string(abi.encodePacked(_baseURI(), "/", Strings.toString(tokenId), ".json"));
    }

    function getPromptDescription(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: Query for nonexistent token");
        return _promptDescriptions[tokenId];
    }

    function setBatchPromptDescriptions(uint256[] memory tokenIds, string[] memory descriptions) external onlyOwner {
        require(tokenIds.length == descriptions.length, "ERC721Metadata: Arrays length mismatch");
        for (uint256 i = 0; i < tokenIds.length; i++) {
            require(_exists(tokenIds[i]), "ERC721Metadata: Set description for nonexistent token");
            _promptDescriptions[tokenIds[i]] = descriptions[i];
            emit PromptDescriptionSet(tokenIds[i], descriptions[i]);
        }
    }
}
