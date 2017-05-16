app.controller("letStart", function ($timeout) {
    Reveal.addEventListener('letStart', function () {
        $timeout(function () {

            // Grab the current date
            // Set some date in the past. In this case, it's always been since Jan 1
            // Calculate the difference in seconds between the future and current date
            var diff = 60 * 80;
            // Instantiate a coutdown FlipClock
            $('.my-clock').FlipClock(diff, {
                clockFace: 'SecondCounter',
                showSeconds: false,
                countdown: true,
                callbacks: {
                    stop: function () {
                        $('#myModal').modal({backdrop: true})
                    }
                }
            });

        }, 1000)
    }, false);





})