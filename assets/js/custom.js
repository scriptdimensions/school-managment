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







		$('.icon-wrap').on('click', function () {
			$('.sidebar').toggleClass('active');
			$('.main-logo').toggleClass('sidebar-collapsed');
			$('.main-content').toggleClass('side-active');
		})
		$('.sidebar .nav-item').each(function () {
			let item = $(this);
			if (item.has('.sub').length) {  item.find('.nav-link').on('click', function (e) {
				e.preventDefault();
				item.siblings().removeClass('active');
				item.siblings().find('.sub').slideUp(200);
				item.find('.sub').slideToggle(200);
				item.toggleClass('active');
			})
		}
		})
		$(".counter .num").counterUp({ time: 3000 });
		$('.navbar .navbar-item').each(function () {
			let item = $(this),
				button = item.find('.dropdown-toggle');
			button.on('click', function () {
				item.siblings().removeClass('show');
				item.toggleClass('show');
			})
		})
		$('#scrollUp').on('click', function () {
			$('html, body').animate({ scrollTop: 0 }, 500); // 500 milliseconds for smooth scroll
		});
		
		///
		/*-------------------------------------
			  Line Chart 
		  -------------------------------------*/
		if ($("#earning-line-chart").length) {

			var lineChartData = {
				labels: ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", ""],
				datasets: [{
					data: [0, 5e4, 1e4, 5e4, 14e3, 7e4, 5e4, 75e3, 5e4],
					backgroundColor: '#ff0000',
					borderColor: '#ff0000',
					borderWidth: 1,
					pointRadius: 0,
					pointBackgroundColor: '#ff0000',
					pointBorderColor: '#ffffff',
					pointHoverRadius: 6,
					pointHoverBorderWidth: 3,
					fill: 'origin',
					label: "Total Collection"
				},
				{
					data: [0, 3e4, 2e4, 6e4, 7e4, 5e4, 5e4, 9e4, 8e4],
					backgroundColor: '#417dfc',
					borderColor: '#417dfc',
					borderWidth: 1,
					pointRadius: 0,
					pointBackgroundColor: '#304ffe',
					pointBorderColor: '#ffffff',
					pointHoverRadius: 6,
					pointHoverBorderWidth: 3,
					fill: 'origin',
					label: "Current Month Collection"
				}
				]
			};
			var lineChartOptions = {
				responsive: true,
				maintainAspectRatio: false,
				animation: {
					duration: 2000
				},
				scales: {

					xAxes: [{
						display: true,
						ticks: {
							display: true,
							fontColor: "#222222",
							fontSize: 16,
							padding: 20
						},
						gridLines: {
							display: true,
							drawBorder: true,
							color: '#cccccc',
							borderDash: [5, 5]
						}
					}],
					yAxes: [{
						display: true,
						ticks: {
							display: true,
							autoSkip: true,
							maxRotation: 0,
							fontColor: "#646464",
							fontSize: 16,
							stepSize: 25000,
							padding: 20,
							callback: function (value) {
								var ranges = [{
									divider: 1e6,
									suffix: 'M'
								},
								{
									divider: 1e3,
									suffix: 'k'
								}
								];

								function formatNumber(n) {
									for (var i = 0; i < ranges.length; i++) {
										if (n >= ranges[i].divider) {
											return (n / ranges[i].divider).toString() + ranges[i].suffix;
										}
									}
									return n;
								}
								return formatNumber(value);
							}
						},
						gridLines: {
							display: true,
							drawBorder: false,
							color: '#cccccc',
							borderDash: [5, 5],
							zeroLineBorderDash: [5, 5],
						}
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					mode: 'index',
					intersect: false,
					enabled: true
				},
				elements: {
					line: {
						tension: .35
					},
					point: {
						pointStyle: 'circle'
					}
				}
			};
			var earningCanvas = $("#earning-line-chart").get(0).getContext("2d");
			var earningChart = new Chart(earningCanvas, {
				type: 'line',
				data: lineChartData,
				options: lineChartOptions
			});
		}

		/*-------------------------------------
			  Bar Chart 
		  -------------------------------------*/
		if ($("#expense-bar-chart").length) {

			var barChartData = {
				labels: ["Jan", "Feb", "Mar"],
				datasets: [{
					backgroundColor: ["#40dfcd", "#417dfc", "#ffaa01"],
					data: [125000, 100000, 75000, 50000, 150000],
					label: "Expenses (millions)"
				},]
			};
			var barChartOptions = {
				responsive: true,
				maintainAspectRatio: false,
				animation: {
					duration: 2000
				},
				scales: {

					xAxes: [{
						display: false,
						maxBarThickness: 100,
						ticks: {
							display: false,
							padding: 0,
							fontColor: "#646464",
							fontSize: 14,
						},
						gridLines: {
							display: true,
							color: '#e1e1e1',
						}
					}],
					yAxes: [{
						display: true,
						ticks: {
							display: true,
							autoSkip: false,
							fontColor: "#646464",
							fontSize: 14,
							stepSize: 25000,
							padding: 20,
							beginAtZero: true,
							callback: function (value) {
								var ranges = [{
									divider: 1e6,
									suffix: 'M'
								},
								{
									divider: 1e3,
									suffix: 'k'
								}
								];

								function formatNumber(n) {
									for (var i = 0; i < ranges.length; i++) {
										if (n >= ranges[i].divider) {
											return (n / ranges[i].divider).toString() + ranges[i].suffix;
										}
									}
									return n;
								}
								return formatNumber(value);
							}
						},
						gridLines: {
							display: true,
							drawBorder: true,
							color: '#e1e1e1',
							zeroLineColor: '#e1e1e1'

						}
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					enabled: true
				},
				elements: {}
			};
			var expenseCanvas = $("#expense-bar-chart").get(0).getContext("2d");
			var expenseChart = new Chart(expenseCanvas, {
				type: 'bar',
				data: barChartData,
				options: barChartOptions
			});
		}

		/*-------------------------------------
			  Doughnut Chart 
		  -------------------------------------*/
		if ($("#student-doughnut-chart").length) {

			var doughnutChartData = {
				labels: ["Female Students", "Male Students"],
				datasets: [{
					backgroundColor: ["#304ffe", "#ffa601"],
					data: [45000, 105000],
					label: "Total Students"
				},]
			};
			var doughnutChartOptions = {
				responsive: true,
				maintainAspectRatio: false,
				cutoutPercentage: 65,
				cutout: '80%', // For a thinner ring, use string forma
				rotation: -9.4,
				animation: {
					duration: 2000
				},
				legend: {
					display: false
				},
				tooltips: {
					enabled: true
				},
			};
			var studentCanvas = $("#student-doughnut-chart").get(0).getContext("2d");
			var studentChart = new Chart(studentCanvas, {
				type: 'doughnut',
				data: doughnutChartData,
				options: doughnutChartOptions
			});
		}





		///

		function swithtab(data, offsidebar) {
			$('.content-tab').hide();
			$('.content-tab[data=' + data + ']').fadeIn(200);
			if (offsidebar) {
				$(".sidebar").removeClass("active");
			}
		}
		function changetab(index) {
			$('.sidebar .icons  > li').eq(index).addClass('active').siblings().removeClass('active');
			$('.sidebar .item-bar > ul > li').eq(index).addClass('active').siblings().removeClass('active');
			swithtab($('.sidebar .item-bar > ul > li').eq(index).find('.text').attr('data'), false)
		}





		$(document).on("click", function (e) {
			if (!$(e.target).is(".navbar .navbar-item") && !jQuery(e.target).is(".navbar .navbar-item *")) {
				$('.navbar .navbar-item').removeClass('show')
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
				item.siblings().removeClass('show').find('.sub').slideUp(200);
				item.find('.sub').toggle(200);
				item.toggleClass('show');
			});
			$('.sidebar .icons li ').eq(index).find('.tool').text(item.find('.text').text());
		})

		//
		if (jQuery("#imageUpload").length) {
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
		}

		//

		$('#filterInput').on('keyup', function () {
			var filterValue = $(this).val().toLowerCase();

			$('.tables > ul').each(function () {
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