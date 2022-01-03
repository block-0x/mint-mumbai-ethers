require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = "";

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 1337,
        },
        mumbai: {
            url: "https://matic-mumbai.chainstacklabs.com",
            accounts: [privateKey],
        },
        // matic: {
        //     url: "https://rpc-mainnet.maticvigil.com",
        //     accounts: [privateKey],
        // },
    },
    solidity: {
        version: "0.8.4",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};