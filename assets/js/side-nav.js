jQuery(function ($) {
  // Dropdown menu
  $('.sidebar-dropdown > a').click(function (e) {
    $('.sidebar-submenu').slideUp(200);
    if ($(this).parent().hasClass('active1')) {
      $('.sidebar-dropdown').removeClass('active1');
      $(this).parent().removeClass('active') && e.stopPropagation();
    } else {
      $('.sidebar-dropdown').removeClass('active1');
      $(this).next('.sidebar-submenu').slideDown(200);
      $(this).parent().addClass('active1') && e.stopPropagation();
    }
  });



  // close side bar
  $("#close-sidebar").click(function() {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function() {
    $(".page-wrapper").addClass("toggled");
  });


});
