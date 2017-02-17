describe('myService',function(){
    beforeEach(module('app'));
    var myService;
    beforeEach(inject(function(_myService_){
        myService = _myService_;
    }))

    describe('calculateInterest()',function(){
      it('should calculate interest',function(){
          expect(myService.calculateInterest(100,1,1)).toBe(1);
      })
    })
    describe('calculateAmount()',function(){
      it('should calculate amount',function(){
          expect(myService.calculateAmount(1,100)).toBe(101);
      })
    })
})