var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.artists = [{
    'name' : 'Justin Timberlake',
    'shortname': 'jt',
    'title': 'singer'
  },
  {
    'name':'lilWayne',
    'shortname':'lilWayne',
    'title':'songwriter'
  }];
});
