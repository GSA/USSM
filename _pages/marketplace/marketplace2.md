---
layout: base
permalink: /marketplace/
title: GovOps Marketplace
description: "Services and technologies to advance agency management and operations"
news-category: FIBF-PROGRAM
---
<style>
  a.green-link {
    color: #D83933; /* Green color */
  }
</style>

{% include banner.html title-override="GovOps Marketplace" width="grid-col-11" offset="grid-offset-1" %}

<div class="grid-container">
    <div class="grid-row grid-gap">
            <div class="tablet:grid-col-10 tablet:grid-offset-1 padding-top-1">
            {% include breadcrumbs.html %}
            </div>
    </div>
</div>
<section class="pm" id="govops-marketplace">
    <div class="grid-container">

<!-- chop start -->
  
              <div class="grid-row padding-bottom-5">
            <div class="tablet:grid-col-10 grid-offset-1">
<style>

.govops-container {
    display: flex;
    align-items: center; /* Vertically aligns the text and image */
    gap: 20px; /* Adds spacing between the image and text */
}

.govops-logo {
    width: 100px; /* Adjust based on your logo size */
    height: auto;
}

.govops-text {
    flex: 1; /* Allows text to take up remaining space */
}

.rectangle {
       
  background-color: #0A2A66;  /* Dark blue */
  color: #fff;               /* White text (if desired) */
    padding: 10px;
            width: 97%;
     font-size: 18px;
            font-weight: bold;
            font-style: italic;
            text-align: center;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center; /* Ensures both flag and text are vertically centered */
 
        }

.rectangle img {
margin-right: 5px;

}
  
     .icon-container {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 20px;
        }
        .icon {
            text-align: center;
        }
        .icon img {
            width: 50px;
            height: 50px;
            transition: transform 0.6s ease-in-out;
        }
        .icon img:hover {
            transform: rotateY(180deg);
        }
        .icon p {
            margin-top: 5px;
            font-size: 14px;
            color: black;
        }

</style>

  <div class="rectangle">

    <IMG SRC="/assets/images/icon_us_flag_64.png">
        In order to improve the way government delivers services externally, we must aggressively reform the way government delivers services internally.
    </div>    


<STYLE>

.govops-grid {
  display: grid;
  grid-template-columns: auto 1fr;   /* Left column for the seal/IT, right column for icons */
  grid-template-rows: auto auto;      /* Two rows: top row for first set, bottom row for second set */
  gap: 1rem;                         /* Space between grid cells */
  align-items: start;
}

/* Left Column */
.govops-seal {
  grid-column: 1;
  grid-row: 1;
  justify-self: center; /* Center the seal horizontally */
}

.it-icon {
  grid-column: 1;
  grid-row: 2;
  justify-self: center; /* Center the IT icon horizontally */
}



/* Right Column (Icons) */
/* Both rows will share the same grid structure so that each column aligns */
.top-icons,
.bottom-icons {
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 columns for 5 icons */
  gap: 1rem;
}

  .ssgb-icons {
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(8, 1fr); /* 5 columns for 5 icons */
  gap: 1rem;
}

  .ssgb-icons {
  grid-row: 1;
}

.top-icons {
  grid-row: 1;
}

.bottom-icons {
  grid-row: 2;
}

/* Icon styling */
.icon {
  text-align: center;
  font-weight: bold;
}

.icon img {
  max-width: 50px; /* Adjust as needed */
  display: block;
  margin: 0 auto 0.5rem;
}

/* Optional: Placeholder styling (if needed) */
.placeholder {
  visibility: hidden;
}


  .govops-seal img {
  width: 100px;
  height: auto;
}

.it-icon img {
  width: 50px;
  height: auto;
}
  

</STYLE>


<STYLE>

.govops-grid {
  display: grid;
  grid-template-columns: auto 1fr;  /* Left col for seal/IT, right col for icons */
  grid-template-rows: auto auto;    /* Top row for seal & top icons, bottom row for IT & bottom icons */
  gap: 1rem;
  align-items: start;               /* Top-align rows */
}

/* Center the entire seal container in its grid cell */
.govops-seal {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;   /* Stack image/text (if any) vertically */
  align-items: center;      /* Center horizontally */
  justify-content: center;  /* If you want vertical centering within the cell */
}

.govops-seal img {
  width: 115px;  /* GovOps seal at 115px wide */
  height: auto;
  margin-bottom: 0.5rem;
}

/* IT icon directly under the seal, also centered */
.it-icon {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;   /* Stack image + text */
  align-items: center;      /* Center horizontally */
  justify-content: center;
  text-align: center;       /* Ensures the text is also centered */
  font-weight: bold;
}

.it-icon img {
  width: 50px;   /* IT icon at 50px wide */
  height: auto;
  margin-bottom: 0.5rem;
   align-items: start;
}

