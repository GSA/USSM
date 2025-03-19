document.addEventListener("DOMContentLoaded", function () {
  // Get all filter groups
  const filterGroups = document.querySelectorAll(".filter-list");

  filterGroups.forEach((group) => {
    group.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        e.preventDefault();

        // Get the clicked filter link
        const clickedFilter = e.target;

        // If the filter is already selected, remove the 'checked' class (toggle)
        if (clickedFilter.classList.contains("checked")) {
          clickedFilter.classList.remove("checked");
        } else {
          // Otherwise, toggle it on (add 'checked' class) and remove from others in the same group
          const groupLinks = group.querySelectorAll("a");
          groupLinks.forEach((link) => {
            link.classList.remove("checked");
          });
          clickedFilter.classList.add("checked");
        }

        // Apply filters based on the current selection
        applyFilters();
      }
    });
  });

  // Function to apply filters
  function applyFilters() {
    const selectedFilters = {};

    // Get all selected filters
    document.querySelectorAll(".filter-list a.checked").forEach((selected) => {
      const group = selected.closest(".filter-list").dataset.filterGroup;
      selectedFilters[group] = selected.getAttribute("data-filter");
    });

    const qsmosContainer = document.querySelector(".qsmos");
    const qsmos = Array.from(document.querySelectorAll(".qsmo"));

    let filteredItems = [];
    let hiddenItems = [];

    qsmos.forEach((qsmo) => {
      let isVisible = true;

      // Check if the QSMO card matches selected filters
      for (let group in selectedFilters) {
        if (!qsmo.classList.contains(selectedFilters[group])) {
          isVisible = false;
          break;
        }
      }

      if (isVisible) {
        qsmo.classList.remove("hidden");
        filteredItems.push(qsmo);
      } else {
        qsmo.classList.add("hidden");
        hiddenItems.push(qsmo);
      }
    });

    // Reorder elements: First add visible ones, then hidden ones
    qsmosContainer.innerHTML = "";
    filteredItems.forEach((item) => qsmosContainer.appendChild(item));
    hiddenItems.forEach((item) => qsmosContainer.appendChild(item)); // Keeps layout intact

    // Apply shuffle effect for smooth movement
    qsmosContainer.style.display = "flex";
    qsmosContainer.style.flexWrap = "wrap";
    qsmosContainer.style.gap = "1rem";
    qsmosContainer.style.justifyContent = "start";

    // Update filter count
    updateFilterCount();
  }

  // Function to update the filter count
  function updateFilterCount() {
    const visibleItems = document.querySelectorAll(".qsmo:not(.hidden)");
    const filterCountElement = document.querySelector(".filter-count");
    filterCountElement.textContent = `${visibleItems.length} items`;
  }

  // Reset button functionality
  const resetButton = document.querySelector(
    'a[href="/qsmo/#subject=*&role=*&status=*"], .usa-button--accent-cool'
  );
  if (resetButton) {
    resetButton.addEventListener("click", function (e) {
      e.preventDefault();

      // Show all items
      document.querySelectorAll(".qsmo").forEach((qsmo) => {
        qsmo.classList.remove("hidden");
      });

      // Remove 'checked' class from all filters
      document.querySelectorAll(".filter-list a").forEach((link) => {
        link.classList.remove("checked");
      });

      // Update the filter count
      updateFilterCount();
    });
  }

  // Initial filter count update
  updateFilterCount();
});
