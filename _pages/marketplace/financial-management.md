---
layout: base
permalink: /marketplace/qsmo-ffm/
title: Financial Management
description: "Effective stewardship of taxpayer funds is a responsibility of the Federal Government and the Chief Financial Officer. Federal agencies currently manage over $6.7 trillion in annual spending."
news-category: FIBF-FM 
---


{% include banner.html title-override="GovOps Marketplace" width="grid-col-11" offset="grid-offset-1" %}

<style>
  a.green-link {
    color: #D83933; /* Red color */
  }
</style>


<div class="grid-container">
    <div class="grid-row grid-gap">
            <div class="tablet:grid-col-10 tablet:grid-offset-1 padding-top-1">
            {% include breadcrumbs-marketplace.html %}
            </div>
    </div>
</div>

<section class="pm" id="financial-management">
    <div class="grid-container">
        <div class="grid-row">
            <div class="tablet:grid-col-6 tablet:grid-offset-1 padding-top-4 tablet:padding-right-3 display-flex flex-column">
                <h2 class="margin-bottom-0 margin-top-0">
                   <img src="/assets/images/fibf/icons/icon.corefm.webp" alt="Financial Management Icon" width="50px" height="auto" style="vertical-align:middle;"> Financial Management
                </h2>
                <p>
                    The Department of Treasury’s <a href="https://tfx.treasury.gov/fmqsmo" title="Financial Management Quality Service Management Office" target="_blank">Financial Management Quality Service Management Office</a> manages the FM Marketplace Catalog as a resource to identify from over 70 services and solutions that that will support financial management needs that accomplish both agency and shared government-wide goals.
                </p>

              <B>Agencies, begin here - Find solutions to manage funding:</B><BR>
                <ul class="margin-top-0 margin-bottom-3">
                     <img src="/assets/images/marketplace/icon_cart_16.png" alt="Explore the FM Marketplace Catalog" height="auto" style="vertical-align:middle;">&nbsp;<a href="https://tfx.treasury.gov/fmqsmo/marketplace-catalog" title="FM Marketplace Catalog" target="_blank" class="green-link">Explore the FM Marketplace Catalog</a><BR>
  <img src="/assets/images/marketplace/icon_acquisitionhub_16.png" alt="FM Marketplace Acquisition Hub" height="auto" style="vertical-align:middle;">&nbsp;<a href="https://acquisitiongateway.gov/shared-services/resources/4215" title="FM Marketplace Acquisition Hub" target="_blank">Hub for Acquisition Professionals</a><BR>
            
                 <img src="/assets/images/marketplace/icon_email_16.png" alt="Contact the FM QSMO" height="auto" style="vertical-align:middle;">&nbsp;<a href="mailto:FMQSMO@fiscal.treasury.gov" title="Contact the FM QSMO" target="_blank">FMQSMO@fiscal.treasury.gov</a> | <A HREF="https://tfx.treasury.gov/fmqsmo">Treasury FM QSMO Website</A><BR>
                </ul>


 <style>
    /* Basic styling */
    video {
      width: 600px; /* Set video width */
      height: auto; /* Height will auto adjust to the aspect ratio */
    }

    /* Hide native controls by default */
    video::-internal-media-controls {
      display: none;
    }

    video::-webkit-media-controls {
      display: none;
    }

    /* Show custom controls only when hovering over the video */
    .custom-controls {
      display: none;
      position: absolute;
      bottom: 10px;
      width: 100%;
      text-align: center;
    }

    .video-container:hover .custom-controls {
      display: block; /* Show controls on hover */
    }

    .video-container {
      position: relative; /* So we can position controls over the video */
    }

    /* Style the control buttons */
    .custom-controls button {
      margin: 5px;
      padding: 5px 10px;
      background-color: #333;
      color: #fff;
      border: none;
      cursor: pointer;
    }

     /* Progress bar styling */
    .progress-bar {
      flex-grow: 1;
      height: 5px;
      background-color: #555;
      margin: 0 10px;
      position: relative;
    }

    .progress {
      height: 100%;
      background-color: #f00;
      width: 0%;
    }


    

    
  </style>



<!-- Video Player -->
<div class="video-container" style="display: flex; justify-content: center; align-items: center; height: 100%;">
  <video id="myVideo" preload="metadata" width="320px;" height="240px;" poster="/assets/images/marketplace/thumbnail_FMQSMO_video.png" aria-label="What is Quality Service Management Office video">
    <source src="https://www.fiscal.treasury.gov/videos/fmqsmo/what-is-the-FMQSMO.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="custom-controls">
    <button onclick="playPause()">Play/Pause</button>
    <button onclick="stopVideo()">Stop</button>
    <button onclick="toggleFullscreen()">Fullscreen</button>
   <div class="progress-bar">
    <div id="progress" class="progress"></div>
  </div>
  <span id="timer">0:00 / 0:00</span>

  </div>
