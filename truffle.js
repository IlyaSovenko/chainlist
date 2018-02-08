module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 3500000
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: 4
    }
  }
};
