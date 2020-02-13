$(".tab").click(function() {
  $(".tab").removeClass("tab-clicked");

  $(this).addClass("tab-clicked");

  let toggle = $(this.closest("section").querySelector(".content")).attr(
    "data-tabs"
  );

  if (toggle === "closed") {
    $(".content").attr("data-tabs", "closed");

    $(this.closest("section").querySelector(".content"))
      .attr("data-tabs", "open")
      .hide()
      .fadeIn(1000);
  }
});
