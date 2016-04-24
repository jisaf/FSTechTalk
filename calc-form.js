var ENDPOINT = 'https://f1axhl6gdi.execute-api.us-east-1.amazonaws.com/Beta';

angular.module('app', ['ui.bootstrap'])

.controller('MainController', function($scope, $http) {
    $scope.calc = {
        total: 0,
        action: "add",
        value: 7
    }


    $scope.submit = function() {
        console.log($scope.calc)
        $http.post(ENDPOINT, $scope.calc)
        .then(function(response) {
            $scope.calc = {
                value: response,
                total: 0,
                action: ""
            }
        })
        .catch(console.log)
    };
});