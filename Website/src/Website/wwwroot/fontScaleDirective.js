(function () {

    var fontScale = function () {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {               
                var modelName = attrs["fontScale"];
                scope.$watch(modelName, function (newValue) {
                    el.css('font-size', newValue + "%");
                });
            }
        };
    };

    angular
        .module("angularDirectives")
        .directive("fontScale", fontScale);

})();