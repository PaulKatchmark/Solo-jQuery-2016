
// var yellowSquare = $('yellowBlock').addClass('.color-cube', function());

var clickCountRed = 0;
var clickCountYellow = 0;
var clickCountGreen = 0;
var clickCountBlue = 0;

$(document).ready(function()  {

  $(".color-button[data-color='red'").on('click', function()  {
      var redSquare = $('<div></div>');
      $(".container").append(redSquare);
      redSquare.addClass('color-cube').addClass('red');
      $('#red').empty();
      clickCountRed +=1;
      $('#red').append('Total red: ' + clickCountRed);
  });

$(".color-button[data-color='yellow'").on('click', function()  {
    var yellowSquare = $('<div></div>');
    $('.container').append(yellowSquare);
    yellowSquare.addClass('color-cube').addClass('yellow');
    $('#yellow').empty();
     clickCountYellow +=1;
    $('#yellow').append('Total yellow: ' + clickCountYellow);
});

$(".color-button[data-color='green'").on('click', function()  {
    var greenSquare = $('<div></div>');
      $(".container").append(greenSquare);
      greenSquare.addClass('color-cube').addClass('green');
      $('#green').empty();
       clickCountGreen +=1;
      $('#green').append('Total green: ' + clickCountGreen);
  });

$(".color-button[data-color='blue'").on('click', function()  {
    var blueSquare = $('<div></div>');
    $(".container").append(blueSquare)
    blueSquare.addClass('color-cube').addClass('blue');
    $('#blue').empty();
    clickCountBlue +=1;
    $('#blue').append('Total blue: ' + clickCountBlue);
});



});
