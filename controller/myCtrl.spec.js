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
});