---
layout: base
permalink: /marketplace/
title: Services and Technologies Catalog
description: Empower your agency to thrive in today's dynamic landscape.  Welcome to the governmentwide catalog where agencies can learn about technologies and solutions to accelerate operations, deliver on top management priorities, and drive mission success on behalf of the American public.  The catalog directs agencies to servicing organizations making these capabilities available to the Federal community.
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
