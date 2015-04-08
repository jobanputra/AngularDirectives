(function () {

	var userTile = function () {
		return {
			restrict: "E",
			replace:true,
			scope: {
				user: "="
			},
			templateUrl: "userTile.html",
			controller: function ($scope) {
				$scope.select = function () {
					$scope.user.selected = !$scope.user.selected;
				}
			}
		};

	};
	var app = angular.module("angularDirectives");
	app.directive("userTile", userTile);
})();