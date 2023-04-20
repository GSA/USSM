jQuery(document).ready(function ($) {
    var link = window.location.href;
    var filterCategories = [];
    if (link.indexOf("/marketplace/") != -1) {
        $.getJSON("../assets/js/filterCategories.json", function (json) {
            filterCategories = json.filterTypes;
        });
    }
    if (link.indexOf("/marketplace/") != -1) {
        var $grid = $('#pic-resources');
    }

    // Filter isotope
    $grid.isotope({
        // options
        itemSelector: ".policy",
        layoutMode: "masonry",
        getSortData: {
            date: "p"
        }
    });

    let iso = $grid.data('isotope');
    let $filterCount = $('.filter-count');
    function updateFilterCount() {
        if (iso != null) {
            $filterCount.text(iso.filteredItems.length + ' items');
        }
    }

    $("#btnClearAll").on("click", function () {
        $(".filter-list").find(".is-checked").removeClass("is-checked").attr("aria-checked", "false");
        location.reload();
    });

    var filters = [];
    // change is-checked class on buttons
    $('.filter-list').on('click', 'a', function (event) {
        let $target = $(event.currentTarget);
        $target.toggleClass('is-checked');
        let isChecked = $target.hasClass('is-checked');
        let filter = $target.attr('data-filter');
        if (isChecked) {
            addFilter(filter);
        } else {
            removeFilter(filter);
        }
        // filter isotope
        // group filters together, inclusive
        $grid.isotope({ filter: filters.join(',') });
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

    updateFilterCount();
});