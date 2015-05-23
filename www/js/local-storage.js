angular.module('starter.storage', [])

.factory('BandsStorage', function() {
  return {
    all: function() {
      var bands = window.localStorage['bands'];
      if(bands) {
        return angular.fromJson(bands);
      }
      return {};
    },
    save: function(bands) {
      window.localStorage['bands'] = angular.toJson(bands);
    },
    clear: function() {
      window.localStorage.removeItem('bands');
    }
  }
})

.factory('NewsStorage', function() {
  return {
    all: function() {
      var news = window.localStorage['news'];
      if(news) {
        return angular.fromJson(news);
      }
      return {};
    },
    save: function(news) {
      window.localStorage['news'] = angular.toJson(news);
    },
    clear: function() {
      window.localStorage.removeItem('news');
    }
  }
});