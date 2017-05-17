app.directive("code",function(){
    return{
        templateUrl:"slides/code.html",
        transclude:true,
        replace:true,
        controller:function($scope){
             $scope.open = function(){
                 $scope.isOpen=true;
             }
        }
    }
    
})