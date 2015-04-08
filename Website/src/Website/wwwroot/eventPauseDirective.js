(function () {
    eventPause = function ($parse) {
        return {
            restrict: 'A',            
            link: function (scope, el, attrs) {
                var fn = $parse(attrs['eventPause']);
                el.on('pause', function (event) {
                    //start a new digest cycle since an external event (video player paused) has happened
                    scope.$apply(function () {
                        fn(scope, { evt: event });
                    });


                });

            }
        };
    };

    var app = angular.module("angularDirectives");
    app.directive("eventPause", eventPause);


})();