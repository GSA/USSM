document.addEventListener("DOMContentLoaded", function () {
  // Get all filter links
  const filterLinks = document.querySelectorAll(".filter-list a");
  const qsmos = document.querySelectorAll(".qsmo");
  qsmos.forEach((qsmo) => {
    qsmo.style.display = "block"; // Force visibility
  });

  // Update the initial filter count after ensuring all items are visible
  updateFilterCount();

  // Loop through each filter link and add a click event listener
  filterLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior

      // Get the filter class to show/hide
      const filterClass = e.target.getAttribute("data-filter");

      // Get all the QSMO cards
      // const qsmos = document.querySelectorAll(".qsmo");

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
        link.classList.remove("active"); // Remove any active class on filters
      });
    });
  }

  // Initial filter count update
  updateFilterCount();
});
