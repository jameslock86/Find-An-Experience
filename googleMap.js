// function initMap() {
// 	var map = new google.maps.Map(document.getElementById('map-canvas'), {
// 		center: { lat: 34.397, lng: 150.644 },
// 		scrollwheel: false,
// 		zoom: 2
// 	});
//
// 	setPath(function(data) {
// 		addPath(map,data);
// 	});
// }
//
// function setPath(callback) {
// 	$.getJSON('https://gist.githubusercontent.com/vgrem/91ba4d694157169b112c/raw/5bdd81c6f5bdfa5ba2d0ca8d5494129b329399d8/expOneActivityData.json',
// 		function (data) {
// 			callback(data);
// 		}
// 	);
// }
//
//
// function addPath(map,expeditionCoordinates) {
// 	var trekLine = new google.maps.Polyline({
// 		path: expeditionCoordinates,
// 		geodisc: true,
// 		stokeColor: '#FF0000',
// 		strokeOpacity: 1.0,
// 		strokeWeight: 2
// 	});
// 	trekLine.setMap(map);
// }
