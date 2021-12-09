(function ($) {
  $(document).ready(function () {
    let descriptions = {};
    let $this = $(this);
    
    $.get({
      url: '../business-standards-api/grants/business-lifecycle/',
      dataType: 'json',
      success: function (data) {
        console.log(data);
        for (let k in data) {
          for (let i = 0, l = data[k].length; i < l; i++) {
            let identifier = data[k][i]['Identifier'],
                modal = $this.find('[data-identifier="' + identifier + '"]').attr('aria-controls');
            
            $('#' + modal).find('.description-popup').html(data[k][i]['Description']);
          }
        }
      }
    });
  });

})(jQuery);