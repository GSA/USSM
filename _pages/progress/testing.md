---
layout: base
permalink: /progress/testing/
title: Shared Services - 2024 Progress Update
description: "A marketplace of commercial and Federal solutions, backed by agency business and data standards informed by industry, will drastically improve the ability of government to deliver mission outcomes, provide improved services, and effectively steward taxpayer dollars on behalf of the American people."
news-category: FIBF-PROGRAM
---

{% include banner.html title-override="2024 Progress Update" width="grid-col-11" offset="grid-offset-1" %}


<script>
    window.addEventListener('load', function() {
        let output = '';
        fetch('/news-api/') 
            .then(response => response.json())
            .then(data => {
                let year = new Date().getFullYear();
                let pastmonth = (new Date().getMonth()).toString().padStart(2, '0');
                let currentmonth = (new Date().getMonth() + 1).toString().padStart(2, '0');

                // Build dates array from last 3 weeks
                let datesArray = [];
                for (let i = 0; i < 21; i++) {
                    let date = new Date(new Date().setDate(new Date().getDate() - i)).toISOString().split('T')[0];
                    datesArray.push(date);
                }

                // let filteredData = data.filter(function(item) {
                //     return item.Date.includes(year + '-' + currentmonth); 
                // });

                // Filter data by dates array
                let filteredData = data.filter(function(item) {
                    return datesArray.includes(item.Date.split('T')[0]);
                });

                if (filteredData.length === 0) {
                    output = 'No new notifications';
                } else {
                    document.getElementById('notification-button').classList.remove('text-base-dark');
                    document.getElementById('notification-button').classList.add('text-secondary-dark');
                    output += '<h1 class="font-body-lg">Latest Notifications</h1>';
                    for (const item of filteredData) {
                        output += '<p><a href="' + item.Hyperlink + '" title="' + item.Title +  '" class="display-block font-body-xs">' + item.Title + '</a>';
                        output += '<time datetime="' + new Date(item.Date).toISOString().split('T')[0] + '" class="notification-date display-block font-body-xs"><i>' + new Date(item.Date).toLocaleDateString('en-US', {timeZone: 'UTC'}) + '</i></time></p>';
                    }
                }
                output += '<p><a href="/#news" class="display-inline-block font-body-xs usa-button" data-close-modal>View all notifications</a></p>';
                document.getElementById('news-content').innerHTML = output;
            
            })
            .catch(error => {
                console.error('Error:', error);
            }); 
    });
</script>


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
            <div class="tablet:grid-col-6 tablet:grid-offset-1 padding-top-4 tablet:padding-right-3 display-flex flex-column" style="display: inline !important;">
            Marketplace - nothing here move along

             <!--- insert the sources -->

             <A HREF="/public-comment-open-for-fy25-annual-update-to-mission-support-data-and-business-standards/" STYLE="display: inline;">Baseline Technology</A>
In November 2024, information technology and cybersecurity baseline capabilities for shared and centralized services were published by GSA through a process that included agency partners and industry (through public comment). The capability set is first being <A HREF="">used by the department</A> by the Department of Treasury and GSA to identify commercial cloud and Software as a Service financial management technologies used to manage plan, manage, and report on agency spending. This capability-standard will be promoted for use across all management functions in the portfolio.
<BR>

             <P></P>
                <hr class="margin-top-auto width-full">
            </div>

            
     <div class="tablet:grid-col-5 padding-top-4 display-flex flex-column" style="display: flex; flex-direction: row; flex-wrap: wrap;">
           
     <!-- Data and Business Standards -->
            
                
                           Agency Data & Business Standards2<BR>
            
