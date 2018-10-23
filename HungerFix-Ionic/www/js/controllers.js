angular.module('starter.controllers', [])

.controller('LocationCtrl', function($window, $scope, $ionicLoading, $ionicPopup, $state, $cordovaGeolocation, Locations) {

  $ionicLoading.show({
    template: 'loading locations...'
  });

  $scope.distance = { meters: '500'};

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  var currentLat, currentLng;

  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      currentLat  = position.coords.latitude;
      currentLng = position.coords.longitude;

      //load default distance of 500 meters
      var promise = Locations.getLocationByDistance(currentLat.toFixed(2),currentLng.toFixed(2),$scope.distance.meters);

      promise.then(function (result) {
        $scope.locations = result.data.response.venues;
      });

      promise.catch(function(error) {
        $ionicPopup.alert({
          title: 'Network Connection Error',
          template: 'Unable to retrieve locations. Please check your internet connection and try again.'
        }).then(function() {
          $state.go($scope.fromState);
        });
      });

      promise['finally'](function() {
        $ionicLoading.hide();
      });


      //when distance changes upldate locations
      $scope.update = function() {
        $ionicLoading.show({
          template: 'loading locations...'
        });

        var promise = Locations.getLocationByDistance(currentLat.toFixed(2),currentLng.toFixed(2),$scope.distance.meters);

        promise.then(function (result) {
          $scope.locations = result.data.response.venues;
        });

        promise.catch(function(error) {
          $ionicPopup.alert({
            title: 'Network Connection Error',
            template: 'Unable to retrieve locations. Please check your network connection and try again.'
          }).then(function() {
            $state.go($scope.fromState);
          });
        });

        promise['finally'](function() {
          $ionicLoading.hide();
        });
      }

    }, function(err) {
      // error
    })

  $scope.selection = [];

  // toggle selected location
  $scope.toggleSelection = function toggleSelection(location) {

    var index = $scope.selection.indexOf(location);

    $scope.isSelected = function isSelected(location){
      if($scope.selection.indexOf(location) > -1){
        return true;
      } else{
        return false;
      }
    }

    // is currently selected
    if (index > -1) {
      $scope.selection.splice(index, 1);
    }
    // is newly selected
    else {
      $scope.selection.push(location);
    }
  };

  function onShake() {
    // Fired when a shake is detected
    var id = Math.floor(Math.random() * ($scope.selection.length));
    for (var i = $scope.locations.length - 1; i >= 0; i--) {
      if ( $scope.locations[i].id == $scope.selection[id]){
        $scope.result = $scope.locations[i];
        return;
      }
    }
    document.getElementById('popup-bg').setAttribute('class', 'popup-bg animated fadeIn');
    document.getElementById('popup').setAttribute('class', 'popup-message animated bounceInDown');
  };

  // var onError = function() {
  //   // Fired when there is an accelerometer error (optional)
  // };
  // Start watching for shake gestures and call "onShake"
  // with a shake sensitivity of 40 (optional, default 30)
  
  if (typeof shake !== 'undefined') {
      shake.startWatch(onShake, 80 /*, onError */);
  }

  // Stop watching for shake gestures
  // shake.stopWatch();

  $scope.show = function show(){
    var id = Math.floor(Math.random() * ($scope.selection.length));
    for (var i = $scope.locations.length - 1; i >= 0; i--) {
      if ( $scope.locations[i].id == $scope.selection[id]){
        $scope.result = $scope.locations[i];
      }
    }
    document.getElementById('popup-bg').setAttribute('class', 'popup-bg animated fadeIn');
    document.getElementById('popup').setAttribute('class', 'popup-message animated bounceInDown');
  }

  $scope.close = function close(){
    document.getElementById('popup-bg').setAttribute('class', 'in-active');
    document.getElementById('popup').setAttribute('class', 'in-active');
  }

  $scope.openMap = function(lat,lng) {
    var target = '_blank';

    if (ionic.Platform.isAndroid()) {
      target = '_system';
    }

    $window.open('https://maps.google.com?saddr=' +
      currentLat + ',' + currentLng +
      '&daddr=' + lat + ',' + lng,
      target, 'location=no');
  };
})