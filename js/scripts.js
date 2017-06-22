$(document).ready(function() {

  $("form#blanks").submit(function() {
    event.preventDefault();

    var items = ["item1", "item2", "item3", "item4"];
/**
   var capItems = items.map(function(item) {
     return item.toUpperCase();
   });
   **/

  items.forEach(function(item) {
    var userInput = $("input#" + item).val();
    $("." + item).text(userInput.toUpperCase());
  });
  

  $(".story").show();

  });
});
