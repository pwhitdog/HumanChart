pragma solidity ^0.5.11;
import "./Entry.sol";

contract Chart {
    Entry[] entries;
    string firstName;
    string lastName;

    function addEntry(Entry entry) public {
        entries.push(entry);
    }
}