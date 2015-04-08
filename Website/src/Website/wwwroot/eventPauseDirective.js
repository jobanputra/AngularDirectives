(function () {
    eventPause = function () {
        return {
            restrict: 'A',
            scope:{
                eventPause:'&'
            },
            link: function (scope, el, attrs) {
                el.on('pause', function (event) {
                    //start a new digest cycle since an external event (video player paused) has happened
                    scope.$apply(function () {
                        scope.eventPause();
                    });


                });

            }
        };
    };

    var app = angular.module("angularDirectives");
    app.directive("eventPause", eventPause);


})();