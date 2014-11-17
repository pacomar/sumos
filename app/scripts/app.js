(function () {
	'use strict';
	angular.module('web', ['ngRoute', 'web.controllers']);
	function config ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
		$routeProvider
			.when('/', {
				templateUrl: 'views/index.tpl.html',
				controller: 'IndexCtrl',
				controllerAs: 'index'
			})
			.when('/contact', {
				templateUrl: 'views/contacto.tpl.html',
				controller: 'ContactoCtrl',
				controllerAs: 'contact'
			})
			.when('/funding', {
				templateUrl: 'views/funding.tpl.html',
				controller: 'FinanciacionCtrl',
				controllerAs: 'funding'
			})
			.when('/history', {
				templateUrl: 'views/historia.tpl.html',
				controller: 'HistoriaCtrl',
				controllerAs: 'history'
			})
			.when('/about', {
				templateUrl: 'views/nosotros.tpl.html',
				controller: 'NosostrosCtrl',
				controllerAs: 'about'
			})
      .when('/news', {
        templateUrl: 'views/noticias.tpl.html',
        controller: 'NoticiasCtrl',
        controllerAs: 'news'
      });
	}

	angular
		.module('web')
		.config(config);
})();
