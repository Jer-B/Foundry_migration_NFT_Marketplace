// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../lib/forge-std/src/Script.sol";
import {NftMarketplace} from "../src/NftMarketplace.sol";

contract DeployNftMarketplace is Script {
    function run() external {
        vm.startBroadcast();

        // Initialize contract
        NftMarketplace nftmarketplace = new NftMarketplace();

        vm.stopBroadcast();
    }
}
