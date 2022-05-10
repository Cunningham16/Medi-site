let nextBtn = document.querySelector(".next-button-slider");
let prevBtn = document.querySelector(".prev-button-slider");
let sliderImg = document.querySelector(".label-img");
let sliderHeader = document.querySelector(".head-header");
let sliderText = document.querySelector(".opis-header");
let sliderLinks = document.querySelectorAll(".link-slider");

let currentSlide = 1;

let slide1 = {
	header: "Косметология",
	textSlide: "Современный мир диктует новые каноны жизни: ухоженное лицо и тело, стройная, подтянутая фигура - сегодня это неотъемлемые черты привлекательной внешности, характеризующие человека благополучного и успешного.",
	imgSlideSrc: "img/slider1.png"
};

let slide2 = {
	header: "Пластическая хирургия",
	textSlide: "Lorem ipsum dolor sit amet, consectdfdfdfdetur adipisicing elit. Quo reiciendis, minus optio sapiente iure cumque nisi rem magni magnam obcaecati alias blanditiis aliquid, dolor deleniti, neque atque delectus velit. Tempora?",
	imgSlideSrc: "img/slider2.jpg"
};

let slide3 = {
	header: "Стоматология",
	textSlide: "Lorem ipsum dolor sit amet, consectdfdfdfdetur adipisicing elit. Quo reiciendis, minus optio sapiente iure cumque nisi rem magni magnam obcaecati alias blanditiis aliquid, dolor deleniti, neque atque delectus velit. Tempora?",
	imgSlideSrc: "img/card-img2.png"
};

let slide4 = {
	header: "Лазерная медицина",
	textSlide: "Lorem ipsum dolor sit amet, consectdfdfdfdetur adipisicing elit. Quo reiciendis, minus optio sapiente iure cumque nisi rem magni magnam obcaecati alias blanditiis aliquid, dolor deleniti, neque atque delectus velit. Tempora?",
	imgSlideSrc: "img/slider4.jpg"
};

let sliderObj = {
	"slide1": slide1,
	"slide2": slide2,
	"slide3": slide3,
	"slide4": slide4,
}

prevBtn.addEventListener("click", function(){
	if(currentSlide === 1){
		currentSlide = 4;
		sliderMove(currentSlide);
	}else{
		currentSlide--;
		sliderMove(currentSlide);
	}
});

nextBtn.addEventListener("click", function(){
	if (currentSlide === 4) {
		currentSlide = 1;
		sliderMove(currentSlide);
	}else{
		currentSlide++;
		sliderMove(currentSlide);
	}
})

for(let elem of sliderLinks){
	elem.addEventListener("click", function(){
		for(let link of sliderLinks){
			if(link.classList.contains("active-link")){
				link.classList.remove("active-link");
			}
		}
		elem.classList.add("active-link")
		currentSlide = Number(elem.dataset.value);
		sliderMove(currentSlide);
	})
}

function sliderMove(a) {
	for(let elem of sliderLinks){
		for(let link of sliderLinks){
			if(link.classList.contains("active-link")){
				link.classList.remove("active-link");
			}
		}
	}
	sliderLinks[a-1].classList.add("active-link");
	let slide = "slide"+ String(a);
	sliderText.style.opacity = "0";
	sliderText.style.transition = "0.3s";
	sliderImg.style.opacity = "0";
	sliderImg.style.transition = "0.3s";
	sliderHeader.style.opacity = "0";
	sliderHeader.style.transition = "0.3s";
	setTimeout(function(){
		sliderText.textContent = sliderObj[slide].textSlide;
		sliderImg.src = sliderObj[slide].imgSlideSrc;
		sliderHeader.textContent = sliderObj[slide].header;
		sliderText.style.opacity = "1";
		sliderText.style.transition = "0.3s";
		sliderImg.style.opacity = "1";
		sliderImg.style.transition = "0.3s";
		sliderHeader.style.opacity = "1";
		sliderHeader.style.transition = "0.3s";
	}, 300);
}

let news1 = {
	innerHTML: "<h3>Почему рекомендуется посещать проффесионального косметолога. Мнение специалистов центра</h3><ul><li>Процедуры аппаратной косметологии на оборудовании экспертного класса от ведущих мировых производителей могут проводится в любом возрасте и решать широкий спектр проблем: возрастные изменения, покраснения, акне и купероз, потеря тонуса и упругости кожи, целлюлит и т.п.</li><li>С помощью инъекционных методик мы можем разгладить морщины, провести объемное моделирование, увлажнить кожу, ввести активные вещества в поверхностные и средние слои кожи, запустить процессы омоложения.</li><li>Лазерное и фотоомоложение помогут запустить процесс синтеза собственного коллагена, улучшить светооптицеские свойства кожи, а также получить максимальный эффект подтяжки лица без уколов и длительного восстановительного периода.</li><li>Курс процедур лазерной эпиляции поможет навсегда избавится от проблемы нежелательных волос.</li></ul>"
}

