$(function() {
  var url = window.location;
  $('#navbar ul.nav a').filter(function() {
      return this.href == url;
  }).parent().addClass('active');
});

$(function() {
  $(".rslides").responsiveSlides({
    auto: true,
    speed: 500,
    timeout: 3000,
  });
});

$(function() {
  $("#myTable td").mouseover(function() {
    var targetIndex, elements;
    targetIndex = $(this).index() + 1;
    elements = $("td");
    elements.filter(":nth-child(" + targetIndex + ")").css("background-color", "#eff9fe");
    elements.not(":nth-child(" + targetIndex + ")").css("background-color", "transparent");
  });
  $("#myTable table").mouseleave(function() {
    $("td").css("background-color", "transparent");
  });
  $("#myTable tr:last-child td").mouseover(function() {
    $("td").css("background-color", "transparent");
  });
});

$(function() {
  $("#myTable a").hover(function() {
    $(this).toggleClass("btn-orange-o btn-orange");
  });
});

$(function() {
  $('.input_class_checkbox').each(function(){
    $(this).hide().after('<div class="class_checkbox" />');
  });
  $('.class_checkbox').on('click',function(){
      $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
  });
})