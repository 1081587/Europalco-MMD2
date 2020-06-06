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
const selectedTech = [];


const backBtn = document.getElementById("back-mobile");



const studio = document.getElementById("studio-link");
const tech = document.getElementById("tech-link");

var width = window.innerWidth;



const next = document.getElementById("next");
const skip1 = document.getElementById("skip1");


let previousSlide = 0;

let windowCount = 0;
let nextSlide = 0;

function redirectMe(){
	window.location.href = 'index.html';
}






let clickCount = [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let service = {};

// Studio selection

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


// Tech selection

for (let i = 0; i < icon2.length; i++){
	icon2[i].addEventListener("click", function(){
		icon2[i].classList.toggle("selected-icon");
		
		function iconSelector(){
			if(clickCount[i + 4] % 2 == 0){
				console.log(clickCount[i + 4])
				for(let i = selectedTech.length - 1; i >= 0; i--) {
				    if(selectedTech[i] == service) {
				        selectedTech.splice(i, 1);
				    }
				}
			}
			else{
				console.log(clickCount)
				selectedTech.push(service);
			}
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
	dateDelete();
	formDelete();
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
// 		setTimeout(redirectMe, 10000);
		setInterval(countdown, 1000);
	}
	else{
		nextSlide.classList.toggle("mobile-toggle");
		nextSlide.scrollIntoView();
		windowCount = windowCount + 1;
	};
	if(nextSlide == slide4){
		dates();
	}
	if(nextSlide == slide6){
		fStudio.innerHTML = 0;
		summaryContent();
		formFill();

	}
});


const fStudio = document.getElementById("studio-final");
const fTech = document.getElementById("tech-final");

let studioText = 0;
let techText = 0;

function summaryContent(){
/*
	if(clickCount[0] % 2 == 0){
		if(studioText === 0){
			studioText = "Virtual studio" + `<br>`;
		}
		else{
			studioText = studioText + " " + "Virtual studio" + `<br>`;
		}
		fStudio.innerHTML = studioText;
	};
	
	if(clickCount[1] % 2 == 0){
		if(studioText === 0){
			studioText = "Chroma studio" + `<br>`;
		}
		else{
			studioText = studioText + " " + "Chroma studio" + `<br>`;
		}
		fStudio.innerHTML = studioText;
	};
	
	if(clickCount[2] % 2 == 0){
		if(studioText === 0){
			studioText = "Mixed studio" + `<br>`;
		}
		else{
			studioText = studioText + " " + "Mixed studio" + `<br>`;
		}
		fStudio.innerHTML = studioText;
	};
	console.log(studioText)
	
	
	//Technologies
	
	if(clickCount[4] % 2 == 0){
		if(techText === 0){
			techText = "AR" + `<br>`;
		}
		else{
			techText = techText + " " + "AR" + `<br>`;
		}
		fTech.innerHTML = techText;
	};
	
	if(clickCount[5] % 2 == 0){
		if(techText === 0){
			techText = "AR2" + `<br>`;
		}
		else{
			techText = techText + " " + "AR2" + `<br>`;
		}
		fTech.innerHTML = techText;
	};
	
	if(clickCount[6] % 2 == 0){
		if(techText === 0){
			techText = "AR3" + `<br>`;
		}
		else{
			techText = techText + " " + "AR3" + `<br>`;
		}
		fTech.innerHTML = techText;
	};
	
	if(clickCount[7] % 2 == 0){
		if(techText === 0){
			techText = "AR4" + `<br>`;
		}
		else{
			techText = techText + " " + "AR4" + `<br>`;
		}
		fTech.innerHTML = techText;
	};
	
	if(clickCount[8] % 2 == 0){
		if(techText === 0){
			techText = "AR5" + `<br>`;
		}
		else{
			techText = techText + " " + "AR5" + `<br>`;
		}
		fTech.innerHTML = techText;
	};
	
	if(clickCount[9] % 2 == 0){
		if(techText === 0){
			techText = "AR6" + `<br>`;
		}
		else{
			techText = techText + " " + "AR6" + `<br>`;
		}
		fTech.innerHTML = techText;
	}
	
	if(clickCount[10] % 2 == 0){
		if(techText === 0){
			techText = "AR7" + `<br>`;
		}
		else{
			techText = techText + " " + "AR7" + `<br>`;
		}
		fTech.innerHTML = techText;
	};
	
	if(clickCount[11] % 2 == 0){
		if(techText === 0){
			techText = "AR8" + `<br>`;
		}
		else{
			techText = techText + " " + "AR8" + `<br>`;
		}
		fTech.innerHTML = techText;
	};
	
	if(clickCount[12] % 2 == 0){
		if(techText === 0){
			techText = "AR9" + `<br>`;
		}
		else{
			techText = techText + " " + "AR9" + `<br>`;
		}
		fTech.innerHTML = techText;
	};
	
	if(clickCount[13] % 2 == 0){
		if(techText === 0){
			techText = "AR10" + `<br>`;
		}
		else{
			techText = techText + " " + "AR10" + `<br>`;
		}
		fTech.innerHTML = techText;
	}
*/
	
	
	function showStudio() {	
		let itemString = selectedItem.toString();
		let items = itemString.split(",");
		fStudio.innerHTML = items.join(`<br>`);
	};
	
	function showTech() {	
		let itemString = selectedTech.toString();
		let items = itemString.split(",");
		fTech.innerHTML = items.join(`<br>`);
	};

showStudio();      
showTech(); 
}


let seconds = 10;
let message = document.getElementsByClassName('redirect-msg')[0];

function countdown() {
    seconds -= 1;
    message.innerText = "You're being redirected to the home page. " + seconds;
}






// 	document.getElementById('fstudio').value = selectedItem[0];


let dateForm = document.getElementById('dateForm');


function dates(){
	let dateItems = selectedItem.concat(selectedTech); // An array of services + studios

	for(let i = 0; i < dateItems.length; i++){
		dateForm.innerHTML +=  //selects an HTML object to insert a new HTML to
		`
		<label>Date #${i+1}:</label>
		<input type="date" id="fdate" name="fdate"><br><br>
		<input id="fstudio${i}" type="text" id="fname" name="fname" placeholder="Virtual studio"><br><br>
		`	
	}
	for(let i = 0; i < dateItems.length; i++){
		document.getElementById('fstudio' + (i)).value = dateItems[i]; // fstudio1 -> value 2nd in date
		console.log(dateItems);
	}
}

function dateDelete(){
	dateForm.innerHTML = "";
}
	
/*

	`
	<h3>${data.title}</h3>  
	<p>${data.explanation}</p>
	<a id="copyright" href="${data.url}" target="_blank"></a>
	`
*/



let name = document.getElementById("fname");
let mail = document.getElementById("fmail");
let fmsg = document.getElementById("fmsg");

let yourName = document.getElementById("yourname");
let yourMail = document.getElementById("yourmail");
let yourMsg = document.getElementById("yourmsg");


function formFill(){
	yourName.innerHTML = name.value;
	yourMail.innerHTML = mail.value;
	yourMsg.innerHTML = fmsg.value;
}

function formDelete(){
	yourName.innerHTML = "";
	yourMail.innerHTML = "";
	yourMsg.innerHTML = "";
}
















