$(document).ready(function() {
  var gender = prompt("What is your gender?");

  if (gender === "female")
    var pregnant = prompt("Are you pregnant?  Y or N?");
    if (pregnant === "Y") {
      $('#pregnant').show();
    } if (pregnant === "N") {
      $('#pregnant').hide();
      var height = prompt("Are you over 4-feet tall? Y or N?");
      if (height === "Y") {
        $('#over-4-not-pregnant').show();}
    }

  if (gender === "male")
    var height = prompt("Are you over 4-feet tall? Y or N?");
    if (height === "Y") {
      $('#over-4-not-pregnant').show();
    } if (height === "N") {
      $('#under-4').show();
    }
});
