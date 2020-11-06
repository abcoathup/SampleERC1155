const GameItems = artifacts.require("GameItems");

module.exports = function(deployer) {
  deployer.deploy(GameItems);
};
