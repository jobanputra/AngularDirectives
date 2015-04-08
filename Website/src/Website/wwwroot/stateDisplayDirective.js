(function () {

    var stateDisplay = function () {
        return {
            restrict: "A",
            link: function (scope, el, attrs) {
                scope.$watch(attrs["stateDisplay"], function(newValue){
                    switch (newValue) {
                        case 0:
                            el.css("background-color", "white");
                            break;
                        case 1:
                            el.css("background-color", "yellow");
                            break;
                        case 2:
                            el.css("background-color", "red");
                            break;
                    }
                })
            }
        };
    }

    angular
        .module("angularDirectives")
        .directive("stateDisplay", stateDisplay);


})();