</div>





<script>
  // JavaScript to handle play/pause, stop, and fullscreen actions
  var video = document.getElementById("myVideo");
  
    
    // Toggle play/pause when clicking the video itself
  video.addEventListener('click', function() {
    playPause();
  });

    
  function playPause() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  function stopVideo() {
    video.pause();
    video.currentTime = 0;
  }

  function toggleFullscreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
      video.msRequestFullscreen();
    }
  }

 // Update progress bar and timer
  video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progress.style.width = `${percentage}%`;

    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.floor(video.currentTime % 60);
    const totalMinutes = Math.floor(video.duration / 60);
    const totalSeconds = Math.floor(video.duration % 60);

    timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')} / ${totalMinutes}:${totalSeconds.toString().padStart(2, '0')}`;
  });

 // Ensure progress bar persists while video is playing
  video.addEventListener('play', () => {
    requestAnimationFrame(updateProgress);
  });

  function updateProgress() {
    if (!video.paused && !video.ended) {
      const percentage = (video.currentTime / video.duration) * 100;
      progress.style.width = `${percentage}%`;
      requestAnimationFrame(updateProgress);
    }
  }
    
    
</script>




             <P></P>
              
                <hr class="margin-top-auto width-full">
            </div>
            <div class="tablet:grid-col-5 padding-top-4 display-flex flex-column">
           
     <!-- Data and Business Standards -->
            
                
                <div class="display-flex flex-align-center">
                    <!-- <svg class="usa-icon usa-icon--size-4 text-primary" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#local_grocery_store"></use></svg> -->
                    <h2 class="margin-bottom-0 margin-top-0">
                        <img src="/assets/images/marketplace/icon_why.png" alt="Why does it matter?" height="auto" style="vertical-align:middle;">
                        Why does it matter?
                    </h2>
                </div>

<div style="display: flex; align-items: center; gap: 20px;">
    <div style="text-align: center; background-color: rgb(100, 100, 100); padding: 10px 20px; border-radius: 8px;">
        <div style="font-size: 55px; font-weight: bold; color: white;">
            $6.8
        </div>
        <div style="font-size: 28px; color: white; text-transform: uppercase; letter-spacing: 1px;">
            Trillion
        </div>
    </div>
    <div style="font-size: 20px; color: #333; max-width: 500px;">
        In 2024, Federal agencies managed over $6.8 trillion of funding in alignment with the federal budget.
    </div>
</div>


           

           <p>
                    Effective stewardship of taxpayer funds is a responsibility of the Federal Government and the Chief Financial Officer.  Common goals and objectives in agency financial management include:
                </p>
                <ul class="margin-top-0">
                    <li>Improving Financial Transparency</li>
                    <li>Enhancing Internal Controls to Reduce Risk</li>
                    <li>Integrating Agency Performance with Budgeting</li>
                    <li>Strengthening Payment Integrity</li>
                    <li>Automating Financial Processes</li>
                    <li>Using Data to Maximize Agency Resource Allocation</li>
                </ul>

A competitive marketplace of expertise and modern financial management systems will (1) enhance the success rate of achieving the administration’s fiscal priorities, (2) expand access to data for greater transparency, accountability, and strategic decision-making in Federal spending, (3) optimize government resources for maximum cost-effectiveness.

             
<BR><BR>
<sup>1 Source:<A HREF="https://www.cbo.gov/topics/budget">Congressional Budget Office, 2024</A></sup><BR>
                    
                <hr class="margin-top-auto width-full">
            </div>
        </div>
        <div class="grid-row">
            <div class="tablet:grid-col-6 tablet:grid-offset-1 tablet:padding-right-3 display-flex flex-column">
          
                
                     <div class="display-flex flex-align-center">
                    <!-- <svg class="usa-icon usa-icon--size-4 text-primary" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use></svg> -->
                    <h2 class="margin-bottom-0 margin-top-0">

  <img src="/assets/images/marketplace/icon_standards.png" alt="Data and Business Standards" height="auto" style="vertical-align:middle;">
                        Data and Business Standards                 
                    </h2>
                </div>
                
