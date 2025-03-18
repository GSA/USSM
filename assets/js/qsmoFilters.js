/* document.addEventListener("DOMContentLoaded", function () {
  // Get all filter links
  const filterLinks = document.querySelectorAll(".filter-list a");

  // Loop through each filter link and add a click event listener
  filterLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior

      e.target.classList.toggle("checked");
      // Get the filter class to show/hide
      const filterClass = e.target.getAttribute("data-filter");

      // Get all the QSMO cards
      const qsmos = document.querySelectorAll(".qsmo");

      // Loop through each QSMO and check if it matches the filter
      qsmos.forEach((qsmo) => {
        // Check if the QSMO card contains the class for the selected filter
        if (qsmo.classList.contains(filterClass) || filterClass === "all") {
          qsmo.style.display = "block"; // Show the QSMO card
        } else {
          qsmo.style.display = "none"; // Hide the QSMO card
        }
      });

      // Optionally, update the filter count
      updateFilterCount();
    });
  });

  // Function to update the filter count
  function updateFilterCount() {
    const visibleItems = document.querySelectorAll(
      '.qsmo[style="display: block;"]'
    );
    const filterCountElement = document.querySelector(".filter-count");
    filterCountElement.textContent = `${visibleItems.length} items`;
  }

  // Add reset functionality to clear filters
  const resetButton = document.querySelector(
    'a[href="/qsmo/#subject=*&role=*&status=*"], .usa-button--accent-cool'
  );
  if (resetButton) {
    resetButton.addEventListener("click", function (e) {
      // Prevent the default link behavior
      e.preventDefault();

      // Reset all filters and show all items
      const qsmos = document.querySelectorAll(".qsmo");
      qsmos.forEach((qsmo) => {
        qsmo.style.display = "block"; // Make sure all items are visible
      });

      // Reset the filter count
      updateFilterCount();

      // Optionally: Reset active filter styling if needed
      filterLinks.forEach((link) => {
        link.classList.remove("checked"); // Remove any active class on filters
      });
    });
  }

  // Initial filter count update
  updateFilterCount();
});
 */

/* document.addEventListener("DOMContentLoaded", function () {
  // Get all filter groups
  const filterGroups = document.querySelectorAll(".filter-list");

  filterGroups.forEach((group) => {
    group.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        e.preventDefault();

        // Get all links in the current group
        const groupLinks = group.querySelectorAll("a");

        // Remove 'checked' class from other links in the same group
        groupLinks.forEach((link) => {
          link.classList.remove("checked");
        });

        // Toggle the clicked filter
        e.target.classList.add("checked");

        // Apply filters based on selection
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

    // Get all the QSMO cards
    const qsmos = document.querySelectorAll(".qsmo");

    qsmos.forEach((qsmo) => {
      let isVisible = true;

      // Check if the QSMO card matches selected filters
      for (let group in selectedFilters) {
        if (!qsmo.classList.contains(selectedFilters[group])) {
          isVisible = false;
          break;
        }
      }

      qsmo.style.display = isVisible ? "block" : "none";
    });

    // Update filter count
    updateFilterCount();
  }

  // Function to update the filter count
  function updateFilterCount() {
    const visibleItems = document.querySelectorAll(
      '.qsmo[style="display: block;"]'
    );
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
        qsmo.style.display = "block";
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
}); */

/* document.addEventListener("DOMContentLoaded", function () {
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

    // Get all the QSMO cards
    const qsmos = document.querySelectorAll(".qsmo");

    qsmos.forEach((qsmo) => {
      let isVisible = true;

      // Check if the QSMO card matches selected filters
      for (let group in selectedFilters) {
        if (!qsmo.classList.contains(selectedFilters[group])) {
          isVisible = false;
          break;
        }
      }

      qsmo.style.display = isVisible ? "block" : "none";
    });

    // Update filter count
    updateFilterCount();
  }

  // Function to update the filter count
  function updateFilterCount() {
    const visibleItems = document.querySelectorAll(
      '.qsmo[style="display: block;"]'
    );
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
        qsmo.style.display = "block";
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
}); */

/* document.addEventListener("DOMContentLoaded", function () {
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

    // Get all the QSMO cards
    const qsmos = document.querySelectorAll(".qsmo");

    qsmos.forEach((qsmo) => {
      let isVisible = true;

      // Check if the QSMO card matches selected filters
      for (let group in selectedFilters) {
        if (!qsmo.classList.contains(selectedFilters[group])) {
          isVisible = false;
          break;
        }
      }

      // Apply transition by adding/removing the 'hidden' class
      if (isVisible) {
        qsmo.classList.remove("hidden");
      } else {
        qsmo.classList.add("hidden");
      }
    });

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
}); */

document.addEventListener("DOMContentLoaded", function () {
  const filterLinks = document.querySelectorAll(".filter-list a");

  filterLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const filterClass = e.target.getAttribute("data-filter");
      const qsmos = document.querySelectorAll(".qsmo");

      qsmos.forEach((qsmo) => {
        // Check if the QSMO card matches the filter
        if (qsmo.classList.contains(filterClass) || filterClass === "all") {
          qsmo.style.display = "block";
          qsmo.classList.add("shuffling"); // Add the shuffle class when visible
          setTimeout(() => qsmo.classList.remove("shuffling"), 400); // Remove after transition
        } else {
          qsmo.classList.add("hidden");
        }
      });

      updateFilterCount();
    });
  });

  function updateFilterCount() {
    const visibleItems = document.querySelectorAll(
      '.qsmo[style="display: block;"]'
    );
    const filterCountElement = document.querySelector(".filter-count");
    filterCountElement.textContent = `${visibleItems.length} items`;
  }

  // Reset functionality for filters
  const resetButton = document.querySelector(
    'a[href="/qsmo/#subject=*&role=*&status=*"], .usa-button--accent-cool'
  );
  if (resetButton) {
    resetButton.addEventListener("click", function (e) {
      e.preventDefault();
      const qsmos = document.querySelectorAll(".qsmo");
      qsmos.forEach((qsmo) => {
        qsmo.style.display = "block";
        qsmo.classList.remove("hidden");
        qsmo.classList.remove("shuffling");
      });
      updateFilterCount();
    });
  }

  updateFilterCount();
});
