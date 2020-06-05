const bottomBar = document.getElementsByClassName("bottom-mobile-bar")[0];

const slide1 = document.getElementsByClassName("section-wrap")[0]; // 1/5
const slide2 = document.getElementsByClassName("section-wrap")[1]; // 2/5
const slide3 = document.getElementsByClassName("section-wrap")[2]; // 2/5
const slide4 = document.getElementsByClassName("section-wrap")[3]; // 3/5
const slide5 = document.getElementsByClassName("section-wrap")[4]; // 4/5
const slide6 = document.getElementsByClassName("section-wrap")[5]; // 5/5
const end = document.getElementsByClassName("section-wrap")[6];

const icon1 = document.getElementsByClassName("icon-bcg2");
const icon2 = document.getElementsByClassName("icon-bcg3");


const selectedItem = [];

const backBtn = document.getElementById("back-mobile");



const studio = document.getElementById("studio-link");
const tech = document.getElementById("tech-link");

var width = window.innerWidth;



const next = document.getElementById("next");
const skip1 = document.getElementById("skip1");


let previousSlide = 0;

let windowCount = 0;
let nextSlide = 0;
let wasClicked = false;

function redirectMe(){
	window.location.href = 'index.html';
}






let clickCount = [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let service = {};


for (let i = 0; i < icon1.length; i++){
	icon1[i].addEventListener("click", function(){
	icon1[i].classList.toggle("selected-icon");
	
	function iconSelector(){
	if(clickCount[i] % 2 == 0){
		console.log(clickCount[i])
		for(let i = selectedItem.length - 1; i >= 0; i--) {
		    if(selectedItem[i] == service) {
		        selectedItem.splice(i, 1);
		    }
		}
	}
	else{
		console.log(clickCount)
		selectedItem.push(service);
	}
// 	clickCount++;
	wasClicked = !wasClicked;
	console.log(wasClicked)
	}
	
	if(icon1[i] == icon1[0]){
		service = "Virtual studio";
		iconSelector();
		clickCount[i]++;
	}
	else if(icon1[i] == icon1[1]){
		service = "Chroma studio";
		iconSelector();
		clickCount[i]++;
	}
	else if(icon1[i] == icon1[2]){
		service = "Mixed studio";
		iconSelector();
		clickCount[i]++;
	}
	console.log(selectedItem)
});
}

for (let i = 0; i < icon2.length; i++){
	icon2[i].addEventListener("click", function(){
	icon2[i].classList.toggle("selected-icon");
	
	function iconSelector(){
	if(clickCount[i + 4] % 2 == 0){
		console.log(clickCount[i + 4])
		for(let i = selectedItem.length - 1; i >= 0; i--) {
		    if(selectedItem[i] == service) {
		        selectedItem.splice(i, 1);
		    }
		}
	}
	else{
		console.log(clickCount)
		selectedItem.push(service);
	}
// 	clickCount++;
	wasClicked = !wasClicked;
	console.log(wasClicked)
	}
	
	if(icon2[i] == icon2[0]){
		service = "1";
		iconSelector();
		clickCount[i + 4]++;
	}
	else if(icon2[i] == icon2[1]){
		service = "2";
		iconSelector();
		clickCount[i + 4]++;
	}
	else if(icon2[i] == icon2[2]){
		service = "3";
		iconSelector();
		clickCount[i + 4]++;
	}
	else if(icon2[i] == icon2[3]){
		service = "4";
		iconSelector();
		clickCount[i + 4]++;
	}
	else if(icon2[i] == icon2[4]){
		service = "5";
		iconSelector();
		clickCount[i + 4]++;
	}
	else if(icon2[i] == icon2[5]){
		service = "6";
		iconSelector();
		clickCount[i + 4]++;
	}
	else if(icon2[i] == icon2[6]){
		service = "7";
		iconSelector();
		clickCount[i + 4]++;
	}
	else if(icon2[i] == icon2[7]){
		service = "8";
		iconSelector();
		clickCount[i + 4]++;
	}
	else if(icon2[i] == icon2[8]){
		service = "9";
		iconSelector();
		clickCount[i + 4]++;
	}
	else if(icon2[i] == icon2[9]){
		service = "10";
		iconSelector();
		clickCount[i + 4]++;
	}
	console.log(selectedItem)
});
}





// Mobile booking nav

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
		previousSlide.classList.remove("mobile-toggle");
		previousSlide.scrollIntoView();
	};
})

next.addEventListener("click", function(){
	document.getElementById('fstudio').value = selectedItem[0];
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
		setTimeout(redirectMe, 10000);
	}
	else{
		nextSlide.classList.toggle("mobile-toggle");
		nextSlide.scrollIntoView();
		windowCount = windowCount + 1;
	};
});






