$(function() {
  $(".rslides").responsiveSlides({
    auto: true,
    speed: 500,
    timeout: 3000,
  });
});

$(function() {
  $("td").mouseover(function() {
    var targetIndex, elements;
    targetIndex = $(this).index() + 1;
    elements = $("td");
    elements.filter(":nth-child(" + targetIndex + ")").css("background-color", "#eff9fe");
    elements.not(":nth-child(" + targetIndex + ")").css("background-color", "transparent");
  });
  $("table").mouseleave(function() {
    $("td").css("background-color", "transparent");
  });
  $("tr:last-child td").mouseover(function() {
    $("td").css("background-color", "transparent");
  });
});
