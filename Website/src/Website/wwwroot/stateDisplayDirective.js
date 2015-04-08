(function () {

    var stateDisplay = function () {
        return {
            restrict: "A",
            link: function (scope, el, attrs) {
                var parms = attrs["stateDisplay"].split(" ");
                var linkVar = parms[0];
                var classes = parms.slice(1);
                scope.$watch(linkVar, function (newValue) {
                    el.removeClass(classes.join(" "));
                    el.addClass(classes[newValue]);
                })
            }
        };
    }

    angular
        .module("angularDirectives")
        .directive("stateDisplay", stateDisplay);


})();