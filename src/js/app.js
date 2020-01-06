App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // Initialize web3 and set the provider to the testRPC.
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
      web3 = new Web3(App.web3Provider);
    }

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('College.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      var CollegeArtifact = data;
      App.contracts.College = TruffleContract(CollegeArtifact);

      // Set the provider for our contract.
      App.contracts.College.setProvider(App.web3Provider);

      // Use our contract to retieve and mark the adopted pets.
      return App.getinfo();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '#transferButton', App.handleTransfer);
  },

  handleTransfer: function(event) {
    event.preventDefault();

    var _address = $('#TTTransferAddress').val();
    var age = parseInt($('#TTTransferage').val());
    var name = parseInt($('#TTTransfername').val());
   
    

    console.log('Transfer ' + name + age + ' TT to ' + _address);

    var CollegeInstance;

    // web3.eth.setinfo(function(error, name, age, _address ) {
    //   if (error) {
    //     console.log(error);
    //   }

    //   var account = studentsAccts;

    //   App.contracts.College.deployed().then(function(instance) {
    //     CollegeInstance = instance;

    //     return CollegeInstance.transfer(_address, name, age);
    //   }).then(function(result) {
    //     alert('Transfer Successful!');
    //     return App.getinfo();
    //   }).catch(function(err) {
    //     console.log(err.message);
    //   });
    // });
  },
  setinfo: function(error, name, age, _address ) {
    if (error) {
      console.log(error);
    }

    var account = studentsAccts;

    App.contracts.College.deployed().then(function(instance) {
      CollegeInstance = instance;

      return CollegeInstance.transfer(_address, name, age);
    }).then(function(result) {
      alert('Transfer Successful!');
      return App.getinfo();
    }).catch(function(err) {
      console.log(err.message);
    });
  },
  getinfo: function( name, _address, age) {
    console.log('getinfo');

    var CollegeInstance;

    // web3.eth.setinfo(function(error, _address, name, age) {
    //   if (error) {
    //     console.log(error);
    //   }

    //   var account = studentsAccts[0];

    //   App.contracts.College.deployed().then(function(instance) {
    //     CollegeInstance = instance;

    //     return CollegeInstance.balanceOf(account);
    //   }).then(function(result) {
    //     balance = result.c[0];

    //     $('#TTBalance').text(balance);
    //   }).catch(function(err) {
    //     console.log(err.message);
    //   });
    // });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