/* Right column: top icons and bottom icons each as a grid */
.top-icons,
.bottom-icons {
  grid-column: 2;        /* Right column */
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 icons across */
  align-items: start;
  gap: 0.5rem;
}

.top-icons {
  grid-row: 1;  /* Top row of icons */
}
.bottom-icons {
  grid-row: 2;  /* Bottom row of icons */
}

.icon {
  text-align: center;
  font-weight: bold;
}

.icon img {
  max-width: 50px; /* Adjust as needed for all right-side icons */
  display: block;
  margin: 0 auto 0.5rem;
}

.tight-spacing {
    margin-top: 7px;    /* Adjust as needed */
    margin-bottom: 7px; /* Adjust as needed */
}

</STYLE>

      <P CLASS="tight-spacing">Find modern, centralized capabilities to improve your agency's management and operations performance.</P>

<span class="govops-container">
<div class="govops-grid">


  <!-- Top-left: GovOps Seal -->
  <div class="govops-seal">
    <img 
      src="/assets/images/marketplace/icon_govops.jpg" 
      alt="GovOps Shared Services Marketplace"
    >
    <!-- If you need text for the seal, you could put it here -->
  </div>

  <!-- Top-right: Row of icons (Financial, Grants, etc.) -->
  <div class="top-icons">
    <div class="icon">
      <img src="/assets/images/fibf/icons/icon.cyber.webp" alt="Cybersecurity Services">
      <p>Cybersecurity<br>Services</p>
    </div>
    
    <div class="icon">
      <A HREF="/marketplace/qsmo-ffm/"><img src="/assets/images/fibf/icons/icon.corefm.webp" alt="Financial Management"></A>
      <p>Financial<br>Management</p>
    </div>
    <div class="icon">
      <A HREF="/marketplace/qsmo-grm/"><img src="/assets/images/fibf/icons/icon.grants.webp" alt="Grants Management"></A>
      <p>Grants<br>Management</p>
    </div>
    <div class="icon">
      <A HREF="/marketplace/qsmo-hcm/"><img src="/assets/images/fibf/icons/icon.hr.webp" alt="Human Resources"></A>
      <p>Human<br>Resources</p>
    </div>
    <div class="icon">
      <A HREF="/marketplace/ess-trt2/"><img src="/assets/images/fibf/icons/icon.travel.webp" alt="Travel & Expense"></A>
      <p>Travel &<br>Expense</p>
    </div>

  </div>

  <!-- Bottom-left: IT icon (centered under seal) -->

  <!--
  <div class="it-icon">
    <img 
      src="/assets/images/fibf/icons/icon.computer.webp" 
      alt="Information Technology"
    >
    <p>Information<br>Technology</p>
  </div>
-->

  <!-- Bottom-right: Second row of icons (Fleet, Purchase Cards, etc.) -->
  <div class="bottom-icons">
    <div class="icon">
     <a href="{{site.baseurl}}/marketplace/ess-eis/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title=""><img 
      src="{{ site.baseurl }}/assets/images/fibf/icons/icon.computer.webp" 
      alt="Information Technology"></a>
    <p>Information<br>Technology</p>
    </div>
    
    <div class="icon">
      <A HREF="https://ussm.gsa.gov/marketplace/ess-fleet/"><img src="{{ site.baseurl }}/assets/images/fibf/icons/car.icon.webp" alt="Fleet"></A>
      <p>Fleet</p>
    </div>
    <div class="icon">
      <A HREF="{{site.baseurl}}/marketplace/ess-smartpay/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title=""><img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.smartpay.webp" alt="Purchase Cards"></A>
      <p>Purchase<br>Cards</p>
    </div>
    <!-- Add more icons or placeholders here as needed -->
    <div class="icon">
      <A HREF="{{site.baseurl}}/marketplace/ess-erm/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title=""><img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.erm.webp" alt="Records Management"></A>
      <p>Records<br>Management</p>
    </div>

<!--
     <div class="icon">
      <img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.erm.webp" alt="Records Management">
      <p>Records<br>Management</p>
    </div>

     <div class="icon">
      <img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.erm.webp" alt="Records Management">
      <p>Records<br>Management</p>
    </div>

-->
  
  </div>
</div>
</SPAN>

<STYLE>

/* Info box is hidden by default */
.icon-hover-info {
  display: none;
  background: #222;          /* Dark background */
  color: #fff;               /* White text */
  padding: 10px;             /* Adjust as needed */
  border-radius: 8px;        /* Rounded corners */
  margin-top: 10px;          /* Space below the icon */
}

/* On hover, show the info box immediately */
.icon:hover .icon-hover-info {
  display: block;
}


