app.controller("routing",function($location,$scope){
    var url = $location.absUrl();
    $scope.url = url.replace($location.path(),"/");
   
    $scope.move = function(){
        $location.path("")
        
    }
    
    
})