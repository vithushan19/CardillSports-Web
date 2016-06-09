angular.module('cardillApp').controller('DraftResultsController', [
    '$scope',
    'rankings',
    function($scope, rankings){    
        $scope.rankings = rankings.rankings;
    }]
);