
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
            {title: 'al-horford', imgPath: '/images/roster/al_horford.png'},
            {title: 'anthony-davis', imgPath: '/images/roster/anthony_davis.png'},
            {title: 'chris-paul', imgPath: '/images/roster/chris_paul.png'},
            {title: 'damian-lillard', imgPath: '/images/roster/damian_lillard.png'},
            {title: 'demarcus-cousins', imgPath: '/images/roster/demarcus_cousins.png'},
            {title: 'draymond-green', imgPath: '/images/roster/draymond_green.png'},
            {title: 'hassan-whiteside', imgPath: '/images/roster/hassan_whiteside.png'},
            {title: 'james-harden', imgPath: '/images/roster/james_harden.png'},
            {title: 'jimmy-butler', imgPath: '/images/roster/jimmy_butler.png'},
            {title: 'john-wall', imgPath: '/images/roster/john_wall.png'},
            {title: 'karl-anthony-towns', imgPath: '/images/roster/karl-anthony_towns.png'},
            {title: 'kawhi-leonard', imgPath: '/images/roster/kawhi_leonard.png'},
            {title: 'klay-thompson', imgPath: '/images/roster/klay_thompson.png'},
            {title: 'kyle-lowry', imgPath: '/images/roster/kyle_lowry.png'},
            {title: 'lebron-james', imgPath: '/images/roster/lebron_james.png'},
            {title: 'paul-george', imgPath: '/images/roster/paul_george.png'},
            {title: 'paul-millsap', imgPath: '/images/roster/paul_millsap.png'},
            {title: 'russell-westbrook', imgPath: '/images/roster/russell_westbrook.png'},
            {title: 'stephen-curry', imgPath: '/images/roster/stephen_curry.png'},
            {title: 'kevin-durant', imgPath: '/images/roster/kevin_durant.png'}
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
        function makeList (letter) {
            var tmpList = [];

            for (var i = 1; i <= 6; i++){
                tmpList.push({
                    title: 'Item ' + i + letter,
                    imgPath: i
                });
            }
            return tmpList;
        }
  
        $scope.list1 = [];
        $scope.list2 = makeList('b');
      
        $scope.rawScreens = [
            $scope.list1,
            $scope.roster
        ];
      
        $scope.sortableOptions = {
            placeholder: "app",
            connectWith: ".apps-container",
            update: function(event, ui) {
                // check that its an actual moving
                // between the two lists
                if (event.target.id !== 'screen-1' && ui.item.sortable.droptarget.attr('id') === 'screen-1' && $scope.rawScreens[1].length >= 10) {
                    ui.item.sortable.cancel();
                }
            }
        };
    }]

);

myApp.controller('DraftCtrl', [
    '$scope',
    'rankings',
    function($scope, rankings){
        $scope.test = 'Hello world!';
       
        $scope.rankings = rankings.rankings;

        $scope.addPost = function(){
            if(!$scope.title || $scope.title === '') { return; }
            $scope.rankings.push({title: $scope.title, upvotes: 0});
            $scope.title = '';
            
        };

        
      
        $scope.logModels = function () {
            $scope.sortingLog = [];    
            for (var i = 0; i < $scope.rawScreens.length; i++) {
                var logEntry = $scope.rawScreens[i].map(function (x) {
                    return x.title;
                }).join(', ');
                logEntry = 'container ' + (i+1) + ': ' + logEntry;
                $scope.sortingLog.push(logEntry);
            }
        };

    }]

);