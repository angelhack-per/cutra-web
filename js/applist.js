var myapp = angular.module('myapp', ['firebase']);
          

    myapp.controller('MyCtrl', ['$scope', 'angularFireCollection',
      function($scope, angularFireCollection) {
        var url = 'https://cutra.firebaseio.com/devs/'+loggedInUser+'/apps';
        $scope.items = angularFireCollection(url);
        console.log($scope.items);
      }
    ]);

      myapp.controller('AppProjectsCtrl', ['$scope', 'angularFireCollection',
      function($scope, angularFireCollection) {
        var app = get('app');
        var url = 'https://cutra.firebaseio.com/devs/'+loggedInUser+'/apps/'+app+'/projects';
        console.log(url);
        $scope.projects = angularFireCollection(url, $scope);
        $scope.appName=get('appName');
        // $scope.projects = angularFireCollection(url);
        // console.log($scope.items);
      }
    ]);    


function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

// ??

// function SubmissionsCtrl($scope, $http) {

//     $http.get('data/submissions_data.php').success(function(data) {
//     console.log(data);
//     $scope.submissions = data;


//   var myDataRef = new Firebase('https://cutra.firebaseio.com/data');
//   myDataRef.on('value', function(snapshot) {
//     console.log(snapshot);
//     console.log(snapshot.val());
//     if(snapshot.val() === null) {
//       alert('User julie does not exist.');
//     } else {
//       console.log('x');
//       $scope.apps = snapshot.val();

//       // console.log($scope.apps);
//     }
//   });
// }
//PhoneListCtrl.$inject = ['$scope', '$http'];




// 'use strict';

/* Controllers */

// function SubmissionsCtrl($scope, $http) {
//   $http.get('data/submissions_data.php').success(function(data) {
//     console.log(data);
//     $scope.submissions = data;
//     // console.log($scope.schedules);
//   });

  // $scope.setSchedule = function(when) {
  //  // alert(when);
  //  $http(
  //    {
  //      url:"data/claim.php",
  //      method:'GET',
  //      params: {"when":when}
  //    }
  //      ).success(function(data, status, headers, config) {
  //        // alert(data);
    //     $scope.schedules = new Array(24*7);
    //    for (var i = 0; i <data.length; i++) {
    //      // var c = 'v'+;
    //      $scope.schedules[data[i].when] = data[i].by;
    //      // $scope.schedules['a']='asd';
    //    };
    // }).error(function(data, status, headers, config) {
    //     // $scope.status = status;
    //     alert(status);
    // });
  // }
  // $scope.orderProp = 'age';
// }

//PhoneListCtrl.$inject = ['$scope', '$http'];
