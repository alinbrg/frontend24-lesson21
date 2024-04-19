const slides = document.querySelectorAll(".slide");
const slidesWrapper = document.querySelector(".slides-wrapper");
const sliderBtns = document.querySelectorAll(".slider-btns .btn");

let currentSlide = 0;

function loadSlides() {
	slides.forEach((slide, index) => {
		if (index === currentSlide) {
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
		}
	});

	sliderBtns.forEach((btn, index) => {
		if (index === currentSlide) {
			btn.classList.add("active");
		} else {
			btn.classList.remove("active");
		}
	});
}

function goToNextSlide() {
	if (currentSlide === slides.length - 1) {
		currentSlide = 0;
	} else {
		currentSlide += 1;
	}
	loadSlides();
}

function goToPrevSlide() {
	if (currentSlide === 0) {
		currentSlide = slides.length - 1;
	} else {
		currentSlide -= 1;
	}
	loadSlides();
}

loadSlides();

sliderBtns.forEach((btn, index) => {
	btn.addEventListener("click", (e) => {
		currentSlide = index;
		loadSlides();
	});
});

let sliderIntervalId = null;

sliderIntervalId = setInterval(goToNextSlide, 5000);

slidesWrapper.addEventListener("mouseenter", () => {
	// console.log("mouse eneter");
	if (sliderIntervalId) {
		clearInterval(sliderIntervalId);
		sliderIntervalId = null;
	}
});

slidesWrapper.addEventListener("mouseleave", () => {
	// console.log("mouse leave");
	if (!sliderIntervalId) {
		sliderIntervalId = setInterval(goToNextSlide, 5000);
	}
});

// 1. setTimeout ან setInterval - ის გამოყენებით გააკეთეთ საათი რომელიც იმუშავებს როგორც ნამდვილი სააათი. გამოიყენეთ ატვირთული სურათი (საათი.png).
const clock = document.querySelector(".clock");
function renderClock() {
	const day = new Date();
	const min = day.getMinutes();
	const hours = day.getHours();
	const sec = day.getSeconds();
	clock.innerHTML = `${(hours + "").padStart(2, 0)}:${(min + "").padStart(
		2,
		0
	)}:${(sec + "").padStart(2, 0)}`;
}

renderClock();

setInterval(renderClock, 1000);

// 2. ლექციაზე შექმნილ სლაიდერს დავამატოთ:
//    2.1. დავამატოთ სლაიდების ავტომატური ცვლილება 5 წამიანი ინტერვალით (დაკომენტარებულია ახლა ეს კოდი, და დროის დარედაქტირება დაგჭირდებათ, setInterval(goToNextSlide, 2000).)
//    2.2. როდესაც ავტომატურად ხდება სლაიდების შეცვლა თუ მაუსს მივიტან სურათთან, ავტომატური სლაიდი გაჩერდეს.
//    2.3. თუ მაუსი მიტანილი მაქვს სურათზე და შემდეგ გამოვწევ სურათიდან, ავტომატური სლაიდი გაგრძელდეს. მოუსმინეთ  mouseenter, mouseleave  ივენთებს
//    დამხმარე მასალა: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event

//  3. დავამატოთ  ღილაკები (ღილაკები.png) იმდენი რამდენი სლაიდიც გვაქვს, ღილაკზე დაკლიების შემდეგ სლაიდერი უნდა გადავიდეს შესაბამის სლაიდზე (პირველ ღილაკზე თუ დავკლიკე უნდა გადავიდეს პირველ სლაიზე და ასე შემდეგ).
