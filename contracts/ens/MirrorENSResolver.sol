//SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity >=0.5.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IENSResolver.sol";

contract MirrorENSResolver is Ownable, IENSResolver {

    bytes4 constant SUPPORT_INTERFACE_ID = 0x01ffc9a7;
    bytes4 constant ADDR_INTERFACE_ID = 0x3b3b57de;
    bytes4 constant NAME_INTERFACE_ID = 0x691f3431;

    // mapping between namehash and resolved records
    mapping (bytes32 => Record) records;

    struct Record {
        address addr;
        string name;
    }

    // *************** Public Functions ********************* //

    /**
     * @notice Lets the manager set the address associated with an ENS node.
     * @param _node The node to update.
     * @param _addr The address to set.
     */
    function setAddr(bytes32 _node, address _addr) public override onlyOwner {
        records[_node].addr = _addr;
        emit AddrChanged(_node, _addr);
    }

    /**
     * @notice Lets the manager set the name associated with an ENS node.
     * @param _node The node to update.
     * @param _name The name to set.
     */
    function setName(bytes32 _node, string memory _name) public override onlyOwner {
        records[_node].name = _name;
        emit NameChanged(_node, _name);
    }

    /**
     * @notice Gets the address associated to an ENS node.
     * @param _node The target node.
     * @return the address of the target node.
     */
    function addr(bytes32 _node) public override view returns (address) {
        return records[_node].addr;
    }

    /**
     * @notice Gets the name associated to an ENS node.
     * @param _node The target ENS node.
     * @return the name of the target ENS node.
     */
    function name(bytes32 _node) public override view returns (string memory) {
        return records[_node].name;
    }

    /**
     * @notice Returns true if the resolver implements the interface specified by the provided hash.
     * @param _interfaceID The ID of the interface to check for.
     * @return True if the contract implements the requested interface.
     */
    function supportsInterface(bytes4 _interfaceID) public pure returns (bool) {
        return _interfaceID == SUPPORT_INTERFACE_ID || _interfaceID == ADDR_INTERFACE_ID || _interfaceID == NAME_INTERFACE_ID;
    }

}