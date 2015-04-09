(function (undefined) {

	var myQuestion = function () {
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "myQuestion.html",
			scope: {
				questionText: "@q"
			}
		};
	}
	angular
		.module("angularDirectives")
		.directive("myQuestion", myQuestion);

})();