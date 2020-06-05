const bottomBar = document.getElementsByClassName("bottom-mobile-bar")[0];

const slide1 = document.getElementsByClassName("section-wrap")[0]; // 1/5
const slide2 = document.getElementsByClassName("section-wrap")[1]; // 2/5
const slide3 = document.getElementsByClassName("section-wrap")[2]; // 2/5
const slide4 = document.getElementsByClassName("section-wrap")[3]; // 3/5
const slide5 = document.getElementsByClassName("section-wrap")[4]; // 4/5
const slide6 = document.getElementsByClassName("section-wrap")[5]; // 5/5
const end = document.getElementsByClassName("section-wrap")[6];

const backBtn = document.getElementById("back-mobile");



const studio = document.getElementById("studio-link");
const tech = document.getElementById("tech-link");

var width = window.innerWidth;



const next = document.getElementById("next");
const skip1 = document.getElementById("skip1");


let previousSlide = 0;

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
		nextSlide = slide6;
	}
	else if(windowCount == 4){
		nextSlide = end;
	};
}



studio.addEventListener("click", function(){
	slide1.classList.toggle("mobile-toggle");
	slide2.classList.toggle("mobile-toggle");
	next.classList.toggle("mobile-toggle");
	skip1.classList.toggle("mobile-toggle");
	backBtn.classList.toggle("mobile-toggle");
	previousSlide = slide2;
	windowCount = 1;
	counter();
})

tech.addEventListener("click", function(){
	slide1.classList.toggle("mobile-toggle");
	slide3.classList.toggle("mobile-toggle");
	next.classList.toggle("mobile-toggle");
	skip1.classList.toggle("mobile-toggle");
	backBtn.classList.toggle("mobile-toggle");
	previousSlide = slide3;
	windowCount = 1;
	counter();
})

backBtn.addEventListener("click", function(){
	counter();	
	if(windowCount == 1){
		backBtn.classList.toggle("mobile-toggle");
		skip1.classList.toggle("mobile-toggle");
		next.classList.toggle("mobile-toggle");
		previousSlide.classList.toggle("mobile-toggle");
		slide1.classList.toggle("mobile-toggle");
		slide1.scrollIntoView();
	}
	else{
		console.log(nextSlide) //contact
		console.log(previousSlide) //studio
		console.log(windowCount) //2
		windowCount = windowCount - 1;
		counter();
		nextSlide.classList.toggle("mobile-toggle");
		previousSlide.classList.toggle("mobile-toggle");
		previousSlide.scrollIntoView();
	};
})

next.addEventListener("click", function(){
	counter();
	console.log(nextSlide)
	console.log(windowCount)
	if(nextSlide == slide4){
		nextSlide.classList.toggle("mobile-toggle");
		slide2.classList.add("mobile-toggle");
		slide3.classList.add("mobile-toggle");
		nextSlide.scrollIntoView();
		windowCount = windowCount + 1;
	}
	else if(nextSlide == end){
		bottomBar.classList.toggle("mobile-toggle");
		nextSlide.classList.toggle("mobile-toggle");
		nextSlide.scrollIntoView();
	}
	else{
		nextSlide.classList.toggle("mobile-toggle");
		nextSlide.scrollIntoView();
		windowCount = windowCount + 1;
	};
});