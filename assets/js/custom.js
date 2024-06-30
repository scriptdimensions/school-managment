jQuery.noConflict();
jQuery(document).ready(function () {
	(function ($) {
		//-------------------------------
		// Mobile Nav Menu
		//-------------------------------
		if (jQuery("#mobile-nav").length) {
			jQuery('#mobile-nav').hcOffcanvasNav({
				maxWidth: 920
			});
		}


		jQuery(window).on("scroll", function () {
			if (jQuery(window).scrollTop()) {
				jQuery('header').addClass('shadow');
			}
			else {
				jQuery('header').removeClass('shadow');
			}
		});


		$('.head-sub').each(function () {
			let head = $(this),
				icon = head.find('.icon');
			icon.on('click', function () {
				head.toggleClass('show').siblings().removeClass('show')
			});
		});

		$('.menu-icon').on('click', function () {
			$('.sidebar').toggleClass('active');
			$('.s-navi .await').toggleClass('active');
		})
		var activeInex = 1;
		function changetab(index) {
			$('.sidebar .icons li').eq(index).addClass('active').siblings().removeClass('active');
			$('.sidebar .item-bar li').eq(index).addClass('active').siblings().removeClass('active');
			console.log(index)
		}
		$('.sidebar :is(.icon-bar .icons, .item-bar)').each(function () {
			$(this).find('li').each(function (index) {
				$(this).on('click', function (e) {
					changetab(index)
				});
			});
		})

		$(document).on("click", function (e) {
			if (!$(e.target).is(".sidebar") && !jQuery(e.target).is(".sidebar *")  && !jQuery(e.target).is(".menu-icon *")) {
			  $(".sidebar").removeClass("active");
			}
			if (!$(e.target).is(".head-sub") && !jQuery(e.target).is(".head-sub *")) {
				$(".head-sub").removeClass("show");
			  }
		});

		var nameUser = $('.profile-name h4').text().split(' ');
		var firstLetters = nameUser.map(word => word.charAt(0)).join('');
		$('.user-setting .icon').text(firstLetters)
		
	console.log(nameUser)
		//====
	})(jQuery);
});