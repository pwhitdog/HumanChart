pragma solidity ^0.5.11;
import "./Entry.sol";

contract Chart {
    Entry[] entries;
    string _firstName;
    string _lastName;

    constructor(string memory fName, string memory lName) public {
        _firstName = fName;
        _lastName = lName;
    }

    function getFirstName() public view returns(string memory) {
        return _firstName;
    }

    function getLastName() public view returns(string memory) {
        return _lastName;
    }

    function addEntry(Entry entry) public {
        entries.push(entry);
    }

    function getEntry(uint index) public view returns(Entry) {
        return entries[index];
    }

    function getEntries() public view returns(Entry[] memory) {
        return entries;
    }
}