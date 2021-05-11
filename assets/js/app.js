
// Add your custom javascript here
console.log("Hi from Federalist");

jQuery(document).ready(function () {

    let pages = [
        {
            accordian: 'hr-benefits-lifecycle',
            table: 'hr-benefits-capabilities',
            url: '../business-standards-api/hr',
            hasSubsection: true
        },
        {
            accordian: 'fm-lifecycle',
            table: 'fm-capabilities',
            url: '../business-standards-api/fm',
            hasSubsection: false
        },
        {
            accordian: 'erm-lifecycle',
            table: 'erm-capabilities',
            url: '../business-standards-api/erm',
            hasSubsection: false
        },
        {
            accordian: 'grants-lifecycle',
            table: 'grants-capabilities',
            url: '../business-standards-api/grants',
            hasSubsection: false
        },
        {
            accordian: 'procurment-lifecycle',
            table: 'procurement-capabilities',
            url: '../business-standards-api/procurement',
            hasSubsection: false
        },
        {
            accordian: 'travel-lifecycle',
            table: 'travel-capabilities',
            url: '../business-standards-api/travel',
            hasSubsection: false
        },
        {
            accordian: 'acq-lifecycle',
            table: 'acq-capabilities',
            url: '../business-standards-api/acq',
            hasSubsection: false
        },
        {
            accordian: 'rpm-lifecycle',
            table: 'rpm-capabilities',
            url: '../business-standards-api/rpm',
            hasSubsection: false
        }
    ];

    jQuery.each(pages, function (index, page) {

        let table = jQuery("#" + page.table);
        let accordian = jQuery('#' + page.accordian);

        if (table.length > 0 || accordian.length > 0) {
            jQuery.get(page.url, function (result) {
                    var jObject = JSON.parse(result);
                    if (page.hasSubsection) {
                        jObject = jObject[0];
                    }
                    jQuery.each(jObject, function (outerKey, outerValue) {
                        if (outerKey === "Business Capabilities" && table.length > 0) {
                            jQuery.each(outerValue, function (key1, value1) {
                                var tr = '<tr>';
                                jQuery.each(value1, function (key2, value2) {
                                    tr += '<td class="capability_class">' + value2 + '</td>'
                                });
                                tr += '</tr>';
                                jQuery("#" + page.table + " > tbody").append(tr);
                            });
                            table.DataTable({
                                responsive: true,
                                dom: 'Bfrtip',
                                buttons: [
                                    'copyHtml5',
                                    'excelHtml5',
                                    'csvHtml5',
                                    'pdfHtml5',
                                    'print',
                                    'pageLength'
                                ]
                            });
                        }
                        else if (outerKey === "Business Lifecycle" && accordian.length > 0) {
                            //Table binding
                            jQuery.each(outerValue, function (key1, value1) {
                                jQuery.each(value1, function (key2, value2) {
                                    let innerTable = jQuery("#" + key2 + " > tbody");
                                    if (innerTable && typeof(value2) != 'string') {
                                        jQuery.each(value2, function (key3, value3) {
                                            var tr = '<tr>';
                                            var id = value3.ID ? value3.ID : value3.Identifier;
                                            tr += '<td class="capability_class" valign="top">' + id + '</td>'
                                            tr += '<td class="capability_class" valign="top">' + value3.Activity + '</td>'
                                            tr += '<td class="capability_class" valign="top">' + value3.Description + '</td>'
                                            tr += '</tr>';
                                            innerTable.append(tr);
                                        });
                                    }
                                });
                            });
                        }
                    });
                }
            );
        }
    });
});


// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
