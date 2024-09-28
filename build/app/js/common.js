$(function () {
	$(document).on("touchstart", function () {
		true;
	});

	Fancybox.bind("[data-fancybox]", {});

	const defailtPropsSlider = {
		slidesPerView: 4,
		spaceBetween: 24,
		observer: true,
		observeParents: true,
		mousewheel: true,
		speed: 400,
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			renderBullet: function renderFraction(index, className) {
				return `<span class="${className}">${index}</span>`;
			},
		},
	};

	$(window).on("click", function () {
		$("[data-box-menu]").removeClass("active");
		$("[data-toggle='top-menu']").removeClass("active");
	});

	$("[data-toggle='top-menu'], [data-box-menu]").on("click", function (e) {
		e.stopPropagation();
	});

	$(".tabs").on("click", "[data-toggle='tab']", function () {
		$("[data-toggle='tab']").removeClass("active");
		$(".tabs .tabs__box-item").css("display", "none").removeClass("active");
		$(`.tabs .tabs__box-item[data-target='${$(this).data("target")}']`).css("display", "block").addClass("active");
		$(this).addClass("active").siblings().removeClass("active");
	});

	new Swiper(".block-emails__slider .swiper", {
		...defailtPropsSlider,
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			}
		}
	});

	new Swiper(".block-vars-products__slider .swiper", {
		...defailtPropsSlider,
		slidesPerView: 3,
		breakpoints: {
			1400: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 1,
			}
		},
	});

	$("[data-toggle='top-menu']").on("click", function () {
		$(this).toggleClass("active");
		$(this).siblings("[data-box-menu]").toggleClass("active");
	});
});
