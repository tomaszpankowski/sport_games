angular.module("app",["ngRoute"]);        
angular.module("app")
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/views/comingsoon.html"
     })
    .when("/privacy", {
        templateUrl: "app/views/privacy.html"
    })
    .otherwise({
        templateUrl: "app/views/error.html"
    });
});