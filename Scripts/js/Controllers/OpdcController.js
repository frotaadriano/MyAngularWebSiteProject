// Code goes here

var app = angular.module('myapp', []);
 

app.controller('OpdcController', function ($scope, $http) {


    $http.get("http://opdct1.apphb.com/api/Categorias")
        .then(onUserComplete, onError);

    var onUserComplete = function (response) {
       $scope.list = response.data;
    };

    var onError = function (reason) {
        $scope.error = "ERRO AO TENTAR ACESSAR O SERVICO";
       
    };


});

