const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();

var MNENOMIC = "lunch art organ swear buddy ridge steak gain person dash leave undo";
var INFURA_API_KEY = "rinkeby.infura.io/v3/9bc433b35c6842ca878cd15d906e2f97";


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

