var backendUrl = 'https://api.foursquare.com/v2/venues/search';
var token = 'WQYRTF4NQJSA2TLXN3ULY4DKIAI05C3PR3L31LKNGCY5ZROF';

angular.module('starter.services', [])

.factory('Locations', function($http) {
  return {
    getLocationByDistance: function(lat, lng, radius) {
      return $http.get(backendUrl + '?ll=' + lat + ',' + lng + '&radius=' + radius + '&oauth_token=' + token + '&v=' + '20150510');
    }
  }
});