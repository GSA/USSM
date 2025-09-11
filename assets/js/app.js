// Add your custom javascript here

jQuery(document).ready(function () {
  /**
   * @type string
   * @description to store the url prefix based on the environment url.cloudfront federalist url come with additional pathname. Using / as a prefix will removed these extra pathname and the url will be wrong
   */
  let prefixUrl = "";

  /**
   * @type string
   * @description used to capture the environment hostname
   */
  const hostname = window.location.hostname;
  if (hostname.includes("federalist")) {
    prefixUrl = ".."; // because this url is used in the pathname:/marketplace/grm/ going to path back will send us to /
  }

  let pages = [
    {
      accordian: "cyb-cvd-lifecycle",
      table: "cyb-cvd-capabilities",
      url: prefixUrl.concat("/business-standards-api/cyb/cvd"),
      hasSubsection: false,
    },
    {
      table: "cyb-soc-capabilities",
      url: prefixUrl.concat("/business-standards-api/cyb/soc"),
      hasSubsection: false,
    },
    {
      accordian: "cyb-soc-lifecycle",
      url: prefixUrl.concat("/business-standards-api/cyb/"),
      hasSubsection: true,
    },
    {
      accordian: "hr-benefits-lifecycle",
      table: "hr-benefits-capabilities",
      ElementsList: "hr-benefit-data-elements",
      url: prefixUrl.concat("/business-standards-api/hr"),
      hasSubsection: true,
    },
    {
      accordian: "hr-td-lifecycle",
      table: "hr-td-capabilities",
      ElementsList: "hr-td-data-elements",
      PerformanceMetricsList: "hr-talent-development-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/hr/td/"),
      hasSubsection: true,
    },
    {
      accordian: "hr-acquisition-lifecycle",
      table: "hr-acquisition-capabilities",
      ElementsList: "hr-acquisition-data-elements",
      PerformanceMetricsList: "hr-acquisition-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/hr/acquisition/"),
      hasSubsection: true,
    },
    {
      accordian: "hr-retirement-lifecycle",
      table: "hr-retirement-capabilities",
      ElementsList: "hr-retirement-data-elements",
      PerformanceMetricsList: "hr-retirement-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/hr/retirement/"),
      hasSubsection: true,
    },
    {
      accordian: "hr-epm-lifecycle",
      table: "hr-epm-capabilities",
      ElementsList: "hr-epm-data-elements",
      PerformanceMetricsList: "hr-epm-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/hr/epm/"),
      hasSubsection: true,
    },
    {
      accordian: "hr-hcs-lifecycle",
      table: "hr-hcs-capabilities",
      ElementsList: "hr-hcs-data-elements",
      PerformanceMetricsList: "hr-hcs-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/hr/hcs/"),
      hasSubsection: true,
    },
    {
      accordian: "hr-employee-lifecycle",
      table: "hr-employee-capabilities",
      ElementsList: "hr-employee-accountability-data-elements",
      PerformanceMetricsList: "hr-employee-accountability-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/hr/employee/"),
      hasSubsection: true,
    },
    {
      accordian: "hr-hca-lifecycle",
      table: "hr-hca-capabilities",
      ElementsList: "hr-hca-data-elements",
      PerformanceMetricsList: "hr-hca-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/hr/hca/"),
      hasSubsection: true,
    },
    {
      accordian: "hr-hce-lifecycle",
      table: "hr-hce-capabilities",
      ElementsList: "hr-hce-data-elements",
      PerformanceMetricsList: "hr-hce-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/hr/hce/"),
      hasSubsection: true,
    },
    {
      accordian: "hr-labor-lifecycle",
      table: "hr-labor-capabilities",
      ElementsList: "hr-labor-relations-data-elements",
      PerformanceMetricsList: "hr-labor-relations-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/hr/labor/"),
      hasSubsection: true,
    },
    {
      accordian: "hr-par-lifecycle",
      table: "hr-par-capabilities",
      ElementsList: "hr-par-processing-data-elements",
      PerformanceMetricsList: "hr-par-processing-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/hr/par/"),
      hasSubsection: true,
    },
    {
      accordian: "fm-lifecycle",
      table: "fm-capabilities",
      ElementsList: "fm-data-elements",
      PerformanceMetricsList: "fm-performance-metrics",
      UseCasesList: "fm-use-cases",
      url: prefixUrl.concat("/business-standards-api/fm"),
      hasSubsection: false,
    },
    {
      accordian: "eeo-lifecycle",
      table: "eeo-capabilities",
      UseCasesList: "eeo-use-cases",
      PerformanceMetricsList: "eeo-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/eeo"),
      hasSubsection: false,
    },
    {
      accordian: "erm-lifecycle",
      table: "erm-capabilities",
      UseCasesList: "erm-use-cases",
      ElementsList: "erm-data-elements",
      PerformanceMetricsList: "erm-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/erm"),
      hasSubsection: false,
    },
    {
      accordian: "grants-lifecycle",
      table: "grants-capabilities",
      UseCasesList: "grants-use-cases",
      ElementsList: "grants-data-elements",
      url: prefixUrl.concat("/business-standards-api/grants"),
      hasSubsection: false,
    },
    {
      accordian: "travel-lifecycle",
      table: "travel-capabilities",
      UseCasesList: "travel-use-cases",
      ElementsList: "travel-data-elements",
      PerformanceMetricsList: "travel-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/travel"),
      hasSubsection: false,
    },
    {
      accordian: "acq-lifecycle",
      table: "acq-capabilities",
      url: prefixUrl.concat("/business-standards-api/acq"),
      hasSubsection: false,
      UseCasesList: "acq-use-cases",
    },
    {
      accordian: "rpm-lifecycle",
      table: "rpm-capabilities",
      UseCasesList: "rpm-use-cases",
      ElementsList: "rpm-data-elements",
      PerformanceMetricsList: "rpm-performance-metrics",
      url: prefixUrl.concat("/business-standards-api/rpm"),
      hasSubsection: false,
    },
    {
      accordian: "its-lifecycle",
      url: prefixUrl.concat("/business-standards-api/its"),
      hasSubsection: false,
    },
    {
      accordian: "eeo-lifecycle",
      table: "eeo-capabilities",
      url: prefixUrl.concat("/business-standards-api/eeo"),
      hasSubsection: false,
    },
    {
      accordian: "mom-lifecycle",
      table: "mom-capabilities",
      url: prefixUrl.concat("/business-standards-api/mom"),
      hasSubsection: false,
    },
  ];
  function imageChecker(url) {
    var img = "";
    if (url.includes(".doc")) {
      img =
        '<img src="../img/file-word.svg" class="margin-right-05" width="16" valign="middle" alt="word">';
    } else if (url.includes(".xls")) {
      img =
        '<img src="../assets/images/icon.xls.png" class="margin-right-05" width="16" valign="middle" alt="Excel">';
    } else if (url.includes(".pdf")) {
      img =
        '<img src="../assets/images/icon.pdf.png" class="margin-right-05" width="16" valign="middle" alt="PDF">';
    }
    return img;
  }
  //Looping through the page array defined above with objects
  jQuery.each(pages, function (index, page) {
    let table = jQuery("#" + page.table);
    let accordian = jQuery("#" + page.accordian);
    let UseCasesList = jQuery("#" + page.UseCasesList);
    let ElementsList = jQuery("#" + page.ElementsList);
    let PerformanceMetricsList = jQuery("#" + page.PerformanceMetricsList);
    //Getting the json data from each url
    jQuery.get(page.url, function (result) {
      var jObject = JSON.parse(result);
      if (page.hasSubsection) {
        jObject = jObject[0];
      }
      jQuery.each(jObject, function (outerKey, outerValue) {
        if (outerKey === "Business Capabilities" && table.length > 0) {
          jQuery.each(outerValue, function (key1, value1) {
            var tr = "<tr>";
            jQuery.each(value1, function (key2, value2) {
              tr += '<td class="capability_class">' + value2 + "</td>";
            });
            tr += "</tr>";
            jQuery("#" + page.table + " > tbody").append(tr);
          });
          table.DataTable({
            responsive: true,
            dom: "Bfrtip",
            buttons: [
              "copyHtml5",
              "excelHtml5",
              "csvHtml5",
              "pdfHtml5",
              "print",
              "pageLength",
            ],
            bDestroy: true,
          });
        } else if (outerKey === "Business Lifecycle" && accordian.length > 0) {
          //Table binding
          jQuery.each(outerValue, function (key1, value1) {
            jQuery.each(value1, function (key2, value2) {
              let innerTable = jQuery("#" + key2 + " > tbody");
              if (innerTable && typeof value2 != "string") {
                jQuery.each(value2, function (key3, value3) {
                  var tr = "<tr>";
                  var id = value3.ID ? value3.ID : value3.Identifier;
                  tr +=
                    '<td class="capability_class" valign="top">' + id + "</td>";
                  tr +=
                    '<td class="capability_class" valign="top">' +
                    value3.Activity +
                    "</td>";
                  tr +=
                    '<td class="capability_class" valign="top">' +
                    value3.Description +
                    "</td>";
                  tr += "</tr>";
                  innerTable.append(tr);
                });
              }
            });
          });
        } else if (
          outerKey === "Business Use Cases" &&
          UseCasesList.length > 0
        ) {
          jQuery.each(outerValue, function (key1, value1) {
            // front urls have issues having many usrl paths, we are adding .. if it is a cloud ulr and using / if value1 has a full url
            prefixUrl = value1.includes("https") ? "" : prefixUrl;
            let image = imageChecker(value1);
            let li =
              '<li><a href="' +
              prefixUrl +
              value1 +
              '">' +
              image +
              key1 +
              "</a></li>";
            jQuery("#" + page.UseCasesList).append(li);
          });
        } else if (
          outerKey === "Standard Data Elements" &&
          ElementsList.length > 0
        ) {
          jQuery.each(outerValue, function (key1, value1) {
            // front urls have issues having many usrl paths, we are adding .. if it is a cloud ulr and using / if value1 has a full url
            if (key1 !== "jsonData") {
              prefixUrl = value1.includes("https") ? "" : prefixUrl;
              let image = imageChecker(value1);
              let li =
                '<li><a href="' +
                prefixUrl +
                value1 +
                '">' +
                image +
                key1 +
                "</a></li>";
              jQuery("#" + page.ElementsList).append(li);
            } else {
              // For key equal to jsonData
              prefixUrl = value1.url.includes("https") ? "" : prefixUrl;
              let li =
                '<li><a href="' +
                prefixUrl +
                value1.url +
                '">' +
                value1.name +
                "</a></li>";
              jQuery("#" + page.ElementsList).append(li);
            }
          });
        } else if (
          outerKey === "Service Measures" &&
          PerformanceMetricsList.length > 0
        ) {
          jQuery.each(outerValue, function (key1, value1) {
            // front urls have issues having many usrl paths, we are adding .. if it is a cloud ulr and using / if value1 has a full ur
            if (key1 !== "jsonData") {
              prefixUrl = value1.includes("https") ? "" : prefixUrl;
              let image = imageChecker(value1);
              let li =
                '<li><a href="' +
                prefixUrl +
                value1 +
                '">' +
                image +
                key1 +
                "</a></li>";
              jQuery("#" + page.PerformanceMetricsList).append(li);
            } else {
              // For key equal to jsonData
              prefixUrl = value1.url.includes("https") ? "" : prefixUrl;
              let li =
                '<li><a href="' +
                prefixUrl +
                value1.url +
                '">' +
                value1.name +
                "</a></li>";
              jQuery("#" + page.PerformanceMetricsList).append(li);
            }
          });
        }
      });
    });
  });
  setTimeout(function () {
    /*jQuery("#cyb-cvd-capabilities > tbody >tr:eq(1)").remove();
        jQuery('#cyb-cvd-capabilities > tbody >tr:first').remove();*/
  }, 1000);
});
$("#cyb-cvd-capabilities").on("order.dt", function () {
  jQuery("#cyb-cvd-capabilities > tbody >tr:eq(1)").remove();
  jQuery("#cyb-cvd-capabilities > tbody >tr:first").remove();
});

