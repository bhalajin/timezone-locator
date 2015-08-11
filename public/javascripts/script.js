var searchLocation = function () {
  var location = $("#location").val();
  var locationURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key="+config.AUTHKEY;
  $.get(locationURL, function(data){
    if(data.status==='OK'){
      $("#latitude").text(data.results[0].geometry.location.lat);
      $("#longitude").text(data.results[0].geometry.location.lng);
    }
  });
};