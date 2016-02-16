/*** -----------------------------------------------------------------------------------------------

	ADMIN TEMPLATE | Boo Admin Template
	----------------------------------------

	JS - Demo Modal
	
	-------------------------------------------------------------------------------------------------------------------------------- ***/

// MODAL DEMO for MODALMANAGER
// ------------------------------------------------------------------------------------------------ * -->
	//$.fn.modal.defaults.spinner = '<img class="loading-spinner" src="img/ajax-loader.gif" />';
	//$.fn.modalmanager.defaults.spinner = '<img class="loading-spinner" src="img/ajax-loader.gif" />';
	
	/*$.fn.modalmanager.defaults = {
		backdrop: true,
		spinner: '<div class="loading-spinner" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>'
	}*/
	
	// DYNAMIC 
	// ----------------------------------------- * -->
	$(function() {
		$('#dynamicModal').click(function () {
				var tmpl = [
				// tabindex is required for focus
				'<div class="modal hide fade" tabindex="-1">',
					'<div class="modal-header">',
						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>',
						'<h4>Modal header</h4>',
					'</div>',
					'<div class="modal-body">',
						'<p>Test - this window is generated from a template</p>',
					'</div>',
					'<div class="modal-footer">',
						'<a href="#" data-dismiss="modal" class="btn btn-boo">Close</a>',
						'<a href="#" class="btn btn-blue">Save changes</a>',
					'</div>',
				'</div>'].join('');
		
				$(tmpl).modal();
		});
	});
	
	// AJAX CONTENT
	// ----------------------------------------- * -->
	// NOTE: modal must be in the DOM before calling .load()
	$(function() {
		var $modal = $('#ajax-modal');
		
		$('#ajaxModal').on('click', function() {
				// create the backdrop and wait for next modal to be triggered
				$('body').modalmanager('loading');
		
				setTimeout(function () {
						$modal.load('assets/data/modal_ajax_test.html', '', function () {
								$modal.modal();
						});
				}, 1000);
		})
		
		$modal.on('click', '.update', function() {
				$modal.modal('loading');
				setTimeout(function() {
						$modal.modal('loading')
								.find('.modal-body')
								.prepend('<div class="alert alert-info fade in">' +
								'Data updated! <button type="button" class="close" data-dismiss="alert">&times;</button>' +
								'</div>');
				}, 1000);
		});
	});

	
