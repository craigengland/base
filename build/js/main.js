"use strict";$(".slide-container").slick({slidesToShow:1,dots:!0,prevArrow:'<img src="assets/img/arrow-left-hero.png" class="hero-arrow" />',nextArrow:'<img src="assets/img/arrow-right-hero.png" class="hero-arrow" />'}),$(".artist-slide-container").slick({dots:!0,slidesToShow:1,prevArrow:'<img src="assets/img/arrow-left-second-slider.png" class="slider-arrow" />',nextArrow:'<img src="assets/img/arrow-right-second-slider.png" class="slider-arrow" />'}),$(window).innerWidth>1024&&($(".member-image").matchHeight(),$(".member-content").matchHeight());