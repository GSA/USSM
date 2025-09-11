---
title: "Grants QSMO Marketplace"
permalink: /marketplace/contact/
layout: full-width
attached:
  - marketplace
---

<div class="grid-container">
<button class="menu-toggle" onclick="toggleSidebar()">☰</button>
  <div id="esgms-header" class="grid-row">
    {% include left-navigation.html %}
   <div class="column-left desktop:grid-col-9">
      {% include grantHeader.html %}
    <div class="home-content">
      <p>
      Are you considering modernizing your grants solutions or services? We want to hear from you! Reach out to us at
      <a class="email-link" href="mailto:GrantsQSMO@hhs.gov">GrantsQSMO@hhs.gov</a> and you can:
      </p>
      <div class="bullet-section">
      <ul>
        <li>Request a meeting or information about the Grants QSMO Marketplace.</li>
        <li>Submit questions that are not addressed by our Frequently Asked Questions (FAQs).</li>
        <li>Learn about how other agencies have worked with the Grants QSMO on modernizations of their grant systems.</li>
      </ul>
      </div>
      <p>We look forward to supporting your grants modernization journey!</p>
      <div class="newsletter-section">
        <div class="left-box">
          Stay Up to Date with<br />Grants QSMO!<br />
          <button type="button" id="sendEmail">(click here)</button>
        </div>
        <div class="right-box">
          Subscribe to our newsletter and get Grants QSMO news and updates delivered right to your inbox.
        </div>
      </div>
      <p class="note">
      *Clicking the button above creates a pre-filled email—simply review and hit send!
      </p>
      </div>
      {% include grantFooter.html %}
    </div> 
  </div>
</div>

<script>
  document.getElementById("sendEmail").addEventListener("click", function () {
    const email = "GrantsQSMO@hhs.gov";
    const subject = "Modernizing Grants Solutions & Services";
    const body = `Are you considering modernizing your grants solutions or services? We want to hear from you! Here’s how we can assist:

• Schedule a meeting or discuss tailored insights about using the Grants QSMO Marketplace.
• Provide answers to questions not covered in our FAQs.
• Gather your feedback to enhance our website and services.

We look forward to supporting your grants modernization journey!`;

    const mailto = 
      `mailto:${email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  });
</script>
