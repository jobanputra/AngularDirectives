(function() {

	var userClickSelect = function () {
		return {
			link: function (scope, el, attrs) {
				el.on("click", function () {
					scope.user.selected = !scope.user.selected;
					scope.$apply();
				});
			}
		}
	};
    angular
	.module("angularDirectives")
	.directive("userClickSelect", userClickSelect);


})();