/* Optional styling for text inside the hover box */
.budget-amount {
  font-size: 1.1rem;
  font-weight: bold;
}
.budget-year {
  font-size: 0.9rem;
  opacity: 0.9;  /* Slightly lighter if you want */
  margin-top: 0.25rem;
}

</STYLE>


<div class="icon-hover-info">
    <div class="budget-amount">$6.8 Trillion</div>
    <div class="budget-year">2024 Federal Budget</div>
  </div>


<hr>

 
 <p class="govops-text">
Emerging interests flagged by <A HREF="https://ussm.gsa.gov/ssgb">Shared Services Governance Board</A> and <A HREF="https://ussm.gsa.gov/sapoc">Agency Senior Accountable Point of Contact</A>.
<div class="ssgb-icons">

  
  <div class="icon">
      <img src="/assets/images/fibf/icons/icon_ai.png" alt="Artificial Intelligence">
      <p>Artificial<BR>
      Intelligence</p>
    </div>
    
    <div class="icon">
     <img src="/assets/images/fibf/icons/icon_cx.png" alt="Customer Experience">
      <p>Customer<BR>
      Experience</p>
    </div>
    <div class="icon">
      <img src="/assets/images/fibf/icons/icon_contractwriting.png" alt="Contract Writing">
      <p>Contract<BR>Writing</p>
    </div>
    <div class="icon">
      <A HREF="https://www.idmanagement.gov/"><img src="/assets/images/fibf/icons/icon_icam.png" alt="Identity Management"></A>
      <p>Identity<BR>
      Management</p>
    </div>
    <div class="icon">
     <img src="/assets/images/fibf/icons/icon_data.png" alt="Data Services">
      <p>Data<BR>Services</p>
    </div>

    <div class="icon">
      <img src="/assets/images/fibf/icons/icon_rpm3.png" alt="Real Property Management">
      <p>Real<BR>Property
      </p>
    </div>
    
    <div class="icon">
    <img src="/assets/images/fibf/icons/icon_international2.png" alt="International Services">
      <p>International<BR>
      Services</p>
    </div>
    
    <div class="icon">
     <img src="/assets/images/fibf/icons/icon_foia.png" alt="FOIA Services">
      <p>FOIA<BR>Services</p>
    </div>
  
  </div>

  
     <!--
   Marketplace solutions will blend commercial practices with federal requirements to improve government efficiency, reduce agency operating costs, and drive public accountability in agency management and operations. 

<P><B>Find solutions here:</B></P>
   <span style="display: block; height: 8px;"></span>
 <div class="icon-container">
        <div class="icon">
          <a href="{{site.baseurl}}/marketplace/qsmo-ffm/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title="">
          <img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.corefm.webp" alt="Icon 1"><p>Financial<BR>Management</p></a></div>
        <div class="icon">
           <a href="{{site.baseurl}}/marketplace/qsmo-grm/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title="">
          <img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.grants.webp" alt="Icon 2"><p>Grants<BR>Management</p></a></div>
        <div class="icon">
           <a href="{{site.baseurl}}/marketplace/qsmo-hcm/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title=""><img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.hr.webp" alt="Icon 3"><p>Human<BR>Resources</p></a></div>
        <div class="icon">
          <a href="{{site.baseurl}}/marketplace/ess-trt2/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title=""><img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.travel.webp" alt="Icon 4"><p>Travel &<BR>Expense</p></a></div>
        <div class="icon">
          <a href="{{site.baseurl}}/marketplace/qsmo-cyb/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title=""><img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.cyber.webp" alt="Icon 5"><p>Cybersecurity<BR>Services</p></a></div>
        <div class="icon">
          <a href="{{site.baseurl}}/marketplace/ess-eis/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title=""><img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.computer.webp" alt="Icon 6"><p>Information<BR>Technology</p></a></div>
        <div class="icon">
          <a href="{{site.baseurl}}/marketplace/ess-fleet/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title=""><img src="{{ site.baseurl }}/assets/images/fibf/icons/car.icon.webp" alt="Icon 7"><p>Fleet</p></a></div>
        <div class="icon">
           <a href="{{site.baseurl}}/marketplace/ess-smartpay/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title=""><img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.smartpay.webp" alt="SmartPay Purchase Cards"><p>Purchase<BR>Cards</p></a></div>
        <div class="icon">
          <a href="{{site.baseurl}}/marketplace/ess-erm/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title=""><img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.erm.webp" alt="Icon 9"><p>Records<BR>Management</p></a></div>
    </div>
-->

    Marketplace partners must deliver modern technology and services needed to propery manage agency operations. An efficient management ecosystem will deliver a citizen-centric, accountable, performance-driven approach to agency operations that restores the government's focus on administration's priorities and improves mission delivery in service to American taxpayers.
    </p>


            </div>
        </div>

       
            
 
     
        </div>


 
</section>
