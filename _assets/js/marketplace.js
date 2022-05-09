(function ($) {

$(document).ready(function () {
  let descriptions = {};
  
  $.get({
    url: '/business-standards-api/grants/business-lifecycle/',
    success: function (data) {
      console.log(data);
    }
  });

  $(this).find('.esgms-table-wrapper tbody td:first-child a').each(function () {
    let link = $(this);
    link.click(function () {
    });
  });
});

}(jQuery);