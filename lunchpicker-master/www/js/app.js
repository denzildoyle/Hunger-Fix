// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
      $cordovaStatusbar.styleHex('#FF0000');
    }
  });
})

//ui state references
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // home
  .state('home', {
    url: '/',
    templateUrl: 'home.html'
  })

  .state('location', {
    url: '/location',
    templateUrl: 'location.html',
    controller: 'LocationCtrl'
  })

  .state('result', {
    url: '/result',
    templateUrl: 'result.html',
    controller: 'ResultCtrl'
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});