$(".marketplace-validation").on("click", function () {
  $(".usa-accordion__button[aria-controls='a-2']").attr(
    "aria-expanded",
    "true"
  );
  $("#a-2").removeAttr("hidden");
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
if (img1) {
  img1.click = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}

// When the user clicks on the Share button, show the FB, Twitter, Tumblr etc link
$("#btnShare").click(function () {
  $("#shareLinkUl").css("display", "flex");
  $(this).hide();
});

// When user clicks an icon on performance management page, show content
$(".pm-page .icon-content").hide();
$(".pm-page #strengths").show();
$(".pm-page .icon-button").on("click", function () {
  $(".icon-content").hide();
  $(".pm-tooltip").hide();
  $(".icon-button").removeClass("pm-active");
  $($(this).attr("href")).show();
  $(this).addClass("pm-active");
});

$(".pm-page .flip-container").on("click", function () {
  $(this).toggleClass("active-card");
});

function checkWidth() {
  const parentElement = document.getElementById("fibf-wheel-and-text");
  if (parentElement) {
    const firstChild = parentElement.children[0];
    const secondChild = parentElement.children[1];

    if (window.innerWidth >= 1225 && window.innerWidth <= 1400) {
      firstChild.classList.remove("desktop:grid-col-5");
      secondChild.classList.remove("desktop:grid-col-7");
      firstChild.classList.add("desktop:grid-col-6");
      secondChild.classList.add("desktop:grid-col-6");
    } else {
      firstChild.classList.remove("desktop:grid-col-6");
      firstChild.classList.add("desktop:grid-col-5");
      secondChild.classList.remove("desktop:grid-col-6");
      secondChild.classList.add("desktop:grid-col-7");
    }
  }
}

checkWidth();

window.addEventListener("resize", checkWidth);
