app.controller("angular2Controller",function($timeout){
    $timeout(function(){
        
        
     $('.angular-2 pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
    })
})