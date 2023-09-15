---
layout: base
permalink: /marketplace1/
title: Mission Support MarketPlace Catalog
description: Welcome to the Mission Support shared services catalog.  Agencies can use this catalog to learn about the most commonly needed services and technologies needed to deliver on their Mission Support responsibilities.  The catalog will provide contact information and direct agencies to partner agencies that are working to make these services available to the Federal community.
---

<div id="main-content" class="usa-layout-docs">
    <section class="usa-graphic-list margin-bottom-4">
        <div class="usa-hero clearfix heading">
            <div class="grid-container">
                <div class="usa-width-whole hero-content text-center">
                    <h1 class="color-white">{{page.title}}</h1>
                    <p class="color-white">{{page.description}}</p>
                </div>
            </div>
        </div>
    </section>

    <section class="usa-graphic-list margin-bottom-4">
    <div class="grid-container">
        <div class="usa-graphic-list__row grid-row grid-gap">
                {% include resources-filters.html %}
                {% include resources-data.html %}
        </div>
        </div>
    </section>
</div>
