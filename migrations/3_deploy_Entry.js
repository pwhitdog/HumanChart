let Entry = artifacts.require("./Entry.sol")

module.exports = async function(deployer) {
    await deployer.deploy(Entry)
}
