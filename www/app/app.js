﻿angular.module("eliteApp", ["ionic"])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        //hide the accessory bar by default (remove this to show the accessory bar above
        //for form inputs
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.keyboard) {
            cordova.plugins.keyboard.hidekeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            //org.apache.cordova.statusbar required
            statusbar.styleDefault();
        }
    });

})

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
        abstract: true,
        url: "/home",
        templateUrl: "app/home/home.html"
    })

    .state('home.leagues', {
        url: "/leagues",
        views: {
            "tab-leagues": {
                templateUrl: "app/home/leagues.html"
            }
        }
        })

    .state('home.myteams', {
        url: "/myteams",
        views: {
            "tab-myteams":{
                templateUrl: "app/home/myteams.html"
            }
        }
            
        })

    .state('app', {
        abstract: true,
        url: "/app",
        templateUrl: "app/layout/menu-layout.html"
    })
        .state('app.teams', {
            url: "/teams",
            views: {
                "mainContent":{
                    templateUrl: "app/teams/teams.html"
                }
            }
        })

        .state('app.team-detail', {
            url: "/teams/:id",
            views: {
                "mainContent":{
                    templateUrl: "app/teams/team-detail.html"
                }
            }
        })

        .state('app.game', {
            url: "/game",
            views: {
                "mainContent":{
                    templateUrl: "app/game/game.html"
                }
            }
        })

            .state('app.standings', {
                url: "/standings",
                views: {
                    "mainContent":{
                        templateUrl: "app/standings/standings.html"
                    }
                }
            })
            .state('app.locations', {
                url: "/locations",
                views: {
                    "mainContent":{
                        templateUrl: "app/locations/locations.html"
                    }
                }
            })
            .state('app.rules', {
                url: "/rules",
                views: {
                    "mainContent":{
                        templateUrl: "app/rules/rules.html"
                    }
                }
    });

    //if name of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/teams');
});