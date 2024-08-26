import { task } from 'hardhat/config';

task('deploy-verify-fails', 'Deploy TEST token (verify fails)').setAction(
  async (_, { ethers, run }) => {
    await run('compile');

    const token = await ethers.deployContract('TokenFails');
    const deployed = await token.waitForDeployment();
    const contractAddr = await deployed.getAddress();

    console.log(`Deployed as ${contractAddr}`);

    // fails, bunx hardhat verify --network xdc <address> also fails
    await run('verify:verify', {
      address: contractAddr,
      constructorArguments: [],
    });
  }
);
