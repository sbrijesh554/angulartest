(function(ang){
ang.module("app",[]).controller("myCtrl", function(myService){
  this.data = [];
  this.calculate = function(){    
    this.interest = myService.calculateInterest(this.prin,this.rate,this.time);
    this.amount = myService.calculateAmount(this.interest,parseInt(this.prin));
  }
  this.getData = function(){
    this.data.push({
      num : myService.generateRandomData()
    });
}
});
})(angular);
