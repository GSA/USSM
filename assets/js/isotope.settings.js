// Filter based on two factors + alphabetical sort
// Uses URI hash as trigger allowing direct links etc
// Losely based on: http://isotope.metafizzy.co/filtering.html#url-hash

jQuery(document).ready(function ($) {
    var link = window.location.href;
    var $container = $(".qsmos");

    // Initialize Isotope on the container
    $container.isotope({
        itemSelector: ".qsmo",
        layoutMode: "masonry",
        getSortData: {
            date: "p"
        }
    });

    var iso = $container.data('isotope');
    var $filterCount = $('.filter-count');

    // Update filter count display
    function updateFilterCount() {
        if (typeof iso !== 'undefined') {
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

    // Only execute the filter logic if we're on a QSMO page
    if (link.indexOf("/qsmo/") !== -1) {
        // Set up the filters object with default values
        var filters = {};
        // When a filter button is clicked, run filterSelect
        $(".filter-list a").on("click", filterSelect);

        // Update the URL hash based on current filter selections
        function filterSelect() {
            var hashFilter = getHashFilter();
            // Initialize the filters from the current hash values
            filters["subject"] = hashFilter["subject"];
            filters["role"] = hashFilter["role"];
            filters["status"] = hashFilter["status"];

            // Get data-filter attribute from clicked button
            var currentFilter = $(this).attr("data-filter");
            // Get the filter group (subject, role, or status)
            var $navGroup = $(this).parents(".filter-list");
            var filterGroup = $navGroup.attr("data-filter-group");

            // Toggle the filter value: if already selected, reset to "*"
            if (currentFilter === hashFilter["subject"] ||
                currentFilter === hashFilter["role"] ||
                currentFilter === hashFilter["status"]) {
                filters[filterGroup] = "*";
            } else {
                filters[filterGroup] = currentFilter;
            }

            // Build new hash string from the filter values
            var newHash =
                "subject=" + encodeURIComponent(filters["subject"]) +
                "&role=" + encodeURIComponent(filters["role"]) +
                "&status=" + encodeURIComponent(filters["status"]);

            // Append sort if one is active
            if (sortValue) {
                newHash += "&sort=" + encodeURIComponent(sortValue);
            }

            // Update the location hash (which triggers onHashChange)
            location.hash = newHash;
        } // filterSelect

        // When the hash changes, update Isotope filtering/sorting
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

            // Apply the filters and sort order to the Isotope container
            $container.isotope({
                filter: decodeURIComponent(theFilter),
                sortBy: hashFilter["sorts"]
            });

            updateFilterCount();

            // Toggle sort button's checked status
            if (hashFilter["sorts"]) {
                $(".sort").addClass("checked");
            } else {
                $(".sort").removeClass("checked");
            }

            // Update filter button visual states
            $(".filter-list").find(".checked").removeClass("checked").attr("aria-checked", "false");
            $(".filter-list")
                .find("[data-filter='" + hashFilter["subject"] + "'],[data-filter='" + hashFilter["role"] + "'],[data-filter='" + hashFilter["status"] + "']")
                .addClass("checked")
                .attr("aria-checked", "true");
        } // onHashChange

        // Parse the URL hash to get current filter and sort values
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

        // Set up hash change event listener for filtering
        window.onhashchange = onHashChange;
    }

    // Run the hash change handler on page load
    onHashChange();
});