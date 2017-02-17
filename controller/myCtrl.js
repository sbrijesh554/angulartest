(function(ang){
ang.module("app",[]).controller("myCtrl", function(myService){
this.calculate = function(){    
  this.interest = myService.calculateInterest(this.prin,this.rate,this.time);
  this.amount = myService.calculateAmount(this.interest,parseInt(this.prin));
}
});
})(angular);
