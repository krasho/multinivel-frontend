(function () {

  angular.module('multinivel.BankController', [])
    .controller('BankController', function () {

      this.banks = [];

      this.bank = {
         name : "Bancomer"
      }

      this.bank2= {
         name : "HSBC"
      }

      this.banks.push(this.bank);
      this.banks.push(this.bank2);
    })
})();
