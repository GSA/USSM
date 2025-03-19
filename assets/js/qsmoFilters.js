document.addEventListener("DOMContentLoaded", function () {
  // Get all filter groups
  const filterGroups = document.querySelectorAll(".filter-list");
  const qsmosContainer = document.querySelector(".qsmos");
  const qsmos = Array.from(document.querySelectorAll(".qsmo"));
  const resetButton = document.querySelector(
    'a[href="/qsmo/#subject=*&role=*&status=*"], .usa-button--accent-cool'
  );

  // Store the original order of items
  const originalOrder = [...qsmos];

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
          groupLinks.forEach((link) => link.classList.remove("checked"));
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

    // Move filtered items to the top
    qsmosContainer.innerHTML = "";
    filteredItems.forEach((item) => qsmosContainer.appendChild(item));
    hiddenItems.forEach((item) => qsmosContainer.appendChild(item));

    // Update filter count
    updateFilterCount();
  }

  // Function to reset filters and restore original order
  function resetFilters() {
    // Show all items
    document
      .querySelectorAll(".qsmo")
      .forEach((qsmo) => qsmo.classList.remove("hidden"));

    // Remove 'checked' class from all filters
    document
      .querySelectorAll(".filter-list a")
      .forEach((link) => link.classList.remove("checked"));

    // Restore original order
    qsmosContainer.innerHTML = "";
    originalOrder.forEach((item) => qsmosContainer.appendChild(item));

    updateFilterCount();
  }

  // Function to update the filter count
  function updateFilterCount() {
    const visibleItems = document.querySelectorAll(".qsmo:not(.hidden)");
    const filterCountElement = document.querySelector(".filter-count");
    filterCountElement.textContent = `${visibleItems.length} items`;
  }

  // Reset button functionality
  if (resetButton) {
    resetButton.addEventListener("click", function (e) {
      e.preventDefault();
      resetFilters();
    });
  }

  // Initial filter count update
  updateFilterCount();
});
