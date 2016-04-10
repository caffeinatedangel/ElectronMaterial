'use strict';
var reportsApp = angular.module('reportsApp', ['reportsAppControllers', 'ngMaterial', 'ngMdIcons', 'ngRoute']);

//Routes need to be globally defined (TODO: Or maybe we could do this using $parent?)
var routes = [];

reportsApp.config(['$mdThemingProvider', '$routeProvider',
	function(tp, rp) {
		//Routing Provider and Menus are generated from this one array
		routes = [{
			title: "Home",
			path: "/home",
			fragmentPath: 'home/home.html',
			controller: 'BlankController'
		}, {
			title: "ContentPage",
			path: "/content",
			fragmentPath: 'content/content.html',
			controller: 'ContentController'
		}];

		//Setup the theming (idk if accent palette is even used)
		tp.theme('default').primaryPalette('purple').accentPalette('blue');

		//Disable case sensitivity, not that it should ever come up even, but I mean...
		//Just in case...
		rp.caseInsensitiveMatch = true;
		//Actually fill the routeProvider
		for (var i = 0; i < routes.length; i++) {
			var curPath = routes[i];
			rp.when(curPath.path, {
				templateUrl: 'partials/' + curPath.fragmentPath,
				controller: curPath.controller
			});
			//And, default back to the home page if someone messes up
			//Again, not that this should ever happen
			rp.otherwise({
				redirectTo: '/home'
			});
		}
	}
]);
