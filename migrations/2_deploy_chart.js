let Chart = artifacts.require("./Chart.sol")

module.exports = async function(deployer) {
    await deployer.deploy(Chart, "first", "last")
}