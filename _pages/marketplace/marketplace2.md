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

<BR>



<STYLE>

.govops-grid {
  /* Create a 2-column grid: 
     1) auto-width column for the seal 
     2) flexible column for the icons */
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto; /* 2 rows (you can add more if needed) */
  gap: 1rem; /* space between columns/rows */
  align-items: start; /* top-align rows */
  
  /* If you want a background color or padding around it, uncomment these:
     background-color: #fff;
     padding: 1rem;
     border-radius: 8px;
  */
}

.govops-seal {
  /* Place the seal in the left column, spanning 2 rows. 
     This ensures it stays on the left, while icons can fill row 1 & row 2 to the right. */
  grid-column: 1;
  grid-row: 1 / 3; /* spans rows 1 and 2 */
  
  /* Center or top-align the image inside the seal container as you wish */
  display: flex;
  align-items: center;
  justify-content: center;
}

.govops-seal img {
  max-width: 125px;
  height: auto;
}

.icon-row {
  /* Each .icon-row is a row in the grid, in the second column. */
  grid-column: 2;
  /* The first .icon-row will be row 1, the second .icon-row is row 2, etc. */
  
  display: flex;       /* flex layout for icons in a row */
  flex-wrap: wrap;     /* allows wrapping if needed on smaller screens */
  gap: 1rem;           /* space between icons */
}

.icon {
  text-align: center;  /* center icon + text */
}

.icon img {
  max-width: 50px;
  display: block;
  margin: 0 auto 0.5rem;
}


</STYLE>


<div class="govops-grid">
  <!-- GovOps Seal (stays on the left, spanning multiple rows) -->
  <div class="govops-seal">
    <img 
      src="/assets/images/marketplace/icon_govops.jpg" 
      alt="GovOps Shared Services Marketplace" 
    >
  </div>

  <!-- First row of icons (Financial, Grants, HR, Travel, Cyber) -->
  <div class="icon-row">
    <div class="icon">
      <img src="icon.corefm.webp" alt="Financial Management">
      <p>Financial<BR>Management</p>
    </div>
    <div class="icon">
      <img src="icon.grants.webp" alt="Grants Management">
      <p>Grants<BR>Management</p>
    </div>
    <div class="icon">
      <img src="icon.hr.webp" alt="Human Resources">
      <p>Human<BR>Resources</p>
    </div>
    <div class="icon">
      <img src="icon.travel.webp" alt="Travel & Expense">
      <p>Travel &<BR>Expense</p>
    </div>
    <div class="icon">
      <img src="icon.cyber.webp" alt="Cybersecurity Services">
      <p>Cybersecurity<BR>Services</p>
    </div>
  </div>

  <!-- Second row of icons (Information Technology, etc.) -->
  <div class="icon-row">
    <div class="icon">
      <img src="icon.computer.webp" alt="Information Technology">
      <p>Information<BR>Technology</p>
    </div>
    <!-- Add more icons here in the future -->
  </div>
</div>











<BR><BR>
<span class="govops-container">
    <img src="/assets/images/marketplace/icon_govops.jpg"  alt="GovOps Shared Services Marketplace" 
                                                                        style="width:125px; height:125px; vertical-align: top;">

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

 </div>

 <div class="icon-container">
      <div class="icon">
          <a href="{{site.baseurl}}/marketplace/ess-eis/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title=""><img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.computer.webp" alt="Icon 6"><p>Information<BR>Technology</p></a></div>

     </div>



</span>



<hr>

 
 <p class="govops-text">
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
           <a href="{{site.baseurl}}/marketplace/ess-smartpay/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title=""><img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.smartpay.webp" alt="Icon 8"><p>Purchase<BR>Cards</p></a></div>
        <div class="icon">
          <a href="{{site.baseurl}}/marketplace/ess-erm/" class="margin-bottom-2 grid-col-4 text-center text-no-underline text-black text-bold line-height-sans-2 font-body-3xs" title=""><img src="{{ site.baseurl }}/assets/images/fibf/icons/icon.erm.webp" alt="Icon 9"><p>Records<BR>Management</p></a></div>
    </div>


     The marketplace will deliver shared expertise and modern, secure technologies to agency management functions such as Accounting/Finance, Grants, Human Resources, Travel, Real Property, and Information Technology / Cybersecurity. An efficient management ecosystem will deliver a public-focused, accountable, performance-driven approach to agency operations that restores focus on the administration's priorities and improves mission delivery in service to the American taxpayer.
    </p>


            </div>
        </div>

       
            
 
     
        </div>


 
</section>
