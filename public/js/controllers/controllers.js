
myApp.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = 'Hello world!';
    }
]);

myApp.controller('PostsCtrl', [
    '$scope',
    function($scope){

    }
]);

myApp.factory('rankings', ['$http', function($http){
    var o = {
        rankings: [
            {title: 'post 1', upvotes: 5},
            {title: 'post 2', upvotes: 2},
            {title: 'post 3', upvotes: 15},
            {title: 'post 4', upvotes: 9},
            {title: 'post 5', upvotes: 4}
        ]
    };

    o.getAll = function() {
        return $http.get('/api/rankings').success(function(data){
            angular.copy(data, o.rankings);
        });
    };

    return o;
}]);

myApp.factory('playerRanks', [function(){
    var o = {
        playerRanks: [
            1,2,3,4,5,6,7,8,9,10,11,12
        ]
    };
    return o;
}]);

myApp.factory('roster', [function(){
    var o = {
        roster: [
            {name: 'al-horford', imgPath: '/images/roster/al_horford.png'},
            {name: 'anthony-davis', imgPath: '/images/roster/anthony_davis.png'},
            {name: 'chris-paul', imgPath: '/images/roster/chris_paul.png'},
            {name: 'damian-lillard', imgPath: '/images/roster/damian_lillard.png'},
            {name: 'demarcus-cousins', imgPath: '/images/roster/demarcus_cousins.png'},
            {name: 'draymond-green', imgPath: '/images/roster/draymond_green.png'},
            {name: 'hassan-whiteside', imgPath: '/images/roster/hassan_whiteside.png'},
            {name: 'james-harden', imgPath: '/images/roster/james_harden.png'},
            {name: 'jimmy-butler', imgPath: '/images/roster/jimmy_butler.png'},
            {name: 'john-wall', imgPath: '/images/roster/john_wall.png'},
            {name: 'karl-anthony-towns', imgPath: '/images/roster/karl-anthony_towns.png'},
            {name: 'kawhi-leonard', imgPath: '/images/roster/kawhi_leonard.png'},
            {name: 'klay-thompson', imgPath: '/images/roster/klay_thompson.png'},
            {name: 'kyle-lowry', imgPath: '/images/roster/kyle_lowry.png'},
            {name: 'lebron-james', imgPath: '/images/roster/lebron_james.png'},
            {name: 'paul-george', imgPath: '/images/roster/paul_george.png'},
            {name: 'paul-millsap', imgPath: '/images/roster/paul_millsap.png'},
            {name: 'russell-westbrook', imgPath: '/images/roster/russell_westbrook.png'},
            {name: 'stephen-curry', imgPath: '/images/roster/stephen_curry.png'},
            {name: 'kevin-durant', imgPath: '/images/roster/kevin_durant.png'}
        ]
    };
    return o;
}]);

myApp.controller('DraftRetroCtrl', [
    '$scope',
    'playerRanks',
    'roster',
    function($scope, playerRanks, roster){
        $scope.playerRanks = playerRanks.playerRanks;
        $scope.roster = roster.roster;
        $scope.list1 = [];
        angular.forEach($scope.images, function(val, key) {
            $scope.list1.push({});
        });
        $scope.list2 = [
            { 'title': 'KnockoutJS', 'drag': true },
            { 'title': 'EmberJS', 'drag': true },
            { 'title': 'BackboneJS', 'drag': true },
            { 'title': 'AngularJS', 'drag': true }
        ];
    }]

);

myApp.controller('DraftCtrl', [
    '$scope',
    'rankings',
    function($scope, rankings){
        $scope.test = 'Hello world!';
        $scope.images = [{'thumb': '1.png'},{'thumb': '2.png'},{'thumb': '3.png'},{'thumb': '4.png'}]
        $scope.list1 = [];
        angular.forEach($scope.images, function(val, key) {
           $scope.list1.push({});
        });
        $scope.list2 = [
            { 'title': 'KnockoutJS', 'drag': true },
            { 'title': 'EmberJS', 'drag': true },
            { 'title': 'BackboneJS', 'drag': true },
            { 'title': 'AngularJS', 'drag': true }
        ];

        $scope.startCallback = function(event, ui, title) {
            console.log('You started draggin: ' + title.title);
            $scope.draggedTitle = title.title;
        };

        $scope.stopCallback = function(event, ui) {
            console.log('Why did you stop draggin me?');
        };

        $scope.dragCallback = function(event, ui) {
            console.log('hey, look I`m flying');
        };

        $scope.dropCallback = function(event, ui) {
            console.log('hey, you dumped me :-(' , $scope.draggedTitle);
        };

        $scope.overCallback = function(event, ui) {
            console.log('Look, I`m over you');
        };

        $scope.outCallback = function(event, ui) {
            console.log('I`m not, hehe');
        };
        
        $scope.rankings = rankings.rankings;

        $scope.addPost = function(){
            if(!$scope.title || $scope.title === '') { return; }
            $scope.rankings.push({title: $scope.title, upvotes: 0});
            $scope.title = '';
            
        };
    }]

);