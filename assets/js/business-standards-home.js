/**
 * opens and closes content on the fibf.html page
 */
jQuery(document).ready(function ($) {
  jQuery('#hr-management-services-main').click(function(e) {
    e.preventDefault();
    if ($('.hr-management-services').css('display') == 'none') {
        $('#hr-management-services-main').html("<i class=\"fas fa-minus-circle\"></i>");
      $('#hr-management-services-main').attr("aria-label", "Show Less expanded");
    } else {
        $('#hr-management-services-main').html("<i class=\"fas fa-plus-circle\"></i>");
      $('#hr-management-services-main').attr("aria-label", "Show More collapsed");
    }
    jQuery(".hr-management-services").slideToggle();
  });
});