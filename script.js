/*------------------------BurgerMenu---------------------------*/

const iconMenu = document.querySelector('.toggle');
const menu = document.querySelector('.header-container');


iconMenu.addEventListener("click", function (event) {
	let placeclick = event.target;
	if (placeclick == iconMenu) {
		menu.classList.toggle("open-nav");
		document.documentElement.classList.toggle("lock");
	}
});

document.addEventListener("click", function (e) {
	if (e.target.classList.contains("nav-link")) {
		menu.classList.remove("open-nav");
		document.documentElement.classList.remove("lock");

	}

})