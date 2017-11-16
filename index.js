let googlemapdots;

let map;

// window.initMap = function() {
// 	var map = new google.maps.Map(
// 		document.getElementById('map_canvas'), {
// 			center: new google.maps.LatLng(`${lat,lon}`),
// 			zoom: 10,
// 			mapTypeId: google.maps.MapTypeId.ROADMAP
// 		});
// 	google.maps.event.addDomListener(window, 'load', initialize());





$(document).ready(function() {
	//trail api key
	const key = 'dx08NystFzmshq8Ij2Xe7pH8n4xfp1WguRQjsncf8vQ1BdN8mu';
	//google maps key
	const key2 = 'AIzaSyAQse9dG32PSHCCebegk2KeBTfmuvLH6fc';

	// function initialize() {
	//   var map = new google.maps.Map(
	//     document.getElementById('map_canvas'), {
	//       center: new google.maps.LatLng(`${lat,lon}`),
	//       zoom: 10,
	//       mapTypeId: google.maps.MapTypeId.ROADMAP
	// 	  });
	// 	google.maps.event.addDomListener(window, 'load', initialize());

	//
	// // Create a <script> tag and set the USGS URL as the source.
	// var script = document.createElement('script');
	// script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAQse9dG32PSHCCebegk2KeBTfmuvLH6fc&libraries=places';
	// document.getElementById('map_wrapper').appendChild(script);

	// Loop through the results array and place a marker for each
	// set of coordinates.
	// function bigMap(data) {
	// 	for (var i = 0; i < data.length; i++) {
	// 		var latLng = new google.maps.LatLng(data[i].lat, data[i].lon);
	// 		var marker = new google.maps.Marker({
	// 			position: latLng,
	// 			map: map
	// 		});
	// 	}
	// }


	// <tbody id="tbody"></tbody>
	function appendMap(response) {
		for (let i in response.places) {
			//console.log(response.places);

			let some = response.places;
			var $parks= $('#parks');

			$.each(some,function (i, parks) {
				$parks.append('<br><li>city: '+ parks.city +'<li> state:'+ parks.state +'<li>name: '+ parks.name +'<li>activity: '+ parks.name.multipleMarkers + '</li><br>');

			});

			var lat = response.places[i].lat;
			var lon = response.places[i].lon;
			let multipleMarkers = response.places[i].activities;

			console.log(multipleMarkers);
			width = '800';
			height = '400';
			frameborder = '0';
			scrolling = 'no';
			marginheight = '0';
			marginwidth = '0';
			var mapInput = `<iframe

		  src="https://maps.google.com/maps?q=${lat},${lon}&hl=es;z=14&amp;output=embed">
		 </iframe>
		 <br />`;
			// <med>
			//  <a
			//   href="https://maps.google.com/maps?q='+data.lat+','+data.lon+'&hl=es;z=14&amp;output=embed"
			//    style="color:#0000FF;"
			//   target="_blank">
			//  </a>
			//  </med>`;

			if (lat !== 0 && lon !== 0) {
				$('.map').append(mapInput, multipleMarkers);




			}
		}
	}

	function printOutMyCityStateArr(response) {
		//first pass gets you city amd state

		for (let i in response) {
			$('.responses').append(response[i]);
			//second pass gets you park name
			for (let q in response[i]) {
				//console.log('the park name is', (response[i][q]).name);
				let name;
				for (let w in response[i][q]) {
					let activities;
					console.log('things to do in parks', (response[i][q]).activities);
				}
			}
		}
	}
	//this is where we make the call to the api
	function getCityState(city, state) {
		let getSite = `https://trailapi-trailapi.p.mashape.com/?q[city_cont]=${city}&q[state_cont]=${state}`;
		$.ajax({
			url: getSite,
			headers: {
				'X-Mashape-Key': key,
				'Accept': 'text/plain',
			},
			method: 'GET',
			datatype: 'JSON',
		})
			.then(function(response) {
				// googlemapdots = response;
				// console.log(googlemapdots);
				appendMap(response);
			})
			.catch(function(error) {
				console.log('error: ', error);
			});
	}
	//this is where the click gets you the city to populte
	$('#findCity').click(function(e) {
		e.preventDefault();
		let city;
		let state;
		city = $('#find-city').val();
		state = $('#find-state').val();
		getCityState(city, state);
	});
});








//
// jQuery(function($) {
// 	// Asynchronously Load the map API
// 	var script = document.createElement('script');
// 	script.src = '//maps.googleapis.com/maps/api/js?sensor=false&callback=initialize';
// 	document.body.appendChild(script);
// });
//
// function initialize() {
// 	var map;
// 	var bounds = new google.maps.LatLngBounds();
// 	var mapOptions = {
// 		mapTypeId: 'roadmap'
// 	};
//
// 	// Display a map on the page
// 	map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
// 	map.setTilt(45);
//
// 	// Multiple Markers
// 	var markers = [
// 		['London Eye, London', 51.503454, -0.119562],
// 		['Palace of Westminster, London', 51.499633, -0.124755]
// 	];
//
// 	// Info Window Content
// 	var infoWindowContent = [
// 		['<div class="info_content">' +
//       '<h3>London Eye</h3>' +
//       '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' + '</div>'
// 		],
// 		['<div class="info_content">' +
//       '<h3>Palace of Westminster</h3>' +
//       '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
//       '</div>'
// 		]
// 	];
//
// 	// Display multiple markers on a map
// 	var infoWindow = new google.maps.InfoWindow(),
// 		marker, i;
//
// 	// Loop through our array of markers & place each one on the map
// 	for (i = 0; i < markers.length; i++) {
// 		var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
// 		bounds.extend(position);
// 		marker = new google.maps.Marker({
// 			position: position,
// 			map: map,
// 			title: markers[i][0]
// 		});
//
// 		// Allow each marker to have an info window
// 		google.maps.event.addListener(marker, 'click', (function(marker, i) {
// 			return function() {
// 				infoWindow.setContent(infoWindowContent[i][0]);
// 				infoWindow.open(map, marker);
// 			};
// 		})(marker, i));
//
// 		// Automatically center the map fitting all markers on the screen
// 		map.fitBounds(bounds);
// 	}
//
// 	// Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
// 	var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
// 		this.setZoom(14);
// 		google.maps.event.removeListener(boundsListener);
// 	});
//
//
//
// }
