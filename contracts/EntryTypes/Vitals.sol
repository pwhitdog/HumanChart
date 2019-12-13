pragma solidity ^0.5.11;
import "../Entry.sol";

contract Vitals is Entry{
    uint _date;
    uint _tempInCelsius;
    uint _beatsPerMinute;

    constructor() public {
        _description = "Vitals";
        _date = now;
    }


}