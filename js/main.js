document.addEventListener('DOMContentLoaded', function(){	

	//	mobile menu
	const burgerBtn = document.querySelector(".burger-btn")
	const navbar = document.querySelector(".navbar")

	burgerBtn.addEventListener("click", () => {
		burgerBtn.classList.toggle("open")
		navbar.classList.toggle("open")
	})

	//	animation
	if ( window.innerWidth >= 1200 ) {

		const header = this.querySelector(".header")
		const primaryContent = this.querySelector(".primary-content")
		const primaryImage = this.querySelector(".primary-image")

		const removeHide = () => {
			header.classList.remove("hide")
			primaryContent.classList.remove("hide")
			primaryImage.classList.remove("hide")
		}

		setTimeout(removeHide, 1000)
	}

	//	video
	const video = document.querySelector(".video")
	const play = document.querySelector(".play")

	play.addEventListener("click", () => {
		video.play()
		play.classList.add("hide")
	})

	//	slider
	const portfoliioSwiper = document.querySelector(".swiper")
	if ( portfoliioSwiper ) {
		const portfoliioSwiperSlider = new Swiper('.swiper', {
			slidesPerView: 1,
			spaceBetween: 24,
			autoplay: {
				delay: 5000
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: { 
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 2
				},
				992: {
					slidesPerView: 3
				}
			}
		})
	}

	//	order form popup
	
	const overlay = document.querySelector(".overlay")
	const popupForm = document.querySelector(".popup-form")
	const popupSuccess = document.querySelector(".popup-success")
	const formClose = document.querySelector(".form-close")
	const successClose = document.querySelector(".success-close")
	const btnSuccessClose = document.querySelector(".btn-success-close")
	const btnSubmit = document.querySelector(".btn-submit")
	const btnOrder = document.querySelectorAll(".btn-order")

	btnOrder.forEach((btn)=>{
		btn.addEventListener("click", () => {
			overlay.classList.add("open")
			popupForm.classList.add("open")
		})
	})

	formClose.addEventListener("click", () => {
		overlay.classList.remove("open")
		popupForm.classList.remove("open")
	})

	overlay.addEventListener("click", () => {
		overlay.classList.remove("open")
		popupForm.classList.remove("open")
		popupSuccess.classList.remove("open")
	})

	successClose.addEventListener("click", () => {
		overlay.classList.remove("open")
		popupForm.classList.remove("open")
		popupSuccess.classList.remove("open")
	})

	btnSuccessClose.addEventListener("click", () => {
		overlay.classList.remove("open")
		popupForm.classList.remove("open")
		popupSuccess.classList.remove("open")
	})

	btnSubmit.addEventListener("click", (e) => {
		e.preventDefault()
		popupForm.classList.remove("open")
		popupSuccess.classList.add("open")
	})
	
})
