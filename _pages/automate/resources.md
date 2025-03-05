---
layout: base
permalink: /automate/
title: Developer Hub
description: "Build a more automated process to the management and operations of the Federal government."
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
