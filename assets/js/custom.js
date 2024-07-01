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

		function swithtab(data,offsidebar) {
			$('.content-tab').hide();
			$('.content-tab[data=' + data + ']').fadeIn(200);
			if(offsidebar){
				$(".sidebar").removeClass("active");
			}
		}
		function changetab(index) {
			$('.sidebar .icons  > li').eq(index).addClass('active').siblings().removeClass('active');
			$('.sidebar .item-bar > ul > li').eq(index).addClass('active').siblings().removeClass('active');
			swithtab($('.sidebar .item-bar > ul > li').eq(index).find('.text').attr('data'),false)
		}
		$('.sidebar  .item-bar li').each(function (index) {
				$(this).find('.text').on('click', function (e) {
					changetab(index);
					$('.sidebar .item-bar .item').removeClass('show');
					$('.sidebar .item-bar li .sub').slideUp(200);
				});
			});
	
		$('.sidebar .icon-bar .icons li').each(function (index) {
				$(this).on('click', function (e) {
					changetab(index);
				});
			});
	

		$(document).on("click", function (e) {
			if (!$(e.target).is(".sidebar") && !jQuery(e.target).is(".sidebar *") && !jQuery(e.target).is(".menu-icon *")) {
				$(".sidebar").removeClass("active");
				$('.sidebar .item-bar li .sub').slideUp(200);
				$('.sidebar .item-bar .item').removeClass('show');
				$('.s-navi .await').removeClass('active');
			}
			if (!$(e.target).is(".head-sub") && !jQuery(e.target).is(".head-sub *")) {
				$(".head-sub").removeClass("show");
			}
		});

		var nameUser = $('.profile-name h4').text().split(' ');
		var firstLetters = nameUser.map(word => word.charAt(0)).join('');
		$('.user-setting .icon').text(firstLetters)


		$('.sidebar .item-bar .item').each(function (index) {
			var item = $(this),
				text = item.find('.text');
			subitem = item.find('.sub li');
			button = item.find('img');
			button.on('click', function () {
				item.find('.sub').toggle(200);
				item.toggleClass('show');
			});
			$('.sidebar .icons li ').eq(index).find('.tool').text(item.find('.text').text());

			text.on('click', function () {
				swithtab($(this).attr('data'),true);
			});
			subitem.on('click', function () {
				swithtab($(this).attr('data'),true);
			});
		})

		//

		document.getElementById('imageUpload').addEventListener('change', function (event) {
			const file = event.target.files[0];
			if (file) {
				const reader = new FileReader();
				reader.onload = function (e) {
					const preview = document.getElementById('imagePreview');
					preview.src = e.target.result;
					preview.style.display = 'block';
					$('.preview-container').addClass('hasimg');
				};
				reader.readAsDataURL(file);
			}
		});

		//

		$('#filterInput').on('keyup', function() {
			var filterValue = $(this).val().toLowerCase();
	
			$('.tables > ul').each(function() {
				var $ul = $(this);
				var text = $ul.text().toLowerCase();
				
				if (text.indexOf(filterValue) > -1) {
					$ul.show();
				} else {
					$ul.hide();
				}
			});
		});
		//====
	})(jQuery);
});