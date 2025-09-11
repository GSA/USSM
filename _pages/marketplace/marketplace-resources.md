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
      <h2>Tools for Agencies</h2>
    <p>
      Explore these Grants QSMO resources designed to support your needs. Some links lead to the Grants QSMO <a href="https://www.acquisitiongateway.gov">Acquisition Gateway</a> —a federal platform for agencies to find valuable market research insights.
    </p>
    <div class="accordion">
      <button class="accordion-header">For Federal Agencies</button>
      <div class="accordion-content">
       <div class="section-title">Grants QSMO Information</div>
        <div class="grid">
          <div class="card border__yellow ">
            <h4><a href="{{site.baseurl}}/assets/files/Marketplace Files/Grants QSMO Overview_1.pdf">Grants QSMO Overview</a></h4>
            <p>A concise guide to our mission and purpose.</p></div>
          <div class="card border__yellow">
            <h4><a href="{{site.baseurl}}/assets/files/Marketplace Files/2025 Grants QSMO API Library_0.pdf">API Library</a></h4>
            <p>Reference list for federal grants services-related APIs.</p>
          </div>
        </div>
        <div class="section-title">Federal Shared Services</div>
        <div class="grid">
          <div class="card border__purple">
          <h4><a href="{{site.baseurl}}/assets/files/Marketplace Files/Grants QSMO Agency Acquisition Guide 4.14.2025.docx">Agency Acquisition Guide</a></h4>
          <p>A streamlined resource for federal awarding agencies to enhance grants IT acquisition processes.</p>
          </div>
          <div class="card border__purple">
          <h4><a href="{{site.baseurl}}/assets/files/Marketplace Files/Buying Insights _GrantsQSMO_0.pdf">Buying Insights</a></h4>
          <p>A comparison of federal service providers by capabilities, cost, and satisfaction.</p></div>
          <div class="card border__purple">
          <h4><a href="{{site.baseurl}}/assets/files/Marketplace Files/Value Insights.pdf">Shared Services Value Insights</a></h4>
          <p>An overview of federal service provider benefits, capabilities, and data.</p>
          </div>
        </div>
         <div class="section-title">Commercial Market Research</div>
        <div class="grid">
          <div class="card border__blue "><h4><a href="{{site.baseurl}}/assets/files/Marketplace Files/2024 Catalog of Market Research Higlights_GrantsQSMO.pdf">Grants QSMO 2024 Catalog of Market Research Highlights</a></h4><p>A listing of commercial vendors offering grants management SaaS solutions.</p></div>
          <div class="card border__blue "><h4><a href="https://acquisitiongateway.gov/shared-services/resources/4216?_a%5Eg_nid=36917">Grants QSMO 2024 Catalog of Market Research</a></h4><p>Non-public insights on Marketplace commercial vendors.</p></div>
          <div class="card border__blue "><h4><a href="https://acquisitiongateway.gov/shared-services/resources/4216?_a%5Eg_nid=36917">Vendor Library</a></h4><p>Details on all vendor responses, covering solutions beyond award management.</p></div>
          <div class="card border__blue "><h4><a href="{{site.baseurl}}/assets/files/Marketplace Files/Grants QSMO Industry Day Slides 2024 vFinal.pdf">Grants QSMO Industry Day 2024</a></h4><p>Insights on COFFA partnership, grants modernization, and market research.</p></div>
        </div>
        <div class="section-title">Investment Review Resources</div>
        <div class="grid">
          <div class="card border__orange"><h4><a href="{{site.baseurl}}/assets/files/Marketplace Files/Grants_QSMO Investment Insights.pdf">Investment Insights</a></h4><p>Guide to grants IT investment processes and QSMO partnership to be compliant with M-19-16 and 2 CFR.

</p></div>
          <div class="card border__orange"><h4><a href="{{site.baseurl}}/assets/files/Marketplace Files/Investment_Intake Form_GrantsQSMO.docx">Investment Details Form</a></h4><p>Form to be filled out by agencies planning an investment in support of QSMO/OMB review for 2 CFR compliance.</p></div>
        </div>
    </div>
    </div>
    <div class="accordion">
      <button class="accordion-header">Other Resources</button>
      <div class="accordion-content">
        <div class="grid" style="margin-top:20px">
          <div class="card border__orange"><h4><a href="{{site.baseurl}}/marketplace/faq/">Frequently Asked Questions</a></h4></div>
          <div class="card border__orange"><h4><a href="https://www.grants.gov/data-standards">Grants Data Standards and Guidance</a></h4></div>
           <div class="card border__orange"><h4><a href="https://ussm.gsa.gov/m3/">Modernization and Migration Management Playbook</a></h4></div>
          <div class="card border__orange"><h4><a href="https://ussm.gsa.gov/fibf/">Federal Integrated Business Framework for Grants Management</a></h4></div>
        </div>
      </div>
    </div>
    <div class="accordion">
      <button class="accordion-header">Government-wide Partners and Other QSMOs</button>
      <div class="accordion-content">
        <div class="grid" style="margin-top:20px">
          <div class="card border__purple"><h4><a href="https://ussm.gsa.gov/qsmo/">Office of Shared Solutions and Performance Improvement</a></h4></div>
          <div class="card border__purple"><h4><a href="https://www.cisa.gov/resources-tools/programs/cyber-marketplace">Cyber QSMO</a></h4></div>
          <div class="card border__purple"><h4><a href="https://tfx.treasury.gov/fmqsmo">FM QSMO</a></h4></div>
          <div class="card border__purple"><h4><a href="https://acquisitiongateway.gov/shared-services/resources/4217?_a%5Eg_nid=29485">HR QSMO</a></h4></div>
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
