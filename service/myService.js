(function(ang){
   ang.module("app").service("myService",function(){
     this.calculateInterest = function(p,r,t){
        return p*r*t/100;
     },
     this.calculateAmount = function(i,p){
         return i+p;
     }
   })
}(angular))