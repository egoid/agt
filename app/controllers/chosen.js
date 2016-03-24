var app = angular.module('plunker', []);

app.controller('chosenCtrl', function($scope, $rootScope) {
  $scope.check = function() {
    alert("asdf")
  }
//   document.addEventListener("deviceready", onDeviceReady, false);
//   $scope.androidContacts = [];
//   var androidContacts = [];
//   $scope.iosContacts = [];
//   $scope.chosenContacts = [];
//   $scope.gps = "waiting...";

// //************************//
//   function onDeviceReady() {
//     contactFunction();
//     gpsFunction();   
//   };
// //************************//
//   function contactFunction() {
//     function onSuccess(contacts) {
//       for (var i=0;i<contacts.length;i++){
//         if (contacts[i].displayName) {
//           $scope.androidContacts.push(contacts[i]); 
//           $scope.$apply();
//         };
//         if (contacts[i].name.givenName) {
//           $scope.iosContacts.push(contacts[i]);
//           $scope.$apply();
//         }
//       } 
//     };
//     function onError(contactError) {
//         alert('error!');
//     };
//     var options      = new ContactFindOptions();
//     options.filter   = "";
//     options.multiple = true;
//     options.desiredFields = [navigator.contacts.fieldType.id, navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name, navigator.contacts.fieldType.phoneNumbers];
//     options.hasPhoneNumber = true;
//     var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];

//     navigator.contacts.find(fields, onSuccess, onError, options);
//   };
// //************************//
// $scope.pickContact = function(id) {
//   androidContacts.push($scope.androidContacts[id]);
//   alert(androidContacts);
// }

// //************************//
//   function gpsFunction() {
//     var onPos = function(position) {
//       var pos = position.coords.latitude + " , " + position.coords.longitude;
//       $scope.gps = pos;
//       $scope.$apply();
//     };
//     var onError = function() {
//       alert("error")
//     };
//     navigator.geolocation.getCurrentPosition(onPos, onError); 
//   };
// //************************//

//   // function recordFunction() {
//   //   $("#startR").click(function() {
//   //     navigator.device.capture.captureVideo(captureSuccess, captureError);  
//   //   });
//   //   function captureSuccess(mediaFiles) {
//   //   //     var i, path, len;
//   //   //     for (i = 0, len = mediaFiles.length; i < len; i += 1) {
//   //   //         path = mediaFiles[i].fullPath;
//   //   //         var vid = $("#videoCapture");
//   //   //         vid.attr('src', path;);
//   //   //         var videoPlayer = $("#videoPlayer");
//   //   //         videoPlayer.attr('autoplay','');
//   //   //     };
//   //   };
//   //   function captureError(error) {
//   //       navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
//   //   };
//   // };

// //*********************//
// $scope.changeView = function() {
//   $scope.chosenContacts = androidContacts;  
//   var Chosen = new steroids.views.WebView({ location: "http://localhost/views/angularApp/chosenContacts.html" });  
//   steroids.layers.push({ view: Chosen });
//   $scope.chosenContacts = androidContacts;
// }

});
