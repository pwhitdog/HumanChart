pragma solidity ^0.5.11;
import "../Entry.sol";

contract Vitals is Entry{
    uint date;

    constructor() public {
        _description = "Vitals";
        // date = Entry.getCurrentTime();
    }
}