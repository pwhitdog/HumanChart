pragma solidity ^0.5.11;

contract Entry {
    string _description;
    string[] _prescribedMedications;

    // function getCurrentTime() public view returns(uint) {
    //     return now;
    // }

    function setDescription(string memory description) public {
        _description = description;
    }

    function getDescription() public view returns(string memory) {
        return _description;
    }
}