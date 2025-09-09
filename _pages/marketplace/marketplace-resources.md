---
title: "Grants QSMO Marketplace"
permalink: /marketplace/resources/
layout: full-width
attached:
  - marketplace
---

<style>
  /*  .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
      gap: 15px;
      margin-bottom: 20px;
      margin-top:20px;
    } */
   
   .border__yellow {
    border-top:8px solid #f9b233;
   }
   .border__purple {
    border-top: 8px solid #005ea2;
   }
   .border__blue {
    border-top: 8px solid #00a9ce;
   }
   .border__orange {
    border-top: 8px solid orange;
   }
   .grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.card {
  flex: 1 1 220px;   /* minimum width 220px, grow if space allows */
  max-width: 220px;  /* prevent cards from becoming too wide */
  padding: 15px;
  background: #f1f1f1;
  box-sizing: border-box;
}

    .card h4 {
      margin: 0 0 10px 0;
      font-size: 15px;
      color: #333;
    }

    .card p {
      margin: 0;
      font-size: 14px;
      color: #555;
    }
</style>
<div class="grid-container" id="federal">
<button class="menu-toggle" onclick="toggleSidebar()">☰</button>
  <div id="esgms-header" class="grid-row">
    {% include left-navigation.html %}
   <div class="column-left desktop:grid-col-9">
      {% include grantHeader.html %}
   <div class="home-content">
      <h2>Resources</h2>
    <p>
      Consider these resources from the Grants QSMO for your needs. Some links lead to the Grants QSMO
      <a href="#">Acquisition Gateway</a>, a platform for federal agencies with valuable insights on market research.
    </p>
    <div class="accordion">
      <button class="accordion-header">For Federal Agencies</button>
      <div class="accordion-content">
       <div class="section-title">Grants QSMO Information</div>
        <div class="grid">
          <div class="card border__yellow ">
            <h4>Grants QSMO Overview</h4>
            <p>A concise guide to our mission and purpose.</p></div>
          <div class="card border__yellow">
            <h4>API Library</h4>
            <p>Reference list for federal grants services-related APIs.</p>
          </div>
        </div>
        <div class="section-title">Federal Shared Services</div>
        <div class="grid">
          <div class="card border__purple">
          <h4>Agency Acquisition Guide</h4>
          <p>A streamlined resource for federal awarding agencies to enhance grants IT acquisition processes.</p>
          </div>
          <div class="card border__purple">
          <h4>Buying Insights</h4>
          <p>A comparison of federal service providers by capabilities, cost, and satisfaction.</p></div>
          <div class="card border__purple">
          <h4>Shared Services Value Insights</h4>
          <p>An overview of federal service provider benefits, capabilities, and data.</p>
          </div>
        </div>
         <div class="section-title">Commercial Market Research</div>
        <div class="grid">
          <div class="card border__blue "><h4>Grants QSMO 2024 Catalog of Market Research Highlights</h4><p>A listing of commercial vendors offering grants management SaaS solutions.</p></div>
          <div class="card border__blue "><h4>Grants QSMO 2024 Catalog of Market Research</h4><p>Non-public insights on Marketplace commercial vendors.</p></div>
          <div class="card border__blue "><h4>RFI Vendor Library</h4><p>Details on all vendor responses, covering solutions beyond award management.</p></div>
          <div class="card border__blue "><h4>Grants QSMO Industry Day 2024</h4><p>Insights on COFFA partnership, grants modernization, and market research.</p></div>
        </div>
        <div class="section-title">Investment Review Resources</div>
        <div class="grid">
          <div class="card border__orange"><h4>Investment Insights</h4><p>Guide to grants IT investment processes and QSMO partnership to be compliant with M-19-16 and 2 CFR.

</p></div>
          <div class="card border__orange"><h4>Investment Details Form</h4><p>Form to be filled out by agencies planning an investment in support of QSMO/OMB review for 2 CFR compliance.</p></div>
        </div>
    </div>
    </div>
    <div class="accordion">
      <button class="accordion-header">Other Resources</button>
      <div class="accordion-content">
        <div class="grid" style="margin-top:20px">
          <div class="card border__orange"><h4>Frequently Asked Questions</h4></div>
          <div class="card border__orange"><h4>Grants Data Standards and Guidance</h4></div>
           <div class="card border__orange"><h4>Modernization and Migration Management Playbook</h4></div>
          <div class="card border__orange"><h4>Federal Integrated Business Framework for Grants Management</h4></div>
        </div>
      </div>
    </div>
    <div class="accordion">
      <button class="accordion-header">Government-wide Partners and Other QSMOs</button>
      <div class="accordion-content">
        <div class="grid" style="margin-top:20px">
          <div class="card border__purple"><h4>Office of Shared Solutions and Performance Improvement</h4></div>
          <div class="card border__purple"><h4>Cyber QSMO</h4></div>
          <div class="card border__purple"><h4>FM QSMO</h4></div>
          <div class="card border__purple"><h4>HR QSMO</h4></div>
        </div>
      </div>
    </div>
      </div>
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
