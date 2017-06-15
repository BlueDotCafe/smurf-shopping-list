$(document).ready(function() {
  $(".list").hide();
  $("#button").on("click",function() {
    var blanks = ["item1", "item2", "item3", "item4"];

    blanks.sort();

    var capBlanks = blanks.map(function(blank) {
      return blank.toUpperCase();
    });

    capBlanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });


    $(".story").show();

    event.preventDefault();
  });
});
