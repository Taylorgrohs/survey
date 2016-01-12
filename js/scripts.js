$(document).ready(function(){
  $("form").submit(function(event){
    var name = $("input#name").val().toUpperCase();
    var food = $("input#food").val();
    var color = $("input#color").val();
    var band = $("input#band").val();

    $(".name").text(name);
    $(".food").text(food);
    $(".color").text(color);
    $(".band").text(band);
    $(".name").css("font-weight", "bold");

    $("#answers").show();
    event.preventDefault();
  });
  $("form").submit(function(){
    $("form").hide();
  });
});
