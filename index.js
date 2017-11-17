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

	function appendMap(response) {
		console.log('before', response);

		// parks.activities[0];
		// parks.activities[1];
		let some = response.places;
		var $parks = $('#parks');
		console.log(some);
		$.each(some, function(i, parks) {
			$parks.append('<br><li><h5>city:</h5>' + parks.city + '<h5> state:</h5>' + parks.state + '<h5>name:</h5>' + parks.name + '  <h5>activity:</h5>' + '</li>');
			// thingsToDo +
		});
		for (let i in response.places) {
			var lat = response.places[i].lat;
			var lon = response.places[i].lon;
			let multipleMarkers = response.places[0].activities;
			for (let q = 0; q < multipleMarkers.length; q++) {
				console.log('heres this', multipleMarkers[q].activity_type_name);
				let thingsToDo = multipleMarkers[q].activity_type_name;

			}

			width = '1200';
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
				// console.log('the park name is', (response[i][q]).name);
				let name;
				for (let w in response[i][q]) {
					let activities;
					//console.log('things to do in parks', (response[i][q]).activities);
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

				appendMap(response);
			})
			.catch(function(error) {
				console.log('error: ', error);
			});
	}
	//this is where the click gets you the city and state to populate
	$('#findCity').click(function(e) {
		e.preventDefault();
		let city;
		let state;
		city = $('#find-city').val();
		state = $('#find-state').val();
		getCityState(city, state);
	});
	$('.clickMe').click(function(e) {
		e.preventDefault();
		console.log('hello');
		$('#alienpic').toggleClass('hidden').toggleClass('animated').toggleClass('fadeInRight');
	});
// $( "div.tumble" ).toggleClass( "bounce" )
});
