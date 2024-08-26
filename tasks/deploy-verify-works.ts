import { task } from 'hardhat/config';

task('deploy-verify-works', 'Deploy TEST token (verify works)').setAction(
  async (_, { ethers, run }) => {
    await run('compile');

    const token = await ethers.deployContract('TokenWorks');
    const deployed = await token.waitForDeployment();
    const contractAddr = await deployed.getAddress();

    console.log(`Deployed as ${contractAddr}`);

    // works, bunx hardhat verify --network xdc <address> also works
    await run('verify:verify', {
      address: contractAddr,
      constructorArguments: [],
    });
  }
);
