const ERC1155PresetMinterPauser = artifacts.require("ERC1155PresetMinterPauser");

module.exports = function(deployer) {
  deployer.deploy(ERC1155PresetMinterPauser, "https://abcoathup.github.io/SampleERC1155/api/token/{id}.json");
};
