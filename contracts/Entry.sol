pragma solidity ^0.5.11;

contract Entry {
    string description;
    string[] prescribedMedications;

    function getCurrentTime() public view returns(uint) {
        return now;
    }
}