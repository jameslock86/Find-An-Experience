$(document).ready(function() {
	//trail api key
	const key = 'dx08NystFzmshq8Ij2Xe7pH8n4xfp1WguRQjsncf8vQ1BdN8mu';
	//google maps key
	const key2 = 'AIzaSyAQse9dG32PSHCCebegk2KeBTfmuvLH6fc';
	const map = [];



	function appendMap(response) {
		for (let i in response.places) {
			// console.log(response.places);
			let lat = response.places[i].lat;
			let lon = response.places[i].lon;
			let multipleMarkers = response.places[i].activities;
			console.log(multipleMarkers);
			let mapInput = `<iframe
		  width="300"
		  height="175"
		  frameborder="0"
		  scrolling="no"
		  marginheight="0"
		  marginwidth="0"
		  src="https://maps.google.com/maps?q=${lat},${lon}&hl=es;z=14&amp;output=embed">
		 </iframe>
		 <br />
		 <med>
		   <a
		    href="https://maps.google.com/maps?q='+data.lat+','+data.lon+'&hl=es;z=14&amp;output=embed"
		    style="color:#0000FF;text-align:float-left"
		    target="_blank">
		   </a>
		 </med>`;

			if (lat !== 0 && lon !== 0) {
				$('.map').append(mapInput);
			}


		}
	}






	function printOutMyCityStateArr(response) {
		//first pass gets you city amd state

		for (let i in response) {
			$('.responses').append(response[i]);
			//second pass gets you park name


			for (let q in response[i]) {
				console.log('the park name is', (response[i][q]).name);
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

	// $('#findCity').click(renderOnMap() {
	// 	// make a marker when called
	//
	// }) {
	//
	// }

});
