describe("myDir", function(){
var compile, scope, directiveElem;
beforeEach(module('app'))
beforeEach(function(){
  inject(function($compile, $rootScope){
    compile = $compile;
    scope = $rootScope.$new();
    scope.data = [{
      num : 21
    }];
  });
  directiveElem = getCompiledElement();
});

function getCompiledElement(){
  var element = angular.element('<my-dir data = "data"></my-dir>');
  var compiledElement = compile(element)(scope);
  scope.$digest();
  return compiledElement;
}


  // it('should have isolated scope named data and it should be two-way bound', function(){
  //   var isolatedScope = directiveElem.isolateScope();
  //   expect(directiveElem.html()).toContain("Delete");
  //   isolatedScope.data.push({
  //     num: 234
  //   },
  //   {
  //     num: 2
  //   });
  
  //   expect(scope.data).toEqual([{num : 21},{
  //     num: 234
  //   },
  //   {
  //     num: 2
  //   }]);
  // });

  it('should remove a particular value on click od delete button', function () {
    scope.data.push({
      num: 234
    },
    {
      num: 2
    });
    var button = directiveElem.find('button');
    button.triggerHandler('click');
    scope.$digest();
  
    expect(scope.data).toEqual([{num : 234},{num : 2}]);
  });

});