<A HREF="/public-comment-open-for-fy25-annual-update-to-mission-support-data-and-business-standards/" STYLE="display: inline;">Baseline Technology</A>
In November 2024, information technology and cybersecurity baseline capabilities for shared and centralized services were published by GSA through a process that included agency partners and industry (through public comment). The capability set is first being <A HREF="">used</A> by the Department of Treasury and GSA to identify commercial cloud and Software as a Service financial management technologies used to manage plan, manage, and report on agency spending. This capability-standard will be promoted for use across all management functions in the portfolio.
<BR>

                <hr class="margin-top-auto width-full">
                <BR><BR><BR>
            </div>
        </div>
     
        <div class="grid-row">
            <div class="tablet:grid-col-6 tablet:grid-offset-1 tablet:padding-right-3 display-flex flex-column">
          
                
                     <div class="display-flex flex-align-center">
                    <!-- <svg class="usa-icon usa-icon--size-4 text-primary" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use></svg> -->
                    <h2 class="margin-bottom-0 margin-top-0">

  <img src="/assets/images/marketplace/icon_standards.png" alt="Data and Business Standards" height="auto" style="vertical-align:middle;">
                        Performance         
                    </h2>
                </div>

Performance management is a crucial function of any government program, whether big or small, public-facing or internal. Aligning performance management of the services and technologies agencies buy and use to the same ways that the agencies themselves are measured is a core tenet of an effective framework.

<BR>

     <FONT STYLE="font-size:16px; text-align: center;"><B>Performance Management Framework</B></FONT>
<img src="/assets/images/performance-management/performance-framework-puzzle.png" align="right" height=275 width=400 style="display: block; margin: 0 auto;">



  <FONT STYLE="font-size:16px; text-align: center;"><B>Performance Alignment: From Services to Mission Delivery</B></FONT>
 <button class="modal-video usa-button border-0 padding-0" aria-controls="performance-management-modal" data-open-modal>
                    <img loading="lazy" class="width-full" src="/assets/images/performance-management/performance-diagram.webp" alt="Goal and Priority Alignment of Service Performance to Agency Performance" />
                </button>
                <FONT STYLE="font-size:12px; text-align: center;"><a title="Watch Performance Management animation" href="#performance-management-modal"  aria-controls="performance-management-modal" data-open-modal>(Animation: From Management Performance to Mission Delivery)</A></FONT>

 <div id="performancevideo" class="tablet:grid-col-6">
                <div class="usa-modal" style="max-width: 850px;" id="performance-management-modal" aria-labelledby="modal-description" aria-describedby="performance-management-modal-description">
                    <div class="usa-modal__content">
                        <div class="usa-modal__main" style="width: 100%;">
                            <div id="performance-management-modal-description" class="padding-5">
                                <p class="text-center font-sans-sm text-ink">Press <img src="/assets/images/fullscreen.webp" /> to view in full screen</p>
                                <div class="video-responsive">
                                    <iframe id="vimeo" class="width-full" src="https://player.vimeo.com/video/933011956?h=bb24586e69&amp;autoplay=1&amp;muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allowfullscreen allow="autoplay" frameborder="0" allow="autoplay; picture-in-picture; clipboard-write" title="Evidence-based Performance Management"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
                                </div>
                            </div>
                        </div>
                        <button id="close-performance-management-modal" onclick="stopVimeo()" type="button" class="padding-top-2 usa-button usa-modal__close" aria-label="Close this window" data-close-modal>
                            <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
                            <use xlink:href="/assets/img/sprite.svg#close"></use>
                            </svg>
                        </button>
                        <script>
                            window.addEventListener('load', function() {
                                if (window.location.href.includes('#performancevideo')) {
                                    var iframe = document.querySelector('iframe');
                                    var player = new Vimeo.Player(iframe);
                                    var modalVideoButton = document.querySelector('.modal-video');
                                    modalVideoButton.click();
                                    player.play();
                                }
                            });
                            function stopVimeo() {
                                var iframe = document.querySelector('iframe');
                                var player = new Vimeo.Player(iframe);
                                player.pause();
                            }
                        </script>
                    </div>
                </div>
                
            </div>









