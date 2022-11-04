(function ($) {
  $(document).ready(function () {
    let descriptions = {};
    let $this = $(this);

    /**
     * @type string
     * @description to store the url prefix based on the environment url.cloudfront federalist url come with additional pathname. Using / as a prefix will removed these extra pathname and the url will be wrong
     */
    let prefixUrl = "/";

    /**
     * @type string
     * @description used to capture the environment hostname
     */
    const hostname = window.location.hostname;
    if(hostname.includes("federalist")) {
      prefixUrl = "../../"; // because this url is used in the pathname:/marketplace/grm/ going to path back will send us to /
    }

    $.get({
      url: prefixUrl.concat('business-standards-api/grants/business-lifecycle/'),
      dataType: 'json',
      success: function (data) {
        console.log(data);
        for (let k in data) {
          for (let i = 0, l = data[k].length; i < l; i++) {
            let identifier = data[k][i]['Identifier'];
            $this.find('[data-identifier="' + identifier + '"]').each(function () {
              let modal = $(this).attr('aria-controls');
              $('#' + modal).find('.description-popup').html(data[k][i]['Description']);
            });
          }
        }
      }
    });
  });

})(jQuery);