pragma solidity ^0.5.11;

contract Entry {
    string description;
    string[] prescribedMedications;

    function getCurrentTime() internal view returns(uint) {
        return now;
    }
}