Standardization increases the likelihood of agency success in partnering with industry to procure and deploy modern solutions, improves interoperability across management and operations functions, and avails agency decision-makers with the evidence needed to effectively leverage financial management as a means to deliver on their agencies' priorities.

    <ul class="margin-top-2">
                    <li><a href="https://ussm.gsa.gov/fibf-fm/#business_lifecycle" title="Budget Execution" target="_blank">Budget Execution</a></li>
                    <li><a href="https://ussm.gsa.gov/fibf-fm/#business_lifecycle" title="Financial Asset and Information Management">Financial Asset and Information Management</a></li>
                    <li><a href="https://ussm.gsa.gov/fibf-fm/#business_lifecycle" title="Business Lifecycle">Payable Management</a></li>
                    <li><a href="https://ussm.gsa.gov/fibf-fm/#business_lifecycle" title="Revenue Management">Revenue Management</a></li>
                    <li><a href="https://ussm.gsa.gov/fibf-fm/#business_lifecycle" title="Business Lifecycle">Receivable and Collection Management</a></li>
                    <li><a href="https://ussm.gsa.gov/fibf-fm/#business_lifecycle" title="Business Lifecycle">Delinquent Debt Management</a></li>
                    <li><a href="https://ussm.gsa.gov/fibf-fm/#business_lifecycle" title="Business Lifecycle">Cost Management</a></li>
                    <li><a href="https://ussm.gsa.gov/fibf-fm/#business_lifecycle" title="Business Lifecycle">General Ledger Management</a></li>
                    <li><a href="https://ussm.gsa.gov/fibf-fm/#business_lifecycle" title="Business Lifecycle" target="_blank">Financial Reconciliation</a></li>
                    <li><a href="https://ussm.gsa.gov/fibf-fm/#business_lifecycle" title="Business Lifecycle">Financial / Performance Reporting</a></li>
                    <li><a href="https://ussm.gsa.gov/fibf-fm/#standard_data_elements" title="Business Lifecycle">Standard Data Elements for Federal Financial Management</a></li>

</ul>
You may also be interested in:<BR>
   <ul class="margin-top-2">
 <li><a href="https://tfx.treasury.gov/fmqsmo/fmcf" title="Federal Financial Management Capability Framework">Federal Financial Management Capability Framework</a></li>
   </ul>

                
                
               


                <hr class="margin-top-auto width-full">
            </div>
            <div class="tablet:grid-col-5 display-flex flex-column">
                <div class="display-flex flex-align-center">
                    <!-- <svg class="usa-icon usa-icon--size-4 text-primary" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#verified_user"></use></svg> -->
                    <h2 class="margin-bottom-0 margin-top-0">
                    
                     <img src="/assets/images/marketplace/icon_priorities.png" alt="Goals, Priority, & Policy Alignment" height="auto" style="vertical-align:middle;">
                        Goal, Priority, & Policy Alignment
                    
                
                    </h2>
                </div>
            
                           <p class="margin-top-1 margin-bottom-1"><b>President's Management Agenda</b></p>
                <ul class="margin-top-0 margin-bottom-0" style="list-style-position: inside; padding-left: 0px; margin-left:0;">
                    <li style="margin-left: 2px;">Priority 3: <a href="https://www.performance.gov/pma/businessofgov/#overview" title="performance.gov" target="_blank">Managing the Business of Government</a>, Strategy 2 <a href="https://www.performance.gov/pma/businessofgov/strategy/2/" target="_blank" title="Strengthen Federal Financial Management">Strengthen Federal Financial Management.</a></li>
                </ul>

                
                  <p class="margin-top-1 margin-bottom-1"><b>Policy and Statute</b></p>
                <ul class="margin-top-0 margin-bottom-0" style="list-style-position: inside; padding-left: 0px; margin-left:0;">
                    <li style="margin-left: 2px;"><a href="https://www.whitehouse.gov/wp-content/uploads/2019/04/M-19-16.pdf?page=3" title="Centralized Mission Support Capabilities for the Federal Government" target="_blank"> M-19-16: Centralized Mission Support Capabilities for the Federal Government</a></li>
                    <li style="margin-left: 2px;"><a href="https://www.congress.gov/113/plaws/publ101/PLAW-113publ101.pdf" title="DATA Act of 2014" target="_blank">DATA Act of 2014</a></li>
                    <li style="margin-left: 2px;"><a href="https://www.congress.gov/bill/104th-congress/house-bill/4319" title="Federal Financial Management Improvement Act" target="_blank">Federal Financial Management Improvement Act</a></li>
                    <li style="margin-left: 2px;"><a href="https://www.govinfo.gov/app/details/STATUTE-104/STATUTE-104-Pg2838/context" title="CFO Act of 1990" target="_blank">CFO Act of 1990</a></li>
                    <li style="margin-left: 2px;"><a href="https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2016/m-16-17.pdf" title="OMB Circular A-123" target="_blank">OMB Circular A-123</a> (Appendix <a href="https://www.whitehouse.gov/wp-content/uploads/2018/06/M-18-16.pdf" target="_blank" title="Appendix A">A</a>, <a href="https://www.whitehouse.gov/wp-content/uploads/2019/08/Issuance-of-Revised-Appendix-B-to-OMB-Circular-A-123.pdf" target="_blank" title="Appendix B">B</a>, <a href="https://www.whitehouse.gov/wp-content/uploads/2021/03/M-21-19.pdf" target="_blank" title="Appendix C">C</a>, and <a href="https://www.whitehouse.gov/wp-content/uploads/2023/01/M_23-06-Appendix-D_final.pdf" target="_blank" title="Appendix D">D</a>)</li>
                    <li style="margin-left: 2px;"><a href="https://www.whitehouse.gov/wp-content/uploads/2018/06/a11.pdf" title="OMB Circular A-11" target="_blank">OMB Circular A-11</a></li>
                </ul>

    <p class="margin-top-1 margin-bottom-1"><b>Governance and Strategy</b></p>
                <ul class="margin-top-0 margin-bottom-3" style="list-style-position: inside; padding-left: 0px; margin-left:0;">
                    
                    <li style="margin-left: 2px;"><a href="https://www.cfo.gov" title="Federal CFO Council" target="_blank">Federal CFO Council</a></li>
                    <li style="margin-left: 2px;"><a href="https://www.fiscal.treasury.gov/fmsc/" title="Federal Financial Management Steering Committee" target="_blank">Federal Financial Management Steering Committee</a></li>
                    <li style="margin-left: 2px;"><a href="https://www.sac.gov/committees/finance/index.htm" title="Small Agency Finance Committee" target="_blank">Small Agency Finance Commmittee</a></li>
                      <li style="margin-left: 2px;"><a href="https://fmvision.fiscal.treasury.gov/" title="Treasury 10-Year Vision for Financial Management" target="_blank">Treasury 10-Year Vision for Financial Management</A></li>

