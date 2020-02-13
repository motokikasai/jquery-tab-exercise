$(".tab").click(function(e) {
  $(".tab").removeClass("tab-clicked");

  $(this).addClass("tab-clicked");
  $(this.closest("section").querySelector(".content")).addClass(
    "content-clicked"
  );
  if ($(".content").hasClass("content-clicked")) {
    $(".content").removeClass("content-clicked");
  }
});
