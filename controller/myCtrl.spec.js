describe("myCtrl", function(){
    beforeEach(module("app"));
    var $controller,myServiceMock;
    beforeEach(inject(function(_$controller_,_myService_){
    myServiceMock = _myService_;
    spyOn(myServiceMock,'calculateInterest').and.callFake(
      function(){
          console.log("In Interest fn");
      }
    );
    spyOn(myServiceMock,'calculateAmount').and.callFake(
      function(){
          console.log("In Amount fn");
      }
    );
    spyOn(myServiceMock,'generateRandomData').and.returnValue(
          Math.random()*1000)
      
       
      $controller = _$controller_('myCtrl', {myService : myServiceMock});
    }));

    describe("calculate()", function(){
        it("should evaluate interest and total amount by calling service apis", function(){         
          $controller.prin = 100;
          $controller.rate = 1;
          $controller.time  = 1;
          $controller.calculate();
          expect(myServiceMock.calculateInterest).toHaveBeenCalled();
          expect(myServiceMock.calculateInterest).toHaveBeenCalled();
        })
    })
    describe("getData()", function(){
      it("should fetch some random number from service" , function(){     
        var data = [];
        var n = myServiceMock.generateRandomData();
        data.push({num : n});    
        console.log(n, data);
        expect(data[0]).toEqual(jasmine.objectContaining({num : n}))
      })
  })
});