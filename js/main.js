(function() {

	// TOP MENU
	let switchItemMenu = document.querySelector('.top-menu__switch');
	let wrapTopMenu = document.querySelector('.top-menu__in-wrap');
	let classForShowMenu = 'top-menu__in-wrap--show';
	
	// show/hide top-menu in mobile version
	switchItemMenu.addEventListener('click', function() {
		wrapTopMenu.classList.toggle(classForShowMenu);
	});

})();
