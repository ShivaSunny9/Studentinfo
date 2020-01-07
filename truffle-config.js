const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();

var MNENOMIC = "your won seed phrase";
var INFURA_API_KEY = "rinkeby.infura.io/v3/ + key";


module.exports = {

  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
	rinkeby: {
  host: "localhost",
  provider: function () {
   return new HDWalletProvider( MNENOMIC, "https://rinkeby.infura.io/v3/" + INFURA_API_KEY);
  }, 
  network_id: 4
, gas: 4700

 }
  }
  };

