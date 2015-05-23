// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.data', 'starter.filters', 'starter.storage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('OjcGaellus', {
    url: "/OjcGaellus",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('OjcGaellus.profiel', {
    url: "/profiel",
    views: {
      'menuContent': {
        templateUrl: "templates/profiel.html",
        controller: 'ProfielCtrl'
      }
    }
  })
  
        //Website
  .state('OjcGaellus.website', {
    url: "/Website",
    views: {
      'menuContent': {
        templateUrl: "templates/website.html",
        controller: 'WebsiteCtrl'
      }
    }
  })
  
      .state('OjcGaellus.bands', {
      url: "/bands",
      views: {
        'menuContent' :{
          templateUrl: "templates/bands.html",
          controller: 'BandsCtrl'
        }
      }
    })
    
      .state('OjcGaellus.band', {
      url: "/bands/:bandId",
      views: {
        'menuContent' :{
          templateUrl: "templates/band.html",
          controller: 'BandCtrl'
        }
      }
    })
    
.state('OjcGaellus.informatie', {
      url: "/informatie",
      views: {
        'menuContent' :{
          templateUrl: "templates/informatie.html",
          controller: 'NewsCtrl'
        }
      }
    })

    .state('OjcGaellus.info', {
      url: "/informatie/:newId",
      views: {
        'menuContent' :{
          templateUrl: "templates/info.html",
          controller: 'NewCtrl'
        }
      }
    });
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/OjcGaellus/profiel');
});
