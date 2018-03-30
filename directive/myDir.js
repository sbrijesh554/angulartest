(function(){
angular.module("app").directive('myDir',function(){
return{
    scope : {
        data : '='
    },
    template  :'<div ng-repeat = "val in data"><span>{{val.num}}</span><button ng-click="delete(val.num)">Delete</button></div>',
    link : function(scope, elem, attr){
        scope.delete = function(arg){
            var index = this.$parent.data.findIndex(function(elem){
                return elem.num === arg;
            });
            this.$parent.data.splice(index,1);
        }
    }
}
});
})(angular);