/**
 * 
 */
var lat = "";
var lng = "";


function showPosition(position){
	lat = position.coords.latitude;
	lng = position.coords.longitude;
}

function getNearPlaces() {
	$("#placeMsg").hide();
	var address = $("#queryAddress").val();
	var type = $("#queryName").val()==""?"":$("#queryName").val();
	var name = $("#queryType").val()==""?"":$("#queryType").val();
	var radius = $("#queryRadius").val()==""?0:$("#queryRadius").val();
	if(address == ""){
		//get current location lat lng
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			placeMsg.innerHTML = "Geolocation is not supported by this browser.";
		}
	}else{
		$.ajax({
					type : "GET",
					accept : "text/json",
					url : "http://localhost:7070/GoogleAPIRef/rest/gapi/getGeoCodeData?address="
							+ address + "&lang=en",
							async : false,
					success : function(result) {
							lng = result[0].geometry.location.lng;
							lat = result[0].geometry.location.lat;
					},
					error : "",
				});
	}
	$.ajax({
		url : "http://localhost:7070/GoogleAPIRef/rest/gapi/getGooglePlace?lat="+lat+"&lng="+lng+"&radius="+radius+"&address="+address+"&type="+type+"&name="+name,
		success : function(result) {
			console.log(result);
			initializeMap(result,lat,lng,radius);
		}
	});
}

function initializeMap(result,lattitude,longitude,radius) {
	var myCenter = new google.maps.LatLng(lattitude, longitude);
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
			center: myCenter,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var icon = {
			url: "../image/current_loc_marker.png", // url
			scaledSize: new google.maps.Size(20, 15), // scaled size
			origin: new google.maps.Point(0,0), // origin
			anchor: new google.maps.Point(0, 0) // anchor
	};
	var marker=new google.maps.Marker({
		position:myCenter,
		icon:icon
	});
	marker.setMap(map);

	var outputPlaces = result.results;
	for(var i=0;i<outputPlaces.length;i++){
		var icon = {
				url: outputPlaces[i].icon, // url
				scaledSize: new google.maps.Size(20, 20), // scaled size
				origin: new google.maps.Point(0,0), // origin
				anchor: new google.maps.Point(0, 0) // anchor
		};
		myCenter=new google.maps.LatLng(outputPlaces[i].geometry.location.lat,outputPlaces[i].geometry.location.lng);
		var marker=new google.maps.Marker({
			position:myCenter,
			icon:icon
		});
		var infowindow = new google.maps.InfoWindow({
			content:outputPlaces[i].name
		});
		//infowindow.open(map, marker);
		marker.set('data',outputPlaces[i]);
		marker.addListener('click',function(){
			showDetails(this);
		});
		marker.setMap(map);

	}
	
	  var cityCircle = new google.maps.Circle({
	      strokeColor: '#FF0000',
	      strokeOpacity: 0.8,
	      strokeWeight: 2,
	      map: map,
	      center: {lat:Number(lattitude),lng:Number(longitude)},
	      radius: Number(radius)
	    });
}

function showDetails(val){
	$("#placeMsg").show();
	console.log(JSON.stringify(val.data));
	$("#locName").html(val.data.name);
	$("#locVicinity").html(val.data.vicinity);
}