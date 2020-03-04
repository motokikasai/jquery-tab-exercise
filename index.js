$(".tab").on("click", function() {
  const tab_id = $(this).attr("data-tab");
  $(".tab-clicked").removeClass("tab-clicked");

  $(this).addClass("tab-clicked");

  $(".content").hide();
  $("#" + tab_id).fadeIn(1000);
});
