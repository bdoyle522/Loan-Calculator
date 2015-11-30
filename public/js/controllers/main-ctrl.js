angular.module('LoanCalculator').controller('MainCtrl', function($scope,interestService){

  interestService.getRate().then(function (rate){
    console.log(rate);
    $scope.interest_rate = rate.data.rate;

  });

  $scope.calculatePayment = function(){
    console.log($scope.principal);
    $scope.monthly_payment = interestService.getMonthly($scope.interest_rate, $scope.principal);
  }




})
