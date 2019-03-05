$( document ).ready(function() {
	Sticker.init('.sticker');
	//LA METEO
	$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Roma&units=metric&appid=2ebe19fb2e7dc8831190daf8260d7761", function (response){
			var temperature = response.main.temp;
			// alert("Il fait actuellement "+temperature+"°C à Rome !");
			var changeTexteTemp = document.getElementById("temperature");
			changeTexteTemp.innerHTML = "Il fait actuellement "+temperature+"°C à Rome !";
	});
});
