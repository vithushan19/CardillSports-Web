'use strict';

// declare top-level module which depends on filters,and services
var myApp = angular.module('myApp',
    [   'myApp.controllers',
        'ngGrid', // angular grid
        'ui.router',
        'ui.sortable',
        'ui', // angular ui
        'ngSanitize', // for html-bind in ckeditor
        'ui.bootstrap', // jquery ui bootstrap
        '$strap.directives' // angular strap
    ]);


var controllers = angular.module('myApp.controllers', []);

myApp.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '/partials/home.html',
        controller: 'MainCtrl'
    })
    .state('test', {
        url: '/test',
        templateUrl: '/partials/test.html',
        controller: 'DraftCtrl'
    })
    .state('draft-results', {
        url: '/posts/draft-results',
        templateUrl: '/partials/posts/draft-results.html',
        controller: 'DraftCtrl',
        resolve: {
            postPromise: ['rankings', function(rankings){
                return rankings.getAll();
            }]
        }
    })
    .state('draft-retro', {
        url: '/posts/draft-retro',
        templateUrl: '/partials/posts/draft-retro.html',
        controller: 'DraftRetroCtrl'
    })
    .state('finals-preview', {
        url: '/posts/finals-preview',
        templateUrl: '/partials/posts/finals-preview.html',
        controller: 'PostsCtrl'
    })
    .state('not-so-fast', {
        url: '/posts/not-so-fast',
        templateUrl: '/partials/posts/not-so-fast.html',
        controller: 'PostsCtrl'
    })
    .state('f-clevland', {
        url: '/posts/f-clevland',
        templateUrl: '/partials/posts/f-clevland.html',
        controller: 'PostsCtrl'
    })
    .state('power-of-veto', {
        url: '/posts/power-of-veto',
        templateUrl: '/partials/posts/power-of-veto.html',
        controller: 'PostsCtrl'
    })
    .state('rd2-gm7', {
        url: '/posts/rd2-gm7',
        templateUrl: '/partials/posts/rd2-gm7.html',
        controller: 'PostsCtrl'
    })
    .state('the-day-i-said-what-if', {
        url: '/posts/the-day-i-said-what-if',
        templateUrl: '/partials/posts/the-day-i-said-what-if.html',
        controller: 'PostsCtrl'
    });


  $urlRouterProvider.otherwise('home');
}]);