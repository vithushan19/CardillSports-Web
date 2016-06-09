angular.module('cardillApp').factory('rankings', ['$http', function($http){
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
