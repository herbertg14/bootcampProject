var map;

// var places = ["Los Angeles, CA", "barton springs", "homeslice pizza"];

// $("#clickMe").on('click',function(){

// 	var newObject = {
// 		lat: 30.284933,
// 		lng: -97.750701
// 	}
// 	var marker = new google.maps.Marker({
// 	position: {lat: newObject.lat, lng: newObject.lng},
// 	map: map
// 	});

// 	map.setCenter(marker.position);
// 	map.setZoom(10);
// })

function setPins(geocoder, map){
	var firstPlace = "Houston,TX";
	// var secondPlace = places[1];

	geocoder.geocode({"address": firstPlace}, function(results, status){
		if (status === google.maps.GeocoderStatus.OK){
			// map.setCenter(results[0].geometry.location);
			console.log(typeof(results[0].geometry.location));
			var marker = new google.maps.Marker({
				map:map,
				position: results[0].geometry.location
			});
			map.setCenter(results[0].geometry.location);
			map.setZoom(10);
			alert (results[0].geometry.location);
		} else{
			alert('you fucked up');
		}
	});
}

function initMap() {
  	map = new google.maps.Map(document.getElementById('map'), {
    // center: {lat: -34.397, lng: 150.644},
    // zoom: 6
  	});

  	var infoWindow = new google.maps.InfoWindow({map:map});

  	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(function(position){
  			var yourPosition = {
  				lat: position.coords.latitude,
  				lng: position.coords.longitude
  			};

  			infoWindow.setPosition(yourPosition);
  			infoWindow.setContent('you are here');
  			map.setCenter(yourPosition);
  			map.setZoom(12);
  		})
  	}

  	var geocoder = new google.maps.Geocoder();
  	setPins(geocoder,map);
}

initMap();






