// Code goes here

var app = angular.module('myapp', []);

app.controller('OpdcController', function ($scope, $http) {


    $http.get("http://opdct1.apphb.com/api/Categorias")
        .then(onUserComplete, onError);

    // Recebe o usuario
    var onUserComplete = function (response) {
        $scope.data = response.data;
    };

    var onError = function (reason) {
        $scope.error = "ERRO AO TENTAR ACESSAR O SERVICO";
    };


});

