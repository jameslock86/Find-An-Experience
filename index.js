$( document ).ready(function() {

	let key = 'dx08NystFzmshq8Ij2Xe7pH8n4xfp1WguRQjsncf8vQ1BdN8mu';


	function doThings(response) {
		for (let i in response) {
			$('.responses').append(response[i]);
			console.log('here in the loop', i, response[i]);
		}

	}

	function goTo() {
		location.href = document.getElementById(city, state).value;
		console.log(city, state);
	}








	function getCityState(city,state) {
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
				console.log('RESPONSE FIRST:', response);
				doThings(response);
			})
			.catch(function(error) {
				console.log('error: ', error);
			});
	}

	$('#findCity').click(function(e) {
		e.preventDefault();
		let city;
		let state;
		city = $('#find-city').val();
		state = $('#find-state').val();
		getCityState(city,state);

	});


});
