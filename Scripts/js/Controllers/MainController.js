// Code goes here

var app = angular.module('myapp', []);

app.controller('MainController', function ($scope, $http) {

    $scope.username = "adriano";
    $scope.minrepo = 1;
    $scope.minfollowers = 0;
    // Recebe o usuario
    var onUserComplete = function (response) {
        $scope.list = response.data;

        //// Apos receber o usuario chamo a lista de Repos deste
        //$http.get($scope.user.repos_url)
        //    .then(onReposComplete, onError);
    };


    $scope.data = {
        "total_count": 4,
        "incomplete_results": false,
        "items": [
            {
                "login": "mojombo",
                "id": 1,
                "avatar_url": "https://avatars3.githubusercontent.com/u/1?v=3",
                "gravatar_id": "",
                "url": "https://api.github.com/users/mojombo",
                "html_url": "https://github.com/mojombo",
                "followers_url": "https://api.github.com/users/mojombo/followers",
                "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
                "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
                "organizations_url": "https://api.github.com/users/mojombo/orgs",
                "repos_url": "https://api.github.com/users/mojombo/repos",
                "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
                "received_events_url": "https://api.github.com/users/mojombo/received_events",
                "type": "User",
                "site_admin": false,
                "score": 49.54566
            },
            {
                "login": "tomdale",
                "id": 90888,
                "avatar_url": "https://avatars1.githubusercontent.com/u/90888?v=3",
                "gravatar_id": "",
                "url": "https://api.github.com/users/tomdale",
                "html_url": "https://github.com/tomdale",
                "followers_url": "https://api.github.com/users/tomdale/followers",
                "following_url": "https://api.github.com/users/tomdale/following{/other_user}",
                "gists_url": "https://api.github.com/users/tomdale/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/tomdale/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/tomdale/subscriptions",
                "organizations_url": "https://api.github.com/users/tomdale/orgs",
                "repos_url": "https://api.github.com/users/tomdale/repos",
                "events_url": "https://api.github.com/users/tomdale/events{/privacy}",
                "received_events_url": "https://api.github.com/users/tomdale/received_events",
                "type": "User",
                "site_admin": false,
                "score": 40.39779
            },
            {
                "login": "tmcw",
                "id": 32314,
                "avatar_url": "https://avatars1.githubusercontent.com/u/32314?v=3",
                "gravatar_id": "",
                "url": "https://api.github.com/users/tmcw",
                "html_url": "https://github.com/tmcw",
                "followers_url": "https://api.github.com/users/tmcw/followers",
                "following_url": "https://api.github.com/users/tmcw/following{/other_user}",
                "gists_url": "https://api.github.com/users/tmcw/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/tmcw/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/tmcw/subscriptions",
                "organizations_url": "https://api.github.com/users/tmcw/orgs",
                "repos_url": "https://api.github.com/users/tmcw/repos",
                "events_url": "https://api.github.com/users/tmcw/events{/privacy}",
                "received_events_url": "https://api.github.com/users/tmcw/received_events",
                "type": "User",
                "site_admin": false,
                "score": 36.811348
            },
            {
                "login": "tommy351",
                "id": 411425,
                "avatar_url": "https://avatars3.githubusercontent.com/u/411425?v=3",
                "gravatar_id": "",
                "url": "https://api.github.com/users/tommy351",
                "html_url": "https://github.com/tommy351",
                "followers_url": "https://api.github.com/users/tommy351/followers",
                "following_url": "https://api.github.com/users/tommy351/following{/other_user}",
                "gists_url": "https://api.github.com/users/tommy351/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/tommy351/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/tommy351/subscriptions",
                "organizations_url": "https://api.github.com/users/tommy351/orgs",
                "repos_url": "https://api.github.com/users/tommy351/repos",
                "events_url": "https://api.github.com/users/tommy351/events{/privacy}",
                "received_events_url": "https://api.github.com/users/tommy351/received_events",
                "type": "User",
                "site_admin": false,
                "score": 15.513104
            }
        ]
    }


    // Recebe a lista de Repositorios deste usuario
    //var onReposComplete = function (response) {
    //    $scope.repos = response.data;
    //};


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

