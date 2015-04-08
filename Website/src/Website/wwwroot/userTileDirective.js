(function () {

	var userTile = function () {
		return {
			restrict: "E",
			replace:true,
			scope: {
				user: "="
			},
			templateUrl: "userTile.html"
		};

	};
	var app = angular.module("angularDirectives");
	app.directive("userTile", userTile);
})();