$(document).ready(function () {
    // HORIZONTAL - DEFAULT
	// ------------------------------------------------------------------------------------------------ * -->
	$('#hpDefault-trigger').on('click', function (event) {
        $('.progress .bar.text-no-1').progressbar();
        $('.progress .bar.text-filled-1').progressbar({
            display_text: 1
        });
        $('.progress .bar.text-centered-1').progressbar({
            display_text: 2
        });
		$('.progress .bar.text-label-top').progressbar({
            update: function (current_percentage) {
                $('#label-update1').text('update: '+ current_percentage +'%');
            },
            done: function (current_percentage) {
                $('#label-done1').text('done!');
            }
        });
		$('.progress .bar.text-label-bottom').progressbar({
            update: function (current_percentage) {
                $('#label-update2').text(current_percentage +'%');
            },
            done: function (current_percentage) {
                $('#label-done2').text('done!');
            }
        });
    });
	
	$('#horizontalAll-trigger').on('click', function (event) {
        $('.progress .bar.text-no-2-1').progressbar({
			use_percentage: false,
            refresh_speed: 200,
			update: function (current_percentage) {
                $('#label-update3').text(current_percentage +'%');
            }
        });
		$('.progress .bar.text-no-2-2').progressbar({
            use_percentage: false,
            refresh_speed: 200,
			update: function (current_percentage) {
                $('#label-update4').text(current_percentage +'%');
            }
        });
		$('.progress .bar.text-no-2-3').progressbar({
            use_percentage: false,
            refresh_speed: 200,
			update: function (current_percentage) {
                $('#label-update5').text(current_percentage +'%');
            }
        });
		$('.progress .bar.text-no-2-4').progressbar({
            use_percentage: false,
            refresh_speed: 100,
			update: function (current_percentage) {
                $('#label-update6').text(current_percentage +'%');
				$('#label-update7').text(current_percentage +'%');
            }
        });
        $('.progress .bar.text-filled-5').progressbar({
            use_percentage: false,
            refresh_speed: 500,
            display_text: 1
        });
        $('.progress .bar.text-centered-5').progressbar({
            use_percentage: false,
            refresh_speed: 500,
            display_text: 2
        });
    });
	
	// MULTI TRIGGER
	// ------------------------------------------------------------------------------------------------ * -->
    $('#hpMulti-0-trigger').on('click', function (event) {
        $('.progress .bar.text-no-15').each(function (index) {
            $(this).attr('data-percentage', "0");
        });
        $('.progress .bar.text-filled-15').each(function (index) {
            $(this).attr('data-percentage', "0");
        });
        $('.progress .bar.text-centered-15').each(function (index) {
            $(this).attr('data-percentage', "0");
        });
        $('.progress .bar.text-no-15').progressbar();
        $('.progress .bar.text-filled-15').progressbar({
            display_text: 1
        });
        $('.progress .bar.text-centered-15').progressbar({
            display_text: 2
        });
    });
    $('#hpMulti-50-trigger').on('click', function (event) {
        $('.progress .bar.text-no-15').each(function (index) {
            $(this).attr('data-percentage', "50");
        });
        $('.progress .bar.text-filled-15').each(function (index) {
            $(this).attr('data-percentage', "50");
        });
        $('.progress .bar.text-centered-15').each(function (index) {
            $(this).attr('data-percentage', "50");
        });
        $('.progress .bar.text-no-15').progressbar();
        $('.progress .bar.text-filled-15').progressbar({
            display_text: 1
        });
        $('.progress .bar.text-centered-15').progressbar({
            display_text: 2
        });
    });
    $('#hpMulti-100-trigger').on('click', function (event) {
        $('.progress .bar.text-no-15').each(function (index) {
            $(this).attr('data-percentage', "100");
        });
        $('.progress .bar.text-filled-15').each(function (index) {
            $(this).attr('data-percentage', "100");
        });
        $('.progress .bar.text-centered-15').each(function (index) {
            $(this).attr('data-percentage', "100");
        });
        $('.progress .bar.text-no-15').progressbar();
        $('.progress .bar.text-filled-15').progressbar({
            display_text: 1
        });
        $('.progress .bar.text-centered-15').progressbar({
            display_text: 2
        });
    });
	
	// VERTICAL - DEFAULT
	// ------------------------------------------------------------------------------------------------ * -->
    $('#vpDefault-trigger').on('click', function (event) {
        $('.progress .bar.text-no-3').progressbar();
        $('.progress .bar.text-filled-3').progressbar({
            display_text: 1
        });
        $('.progress .bar.text-centered-3').progressbar({
            display_text: 2
        });
    });
    $('#vpAll-trigger').on('click', function (event) {
        $('.progress .bar.text-no-4').progressbar();
		
		$('.progress .bar.text-no-4-1').progressbar({
			update: function (current_percentage) {
				$('#label-update4-1').text(current_percentage +'%');
            },
            done: function (current_percentage) {
                $('#label-done4-1').text('Bar-1 OK!');
            }
        });
		$('.progress .bar.text-no-4-2').progressbar({
			transition_delay: 4000,
			update: function (current_percentage) {
                $('#label-update4-2').text(current_percentage +'%');
            },
            done: function (current_percentage) {
                $('#label-done4-2').text('Bar-2 OK!');
            }
        });
		$('.progress .bar.text-no-4-3').progressbar({
			transition_delay: 8000,
			update: function (current_percentage) {
                $('#label-update4-3').text(current_percentage +'%');
            },
            done: function (current_percentage) {
                $('#label-done4-3').text('Bar-3 OK!');
            }
        });
		$('.progress .bar.text-no-4-4').progressbar({
			transition_delay: 12000,
			update: function (current_percentage) {
                $('#label-update4-4').text(current_percentage +'%');
            },
            done: function (current_percentage) {
                $('#label-done4-4').text('Bar-4 OK!');
            }
        });
		
		$('.progress .bar.text-filled-4').progressbar({
            use_percentage: false,
            refresh_speed: 500,
            display_text: 1
        });
        $('.progress .bar.text-centered-4').progressbar({
            use_percentage: false,
            refresh_speed: 500,
            display_text: 2
        });
    });
	
	// VERTICAL - ALL
	// ------------------------------------------------------------------------------------------------ * -->
    $('#v-delay-trigger').on('click', function (event) {
        $('.progress .bar.text-no-10').progressbar({
            transition_delay: 1500
        });
        $('.progress .bar.text-filled-10').progressbar({
            transition_delay: 1500,
            display_text: 1
        });
        $('.progress .bar.text-centered-10').progressbar({
            transition_delay: 1500,
            display_text: 2
        });
    });
    $('#v-value-trigger').on('click', function (event) {
        $('.progress .bar.text-no-11').progressbar({
            use_percentage: false
        });
        $('.progress .bar.text-filled-11').progressbar({
            use_percentage: false,
            display_text: 1
        });
        $('.progress .bar.text-centered-11').progressbar({
            use_percentage: false,
            display_text: 2
        });
    });
    $('#v-transition-speed-trigger').on('click', function (event) {
        $('.progress .bar.text-no-12').progressbar({
            use_percentage: false,
            refresh_speed: 500
        });
        $('.progress .bar.text-filled-12').progressbar({
            use_percentage: false,
            refresh_speed: 500,
            display_text: 1
        });
        $('.progress .bar.text-centered-12').progressbar({
            use_percentage: false,
            refresh_speed: 500,
            display_text: 2
        });
    });
    $('#v-callback-trigger').on('click', function (event) {
        $('.progress .bar.text-centered-13-1').progressbar({
            update: function (current_percentage) {
                $('#v-callback-update-1').text(current_percentage);
            },
            done: function (current_percentage) {
                $('#v-callback-done-1').text('done!');
            },
            display_text: 2
        });
        $('.progress .bar.text-centered-13-2').progressbar({
            update: function (current_percentage) {
                $('#v-callback-update-2').text(current_percentage);
            },
            done: function (current_percentage) {
                $('#v-callback-done-2').text('done!');
            },
            display_text: 2
        });
        $('.progress .bar.text-centered-13-3').progressbar({
            update: function (current_percentage) {
                $('#v-callback-update-3').text(current_percentage);
            },
            done: function (current_percentage) {
                $('#v-callback-done-3').text('done!');
            },
            display_text: 2
        });
        $('.progress .bar.text-centered-13-4').progressbar({
            update: function (current_percentage) {
                $('#v-callback-update-4').text(current_percentage);
            },
            done: function (current_percentage) {
                $('#v-callback-done-4').text('done!');
            },
            display_text: 2
        });
    });
	
	// ERROR
	// ------------------------------------------------------------------------------------------------ * -->
    $('#v-error-trigger').on('click', function (event) {
        $('.progress .bar.text-centered-14-1').progressbar({
            fail: function (error_message) {
                $('#v-error-fail-1').show(100).text(error_message);
            },
            use_percentage: false,
            display_text: 2
        });
        $('.progress .bar.text-centered-14-2').progressbar({
            fail: function (error_message) {
                $('#v-error-fail-2').show(100).text(error_message);
            },
            display_text: 2
        });
    });
	
});