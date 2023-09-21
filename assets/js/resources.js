// Filter based on two factors + alphabetical sort
// Uses URI hash as trigger allowing direct links etc
jQuery(document).ready(function ($) {
    var link = window.location.href;
    if (link.indexOf("/marketplace/") != -1) {

        let $grid = $('#resources-1');
        let $grid2 = $('#resources-2');
        let $grid3 = $('#resources-3');
        let isotopOptions = {
            // options
            itemSelector: ".policy",
            layoutMode: "masonry",
            getSortData: {
                date: "p"
            }
        };
        let filters = [];
        let $filterCount = $('.filter-count');

        // Filter isotope
        $grid.isotope(isotopOptions);
        $grid2.isotope(isotopOptions).hide();
        $grid3.isotope(isotopOptions).hide();

        let iso = $grid.data('isotope');
        let iso2 = $grid2.data('isotope');
        let iso3 = $grid3.data('isotope');

        function updateFilterCount() {
            let filterCount = 0;
            if (iso !== undefined) {
                filterCount += Number(iso.filteredItems.length);
            }
            if (iso2 !== undefined && $grid2.css('display') !== 'none') {
                filterCount += Number(iso2.filteredItems.length);
            }
            if (iso3 !== undefined && $grid3.css('display') !== 'none') {
                filterCount += Number(iso3.filteredItems.length);
            }
            let itemsText = filterCount == 1 ? ' item' : ' items';
            $filterCount.text(filterCount + itemsText);
            if(!iso.filteredItems.length) {
                $grid.hide();
            }
            if(!iso2.filteredItems.length) {
                $grid2.hide();
            }
            if(!iso3.filteredItems.length) {
                $grid3.hide();
            }
        }

        $("#btnClearAll").on("click", function () {
            let count = filters.length;
            for (let filter = 0; filter < count; filter++) {
                removeFilter(filters[0]);
            }
            $grid.show().isotope({filter: filters.join(',')});
            $grid2.hide();
            $grid3.hide();
            updateFilterCount();
            $(".filter-list").find(".is-checked").removeClass("is-checked").attr("aria-checked", "false");
            $('.category-name').text('All Available');
        });

        // change is-checked class on buttons
        $('.filter-list').on('click', 'a', function (event) {
            $grid.show();
            $grid2.show();
            $grid3.show();
            $('.category-name').text($(this).text());
            // Disable all checked
            $('.is-checked').each(function () {
                removeFilter($(this).attr('data-filter'));
                $(this).removeClass('is-checked');
            });
            $(this).addClass('is-checked');
            addFilter($(this).attr('data-filter'));

            // filter isotope
            // group filters together, inclusive
            $grid.isotope({filter: filters.join(',')});
            $grid2.isotope({filter: filters.join(',')});
            $grid3.isotope({filter: filters.join(',')});
            updateFilterCount();
        });

        function addFilter(filter) {
            if (filters.indexOf(filter) == -1) {
                filters.push(filter);
            }
        }

        function removeFilter(filter) {
            let index = filters.indexOf(filter);
            if (index != -1) {
                filters.splice(index, 1);
            }
        }

        function scrollTop() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#filters-data").offset().top
            }, 1000);
        }

        updateFilterCount();

        // Add a focus event handler to the link
        $('a.text-ink').focus(function () {
            // Add the 'focus-within' class to the parent div when the link is focused
            $(this).closest('.cards-hover').addClass('focus-within');
        });

        // Add a blur event handler to the link
        $('a.text-ink').blur(function () {
            // Remove the 'focus-within' class from the parent div when the link loses focus
            $(this).closest('.cards-hover').removeClass('focus-within');
        });
    }
});