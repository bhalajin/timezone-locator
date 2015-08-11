var searchLocation = function () {
  var location = $("#location").val();
  var locationURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key="+config.AUTHKEY;
  $(".title-area").css({
    'height': '0%',
    'display': 'none'
  });
  $(".title-area-minimized").css({
    'height': '10%',
    'transition': 'height 0.5s'
  });
  $("#locationSearched").text(location);
  $.get(locationURL, function(data){
    if(data.status==='OK'){
      $("#latitude").text(data.results[0].geometry.location.lat);
      $("#longitude").text(data.results[0].geometry.location.lng);
      $(".geometry-display").css({
        'height': '10%',
        'transition': 'height 0.5s'
      });
    }
  });
};

var newSearch = function () {
  var searchText = $("<input type='text' />")
  $("#locationSearched").html(searchText);
};