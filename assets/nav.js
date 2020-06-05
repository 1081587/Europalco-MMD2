const burgerBtn = document.getElementsByClassName("burger")[0];
const nav = document.getElementsByClassName("nav-mobile-final")[0];

burgerBtn.addEventListener('click', function(){
	nav.classList.toggle("mobile-toggle");
});