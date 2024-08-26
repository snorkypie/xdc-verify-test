# Deploy the contract that works

`npx hardhat deploy-verify-works --network xdc`

`contracts/TokenWorks.sol` successfully verifies

# Deploy the contract that fails

`npx hardhat deploy-verify-fails --network xdc`

`contracts/TokenFails.sol` fails to verify

Fails with:

`Error in plugin @nomicfoundation/hardhat-verify: A network request failed. This is an error from the block explorer, not Hardhat. Error: Unexpected token < in JSON at position 0`
