$( document ).ready(function() {
	Sticker.init('.sticker');
	//LA METEO
	$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=paris,fr&units=metric&appid=2ebe19fb2e7dc8831190daf8260d7761", function (response){
		var temperature = response.main.temp;
		var temps = response.weather.id;
		var cloud = response.clouds.all;

		// afficher soleil etc.
		// var changeImage = document.getElementsByClassName('illu');
		if(temps = "Rain"){
				$("#pluie").show();
		} else if(temps ="Snow"){
			$("#neige").show();
		} else if (cloud < 50){
				$('#ensolleille').show();
		} else if (cloud >= 50){
				if (cloud < 100){
						$('#soleil').show();
				} else {
						$("#nuage").show();
				}
		}
			// alert("Il fait actuellement "+temperature+"°C à Rome !");
			var changeTexteTemp = document.getElementById("temperature");
			changeTexteTemp.innerHTML = "Il fait actuellement "+temperature+"°C à Paris !";
			console.log(temperature);
	});
