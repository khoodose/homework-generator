$(function(){

  // check page is loaded
  console.log("page loaded and ready to go");

  // settings for generator
  var maximumValue = 18;

  // populate the fields on page load
  generateAddition();
  generateSubtraction();
  generateMixedOperation();

  function generateAddition() {
    var additionAnswer = Math.floor(Math.random()*maximumValue + 1);
    var A1 = Math.floor(Math.random()*additionAnswer + 1);
    var A2 = additionAnswer - A1;

    console.log("Addition Answer = " + additionAnswer + '\n' + "A1 = " + A1 + '\n' + "A2 = " + A2);

    $("#A1").html(A1);
    $("#A2").html(A2);
    $("#answer_addition").html(additionAnswer);
  }

  function generateSubtraction() {
    var S1 = Math.floor(Math.random()*maximumValue + 1);
    var S2 = Math.floor(Math.random()*S1 + 1);
    var subtractionAnswer = S1 - S2;

    console.log("Subtraction Answer = " + subtractionAnswer + '\n' + "S1 = " + S1 + '\n' + "S2 = " + S2);

    $("#S1").html(S1);
    $("#S2").html(S2);
    $("#answer_subtraction").html(subtractionAnswer);
  }

  function generateMixedOperation() {
    var M1 = Math.floor(Math.random()*maximumValue + 1);
    var M2 = Math.floor(Math.random()*(maximumValue-M1) + 1);
    var M3 = Math.floor(Math.random()*(M1+M2) + 1);
    var mixedAnswer = M1 + M2 - M3;

    $("#M1").html(M1);
    $("#M2").html(M2);
    $("#M3").html(M3);
    $("#answer_mixed").html(mixedAnswer);

  }

  // Event handling
  $("#generateAdditionButton").click(function(){
    generateAddition();
  });

  $("#generateSubtractionButton").click(function(){
    generateSubtraction();
  });

  $("#generateMixedButton").click(function(){
    generateMixedOperation();
  });

});
