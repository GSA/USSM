// Filter based on two factors + alphabetical sort
// Uses URI hash as trigger allowing direct links etc
// Losely based on: http://isotope.metafizzy.co/filtering.html#url-hash

jQuery(document).ready(function ($) {
    var link = window.location.href;
    var $container = $(".qsmos");

    // Filter isotope
    $container.isotope({
        // options
        itemSelector: ".qsmo",
        layoutMode: "masonry",
        getSortData: {
            date: "p"
        }
    });

    var iso = $container.data('isotope');
    var $filterCount = $('.filter-count');

    function updateFilterCount() {
        if (typeof iso !== 'undefined') {
            $filterCount.text(iso.filteredItems.length + ' items');
        }
    }

    // Alphabetical sort
    // Sort items alphabetically based on course title
    var sortValue = false;
    $(".sort").on("click", function(e){
        e.preventDefault();
        var currentHash = location.hash;
        if ( $(this).hasClass("checked") ) {
            sortValue = false;
            location.hash = currentHash.replace( /&sort=([^&]+)/i, "");
        } else {
            sortValue = $(this).attr("data-sort-value");
            location.hash = currentHash + "&sort=" + encodeURIComponent( sortValue );
        }
    });

    if ($container.length) {
        // Set up filters array with default values
        var filters = {};
        // When a button is pressed, run filterSelect
        $(".filter-list a").on("click", filterSelect);
        // Set the URI hash to the current selected filters
        function filterSelect(e) {
            e.preventDefault();
            var hashFilter = getHashFilter();
            filters["subject"] = hashFilter["subject"];
            filters["role"] = hashFilter["role"];
            filters["status"] = hashFilter["status"];
            var currentFilter = $(this).attr("data-filter");
            var $navGroup = $(this).parents(".filter-list");
            var filterGroup = $navGroup.attr("data-filter-group");
            if (currentFilter == hashFilter["subject"] || currentFilter == hashFilter["role"] || currentFilter == hashFilter["status"]) {
                filters[filterGroup] = "*";
            } else {
                filters[filterGroup] = $(this).attr("data-filter");
            }
            var newHash = "subject=" + encodeURIComponent(filters["subject"]) + "&role=" + encodeURIComponent(filters["role"]) + "&status=" + encodeURIComponent(filters["status"]);
            if (sortValue) {
                newHash = newHash + "&sort=" + encodeURIComponent(sortValue);
            }
            location.hash = newHash;
        } // filterSelect

        function onHashChange() {
            var hashFilter = getHashFilter();
            var theFilter = "";

            if (hashFilter["subject"] !== "*") {
                theFilter += hashFilter["subject"];
            }
            if (hashFilter["role"] !== "*") {
                theFilter += hashFilter["role"];
            }
            if (hashFilter["status"] !== "*" && hashFilter["status"]) {
                theFilter += hashFilter["status"];
            }
            if (theFilter === "") {
                theFilter = "*";
            }

            $container.isotope({
                filter: decodeURIComponent(theFilter),
                sortBy: hashFilter["sorts"]
            });

            updateFilterCount();
            if (hashFilter["sorts"]) {
                $(".sort").addClass("checked");
            } else {
                $(".sort").removeClass("checked");
            }
            $(".filter-list").find(".checked").removeClass("checked").attr("aria-checked", "false");
            $(".filter-list").find("[data-filter='" + hashFilter["subject"] + "'],[data-filter='" + hashFilter["role"] + "'],[data-filter='" + hashFilter["status"] + "']").addClass("checked").attr("aria-checked", "true");
        } // onHahschange

        function getHashFilter() {
            var subject = location.hash.match(/subject=([^&]+)/i);
            var role = location.hash.match(/role=([^&]+)/i);
            var status = location.hash.match(/status=([^&]+)/i);
            var sorts = location.hash.match(/sort=([^&]+)/i);

            var hashFilter = {};
            hashFilter["subject"] = subject ? subject[1] : "*";
            hashFilter["role"] = role ? role[1] : "*";
            hashFilter["status"] = status ? status[1] : "*";
            hashFilter["sorts"] = sorts ? sorts[1] : "";

            return hashFilter;
        } // getHashFilter

        window.onhashchange = onHashChange;
        onHashChange();
    }
});