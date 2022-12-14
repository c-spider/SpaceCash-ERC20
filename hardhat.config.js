require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
const { mnemonic } = require('./secrets.json');

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    testbsc: {
      url: `https://data-seed-prebsc-2-s2.binance.org:8545`,
      accounts: {mnemonic: mnemonic},
    },
    ropsten: {
      // url: `https://rpc.ankr.com/eth_ropsten/E4VXN2H51KZXWHSRAZHCZ5AQZE2J5JRP5G`,
      url: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      accounts: {mnemonic: mnemonic},
    },
    mainbsc: {
      url: `https://bsc-dataseed1.binance.org`,
      accounts: {mnemonic: mnemonic},
    }
  },
  solidity: {
  version: "0.8.0",
  settings: {
    optimizer: {
      runs: 200,
      enabled: true
    }
   }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  },
  etherscan: {
    apiKey: "E4VXN2H51KZXWHSRAZHCZ5AQZE2J5JRP5G"
  }
};