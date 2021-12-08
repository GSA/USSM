let interval = setInterval(function () {
  if (typeof jQuery != 'undefined') {
    (function ($) {

      $(document).ready(function () {
        let descriptions = {};
        let $this = $(this);
        
        $.get({
          url: '/business-standards-api/grants/business-lifecycle/',
          dataType: 'json',
          success: function (data) {
            console.log(data);
            for (let k in data) {
              for (let i = 0, l = data[k].length; i < l; i++) {
                let identifier = data[k][i]['Identifier'];
                $this.find('[data-identifier="' + identifier + '"]').siblings('.description-popup').html(data[k][i]['Description']);
              }
            }
          }
        });
      });

    })(jQuery);
    clearInterval(interval);
  }
}, 100);