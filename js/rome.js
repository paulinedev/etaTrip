$( document ).ready(function() {
	Sticker.init('.sticker');
	//LA METEO
	$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Roma&units=metric&appid=2ebe19fb2e7dc8831190daf8260d7761", function (response){
		var temperature = response.main.temp;
		var temps = response.weather[0].main;
		// var cloud = response.clouds.all;
		console.log(response.weather[0].main);
		// afficher soleil etc.
		var changeImage = document.getElementsByClassName('illu');
		if(temps == "Rain"){
			console.log("pluie");
				$("#pluie").show();
		}	else if (temps == "Clear"){
			console.log("ensolleille");
			$('#ensolleille').show();
		} else if(temps == "Snow"){
			console.log("neige");
			$("#neige").show();
		}  else if (temps == "Clouds"){
						$('#soleil').show();
				} else {
					console.log("nuage");
						$("#nuage").show();
				}
		// alert("Il fait actuellement "+temperature+"°C à Rome !");
			var changeTexteTemp = document.getElementById("temperature");
			changeTexteTemp.innerHTML = "Il fait actuellement "+temperature+"°C à Rome !";
	});
});
