$(document).ready(function(){
    $('.slider-2').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }]
    });
    $('.slider-3').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        asNavFor: '.banner-ad-slider'
    });
    $('.banner-ad-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        asNavFor: '.banner-slider',
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.features_img').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6500,
        asNavFor: '.features_text'
    });

    $('.features_text').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6500,
        asNavFor: '.features_img',
        focusOnSelect: true,
        vertical: true
    });

    $(document).on('click', '.collapse-item', function () {
        $(this).toggleClass('active');
    });

    $('.full-hero').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6500,
    });

    $('.user-method-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: false,
                dots: true
            }
        }]
    });

    if (jQuery(window).width() < 991) {
        // $('.process-list-slider-3').slick({
        //     arrows: false,
        //     dots: false,
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     responsive: [{
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             arrows: false,
        //             dots: true
        //         }
        //     }]
        // });
    
        // $('.process-list-slider-4').slick({
        //     arrows: false,
        //     dots: false,
        //     slidesToShow: 4,
        //     slidesToScroll: 1,
        //     responsive: [{
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             arrows: false,
        //             dots: true
        //         }
        //     }]
        // });
     }

    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $('.menu').slideToggle();
    });

    $('#product-menu-nav .nav-item').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
    },function(){
    });

    $('.inner-menu-toggle').click(function () {
        $(this).next().slideToggle().parents('.list-inline-item').siblings().find('.inner-menu-toggle').next().slideUp();
        $('#header').addClass('active');
    });
    $('.wrapper').click(function(){
        $('.inner-menu-toggle').next().slideUp();
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $("#header").addClass('active');
        } else {
            $("#header").removeClass('active');
        }
    });
    $('.lang-btn').click(function () {
        $('.lang-menu').slideToggle();
    });

    $('.change').click(function () {
        if ($(this).hasClass('used')) {
            $(this).removeClass('used');
            $('.flip-container').removeClass('flipped');
            $('.use-change-progress').removeClass('active');
            $('.change-inner').removeClass('active');
        } else {
            $(this).addClass('used');
            $('.flip-container').addClass('flipped');
            $('.use-change-progress').addClass('active');
            $('.change-inner').addClass('active');
        }
    });

    $('.new-page').each(function () {
        $(this).prev('#header').addClass('active');

        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll > 200) {
                $("#header").addClass('active');
            } else {
                $("#header").addClass('active');
            }
        });
    });

    $("a.anchor").on('click', function (event) {

		if (this.hash !== "") {
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top - 90
			}, 800, function () {

				window.location.hash = hash;
			});
		} // End if
	});

    $(function () {
        $('ul.cutover li').click(function () {
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).stop(false, true).addClass('show').siblings().removeClass('show');

            return false;
        }).find('a').focus(function () {
            this.blur();
        });
    });

    $(".jq-goTop").click(function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0,
        },600);
    });

    $('#copy-btn').on('click', function(e) {
        var temp = $('<input>');
        $('body').append(temp);
        var url = window.location.href
        temp.val(url).select(); 
        document.execCommand('copy');
        temp.remove();
    });

    $('#clear-btn').on('click',function(){
        $('select').prop('selectedIndex', 0);
        $('textarea').val('');
        $('input').val('');
    });
});