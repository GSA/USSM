/**
 * opens and closes content on the fibf.html page
 */
jQuery(document).ready(function ($) {
  jQuery('#hr-management-services-main').click(function(e) {
    e.preventDefault();
    if ($('.hr-management-services').css('display') == 'none') {
      $('#hr-management-services-main').html("Show Less <i class=\"hrms-arrow up\"></i>");
      $('#hr-management-services-main').attr("aria-label", "Show More expanded");
    } else {
      $('#hr-management-services-main').html("Show More <i class=\"hrms-arrow down\"></i>");
      $('#hr-management-services-main').attr("aria-label", "Show More collapsed");
    }
    jQuery(".hr-management-services").slideToggle();
  });
});