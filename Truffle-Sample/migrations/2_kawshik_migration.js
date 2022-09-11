const Kawshik = artifacts.require("Kawshik");

module.exports = function(deployer) {
    deployer.deploy(Kawshik, 23);
}