// MODAL DEMO for BOOTBOX
// ------------------------------------------------------------------------------------------------ * -->
$(function() {
    var demos = {};

    $(document).on("click", "a[data-bb]", function(e) {
        e.preventDefault();
        var type = $(this).data("bb");

        if (typeof demos[type] === 'function') {
            demos[type]();
        }
    });

    // let's namespace the demo methods; it makes them easier
    // to invoke
	demos.alert = function() {
		bootbox.alert("Hello world!");
	};
	
	demos.confirm = function() {
		bootbox.confirm("Are you sure?", function(result) {
			//console.log("Confirm result: "+result);
			var n = notyfy({
				text: 'Confirm result: <strong>'  + result + '</strong>',
				type: 'information',
				layout: 'topCenter',
				theme: 'boolight'
			});		
		});
	};
	
	demos.prompt = function() {
        bootbox.prompt("What is your name?", function(result) {
            if (result === null) {
                //console.log("Prompt dismissed");
				var n = notyfy({
					text: 'Prompt dismissed',
					type: 'error',
					layout: 'topRight',
					theme: 'boolight'
				});	
            } else {
                //console.log('Hi <b>' + result + '</b>');
				var n = notyfy({
					text: 'Hi <b>' + result + '</b>',
					type: 'success',
					layout: 'topRight',
					theme: 'boolight'
				});
            }
        });
    };
	
	demos.alert_button = function() {
		bootbox.alert("This alert has custom button text", "So it does!");
	};
	
	demos.alert_callback = function() {
		bootbox.alert("Hello world!", function() {
			//console.log("Hello world callback");
			$.gritter.add({
				title: 'Alert callback',
				text: 'Hello world callback - use Gritter',
				class_name: 'gritter-light'
			});
		});
	};
	
	demos.alert_confirm_buttons = function() {
		bootbox.confirm("This confirm has custom buttons - see?", "No", "Yes!", function(result) {
			if (result) {
				console.log("Well done!");
				$.gritter.add({
					title: 'Well done!',
					text: 'that you&rsquo;ve confirmed that it',
					image: 'assets/img/demo/demo-avatar9604.jpg',
					sticky: false,
					time: 3000,
					class_name: 'gritter-light'
				});
			} else {
				$.gritter.add({
					title: 'Oh no!',
					text: 'try again!',
					image: 'assets/img/demo/_demo-avatar9604.jpg',
					sticky: false,
					time: 3000
				});
			}
		});
	};

	demos.dialog = function() {
        bootbox.dialog("I am a custom dialog", [{
				"label": "Success!",
				"class": "btn-green",
				"callback": function () {
						var n = notyfy({
							text: 'great <b> SUCCESS </b>',
							type: 'success',
							layout: 'topCenter',
							theme: 'boolight'
						});
				}
		}, {
				"label": "Danger!",
				"class": "btn-red",
				"callback": function () {
						var n = notyfy({
							text: 'uh oh, look out!',
							type: 'error',
							layout: 'top',
							theme: 'boolight'
						});
				}
		}, {
				"label": "Click ME!",
				"class": "btn-blue",
				"callback": function () {
						var n = notyfy({
							text: 'Primary button',
							type: 'information',
							layout: 'topCenter',
							theme: 'boolight'
						});
				}
		}, {
				"label": "Just a button..."
		}, {
				"Condensed format": function () {
						var n = notyfy({
							text: 'condensed',
							type: 'topCenter',
							layout: 'center',
							theme: 'boolight'
						});
				}
		}]);
    };
	
	demos.multiple = function() {
		bootbox.alert("Prepare for multiboxes...", "Argh!");
		setTimeout(function () {
			bootbox.confirm("Are you having fun?", "No :(", "Yeah!", function (result) {
				if(result) {
					bootbox.alert("Glad to hear it!");
				} else {
					bootbox.alert("Aww boo. Click the button below to get rid of all these popups", function () {
						bootbox.hideAll();
					});
				}
			});
		}, 1500);
	};
	
	demos.dialog_close = function() {
        var box = bootbox.alert("This dialog will close in two seconds");
        setTimeout(function () {
        	box.modal('hide');
        }, 2000);
    };
	
	demos.generic_modal = function() {
    	bootbox.modal('<img src="http://dummyimage.com/520x100/ccc/fff" alt="Generic"/> <p>Lorem ipsum dolor sit amet consectetuer tincidunt leo facilisi orci venenatis. Ante Morbi orci velit dui malesuada sit at facilisis orci vel. Eu dictumst felis elit lobortis Nullam nascetur quam et tempor ut.</p>', 'Modal popup!');
    };
	
	demos.dynamic = function() {
		var str = $("<p>This content is actually a jQuery object, which will change in 3 seconds...</p>");
		bootbox.alert(str);
		setTimeout(function () {
			str.html("See?");
		}, 3000);
	};
	
	demos.icons_explicit = function() {
		bootbox.dialog("Custom dialog with icons being passed explicitly into <b>bootbox.dialog</b>.", [{
			"label": "Success!",
			"class": "btn-green",
			"icon": "fontello-icon-check"
		}, {
			"label": "Danger!",
			"class": "btn-red",
			"icon": "fontello-icon-attention"
		}, {
			"label": "Click ME!",
			"class": "btn-blue",
			"icon": "fontello-icon-target-2"
		}, {
			"label": "Just a button...",
			"class": "btn-boo",
			"icon": "fontello-icon-picture-1"
		}]);
	};
	
	demos.icons_override = function() {
    	bootbox.setIcons({
    		"OK": "fontello-icon-check",
        	"CANCEL": "fontello-icon-block-2",
        	"CONFIRM": "fontello-icon-ok-4"
        });
		bootbox.confirm("This dialog invokes <b>bootbox.setIcons()</b> to set icons for the standard three labels of OK, CANCEL and CONFIRM, before calling a normal <b>bootbox.confirm</b>", function (result) {
			bootbox.alert("This dialog is just a standard <b>bootbox.alert()</b>. <b>bootbox.setIcons()</b> only needs to be set once to affect all subsequent calls", function () {
				bootbox.setIcons(null);
			});
        });
    };
	
	demos.no_close_button = function() {
    	bootbox.dialog("If a button's handler now explicitly returns <b>false</b>, the dialog will not be closed. Note that if anything <b>!== false</b> - e.g. nothing, true, null etc - is returned, the dialog will close.", [{
        	"I'll close on click": function () {
				//console.log("close on click");
					var n = notyfy({
						text: 'close on click',
						type: 'information',
						layout: 'top',
						theme: 'boolight'
					});
						return true;
					},
            }, {
               "I won't!": function () {
               		//console.log("returning false...");
					var n = notyfy({
						text: 'returning false...',
						type: 'information',
						layout: 'top',
						theme: 'boolight'
					});
            	return false;
            }
        }]);
    };
	
	demos.prompt_default = function() {
    	bootbox.prompt("What is your favourite Admin template?", "Cancel", "OK", function (result) {
			$.gritter.add({
				title: 'Notice',
				text: 'You wrote <strong>' + result + '</strong> Thanks for your choice. Demo app can be found at this url <a href="#">Boo Admin</a>.',
				image: 'assets/ico/boo-57.png',
				sticky: false,
				time: 6000,
			});
        }, "Boo Admin");
    };

	demos.onescape = function() {
		bootbox.dialog("Dismiss this dialog with the escape key...", {
			"label": "Press Escape!",
			"class": "btn-red",
			"callback": function () {
				console.log("Oi! Press escape!");
			}
		}, {
			"onEscape": function () {
				bootbox.alert("This alert was triggered by the onEscape callback of the previous dialog", "Dismiss");
			}
		});
	};
	
	demos.nofade = function() {
		bootbox.dialog("This dialog does not fade in or out, and thus does not depend on <strong>bootstrap-transitions.js</strong>.", {
			"OK": function () {}
		}, {
			"animate": false
		});
	};
	
	demos.nobackdrop = function() {
        bootbox.dialog("This dialog does not have a backdrop element", {
        	"OK": function () {}
        }, {
            "backdrop": false
        });
    };

});

