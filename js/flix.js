const tabItems = document.querySelectorAll(".tab-item");

const tabContent = document.querySelectorAll(".tab-content-item");

tabItems.forEach((item)=> {
	item.addEventListener("click", selectItem);
});

function selectItem(event) {
	removeBorder();
	this.classList.add("tab-border");

	removeShow()
	// Grab content Item from the Dom
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add the show class
	tabContentItem.classList.add("show"); 
}

function removeBorder() {
	tabItems.forEach((item)=> {
		item.classList.remove("tab-border");
	});
}

function removeShow() {
	tabContent.forEach((content)=> {
		content.classList.remove("show");
		console.log(content);
	});
}