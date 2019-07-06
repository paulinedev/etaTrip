$( document ).ready(function() {
    console.log( "ready!" );
  	Sticker.init('.sticker');
    $('.nb').hover(function(){
      $(this).css('color', '#FF847A')
    });
    $('#londres').mouseenter(function(){
      $(this).css('opacity','0');
      $('#londres2').css('opacity', '1');
    });
    $('#londres').mouseleave(function(){
      $(this).css('opacity','1');
      $('#londres2').css('opacity', '0');
    });
    //LA METEO
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=london,uk&units=metric&appid=2ebe19fb2e7dc8831190daf8260d7761", function (response){
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


        // alert("Il fait actuellement "+temperature+"°C à Londres !");
        var changeTexteTemp = document.getElementById("temperature");
        changeTexteTemp.innerHTML = "Il fait actuellement "+temperature+"°C à Londres !";
    });

});
