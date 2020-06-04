const slide1 = document.getElementsByClassName("section-wrap")[0];
const slide2 = document.getElementsByClassName("section-wrap")[1];
const slide3 = document.getElementsByClassName("section-wrap")[2];
const slide4 = document.getElementsByClassName("section-wrap")[3];

const backBtn1 = document.getElementsByClassName("back")[0];
const backBtn2 = document.getElementsByClassName("back")[1];



const studio = document.getElementById("studio-link");
const tech = document.getElementById("tech-link");

var width = window.innerWidth;





studio.addEventListener("click", function(){
	slide1.classList.toggle("mobile-toggle");
	slide2.classList.toggle("mobile-toggle");
})

tech.addEventListener("click", function(){
	slide1.classList.toggle("mobile-toggle");
	slide3.classList.toggle("mobile-toggle");
})

backBtn1.addEventListener("click", function(){
	slide1.classList.toggle("mobile-toggle");
	slide2.classList.toggle("mobile-toggle");
})

backBtn2.addEventListener("click", function(){
	slide1.classList.toggle("mobile-toggle");
	slide3.classList.toggle("mobile-toggle");
})
