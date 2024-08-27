import { HardhatUserConfig } from 'hardhat/config';
import '@openzeppelin/hardhat-upgrades';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-ethers';
import '@nomicfoundation/hardhat-verify';
import './tasks';

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.24',
  },
  networks: {
    xdc: {
      chainId: 50,
      url: 'https://earpc.xinfin.network',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    testxdc: {
      chainId: 51,
      url: 'https://earpc.apothem.network',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: "teztoken",
    customChains: [
      {
        network: 'xdc',
        chainId: 50,
        urls: {
          apiURL: 'https://api.xdcscan.io/api',
          browserURL: 'https://xdcscan.io',
        },
      },
      {
        network: 'testxdc',
        chainId: 51,
        urls: {
          apiURL: 'https://api-apothem.xdcscan.io/api',
          browserURL: 'https://apothem.xdcscan.io',
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};

export default config;
