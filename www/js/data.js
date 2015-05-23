angular.module('starter.data', [])

//Home Data: Home page configuration
.factory('Data', function(){
    var data = {};
        return data;
})

// Menu Data: Menu configuration
.factory('MenuData', function(){
    var data = {};
    
    return data;
})

// Bands Data: JSON
.factory('BandsData', function($http, $q, BandsStorage) {
    
    var json = 'json/bands.json';

    var deferred = $q.defer();
    var promise = deferred.promise;
    var data = [];
    var service = {};

    service.async = function() {
    $http({method: 'GET', url: json, timeout: 5000}).
    // this callback will be called asynchronously
    // when the response is available.
    success(function(d) {
        data = d.result;
        BandsStorage.save(data);
        deferred.resolve();
    }).
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    error(function() {
        data = BandsStorage.all();
        deferred.reject();
    });
        
    return promise;
        
    };

    service.getAll = function() { return data; };

    service.get = function(bandId) { return data[bandId]; };

    service.getLetterLimit = function() { return 100; };

    return service;
})

// News Data: JSON
.factory('NewsData', function($http, $q, NewsStorage) {
    
    var json = 'json/informatie.json';

    var deferred = $q.defer();
    var promise = deferred.promise;
    var data = [];
    var service = {};
    
    service.async = function() {
    $http({method: 'GET', url: json, timeout: 5000}).
    // this callback will be called asynchronously
    // when the response is available.
    success(function(d) {
        data = d.result;
        NewsStorage.save(data);
        deferred.resolve();
    }).
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    error(function() {
        data = NewsStorage.all();
        deferred.reject();
    });
        
    return promise;
        
    };
    
    service.getAll = function() { return data; };

    service.get = function(newId) { return data[newId]; };

    return service;
});