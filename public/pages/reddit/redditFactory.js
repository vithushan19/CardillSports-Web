angular.module('cardillApp').factory('reddit', ['$http', function($http){
    var o = {
        posts: [

        ]
    };

    o.getAll = function() {
        return $http.get('/api/reddit').success(function(data){
            console.log(data.data.children);
            angular.copy(data.data.children, o.posts);
        });
    };

    return o;
}]);
