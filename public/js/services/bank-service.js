

angular.module('LoanCalculator').service('interestService', function($http){


    this.getRate =  function(){
      return $http({
        method: 'GET',
        url: '/interest_rate'
      });
    };

    this.getMonthly = function(rate, amount){
      var p = parseInt(amount);
      var r = parseInt(rate*100)/100;
      var t = 4;
      console.log(rate, amount, t);
      console.log(p + p*r*t);
      var A = (p + (p*r*t)) / 48;
      console.log(A);
      return A.toFixed(2);

    }


});
