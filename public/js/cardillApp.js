(function(){
	var app = angular.module("cardillApp", ['ng-sortable', 'ui.router']);

	app.factory('rankings', ['$http', function($http){
	    var o = {
	        rankings: [
	          
	        ]
	    };

	    o.getAll = function() {
	        return $http.get('/api/rankings').success(function(data){
	            angular.copy(data, o.rankings);
	        });
	    };

	    o.create = function(ranking) {	    	
	        return $http.post('/api/ranking', ranking).success(function(data){	            
	            o.rankings.push(data);
	        });
	    };

	    return o;
	}]);

	app.factory('playerRanks', [function(){
	    var o = {
	        playerRanks: [
	            1,2,3,4,5,6,7,8,9,10,11,12
	        ]
	    };
	    return o;
	}]);

	app.factory('roster', [function(){
	    var o = {
	        roster: [	            
	            {title: 'anthony-davis', imgPath: '/images/roster/anthony_davis.png'},
	            {title: 'stephen-curry', imgPath: '/images/roster/stephen_curry.png'},
	            {title: 'demarcus-cousins', imgPath: '/images/roster/demarcus_cousins.png'},
				{title: 'chris-paul', imgPath: '/images/roster/chris_paul.png'},	           	            	            	            	            
				{title: 'james-harden', imgPath: '/images/roster/james_harden.png'},		
	            {title: 'russell-westbrook', imgPath: '/images/roster/russell_westbrook.png'},	            
	            {title: 'kevin-durant', imgPath: '/images/roster/kevin_durant.png'},
	            {title: 'lebron-james', imgPath: '/images/roster/lebron_james.png'},
				{title: 'damian-lillard', imgPath: '/images/roster/damian_lillard.png'},
				{title: 'kawhi-leonard', imgPath: '/images/roster/kawhi_leonard.png'},	            
	            {title: 'jimmy-butler', imgPath: '/images/roster/jimmy_butler.png'},
	            {title: 'klay-thompson', imgPath: '/images/roster/klay_thompson.png'},	           
	            {title: 'john-wall', imgPath: '/images/roster/john_wall.png'},
	            {title: 'paul-millsap', imgPath: '/images/roster/paul_millsap.png'}	           
	        ]
	    };
	    return o;
	}]);


	app.factory('articles', [function(){
	    var o = {
	        articles: [
	            {title: 'Not So Fast', author: 'Zen Potter', imgPath: 'images/not-so-fast.jpg', link: '#/posts/not-so-fast'},
	            {title: 'F*** Clevland', author: 'Lucksson Nama', imgPath: 'images/f-clevland.png', link: '#/posts/f-clevland'},
	            {title: 'Draft Retrospective', author: 'Vithushan Nama', imgPath: 'images/draft-retro.png', link: '#/posts/draft-retro'},
	            {title: 'Round 2 Game 7', author: 'Vithushan Nama', imgPath: 'images/rd2-gm7.png', link: '#/posts/rd2-gm7'},	 
	            {title: 'Power of Veto', author: 'Vithushan Nama', imgPath: 'images/power-of-veto.jpg', link: '#/posts/power-of-veto'},
	            {title: 'The Day I Said What If', author: 'Zen Potter', imgPath: 'images/the-day-i-said-what-if.png', link: '#/posts/the-day-i-said-what-if'},	 
	        ]
	    };
	    return o;
	}]);


	app.controller('HomeCtrl', [
		'$scope', 
		'articles', 
		function ($scope, articles) {
			$scope.articles = articles.articles;
		}]
	);

	app.controller('DraftRetroController', [
	    '$scope',
	    'playerRanks',
	    'rankings',
	    'roster',
	    function($scope, playerRanks, rankings, roster){
	        $scope.playerRanks = playerRanks.playerRanks;
	        $scope.roster = roster.roster;
	        $scope.submitter = "";

	        $scope.submit = function() {	            
	            var result = {};
	            var index = 1;

	            for (var item in $scope.roster) {
	                delete $scope.roster[item]['$$hashKey'];
	                result[index] = $scope.roster[item];
	                index++;
	            } 
	            
	            // Use verifier?
                if ($scope.submitter != '') {
                    result['submitter'] = $scope.submitter;                                       
                    rankings.create(JSON.stringify(result));    
                    alert("Thank you! Go to see results!");
                } else {
                    alert("Please enter your name");
                }	            
	            
	        }
	    }]

	);

	app.controller('DraftCtrl', [
	    '$scope',
	    'rankings',
	    function($scope, rankings){    
	        $scope.rankings = rankings.rankings;

	    }]

	);


	app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

	  $stateProvider
	    .state('home', {
	        url: '/home',
	        templateUrl: '/partials/home.html',	
	        controller: 'HomeCtrl'      
	    })
	    .state('test', {
	        url: '/test',
	        templateUrl: '/partials/test.html',
	        controller: 'DraftCtrl'
	    })
	    .state('draft-results', {
	        url: '/posts/draft-results',
	        templateUrl: '/partials/posts/draft-results.html',
	        controller: 'DraftCtrl',
	        resolve: {
   				postPromise: ['rankings', function(rankings){
      				return rankings.getAll();
    			}]
    		}
	       
	    })
	    .state('draft-retro', {
	        url: '/posts/draft-retro',
	        templateUrl: '/partials/posts/draft-retro.html',
	        controller: 'DraftRetroController'
	    })
	    .state('finals-preview', {
	        url: '/posts/finals-preview',
	        templateUrl: '/partials/posts/finals-preview.html',
	        
	    })
	    .state('not-so-fast', {
	        url: '/posts/not-so-fast',
	        templateUrl: '/partials/posts/not-so-fast.html',
	        
	    })
	    .state('f-clevland', {
	        url: '/posts/f-clevland',
	        templateUrl: '/partials/posts/f-clevland.html',
	        
	    })
	    .state('power-of-veto', {
	        url: '/posts/power-of-veto',
	        templateUrl: '/partials/posts/power-of-veto.html',
	        controller: 'PostsCtrl'
	    })
	    .state('rd2-gm7', {
	        url: '/posts/rd2-gm7',
	        templateUrl: '/partials/posts/rd2-gm7.html',
	        
	    })
	    .state('the-day-i-said-what-if', {
	        url: '/posts/the-day-i-said-what-if',
	        templateUrl: '/partials/posts/the-day-i-said-what-if.html',
	        
	    });


	  $urlRouterProvider.otherwise('home');
	}]);




})();

