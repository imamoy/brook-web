$(document).ready(function () {
	$('.block-slick').slick({
		dots: true,
		arrows: false,
		dotsClass: 'block-tips',
		autoplay: true,
		autoplaySpeed: 1500,
		infinite: true,
		customPaging: function (slick, index) {
			switch (index) {
				case 0:
					return '<div><img src="../../styles/images/wirecare-info/reuseImages/err.png"><div class="content"><div>危機</div><div>雷達</div></div></div>'
				case 1:
					return '<div><img src="../../styles/images/wirecare-info/reuseImages/10SEC.png"><div class="content"><div>10秒護</div><div>10年</div></div></div>'
				case 2:
					return '<div><img src="../../styles/images/wirecare-info/reuseImages/SMALL.png"><div class="content"><div>安全</div><div>小幫手</div></div></div>'
				case 3:
					return '<div><img src="../../styles/images/wirecare-info/reuseImages/RADER.png"><div class="content"><div>用電安全</div><div>紅綠燈</div></div></div>'
			}
		},
	})

	if (window.innerWidth >= 1024) {
		$('.info-card').slick({
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 1023,
					settings: 'unslick',
				},
			],
		})
	}

	$(window).resize(function () {
		if (window.innerWidth >= 1024) {
			$('.info-card').slick({
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
						breakpoint: 1023,
						settings: 'unslick',
					},
				],
			})
		}
	})

	$('.block-step').slick({
		dots: true,
		arrows: false,
	})
})

$(document).ready(function () {
	$('.click-button').on('click', function () {
		if (window.innerWidth < 100) {
			$('.slide-dot').css('width', '115px')
		} else {
			$('.slide').css('width', '90%')

			let offsetTop = $('.block-demo-video2').offset().top

			setTimeout(function () {
				$('.click-button').css('opacity', '0')
				$('.click-button').css('cursor', 'auto')

				$('.block-demo-video2').css('height', '54%')

				window.scrollTo({
					top: offsetTop / 3,
					behavior: 'smooth',
				})
			}, 700)
		}
	})
})

$(document).ready(function () {
	window.innerWidth >= 1024
		? $('.block-secret-warning .wire-plug').addClass('wire-plug--active')
		: null

	$('.block-secret-warning .wire-plug').on('click', function () {
		$('.block-secret .condition').css('left', 0)
		$('.block-secret-warning .wire-plug').removeClass('wire-plug--active')
		setTimeout(function () {
			$('.block-secret .examination').css('opacity', 1)
			$('.block-secret .list').css('opacity', 1)
			$('.wire-clickme').css('display', 'none')
		}, 1000)
	})

	$('.block-secret-warning .begin').on('click', function () {
		$('.block-secret-warning .wire .wire--brand').addClass('loadingBar')

		setTimeout(function () {
			$('.block-secret-warning .wire .wire--brand').removeClass('loadingBar')
			$('.block-secret-warning').css('opacity', 0)
			$('.block-secret-check').css('opacity', 1)
			$('.block-secret-check').css('z-index', 5)
		}, 1000)
	})
	$('.block-secret-check .finished').on('click', function () {
		$('.block-secret-check').css('opacity', 0)
		$('.block-secret-warning').css('opacity', 1)
		$('.block-secret-check').css('z-index', -2)
	})

	window.onload = function () {
		let newLivingOffsetTop = $('.block-newLiving').offset().top
		let newLivingInnerHeight = $('.block-newLiving').innerHeight()
		let intelligenceOffsetTop = $('.block-intelligence').offset().top
		let intelligenceInnerHeight = $('.block-intelligence').innerHeight()

		if (
			window.pageYOffset > newLivingOffsetTop - newLivingInnerHeight &&
			window.pageYOffset < newLivingOffsetTop
		) {
			$('.block-newLiving .content').addClass('fadeIn')
		}

		if (
			window.pageYOffset > intelligenceOffsetTop - intelligenceInnerHeight &&
			window.pageYOffset < intelligenceOffsetTop
		) {
			$('.block-intelligence .content').addClass('fadeIn')
		}

		window.onscroll = function () {
			if (
				window.pageYOffset > newLivingOffsetTop - newLivingInnerHeight &&
				window.pageYOffset < newLivingOffsetTop
			) {
				$('.block-newLiving .content').addClass('fadeIn')
			}

			if (
				window.pageYOffset > intelligenceOffsetTop - intelligenceInnerHeight &&
				window.pageYOffset < intelligenceOffsetTop
			) {
				$('.block-intelligence .content').addClass('fadeIn')
			}
		}
	}
})
