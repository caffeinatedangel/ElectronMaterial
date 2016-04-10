'use strict';
var reportsAppControllers = angular.module('reportsAppControllers', []);

//Blank Controller used for raw HTML templates
reportsAppControllers.controller('BlankController', ['$scope', '$http',
	function(sc, ht) {
		//Do nothing, because this is a blank controller!
	}
]);

//Controller for the main frames (menu items mainly)
reportsAppControllers.controller('PartialsController', ['$scope', '$mdSidenav', '$location',
	function(sc, sidenav, lc) {
		sc.selected = routes[0];
		sc.pages = routes;
		sc.go = function(user) {
			sc.selected = user;
			lc.path(user.path);
		};

		//But where is the 'right' sidenav??? /s
		sc.toggleList = function() {
			sidenav('left').toggle();
		};
	}
]);

//An (empty) controller for content pages
reportsAppControllers.controller('ContentController', ['$scope',
	function(sc) {
		//Your Controller Code Goes Here
	}
]);
