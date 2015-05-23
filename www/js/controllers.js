angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, MenuData, $timeout) {
    
    $scope.items = MenuData.items;
    
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

// Profiel Gaellus
.controller('ProfielCtrl', function($scope) {
})

// Bands Controller
.controller('BandsCtrl', function($scope, $ionicLoading, BandsData, BandsStorage) {
    
    $scope.bands = [];
    $scope.storage = '';
    
    $scope.loading = $ionicLoading.show({
      template: '<i class="icon ion-loading-c"></i> Loading Data',

      //Will a dark overlay or backdrop cover the entire view
      showBackdrop: false,

      // The delay in showing the indicator
      showDelay: 10
    });
    
    BandsData.async().then(
        // successCallback
        function() {
            $scope.bands = BandsData.getAll();
            $scope.letterLimit = BandsData.getLetterLimit();
            $ionicLoading.hide();
        },
        // errorCallback 
        function() {
            $scope.bands = BandsStorage.all();
            $scope.letterLimit = BandsData.getLetterLimit();
            $scope.storage = 'Data from local storage';
            $ionicLoading.hide();
        },
        // notifyCallback
        function() {}
    );
    
})

// Band Controller
.controller('BandCtrl', function($scope, $stateParams, BandsData) {
    
    $scope.band = BandsData.get($stateParams.bandId);
    
})

// News Controller
.controller('NewsCtrl', function($scope, $ionicLoading, NewsData, NewsStorage) {
    
    $scope.news = [];
    $scope.storage = '';
    
    $scope.loading = $ionicLoading.show({
      template: '<i class="icon ion-loading-c"></i> Loading Data',

      //Will a dark overlay or backdrop cover the entire view
      showBackdrop: false,

      // The delay in showing the indicator
      showDelay: 10
    });
    
    NewsData.async().then(
        // successCallback
        function() {
            $scope.news = NewsData.getAll();
            $ionicLoading.hide();
        },
        // errorCallback 
        function() {
            $scope.news = NewsStorage.all();
            $scope.storage = 'Data from local storage';
            $ionicLoading.hide();
        },
        // notifyCallback
        function() {}
    );

})

// New Controller
.controller('NewCtrl', function($scope, $stateParams, NewsData) {

    $scope.new = NewsData.get($stateParams.newId);
    
})


// Website
.controller('WebsiteCtrl', function($scope) {

})

.controller('InAppBrowsergaellusopenairCtrl', ['$scope', function($scope) {
	$scope.openBrowser = function(){
		window.open('http://www.gaellusopenair.nl', '_blank', 'location=yes');
	};
}])

.controller('InAppBrowsergaellusCtrl', ['$scope', function($scope) {
	$scope.openBrowser = function(){
		window.open('http://www.gaellus.nl', '_blank', 'location=yes');
	};
}]);