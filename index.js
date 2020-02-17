$(".tab").click(function() {
  $(".tab.tab-clicked").removeClass("tab-clicked");

  $(this).addClass("tab-clicked");

  // console.log($(this).next());

  // $(this).next().attr(
  //   "data-tabs"
  // );

  // if (toggle === "closed") {
  // $(".content").attr("data-tabs", "closed");
  $(".content").hide();
  $(this)
    .next()
    .fadeIn(1000);
  // .attr("data-tabs", "open")
  // .hide()
  // }
});