<BR>
<A HREF="/performance-management/">Performance Framework</A>   
GSA engaged agency practitioners, providers, and Quality Service Management Offices to obtain agreement on a standard framework considerate performance dimensions that include Finance/Cost, Customer Satisfaction, Data and Business Standardization, Operations, Information Technology, and Organizational Maturity.<BR><BR>

                <hr class="margin-top-auto width-full">
            </div>
            <div class="tablet:grid-col-5 display-flex flex-column">
                <div class="display-flex flex-align-center">
                   
                </div>
    <BR>
<A HREF="https://community.connect.gov/x/pgTklw">2024 Marketplace Performance (Max Login Required)</A>Marketplace and QSMO performance data aligned to the Marketplace Performance Management Framework.  Data for this dashboard was obtained through two channels 1) collected via the FY24 Annual OSSPI Customer Satisfaction Survey and 2) provided directly from each QSMO.
<BR><BR>
<A HREF="https://d2d.gsa.gov/report/shared-services-satisfaction-survey">2024 Customer Satisfaction (.Gov email Required)</A> This survey pulses agency management, operations, and administration offices on their satisfaction levels with operations, customer service, technology, and the cost of the services they use.
<BR><BR>
<B>2024 National Finance Center Performance Baseline</B>In response to on-going interest in improving the payroll ecosystem and in alignment with the <A HREF="https://napawash.org/press-releases/the-national-academy-of-public-administration-releases-assessment-of-national-finance-center-operations">2023 National Academy of Public Administration Report</A> of the National Finance Center (NFC), GSA partnered with OPM and USDA to baseline NFC performance across dimensions of Finance, Customer, Operations, Technology, Organization, and HR / Payroll for use in <A HREF="https://sam.gov/opp/df7fc65622c54ea08a2c239f3a99e6a3/view">NFC modernization planning</A>.  NFC services payroll for over 600,000 federal employees.
<BR><BR>
            
                <hr class="margin-top-auto width-full">
            </div>
        </div>

       <div class="grid-row">
            <div class="tablet:grid-col-6 tablet:grid-offset-1 tablet:padding-right-3 display-flex flex-column">
          
                
                     <div class="display-flex flex-align-center">
                    <!-- <svg class="usa-icon usa-icon--size-4 text-primary" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use></svg> -->
                    <h2 class="margin-bottom-0 margin-top-0">

  <img src="/assets/images/marketplace/icon_standards.png" alt="Data and Business Standards" height="auto" style="vertical-align:middle;">
                        Cost and Spending         
                    </h2>
                </div>

Reduction of operating and overhead costs and delivering improved value for taxpayer dollar spent are key tenents of realizing the promise of a successful shared services delivery model.


                <hr class="margin-top-auto width-full">
            </div>
            <div class="tablet:grid-col-5 display-flex flex-column">
                <div class="display-flex flex-align-center">
                   
                </div>
    
<A HREF="/assets/pdf/OptimizingCostRecoveryForAgenciesAndProviders.pdf">Cost Recovery Optimization for Agencies and Providers</A>
In 2024, GSA partnered with Agencies, Providers, and industry (through public comment) to establish community-wide agreement on a baseline set best practices for provider and agency cost recovery action planning. In particular, recommendations included aligning to agency budget lifecycle and supporting the funding of both current operations and the planning needed for future modernizations.
            
                <hr class="margin-top-auto width-full">
            </div>
        </div>



    <div class="grid-row">
            <div class="tablet:grid-col-11 grid-offset-1">
                <h2 class="margin-bottom-0 margin-top-0">

                    </h2>

                    
                <hr>
            </div>
        </div>




 
        <div class="grid-row padding-bottom-5">
            <div class="tablet:grid-col-10 grid-offset-1">
                <h2>
                  <img src="/assets/images/marketplace/icon_references.png" alt="Other References" height="auto" style="vertical-align:middle;">
                Agency Modernization Planning</h2>
              
            </div>
        </div>
    </div>
</section>


