angular.module('cardillApp').controller('DraftRetroController', [
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