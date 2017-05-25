app.directive("searchField",function(){
    return {
        scope:{}, 
        template : '<div class="form-inline input-group-lg">' +
            '<input type="text" ng-model="value" class="nam_text form-control" />' +
            '<button class="nam_btn btn btn-primary btn-lg" ng-click="onSubmit()" >Search</button>' +
            '</div>' + 
            '<b>{{result}}</b>',
        controller : function($scope){
            $scope.value =""
            $scope.result = 'Result: ';
            $scope.onSubmit = function(){
                $scope.result = 'Result: ' + $scope.value;
            }
            $scope.onSubmit();
        }
    }
})