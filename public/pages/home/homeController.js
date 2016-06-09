angular.module('cardillApp').controller('HomeController', [
	'$scope', 
	'articles', 
	function ($scope, articles) {
		$scope.articles = articles.articles;
	}]
);