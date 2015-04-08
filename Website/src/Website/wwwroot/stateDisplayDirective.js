(function () {

    var stateDisplay = function () {
        return {
            restrict: "A",
            link: function (scope, el, attrs) {
                var parms = attrs["stateDisplay"].split(" ");
                var linkVar = parms[0];
                scope.$watch(linkVar, function(newValue){
                    el.css("background-color", parms[newValue + 1]);
                })
            }
        };
    }

    angular
        .module("angularDirectives")
        .directive("stateDisplay", stateDisplay);


})();