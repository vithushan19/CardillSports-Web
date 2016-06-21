angular.module('cardillApp').factory('reddit', ['$http', function($http){
    var o = {
        posts: [

        ],
        after:{}
    };

    o.getAll = function() {
        return $http.get('/api/reddit').success(function(data){
            console.log("after: " + data.data.after);
            angular.copy(data.data.children, o.posts);
            o.after = {"after": data.data.after};            
        });
    };

    o.getMore = function(after) {
        return $http.get('/api/reddit/'+after).success(function(data){
            for (var i=0; i<data.data.children.length; i++) {
                o.posts.push(data.data.children[i]);
            }
            o.after = {"after": data.data.after};
        });
    }

    return o;
}]);
