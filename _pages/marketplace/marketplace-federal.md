---
title: "Grants QSMO Marketplace"
permalink: /marketplace/marketplace-catalog/federal/
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
      <div class="home-content">
       <h2 class="federal-shared-title">Federal Shared Services</h2>
<hr>
  <div class="federal-shared-description">
    Grants QSMO-validated federal shared service providers offer trusted, high-quality solutions and services aligned with the
    <a href="https://ussm.gsa.gov/fibf-gm/">Federal Integrated Business Framework (FIBF)</a> for Grants Management. Explore the Marketplace’s externally shared federal solutions, validated through the Grants QSMO’s Marketplace Validated Process, that address diverse grants management needs.
    <br><br>
    <em>Externally shared federal solutions are non-mandatory, federal solutions that accept external customers. These solutions are validated by the Grants QSMO after completing our
      <a href="#">Marketplace Validation Process</a>.
    </em>
  </div>

  <!-- Accordion 1 -->
  <div class="federal-accordion">
    <div class="federal-accordion-header" onclick="toggleFederalAccordion(this)">
      Award Management Solutions
      <span class="federal-toggle-icon">+</span>
    </div>
    <div class="federal-accordion-content">
      <table class="federal-accordion-table">
        <tr>
          <td class="federal-agency-details">
            <div class="federal-agency-title">Electronic Research Administration (eRA)</div><br>
            <p><strong>Provider Agency:</strong> U.S. Dept. of Health and Human Services, National Institutes of Health</p>
            <p><strong>Website:</strong> <a href="https://era.nih.gov" target="_blank">https://era.nih.gov</a></p>
            <p><strong>Contact:</strong> eRAinfo@mail.nih.gov</p>
            <p><strong>Customer Agency:</strong> U.S. Dept. of Health and Human Services, Department of Commerce, US Department of Agriculture</p>
            <p><strong>Solution Description:</strong> eRA provides mission-critical support for federal agencies awarding grants and other funding mechanisms. eRA’s electronic grants management services and business intelligence capabilities allow agencies to manage the receipt, processing, review, award and monitoring of grants and are used by applicants and grantees worldwide, including the U.S. and 55 countries.</p>
          </td>
          <td>
            <ul class="federal-services-list">
              <li>Grant Program Set-up & Maintenance</li>
              <li>Grant Program Funding Opportunity</li>
              <li>Grant Application Support and Receipt</li>
              <li>Grant Application Review and Selection</li>
              <li>Grant Award Issuance</li>
              <li>Grant Award Payment Processing</li>
              <li>Grant Award Modification</li>
              <li>Grant Award Performance Review</li>
              <li>Grant Award Financial Review</li>
              <li>Grant Award Compliance Review</li>
              <li>Grant Award Risk Management</li>
              <li>Grant Award Closeout</li>
              <li>Grant Program Reporting and Review</li>
              <li>Grant Program Closeout</li>
              <li>Grant Recipient Indirect Cost Rate Negotiation</li>
              <li>Grant Recipient Single Audit</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  </div>

  <!-- Accordion 2 -->
  <div class="federal-accordion">
    <div class="federal-accordion-header" onclick="toggleFederalAccordion(this)">
      Payment Systems
      <span class="federal-toggle-icon">+</span>
    </div>
    <div class="federal-accordion-content">
      <table class="federal-accordion-table">
        <tr>
          <td class="federal-agency-details">
            <div class="federal-agency-title">Department of the Treasury – ASAP</div><br>
            <p><strong>Provider Agency:</strong> U.S. Department of the Treasury</p>
            <p><strong>Website:</strong> <a href="https://www.fiscal.treasury.gov/asap" target="_blank">https://www.fiscal.treasury.gov/asap</a></p>
            <p><strong>Contact:</strong> asaphelpdesk@fiscal.treasury.gov</p>
            <p><strong>Customer Agency:</strong> Federal agencies disbursing grant funds to grantees</p>
            <p><strong>Solution Description:</strong> The Automated Standard Application for Payments (ASAP) system allows federal agencies to electronically schedule payments through the U.S. Treasury to grantee organizations. ASAP ensures fast, secure, and efficient disbursement of funds with full audit tracking.</p>
          </td>
          <td>
            <ul class="federal-services-list">
              <li>Electronic Funds Transfer</li>
              <li>Payment Scheduling</li>
              <li>Real-time Fund Access</li>
              <li>Payment Authorization Workflow</li>
              <li>Audit and Reporting Features</li>
              <li>Multiple Account Management</li>
              <li>Inter-agency Reconciliation</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  </div>

  <!-- Accordion 3 -->
  <div class="federal-accordion">
    <div class="federal-accordion-header" onclick="toggleFederalAccordion(this)">
      Indirect Cost Negotiation Services
      <span class="federal-toggle-icon">+</span>
    </div>
    <div class="federal-accordion-content">
      <table class="federal-accordion-table">
        <tr>
          <td class="federal-agency-details">
            <div class="federal-agency-title">Department of Health and Human Services – Cost Allocation Services (CAS)</div><br>
            <p><strong>Provider Agency:</strong> U.S. Department of Health and Human Services</p>
            <p><strong>Website:</strong> <a href="https://rates.psc.gov" target="_blank">https://rates.psc.gov</a></p>
            <p><strong>Contact:</strong> CASinquiries@psc.hhs.gov</p>
            <p><strong>Customer Agency:</strong> All federal agencies that award grants/contracts with indirect cost components</p>
            <p><strong>Solution Description:</strong> CAS provides negotiation and oversight services for indirect cost rates, ensuring that rates applied to federal awards are fair, consistent, and based on sound cost allocation principles. CAS serves as a central agency for rate negotiation.</p>
          </td>
          <td>
            <ul class="federal-services-list">
              <li>Indirect Cost Rate Negotiation</li>
              <li>Cost Allocation Plan Review</li>
              <li>Rate Agreement Issuance</li>
              <li>Audit Support and Review</li>
              <li>Agency Coordination</li>
              <li>Rate Amendment Management</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  </div>

  <div class="federal-shared-footer">
    Explore detailed information about services and GRM areas at
    <a href="https://ussm.gsa.gov/fibf-gm/">https://ussm.gsa.gov/fibf-gm/</a>. For insights on specific providers, visit the Buying Insights Profiles on
    <a href="#">Acquisition Gateway</a> (Federal users only; log-in required).
  </div>

  <script>
    function toggleFederalAccordion(header) {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.federal-toggle-icon');
      const isOpen = content.style.display === "block";
      content.style.display = isOpen ? "none" : "block";
      icon.textContent = isOpen ? "+" : "–";
    }
  </script>
      </div>
      {% include grantFooter.html %}
    </div>
  </div>
</div>
