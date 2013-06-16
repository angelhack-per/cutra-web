var myapp = angular.module('myapp', ['firebase']);

myapp.controller('WallCtrl', ['$scope', 'angularFireCollection',
  function($scope, angularFireCollection) {
    var url = 'https://cutra.firebaseio.com/apps';
    $scope.apps = angularFireCollection(url);
    // var appx = $scope.apps;
    // $scope.apps1 = [];
    // console.log(appx);
    // console.log(appx[0]);
    // for (var i=0; i<$scope.apps.length || i<3; i++) {
    //     $scope.apps1.push($scope.apps[i]);
    // }
    
  }
]);

function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}