$(function(){

  // check page is loaded
  console.log("page loaded and ready to go");

  // settings for generator
  var maximumValue = 18;

  // populate the fields on page load
  generateAddition();

  function generateAddition() {
    var Answer = Math.floor(Math.random()*maximumValue + 1);
    var N1 = Math.floor(Math.random()*Answer + 1);
    var N2 = Answer - N1;

    console.log("Answer = " + Answer + '\n' + "N1 = " + N1 + '\n' + "N2 = " + N2);

    $("#N1").html(N1);
    $("#N2").html(N2);
    $("#Answer").html(Answer);
  }

  $("#generateAdditionButton").click(function(){
    generateAddition()
  });

});
