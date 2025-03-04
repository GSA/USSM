// Filter based on two factors + alphabetical sort
// Uses URI hash as trigger allowing direct links etc
// Losely based on: http://isotope.metafizzy.co/filtering.html#url-hash

jQuery(document).ready(function ($) {
    var link = window.location.href;
    var $container = $(".qsmos");

    // Initialize Isotope if container exists
    if ($container.length) {
        $container.isotope({
            itemSelector: ".qsmo",
            layoutMode: "masonry",
            getSortData: {
                date: "p"
            }
        });
    }

    var iso = $container.data('isotope');
    var $filterCount = $('.filter-count');

    // Update filter count display
    function updateFilterCount() {
        if (iso) {
            $filterCount.text(iso.filteredItems.length + ' items');
        }
    }

    // Alphabetical sort functionality
    var sortValue = false;
    $(".sort").on("click", function(){
        var currentHash = location.hash;
        if ($(this).hasClass("checked")) {
            sortValue = false;
            location.hash = currentHash.replace(/&sort=([^&]+)/i, "");
        } else {
            sortValue = $(this).attr("data-sort-value");
            location.hash = currentHash + "&sort=" + encodeURIComponent(sortValue);
        }
    });

    // Global function to parse the hash into filter values
    function getHashFilter() {
        var subject = location.hash.match(/subject=([^&]+)/i);
        var role = location.hash.match(/role=([^&]+)/i);
        var status = location.hash.match(/status=([^&]+)/i);
        var sorts = location.hash.match(/sort=([^&]+)/i);
        return {
            subject: subject ? subject[1] : "*",
            role: role ? role[1] : "*",
            status: status ? status[1] : "*",
            sorts: sorts ? sorts[1] : ""
        };
    }

    // Global hash change handler
    function onHashChange() {
        var hashFilter = getHashFilter();
        var theFilter = "";
        if (hashFilter.subject !== "*") {
            theFilter += hashFilter.subject;
        }
        if (hashFilter.role !== "*") {
            theFilter += hashFilter.role;
        }
        if (hashFilter.status !== "*" && hashFilter.status) {
            theFilter += hashFilter.status;
        }
        if (theFilter === "") {
            theFilter = "*";
        }

        $container.isotope({
            filter: decodeURIComponent(theFilter),
            sortBy: hashFilter.sorts
        });

        updateFilterCount();

        // Toggle sort button status
        if (hashFilter.sorts) {
            $(".sort").addClass("checked");
        } else {
            $(".sort").removeClass("checked");
        }

        // Update filter button visual states
        $(".filter-list").find(".checked").removeClass("checked").attr("aria-checked", "false");
        $(".filter-list")
            .find("[data-filter='" + hashFilter.subject + "'],[data-filter='" + hashFilter.role + "'],[data-filter='" + hashFilter.status + "']")
            .addClass("checked")
            .attr("aria-checked", "true");
    }

    // Only set up QSMO filtering if on a QSMO page
    if (link.indexOf("/qsmo/") !== -1) {
        var filters = {};
        $(".filter-list a").on("click", filterSelect);

        function filterSelect() {
            var hashFilter = getHashFilter();
            // Initialize filters with current hash values
            filters["subject"] = hashFilter.subject;
            filters["role"] = hashFilter.role;
            filters["status"] = hashFilter.status;

            // Get clicked button's data-filter and filter group
            var currentFilter = $(this).attr("data-filter");
            var $navGroup = $(this).parents(".filter-list");
            var filterGroup = $navGroup.attr("data-filter-group");

            // Toggle the filter value for the current group
            if (currentFilter === hashFilter[filterGroup]) {
                filters[filterGroup] = "*";
            } else {
                filters[filterGroup] = currentFilter;
            }

            // Build the new hash string from the filters
            var newHash =
                "subject=" + encodeURIComponent(filters["subject"]) +
                "&role=" + encodeURIComponent(filters["role"]) +
                "&status=" + encodeURIComponent(filters["status"]);

            // Append sort if active
            if (sortValue) {
                newHash += "&sort=" + encodeURIComponent(sortValue);
            }
            // Update the URL hash (this triggers onHashChange)
            location.hash = newHash;
        }

        // Bind hash change event only for QSMO filtering
        window.onhashchange = onHashChange;
    }

    // Run hash change handler on page load
    onHashChange();
});