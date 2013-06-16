var myapp = angular.module('myapp', ['firebase']);

myapp.controller('WallCtrl', ['$scope', 'angularFireCollection',
  function($scope, angularFireCollection) {
    var url = 'https://cutra.firebaseio.com/apps';
    $scope.apps = angularFireCollection(url);
    
  }
]);

function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}