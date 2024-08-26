// SPDX-License-Identifier: Unlicense
pragma solidity =0.8.24;

import {ERC20, IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract TokenWorks is ERC20Permit, ERC20Burnable {
    constructor() ERC20("TEST Token", "TEST") ERC20Permit("TEST Token") {}
}
