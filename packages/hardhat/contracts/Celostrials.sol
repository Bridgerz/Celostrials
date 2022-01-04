// SPDX-License-Identifier: MIT

// Celostrials | Aliens are now on Celo

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";


contract Celostrials is Ownable, Pausable, ERC721Enumerable {
    using Strings for uint256;

    string public baseURI;
    string public baseExtension = ".json";
    uint256 public maxSupply = 1500;
    uint256 public maxWhiteListMint = 2000;
    uint256 private traunchSize = 50;
    uint256 private currentTraunch = 0;
    uint256 public maxMintAmount = 50;
    uint256 public cost = 2 ether;
    bool public onlyWhitelist = true;
    mapping(uint256 => bool) private isMinted;
    mapping(address => bool) whitelistedAddresses;

    modifier isWhitelisted(address _address) {
      require(whitelistedAddresses[_address], "You need to be whitelisted");
      _;
    }

    constructor() ERC721("Celostrials", "NFET") {
        setBaseURI("https://ipfs.io/ipfs/QmeJXDHp6NpKAzbnz3FatKE7NUfjuUBRYRRNJqgPxT4hjb");
        for (uint16 i = 1; i <= 20; i++) {
          _safeMint(msg.sender, i);
          isMinted[i] = true;
        }
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function mint(address _to, uint16 _mintAmount) public payable whenNotPaused {
        if (onlyWhitelist) {
          require(whitelistedAddresses[msg.sender], "Celostrials: Minting is only open to whitelisted wallets currently");
          require(maxWhiteListMint < maxWhiteListMint, "Celostrials: Maximum white list limit has been reached");
          maxWhiteListMint++;
        }
        uint256 supply = totalSupply();
        require(_mintAmount > 0, "Celostrials: mintAmount should be greater than 0");
        require(_mintAmount <= maxMintAmount, "Celostrials: mintAmount should be less than max mint");
        require(supply + _mintAmount <= maxSupply, "Celostrials: Supply not available");
        if (msg.sender != owner()) {
            require(msg.value >= cost * _mintAmount, "Celostrials: Insuffcient Celo");
        }
        for (uint16 i = 1; i <= _mintAmount; i++) {
          mintRandom(_to);
        }
    }

    function mintRandom(address _to) internal {
      uint256 supply = totalSupply();
      if (supply % traunchSize == 0) {
        currentTraunch++;
      }
      uint256 index = getRandomInTraunch(supply);
      bool minted = false;
      while (!minted) {
        if (!isMinted[index]) {
          _safeMint(_to, index);
          isMinted[index] = true;
          minted = true;
        } else {
          if (index == traunchSize * (currentTraunch + 1)) {
            index = traunchSize * currentTraunch + 1;
          } else {
            index++;
          }
        }
      }
    }

    function getRandomInTraunch(uint256 supply) internal view returns (uint256) {
      uint256 offset = traunchSize * currentTraunch + 1;
      uint256 randomnumber = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, supply))) % (traunchSize + 1);
      randomnumber = randomnumber + offset;
      return randomnumber;
    }

    function walletOfOwner(address _owner) public view returns (uint256[] memory) {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "Celostrials: URI query for nonexistent token");
        string memory curretBaseURI = _baseURI();
        return
            bytes(curretBaseURI).length > 0
                ? string(abi.encodePacked(curretBaseURI, tokenId.toString(), baseExtension))
                : "";
    }

    function setCost(uint256 _newCost) public onlyOwner {
        cost = _newCost;
    }

    function setMaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
        baseExtension = _newBaseExtension;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function withdraw() public payable onlyOwner {
        require(payable(msg.sender).send(address(this).balance), "Transfer Failed");
    }

    function withdrawERC20(IERC20 token) public onlyOwner {
        require(token.transfer(msg.sender, token.balanceOf(address(this))), "Transfer failed");
    }

    function addUser(address _addressToWhitelist) public onlyOwner {
      whitelistedAddresses[_addressToWhitelist] = true;
    } 

    function openWhitelist() public onlyOwner {
        onlyWhitelist = true;
    } 

    function closeWhitelist() public onlyOwner {
        onlyWhitelist = false;
    } 
}