</ul>


<p class="margin-top-1 margin-bottom-1"><b>Performance</b></p>
                <ul class="margin-top-0 margin-bottom-3" style="list-style-position: inside; padding-left: 0px; margin-left:0;">
                       <li style="margin-left: 2px;"><a href="https://www.cfo.gov/federal-financial-reporting/" title="Federal Financial Reporting" target="_blank">Federal Financial Reporting (CFO.gov)</a></li>
                    <li style="margin-left: 2px;"><a href="https://www.performance.gov/pma/businessofgov/data/" title="Performance.gov | Business of Government" target="_blank">Performance.gov | Business of Government</a></li>
                       <li style="margin-left: 2px;"><a href="https://fiscal.treasury.gov/files/fit/maturity-model-handout.pdf" title="Federal Financial Management Maturity Model" target="_blank">Federal Financial Management Maturity Model</a></li>

                              
          
</ul>

                
            
            
                <hr class="margin-top-auto width-full">
            </div>
        </div>
        <div class="grid-row">
            <div class="tablet:grid-col-11 grid-offset-1">
                {% include news/news-by-category.html category=page.news-category %}
                <hr>
            </div>
        </div>
        <div class="grid-row padding-bottom-5">
            <div class="tablet:grid-col-10 grid-offset-1">
                <h2>
                  <img src="/assets/images/marketplace/icon_references.png" alt="Other References" height="auto" style="vertical-align:middle;">
                Other References</h2>
                <ul class="margin-top-0 margin-bottom-3">
                    <li>
                        <a href="https://fmvision.fiscal.treasury.gov/files/Future-of-Financial-Management.pdf" title="Dept of Treasury’s 10-Year Vision for Financial Management" target="_blank">
                            Department of Treasury’s 10-Year Vision for Financial Management (PDF)
                        </a>
                    </li>
                    <li>
                        <a href="https://tfx.treasury.gov/fmqsmo/fmcf" title="Financial Management Capability Framework" target="_blank">
                            Financial Management Capability Framework
                        </a>
                    </li>
                    <li>
                        <a href="https://tfx.treasury.gov/fmqsmo/updates" title="FM QSMO’s Latest Updates" target="_blank">
                            FM QSMO’s Latest Updates
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>


