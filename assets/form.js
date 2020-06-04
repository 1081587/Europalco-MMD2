const slide1 = document.getElementsByClassName("section-wrap")[0];
const slide2 = document.getElementsByClassName("section-wrap")[1];
const slide3 = document.getElementsByClassName("section-wrap")[2];
const slide4 = document.getElementsByClassName("section-wrap")[3];
const slide5 = document.getElementsByClassName("section-wrap")[4];

const backBtn1 = document.getElementsByClassName("back")[0];
const backBtn2 = document.getElementsByClassName("back")[1];



const studio = document.getElementById("studio-link");
const tech = document.getElementById("tech-link");

var width = window.innerWidth;



const next = document.getElementById("next");
const skip1 = document.getElementById("skip1");

let windowCount = 0;
let nextSlide = 0;

function counter(){
	if(windowCount == 1){
		nextSlide = slide4;
	}
	else if(windowCount == 2){
		nextSlide = slide5;
	}
	else if(windowCount == 3){
		nextSlide = slide5;
	};
}



studio.addEventListener("click", function(){
	slide1.classList.toggle("mobile-toggle");
	slide2.classList.toggle("mobile-toggle");
	next.classList.toggle("mobile-toggle");
	skip1.classList.toggle("mobile-toggle");
	windowCount = 1;
	counter();
})

tech.addEventListener("click", function(){
	slide1.classList.toggle("mobile-toggle");
	slide3.classList.toggle("mobile-toggle");
	next.classList.toggle("mobile-toggle");
	skip1.classList.toggle("mobile-toggle");
	windowCount = 1;
	counter();
})

backBtn1.addEventListener("click", function(){
	slide1.classList.toggle("mobile-toggle");
	slide2.classList.toggle("mobile-toggle");
	next.classList.toggle("mobile-toggle");
	skip1.classList.toggle("mobile-toggle");
})

backBtn2.addEventListener("click", function(){
	slide1.classList.toggle("mobile-toggle");
	slide3.classList.toggle("mobile-toggle");
})

next.addEventListener("click", function(){
	counter();
	console.log(nextSlide)
	if(nextSlide == slide4){
		nextSlide.classList.toggle("mobile-toggle");
		slide2.classList.add("mobile-toggle");
		slide3.classList.add("mobile-toggle");
		nextSlide.scrollIntoView();
		windowCount = windowCount + 1;
	}
	else if(nextSlide == slide5){
		nextSlide.classList.toggle("mobile-toggle");
		nextSlide.scrollIntoView();
		windowCount = windowCount + 1;
	};
})