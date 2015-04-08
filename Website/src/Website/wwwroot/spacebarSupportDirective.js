(function () {

    var spacebarSupport = function () {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {
                $('body').on('keypress', function (evt) {
                    var vidEl = el[0] //el is wrapped in the jQuery object. We index in to get the raw Html object.
                    if (evt.keyCode===32) {
                        if (vidEl.paused) {
                             vidEl.play()
                        } else {
                            vidEl.pause();
                        }
                    }
                });
            }
        };
    };

    var app = angular.module("angularDirectives");
    app.directive("spacebarSupport", spacebarSupport);

})();