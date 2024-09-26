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
		breakpoints: {},
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			renderBullet: function renderFraction(index, className) {
				return `<span class="${className}">${index}</span>`;
			},
		},
	};

	$(".tabs").on("click", "[data-toggle='tab']", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});

	new Swiper(".block-emails__slider .swiper", {
		...defailtPropsSlider,
	});

	new Swiper(".block-vars-products__slider .swiper", {
		...defailtPropsSlider,
		slidesPerView: 3,
	});

	$("[data-toggle='top-menu']").on("click", function () {
		$(this).toggleClass("active");
		$(this).siblings("[data-box-menu]").toggleClass("active");
	});
});
