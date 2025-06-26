---
title: "Grants QSMO Marketplace"
permalink: /marketplace/resources/
layout: full-width
attached:
  - marketplace
---

<div class="grid-container" id="federal">
<button class="menu-toggle" onclick="toggleSidebar()">☰</button>
  <div id="esgms-header" class="grid-row">
    {% include left-navigation.html %}
   <div class="column-left desktop:grid-col-9">
      {% include grantHeader.html %}
      <!--<div class="home-content">
      <h2>Resources</h2>
    <p>
      Consider these resources from the Grants QSMO for your needs. Some links lead to the Grants QSMO
      <a href="#">Acquisition Gateway</a>, a platform for federal agencies with valuable insights on market research.
    </p>
    <div class="accordion">
      <button class="accordion-header">For Federal Agencies</button>
      <div class="accordion-content">
        <h4>Guidance</h4>
        <ul>
          <li><a href="#">Grants QSMO Overview (pdf)</a></li>
          <li><a href="#">Agency Acquisition Guide (pdf)</a></li>
        </ul>
        <h4>Federal Shared Service Provider Information</h4>
        <ul>
          <li><a href="#">Buying Insights (pdf)</a></li>
          <li><a href="#">Shared Service Value Insights (pdf)</a></li>
        </ul>
        <h4>Commercial Provider Information</h4>
        <ul>
          <li><a href="#">Grants QSMO 2024 Catalog of Market Research Highlights (pdf)</a></li>
          <li><a href="#">Grants QSMO 2024 Catalog of Market Research (xlsx)</a></li>
          <li><a href="#">RFI Vendor Library (xlsx)</a></li>
          <li><a href="#">Grants QSMO Industry Day 2024 (pdf)</a></li>
        </ul>
        <h4>Investment Resources</h4>
        <p>The Grants QSMO is here to support your agency in navigating grants IT investments—whether for modernization, new system development, or adopting shared services. We provide expert contacts, clear guidance, and essential resources to simplify your investment process. Visit the Grants QSMO <a>Acquisition Gateway</a> to explore tools and access key forms.</p>
        <div class="buttons">
          <button class="investment-buttons">Investment Insights</button>
          <button class="investment-buttons">Investment Details Form</button>
        </div>
      </div>
    </div>
    <div class="accordion">
      <button class="accordion-header">Other Resources</button>
      <div class="accordion-content">
        <ul>
          <li><a href="#">Grants Data Standards and Guidance</a></li>
          <li><a href="#">Frequently Asked Questions (FAQs)</a></li>
          <li><a href="#">Modernization Using the Modernization and Migration Management (M3) Playbook</a></li>
          <li><a href="#">Federal Integrated Business Framework (FIBF) for Grants Management</a></li>
        </ul>
      </div>
    </div>
    <div class="accordion">
      <button class="accordion-header">Government-wide Partners and Other QSMOs</button>
      <div class="accordion-content">
        <ul>
          <li><a href="#">GSA’s Office of Shared Solutions and Performance Improvement (OSSPI): QSMO Information</a></li>
          <li><a href="#">Cyber QSMO</a></li>
          <li><a href="#">FM QSMO</a></li>
        </ul>
      </div>
    </div>
      </div>-->
      {% include grantFooter.html %}
    </div> 
  </div>
</div>

<script type="text/javascript">
const headers = document.querySelectorAll(".accordion-header");
headers.forEach(header => {
  header.addEventListener("click", () => {
    const isActive = header.classList.contains("active");

    // Close all
    headers.forEach(h => {
      h.classList.remove("active");
      h.nextElementSibling.style.display = "none";
    });

    // Toggle current
    if (!isActive) {
      header.classList.add("active");
      header.nextElementSibling.style.display = "block";
    }
  });
});
</script>
