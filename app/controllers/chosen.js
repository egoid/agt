var app = angular.module('plunker', []);

app.controller('chosenCtrl', function($scope) {
  var iosContacts = {};

  window.addEventListener('message', function (ev) {
    var name = ev.data.data.name.givenName;
    var action = ev.data.action;
    if (action == "remove") {
      delete iosContacts[name];
      $scope.iosContacts = iosContacts;
      $scope.$apply(); 
    } else {
      iosContacts[name] = name;
      $scope.iosContacts = iosContacts;
      $scope.$apply(); 
    }
  });    
});
