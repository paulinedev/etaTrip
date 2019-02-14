$( document ).ready(function() {
    console.log( "ready!" );
    createMonument();
});

var monuments = [
  {url: "monuments/bigben.png", id:"bigben", page:"londres.html"},
  {url: "monuments/arc.png", id:"arc", page:"paris.html"},
  {url: "monuments/gherkin.png", id:"gherkin", page:"londres.html"},
  {url: "monuments/londoneye.png", id:"londoneye", page:"londres.html"},
  {url: "monuments/notredame.png", id:"dame", page:"paris.html"},
  {url: "monuments/toureiffel.png", id:"eiffel", page:"paris.html"},
  {url: "monuments/colisee.png", id:"colisee", page:"rome.html"},
];

var model = '<div class="monument-container"><a href="{{page}}"><img id="{{id}}" class="icone" src="{{url}}" alt="monument"></a></div>';
var countEl = 0;
var countTurn = 0;
var isAnimated = true;
var lastMonument = $('#bigben0');
var test = true;

function move(id){
  isAnimated = true;
  if(parseInt($('#' + id).css('right')) > window.innerWidth ){
    $('#' + id).remove();
  }
  $('#' + id).animate({
    "right": "+=80px"
  }, 1000, 'linear', function(){
    move(id);
  });
};

function createMonument(){
  if(isAnimated === false) return;
  if(countEl > monuments.length -1){
    countEl = 0;
    countTurn++;
  };

  let monument = model;
  monument = monument.replace("{{id}}", monuments[countEl].id + countTurn);
  monument = monument.replace("{{url}}", monuments[countEl].url);
  monument = monument.replace("{{page}}", monuments[countEl].page);

if(isAnimated == true){
  $('#monuments').append(monument);
  $('#' + monuments[countEl].id + countTurn).mouseenter(function () {
    $(this).animate({
      width: "+=10px",
    },300);
  });
  $('#' + monuments[countEl].id + countTurn).mouseleave(function () {
    $(this).animate({
      width: "-=10px",
    },300);
  });
};

  move(monuments[countEl].id + countTurn);

 lastMonument = $('#' + monuments[countEl].id + countTurn);

  countEl++;

checkLastMonument();

}

function checkLastMonument(){
  if(parseInt(lastMonument.css('right')) > 100){
    createMonument();
  }
  setTimeout(checkLastMonument, 100);
}

//stop de la fonction move
$('.monuments').mouseenter(function() {
  isAnimated = false;
  $( ".icone").each(function() {
    $(this).stop();
  });
});

//redemarage de la fonction move
$('.monuments').mouseleave(function(id){
  isAnimated = true;
  $('.icone').each(function() {
    move($(this).attr('id'));
  });
});


//clique sur image
// $('bigben'+ countTurn).click(funtion (){
//
// })
