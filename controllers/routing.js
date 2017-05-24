app.controller("routing",function($location,$scope){
    var url = $location.absUrl();
    $scope.url = url.replace($location.path(),"/3");
   
    $scope.move = function(){
        $location.path("/3")
        
    }
    
    
})