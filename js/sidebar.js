$(document).ready(function () {
  $("#navList a").click(function (e) {
    $("#navList a").removeClass("activeClass");
    $(this).addClass("activeClass");
  });
});
