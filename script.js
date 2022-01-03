const toggle = document.querySelector('.toggle');
const headerContainer = document.querySelector('.header-container');

if (toggle && headerContainer) {
	document.addEventListener("click", function (e) {
		let placeClick = e.target;

		if (placeClick == toggle) {
			headerContainer.classList.toggle("open-nav");
		}
	});
}