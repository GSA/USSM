
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
            ElementsList: 'fm-data-elements',
            UseCasesList: 'fm-use-cases',
            url: '../business-standards-api/fm',
            hasSubsection: false
        },
        {
            accordian: 'erm-lifecycle',
            table: 'erm-capabilities',
            UseCasesList: 'erm-use-cases',
            url: '../business-standards-api/erm',
            hasSubsection: false
        },
        {
            accordian: 'grants-lifecycle',
            table: 'grants-capabilities',
            UseCasesList: 'grants-use-cases',
            ElementsList: 'grants-data-elements',
            url: '../business-standards-api/grants',
            hasSubsection: false
        },       
        {
            accordian: 'travel-lifecycle',
            table: 'travel-capabilities',
            UseCasesList: 'travel-use-cases',
            ElementsList: 'travel-data-elements',
            url: '../business-standards-api/travel',
            hasSubsection: false
        },
        {
            accordian: 'acq-lifecycle',
            table: 'acq-capabilities',
            url: '../business-standards-api/acq',
            hasSubsection: false,
            UseCasesList: 'acq-use-cases'
        },
        {
            accordian: 'rpm-lifecycle',
            table: 'rpm-capabilities',
            url: '../business-standards-api/rpm',
            hasSubsection: false
        }
    ];
function imageChecker(url){
    var img= '';
    if (url.includes(".doc")){
        img= '<img src="../img/file-word.svg" class="margin-right-05" width="16" valign="middle" alt="word">';
    }
    else if ((url.includes(".xls"))){
        img= '<img src="../assets/images/icon.xls.png" class="margin-right-05" width="16" valign="middle" alt="Excel">';
    }
    else if ((url.includes(".pdf"))){
        img= '<img src="../assets/images/icon.pdf.png" class="margin-right-05" width="16" valign="middle" alt="PDF">';
    }
    return img
}
    jQuery.each(pages, function (index, page) {

        let table = jQuery("#" + page.table);
        let accordian = jQuery('#' + page.accordian);
        let UseCasesList = jQuery('#' + page.UseCasesList);
        let ElementsList = jQuery('#' + page.ElementsList);
        //let PerformanceMetricsList = jQuery('#' + page.PerformanceMetricsList);

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
                        else if (outerKey === "Business Use Cases" && UseCasesList.length > 0){
                            jQuery.each(outerValue, function (key1, value1) {
                                let image = imageChecker(value1);
                                let li = '<li><a href="'+value1+'">' + image + key1 + '</a></li>';
                                jQuery("#" + page.UseCasesList ).append(li);
                            });
                        }
                        else if (outerKey === "Standard Data Elements" && ElementsList.length > 0){
                            jQuery.each(outerValue, function (key1, value1) {
                                let image = imageChecker(value1);
                                let li = '<li><a href="'+value1+'">' + image + key1 + '</a></li>';
                                jQuery("#" + page.ElementsList ).append(li);
                            });
                        }
                        else if (outerKey==="Performance Metrics" && PerformanceMetricsList.length > 0){
                            jQuery.each(outerValue, function (key1, value1) {
                                let image = imageChecker(value1);
                                let li = '<li><a href="'+value1+'">' + image + key1 + '</a></li>';
                                jQuery("#" + page.PerformanceMetricsList ).append(li);
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
