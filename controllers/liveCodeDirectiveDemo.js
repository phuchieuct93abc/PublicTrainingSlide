app.directive('directiveDemo',function(){
    return {
        template:'<form class=" form-inline" style="white-space: nowrap;">'
        +'<input ng-model="modelName" class="form-control " style="width:400px" placeholder="Search"/>'
+'<button ng-click="getValue()" class="btn btn-lg btn-primary">Submit</button> </form>',
                
           
        scope:true,
        controller:function($scope){
             $scope.getValue = function(){
                alert($scope.modelName)
            }
        }
    }
    
})