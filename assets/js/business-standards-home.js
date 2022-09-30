/**
 * opens and closes content on the fibf.html page
 */
jQuery(document).ready(function ($) {
  jQuery('#hr-management-services-main').click(function(e) {
    e.preventDefault();
    if ($('.hr-management-services').css('display') == 'none') {
        $('#hr-management-services-main').html("<i class=\"fas fa-minus-circle\"></i>");
        $('#hr-management-services-main').attr("aria-label", "Human Resources expanded");
    } else {
        $('#hr-management-services-main').html("<i class=\"fas fa-plus-circle\"></i>");
        $('#hr-management-services-main').attr("aria-label", "Human Resources collapsed");
    }
    jQuery(".hr-management-services").slideToggle();
  });
});

jQuery(document).ready(function ($) {
    jQuery('#cybersecurity-services-main').click(function (e) {
        e.preventDefault();
        if ($('.cybersecurity-services').css('display') == 'none') {
            $('#cybersecurity-services-main').html("<i class=\"fas fa-minus-circle\"></i>");
            $('#cybersecurity-services-main').attr("aria-label", "Cybersecurity Services expanded");
        } else {
            $('#cybersecurity-services-main').html("<i class=\"fas fa-plus-circle\"></i>");
            $('#cybersecurity-services-main').attr("aria-label", "Cybersecurity Services collapsed");
        }
        jQuery(".cybersecurity-services").slideToggle();
    });
});