let news2 = {
	innerHTML: "<h3>Cтандартизация деятельности клиник в соответствии с ISO 9001:2015.</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Culpa magni doloribus vel qui mollitia sequi maxime laborum, quos dolorum, accusantium quaerat! Laboriosam nisi, vel voluptatum itaque ipsam iusto! Maiores, architecto.</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum vel sed praesentium exercitationem, impedit autem quod inventore explicabo obcaecati, quaerat minima doloribus, consectetur maxime alias porro quisquam cupiditate accusantium quidem.</p><p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Similique mollitia eos nostrum doloremque iste tempore ipsam tenetur, ipsum facilis ut sapiente quam sed labore, modi quo perspiciatis amet doloribus natus.</p>"
}

let news3 = {
	innerHTML: "<h3>Индивидуальный подход к каждому пациенту и подбор оптимальных косметологических методик</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Culpa magni doloribus vel qui mollitia sequi maxime laborum, quos dolorum, accusantium quaerat! Laboriosam nisi, vel voluptatum itaque ipsam iusto! Maiores, architecto.</p><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum vel sed praesentium exercitationem, impedit autem quod inventore explicabo obcaecati, quaerat minima doloribus, consectetur maxime alias porro quisquam cupiditate accusantium quidem.</p><p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Similique mollitia eos nostrum doloremque iste tempore ipsam tenetur, ipsum facilis ut sapiente quam sed labore, modi quo perspiciatis amet doloribus natus.</p>"
}

let newsObj = {
	"news1": news1,
	"news2": news2,
	"news3": news3,
}

let btnNews = document.querySelectorAll(".head-news");
let newsText = document.querySelector(".text-news")

for(let news of btnNews){
	news.addEventListener("click", function(){
		for(let u of btnNews){
			if(u.classList.contains("active-news")){
				u.classList.remove("active-news");
			}
		}
		news.classList.add("active-news");
		let num = "news" + Number(news.value);
		newsText.style.opacity = "0";
		newsText.style.transition = "0.3s";
		setTimeout(function(){
			newsText.innerHTML = newsObj[num].innerHTML;
			newsText.style.opacity = "1";
			newsText.style.transition = "0.3s";
		}, 300)
	})
}


let policyLink = document.querySelector(".policy");
let buttonRegistration = document.querySelector(".ask-for-consult");
let popUpPrivacy = document.querySelector(".popup__privacy_policy");
let popUpRegisterForm = document.querySelector(".popup__register_form");
let popUpContentReg = popUpRegisterForm.querySelector(".popup__content");
let blurPopUpReg = popUpRegisterForm.querySelector(".close__popup");
let popUpContentPriv = popUpPrivacy.querySelector(".popup__content");
let closePopUpPriv = popUpPrivacy.querySelector(".close__button");
let blurPopUpPriv = popUpPrivacy.querySelector(".close__popup");


policyLink.addEventListener("click", function(e){
	popUpPrivacy.classList.remove("hidden");
	setTimeout(function(){
		popUpContentPriv.style.transition = "0.5s";
		popUpContentPriv.style.transform = "translate(0%,0%)";
	}, 100)
	e.preventDefault();
});

closePopUpPriv.addEventListener("click", function(){
	popUpContentPriv.style.transition = "0.5s";
	popUpContentPriv.style.transform = "translate(0%,-150%)";
	setTimeout(function(){
		popUpPrivacy.classList.add("hidden");
	},500)
});

blurPopUpPriv.addEventListener("click", function(e){
	popUpContentPriv.style.transition = "0.5s";
	popUpContentPriv.style.transform = "translate(0%,-150%)";
	setTimeout(function(){
		popUpPrivacy.classList.add("hidden");
	},500)
	e.preventDefault();
});


buttonRegistration.addEventListener("click", function(e){
	popUpRegisterForm.classList.remove("hidden");
	setTimeout(function(){
		popUpContentReg.style.transition = "0.5s";
		popUpContentReg.style.transform = "translate(0%,0%)";
	}, 100)
	e.preventDefault();
});

blurPopUpReg.addEventListener("click", function(e){
	popUpContentReg.style.transition = "0.5s";
	popUpContentReg.style.transform = "translate(0%,-150%)";
	setTimeout(function(){
		popUpRegisterForm.classList.add("hidden");
	},500)
	e.preventDefault();
});