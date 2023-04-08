$(document).ready(function () {
  // --- our code goes here ---
  const counter = 140;
  $("#tweet-text").on("input", function () {
    //console.log(counter - $(this).$.trim(val()).length);
    let textVal = counter - $(this).val().length;
    //$(this.document).text(textVal);
    let selectOutput = $(this).parent().children("div").children("output");
    $(selectOutput).text(textVal);
    if (textVal <= 0) {
      $(selectOutput).addClass("red");
    } else {
      $(selectOutput).removeClass("red");
    }
  });
});
