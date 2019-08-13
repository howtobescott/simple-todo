//Check off To-Do by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Deleting items
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//Creating new items
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //Grabbing the text
    var todoText = $(this).val();
    $(this).val("");
    //Create a new li and adding it to ul
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
  }
});

//Toggling form
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
})
