
//WAS FLUSTERED AND COULDNT THINK OF HOW TO TARGET CLASS IN CSS


var clickCountRed = 0;
var clickCountYellow = 0;
var clickCountGreen = 0;
var clickCountBlue = 0;

$(document).ready(function()  {

  $(".color-button[data-color='red'").on('click', function()  {
      $(".container").append('redSquare');
      $('#red').empty();
      clickCountRed +=1;
      $('#red').append('Total red: ' + clickCountRed);
  });

$(".color-button[data-color='yellow'").on('click', function()  {
    $('.container').append("yellow").addClass('.color-cube')
    $('#yellow').empty();
     clickCountYellow +=1;
    $('#yellow').append('Total yellow: ' + clickCountYellow);
});

$(".color-button[data-color='green'").on('click', function()  {
      $(".container").append();
      $('#green').empty();
       clickCountGreen +=1;
      $('#green').append('Total green: ' + clickCountGreen);
  });

$(".color-button[data-color='blue'").on('click', function()  {
    $(".container").append();
    $('#blue').empty();
    clickCountBlue +=1;
    $('#blue').append('Total blue: ' + clickCountBlue);
});



});
