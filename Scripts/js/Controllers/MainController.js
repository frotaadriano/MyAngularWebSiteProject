// Code goes here

var app = angular.module('myapp', []);

app.controller('MainController', function ($scope, $http) {

    $scope.username = "adriano";
    $scope.minrepo = 1;
    $scope.minfollowers = 0;
    $scope.showUserSelectBox = false;
    $scope.noData = false;

    // Recebe o usuario
    var onUserComplete = function (response) {
        $scope.list = response.data;

        if ($scope.list.total_count != 0) {
            $scope.showUserSelectBox = true;
        }
        else {
            alert('Nao encontrou resultados!');
        }
        
    };

    var onUserDetailsComplete = function (response) {
        $scope.userDetails = response.data;

    };


    $scope.SearchUserDetails = function (username) {
        $http.get("https://api.github.com/users/" + username)
            .then(onUserDetailsComplete, onError);
    };

     


    var onError = function (reason) {
        $scope.error = "ERRO AO TENTAR ACESSAR O SERVICO";
    };

    //**************************************************************//
    // Para a busca Funcionar (SEACH FUNCTION)
    //**************************************************************//

    //exemplo-> https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000

    $scope.search = function (username, minrepo, minfollowers) {
        $http.get("https://api.github.com/search/users?q=" + username + "+repos:%3E" + minrepo + "+followers:%3E" + minfollowers)
            .then(onUserComplete, onError);

    };

    //https://api.github.com/users/frotaadriano

});

