$(document).ready(function() {
  $("#formOne").submit(function (event) {
    const name1Input = $("input#name1").val();

    $(".name1").text(name1Input);

    $("#letter").show();
    
    event.preventDefault();
  });
});