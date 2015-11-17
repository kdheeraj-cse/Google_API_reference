/**
 * 
 */
var x = document.getElementById("coordinatesMsg");

function getCurrentLocation() {
	if ($("#userAddress").val() != "") {
		getLocation();
	} else {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			x.innerHTML = "Geolocation is not supported by this browser.";
		}
	}
}

function getLocation() {
	var address = $("#userAddress").val();
	var lang = $("#userLang").val()
	$
			.ajax({
				type : "GET",
				accept : "text/json",
				url : "http://localhost:7070/GoogleAPIRef/rest/gapi/getGeoCodeData?address="
						+ address + "&lang=en",
				success : function(result) {
					showOnMap(result);
				},
				error : "",
			});
}

function showPosition(position) {
	x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: "
			+ position.coords.longitude;
	initialize(position.coords.latitude, position.coords.longitude);
}

function initialize(lattitude, longitude) {
	var myCenter = new google.maps.LatLng(lattitude, longitude);
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center : new google.maps.LatLng(lattitude, longitude),
		zoom : 10,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({
		position : myCenter,
	});

	marker.setMap(map);
}

function showOnMap(data) {
	var longitude = data[0].geometry.location.lng;
	var lattitude = data[0].geometry.location.lat;
	var shortAddress = data[0].formattedAddress;
	$("#coordinatesMsg").html(
			"Latitude: " + lattitude + "<br>Longitude: " + longitude+"<br><br>"+shortAddress);
	initialize(lattitude, longitude);
}