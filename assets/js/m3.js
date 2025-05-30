
/*
M3 Filter List

A filter list contains a list of items that can be filtered by a alist of filters.
It should provide css selectors in a 'data-items' and 'data-filters' attribute to identify the items and filters.
The filters should provide their filter value in a 'data-filter' attribute,
and the items should provider their labels in a 'data-label' attribute.
*/
document.querySelectorAll('.filterlist').forEach(function(filterlist) {
	let items = filterlist.querySelectorAll(filterlist.dataset.items)
	let filters = filterlist.querySelectorAll(filterlist.dataset.filters)
	filters.forEach(function(filter){
		filter.addEventListener('click', function(){
			if (this.getAttribute('aria-selected')=="true") {
				this.setAttribute('aria-selected', false);
				items.forEach(function(item){
					item.classList.remove("hidden");
					setTimeout(function(){
						item.setAttribute('aria-hidden', false);
					}, 0)
					
				});
					
			} else {
				filters.forEach(function(f){
					f.setAttribute('aria-selected', false);
				});
				this.setAttribute('aria-selected', true);
				items.forEach(function(item){
					if (item.dataset.label.includes(filter.dataset.filter)) {
						item.classList.remove("hidden");
						setTimeout(function(){
							item.setAttribute('aria-hidden', false);
						}, 0)
					} else {
						item.setAttribute('aria-hidden', true);
						setTimeout(function(){
							item.classList.add("hidden");
						}, 500)
					}
				});
			}
		});
	});
});


document.addEventListener("DOMContentLoaded", function () {
    let mainVideo = document.getElementById("main-video");
    let videoTitle = document.getElementById("videoTitle");
    let videoThumbnails = document.querySelectorAll(".video-thumbnail");

    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function (event) {
            event.preventDefault();
            let newSrc = this.getAttribute("data-video-src");
            try {
                let url = new URL(newSrc, window.location.origin);
                if (!url.searchParams.has("autoplay")) {
                    url.searchParams.append("autoplay", "1");
                }
                mainVideo.setAttribute("src", url.toString());
            } catch (e) {
                console.error("Invalid video URL:", newSrc);
            }
            let figcaption = this.parentElement.querySelector("figcaption");
            if (figcaption && videoTitle) {
                videoTitle.innerHTML = figcaption.innerHTML;
            }
        });
    });
});