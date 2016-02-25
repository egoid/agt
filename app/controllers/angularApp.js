// This file is automatically included from app/views/layouts/steroidsTutorial.html
var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  document.addEventListener("deviceready", onDeviceReady, false);

//contact function
  function onDeviceReady() {
    contactFunction();
    recordFunction();
    gpsFunction();
  };

  function contactFunction() {
    function onSuccess(contacts) {
      for (var i=0;i<contacts.length;i++){
        if (contacts[i].displayName) {
          var x = $(".pinBoard");
          if (contacts[i].phoneNumbers) {
            $("#incoming").clone().text(contacts[i].displayName + " -- "
              + contacts[i].phoneNumbers[0].value).appendTo(x);
          }
        }
      }
    };
    function onError(contactError) {
        alert('onError!');
    };

    var options      = new ContactFindOptions();
    options.filter   = "";
    options.multiple = true;
    options.desiredFields = [navigator.contacts.fieldType.id, navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name, navigator.contacts.fieldType.phoneNumbers];
    options.hasPhoneNumber = true;
    var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];

    navigator.contacts.find(fields, onSuccess, onError, options);
  };

  function recordFunction() {
    $("#startR").click(function() {
      alert('yo')
      navigator.device.capture.captureVideo(captureSuccess, captureError);  
    });
    function captureSuccess(mediaFiles) {
    //     var i, path, len;
    //     for (i = 0, len = mediaFiles.length; i < len; i += 1) {
    //         path = mediaFiles[i].fullPath;
    //         var vid = $("#videoCapture");
    //         vid.attr('src', path;);
    //         var videoPlayer = $("#videoPlayer");
    //         videoPlayer.attr('autoplay','');
    //     };
    };
    function captureError(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
  };

  function gpsFunction() {
    var onPos = function(position) {
      var pos = position.coords.latitude + " , " + position.coords.longitude;
      $("#gps").text(pos);
    };
    var onError = function() {
      alert("error")
    };
    navigator.geolocation.getCurrentPosition(onPos, onError); 
  };

});
