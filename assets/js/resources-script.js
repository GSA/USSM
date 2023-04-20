// Filter based on two factors + alphabetical sort
// Uses URI hash as trigger allowing direct links etc
// Losely based on: http://isotope.metafizzy.co/filtering.html#url-hash

jQuery(document).ready(function ($) {
    var link = window.location.href;
    var filterCategories = [];
    if(link.indexOf("/marketplace/") != -1){
        $.getJSON("../assets/js/filterCategories.json", function(json){
            filterCategories = json.filterTypes;
        });
    }
 
    if (link.indexOf("/marketplace/") != -1 || link.indexOf("/our-work/") != -1){
        var $container = $(".resources");
    }
    
    // Filter isotope
    $container.isotope({
        // options
        itemSelector: ".policy",
        layoutMode: "masonry",
        getSortData: {
            date: "p"
        }
    });

    var iso = $container.data('isotope');
    var $filterCount = $('.filter-count');
    function updateFilterCount() {
        if (iso != null ){
            $filterCount.text( iso.filteredItems.length + ' items' );
        }
    }

    // Alphabetical sort
    // Sort items alphabetically based on course title
    var sortValue = false;
    $(".sort").on("click", function(){
        // Get current URI hash
        var currentHash = location.hash;
        // If button is currently unchecked:
        if ( $(this).hasClass("checked") ) {
            // Set sort to false
            sortValue = false;
            // Remove sort attribute in hash
            location.hash = currentHash.replace( /&sort=([^&]+)/i, "");
        } else {
            // Set sortValue to current sort value
            sortValue = $(this).attr("data-sort-value");
            // Add sort attribute to hash
            location.hash = currentHash + "&sort=" + encodeURIComponent( sortValue );
        }
    });

    $("#btnClearAll").on("click", function(){
        var newHash = "subject=*&role=*&status=*";
        location.hash = newHash;
        $(".filter-list").find(".checked").removeClass("checked").attr("aria-checked", "false");
    });

    // Set up filters array with default values
    var filters = {};
    // When a button is pressed, run filterSelect
    $( ".filter-list a" ).on( "click", filterSelect );
    // Set the URI hash to the current selected filters
    function filterSelect() {
        // Current hash value
        var hashFilter = getHashFilter();
        // Set filters to current values (important for first run)
		
        if (link.indexOf("/marketplace/") != -1){
            
            for(var each_index in filterCategories){
                filters[filterCategories[each_index]] = hashFilter[filterCategories[each_index]];
            }
            // data-filter attribute of clicked button
            var currentFilter = $(this).attr("data-filter");
            // Navigation group (subject or role) as object
            var $navGroup = $(this).parents(".filter-list");
           
            // data-filter-group key for the current nav group
            var filterGroup = $navGroup.attr("data-filter-group");
            // If the current data-filter attribute matches the current filter,
            var isCurrentFilterMatch = false;
            for(var each_index in filterCategories){
                isCurrentFilterMatch = isCurrentFilterMatch || currentFilter == hashFilter[filterCategories[each_index]]
            }
            if ( isCurrentFilterMatch ) {
                // Reset group filter as the user has unselected the button
                filters[ filterGroup ] = "*";
            } else {
                // Set data-filter of current button as value with filterGroup as key
                filters[ filterGroup ] = $(this).attr("data-filter");
            }
            
            // Create new hash
            var newHash = "";
            for(var each_index in filterCategories){
                if(newHash != ""){
                    newHash += "&";
                }
                newHash +=  filterCategories[each_index] + "=" + filters[filterCategories[each_index]];
            }
            // If sort value exists, add it to hash
            if ( sortValue ) {
                newHash = newHash + "&sort=" + encodeURIComponent( sortValue );
            }
		}
        // Apply the new hash to the URI, triggering onHahschange()
        location.hash = newHash;
    } // filterSelect
    
    function onHashChange() {
        // Current hash value
        var hashFilter = getHashFilter();
        // Concatenate subject and role for Isotope filtering
        if (link.indexOf("/marketplace/") != -1){
            var theFilter = "";
            for(var each_index in filterCategories){
                theFilter+= hashFilter[filterCategories[each_index]];
            }
            
            if ( hashFilter ) {
                // Repaint Isotope container with current filters and sorts
                $container.isotope( {
                    filter:  decodeURIComponent( theFilter ),
                    sortBy: hashFilter["sorts"]
                } );

                updateFilterCount();
                // Toggle checked status of sort button
                if ( hashFilter["sorts"] ) {
                    $(".sort").addClass("checked");
                } else {
                    $(".sort").removeClass("checked");
                }
                // Toggle checked status of filter buttons
                $( ".filter-list" ).find(".checked").removeClass("checked").attr("aria-checked","false");
                
                var finalFilters = [];
                for(var each_index in filterCategories){
                    finalFilters[each_index] = hashFilter[filterCategories[each_index]].split(",");
                }
                var allFilters = finalFilters[0];
                if(filterCategories.length>1){
                    for(var each_index in filterCategories){
                        if(each_index>0){
                            allFilters = allFilters.concat(finalFilters[each_index]);
                        }
                    }
                }


                for (var filter in allFilters){
                    $( ".filter-list" ).find("[data-filter='" + allFilters[filter] + "']").addClass("checked").attr("aria-checked","true");
                }
            }
	    }
    } // onHahschange

    function getHashFilter() {
        if (link.indexOf("/marketplace/") != -1){
            var filterNames = [];
            
			// Get filters (matches) and sort order (sorts)
			for(var each_index in filterCategories){
                var matchMaker = "/" + filterCategories[each_index] + "=([^&]+)/i"
                filterNames[each_index] = location.hash.match(eval(matchMaker));
            }
			var sorts = location.hash.match( /sort=([^&]+)/i );

			// Set up a hashFilter array
			var hashFilter = {};
            
			// Populate array with matches and sorts using ternary logic
			for(var each_index in filterCategories){
                hashFilter[filterCategories[each_index]] = filterNames[each_index]?filterNames[each_index][1]: "*";
            }
			hashFilter["sorts"] = sorts ? sorts[1]: "";

			return hashFilter;
		}	
    } // getHashFilter

    // When the hash changes, run onHashchange
    window.onhashchange = onHashChange;

    // When the page loads for the first time, run onHashChange
    onHashChange();

});

