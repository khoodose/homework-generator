$(function(){

  // check page is loaded
  console.log("page loaded and ready to go");

  // settings for generator
  var maximumValue = 18;
  var maximumValueWordProblem = 99;

  // populate the fields on page load
  generateAddition();
  generateSubtraction();
  generateMixedOperation();
  generateAdditionWord();
  generateSubtractionWord();
  generateMixedOperationWord();

  function generateAddition() {
    var additionAnswer = Math.floor(Math.random()*maximumValue + 1);
    var A1 = Math.floor(Math.random()*additionAnswer + 1);
    var A2 = additionAnswer - A1;

    console.log("Addition Answer = " + additionAnswer + '\n' + "A1 = " + A1 + '\n' + "A2 = " + A2);

    $("#A1").html(A1);
    $("#A2").html(A2);
    $("#answer_addition").html(additionAnswer);
  }

  function generateAdditionWord() {
    var additionAnswerWord = Math.floor(Math.random()*maximumValueWordProblem + 1);
    var AW1 = Math.floor(Math.random()*additionAnswerWord + 1);
    var AW2 = additionAnswerWord - AW1;

    console.log("Addition Answer = " + additionAnswerWord + '\n' + "AW1 = " + AW1 + '\n' + "AW2 = " + AW2);

    $("#AW1").html(AW1);
    $("#AW2").html(AW2);
    $("#answer_addition_word").html(additionAnswerWord);
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

  function generateSubtractionWord() {
    var SW1 = Math.floor(Math.random()*maximumValueWordProblem + 1);
    var SW2 = Math.floor(Math.random()*SW1 + 1);
    var subtractionAnswerWord = SW1 - SW2;

    console.log("Subtraction Answer = " + subtractionAnswerWord + '\n' + "SW1 = " + SW1 + '\n' + "SW2 = " + SW2);

    $("#SW1").html(SW1);
    $("#SW2").html(SW2);
    $("#answer_subtraction_word").html(subtractionAnswerWord);
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

  function generateMixedOperationWord() {
    var MW1 = Math.floor(Math.random()*maximumValueWordProblem + 1);
    var MW2 = Math.floor(Math.random()*(maximumValueWordProblem-MW1) + 1);
    var MW3 = Math.floor(Math.random()*(MW1+MW2) + 1);
    var mixedAnswerWord = MW1 + MW2 - MW3;

    $("#MW1").html(MW1);
    $("#MW2").html(MW2);
    $("#MW3").html(MW3);
    $("#answer_mixed_word").html(mixedAnswerWord);
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

  $("#generateAdditionWordButton").click(function(){
    generateAdditionWord();
  });

  $("#generateSubtractionWordButton").click(function(){
    generateSubtractionWord();
  });

  $("#generateMixedWordButton").click(function(){
    generateMixedOperationWord();
  });

});
