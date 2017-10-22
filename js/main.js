(function() {

	// TOP MENU
	let switchItemMenu = document.querySelector('.top-menu__switch');
	let wrapTopMenu = document.querySelector('.top-menu__in-wrap');
	let classForShowMenu = 'top-menu__in-wrap--show';

	// show/hide top-menu in mobile version
	switchItemMenu.addEventListener('click', function() {
		wrapTopMenu.classList.toggle(classForShowMenu);
	});


	/*
	// BANNER
	let slides = document.querySelectorAll('.banner__slider-item');
	let navSlider = document.querySelector('.banner__slider-nav');
	let navButtonSlider = document.querySelectorAll('.banner__slider-arrow');

	// create dots-switch
	for (let i = 0; i < slides.length; i++) {

		// create dot
		let navItemSlider = document.createElement('li');

		// active dot
		if (i === 0) {
			navItemSlider.classList.add('active');
		}

		// add dot
		navSlider.appendChild(navItemSlider);
	}

	// change slide
	for (let i = 0; i < navButtonSlider.length; i++) {
		navButtonSlider[i].addEventListener('click', function(e) {
			e.preventDefault();
			if (navButtonSlider[i].classList.contains('banner__slider-arrow--right')) {
				slides[i].classList.remove('banner__slider-item--active');
				slides[i+1].classList.add('banner__slider-item--active');
			}
		});
	}
	*/


})();
