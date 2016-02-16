var notes = [];

notes['alert'] = 'Best check yo self, you\'<strong>re not looking too good</strong>.';
notes['error'] = '<strong>Change a few things up and try submitting again.</strong> This Error message.';
notes['success'] = 'You <strong>successfully</strong> read this important alert message.';
notes['information'] = 'This alert needs your attention, but it\'s not super <strong>important</strong>.';
notes['warning'] = '<strong>Warning!</strong> Best check yo self, you\'re not looking too good.';
notes['confirm'] = 'Do you want to continue?';



$(document).ready(function () {

    var n = notyfy({
        text: '<h4>Hi!</h4> <strong>Added notification!</strong> Catch me if you can!',
        type: 'success',
        layout: 'topCenter',
        theme: 'boolight',
        closeWith: ['hover'],
        events: {
            hidden: function () {
                notyfy({
                    text: ' <h4><i class="fontello-icon-emo-happy f28"></i> Opss! </h4> Try again...',
                    type: 'information',
                    layout: 'centerRight',
                    closeWith: ['hover'],
                    events: {
                        hidden: function () {
                            notyfy({
                                text: '<i class="fontello-icon-emo-wink f26"></i> <strong>Hehe!</strong> Sorry, again nothing. You can catch me?',
                                type: 'warning',
                                layout: 'bottomRight',
                                closeWith: ['hover'],
                                events: {
                                    hidden: function () {
                                        notyfy({
                                            text: '<h4><i class="fontello-icon-emo-devil f26"></i> Ouuu!</h4> Nothing. Click on a button.',
                                            type: 'alert',
                                            layout: 'center',
                                            buttons: [{
                                                addClass: 'btn btn-success btn-small',
                                                text: 'Confirm',
                                                onClick: function ($notyfy) {
                                                    // this = button element
                                                    // $notyfy = $notyfy element

                                                    $notyfy.close();
                                                    notyfy({
                                                        text: 'Your transaction is committed. <strong>Happy New Year 2013</strong>',
                                                        type: 'success'
                                                    });
                                                }
                                            }]
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    });

    $('.btn.runner').click(function () {

        var self = $(this);

        if(self.data('layout') == 'inline') {
            $(self.data('custom')).notyfy({
                text: notes[self.data('type')],
                type: self.data('type'),
                dismissQueue: true,
                buttons: (self.data('type') != 'confirm') ? false : [{
                    addClass: 'btn btn-blue btn-small',
                    text: '<i class="fontello-icon-check"></i> Ok',
                    onClick: function ($notyfy) {
                        $notyfy.close();
                        $(self.data('custom')).notyfy({
                            force: true,
                            text: 'You clicked "<strong>Ok</strong>" button <i class="fontello-icon-check"></i>',
                            type: 'success'
                        });
                    }
                }, {
                    addClass: 'btn btn-red btn-small',
                    text: 'Cancel',
                    onClick: function ($notyfy) {
                        $notyfy.close();
                        $(self.data('custom')).notyfy({
                            force: true,
                            text: 'You clicked "Cancel" button',
                            type: 'error'
                        });
                    }
                }]
            });
            return false;
        }

        notyfy({
            text: notes[self.data('type')],
            type: self.data('type'),
            dismissQueue: true,
            layout: self.data('layout'),
            buttons: (self.data('type') != 'confirm') ? false : [{
                addClass: 'btn btn-blue btn-small',
                text: '<i class="fontello-icon-check"></i> Ok',
                onClick: function ($notyfy) {
                    $notyfy.close();
                    notyfy({
                        force: true,
                        text: '<i class="fontello-icon-check"></i> You clicked "<strong>Ok</strong>" button',
                        type: 'success',
                        layout: self.data('layout')
                    });
                }
            }, {
                addClass: 'btn btn-red btn-small',
                text: 'Cancel',
                onClick: function ($notyfy) {
                    $notyfy.close();
                    notyfy({
                        force: true,
                        text: '<strong>You clicked "Cancel" button<strong>',
                        type: 'error',
                        layout: self.data('layout')
                    });
                }
            }]
        });
        return false;
    });

});



$(function () {
/*
    // global setting override
    $.extend($.gritter.options, {
		class_name: 'gritter-light', // for light notifications (can be added directly to $.gritter.add too)
		position: 'bottom-right', // possibilities: bottom-left, bottom-right, top-left, top-right
		fade_in_speed: 100, // how fast notifications fade in (string or int)
		fade_out_speed: 100, // how fast the notices fade out
		time: 3000 // hang on the screen for...
	});
*/    
	$('#add-regular').click(function () {
		$.gritter.add({
			title: 'This is a regular notice!',// the heading of the notification
			text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.',
			image: 'assets/img/demo/demo-avatar9604.jpg',// (string | optional) the image to display on the left
			sticky: false,// if you want it to fade out on its own or just sit there
			time: 1500, // the time you want it to be alive for before fading out
			position: 'bottom-right',
		});
		return false;
	});
	
    $('#add-sticky').click(function () {
		var unique_id = $.gritter.add({
            title: 'This is a sticky notice!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            image: 'assets/img/demo/demo-avatar9604.jpg',
            sticky: true,
            time: '',
            class_name: 'my-sticky-class' // the class name you want to apply to that specific message
        });

        // You can have it return a unique id, this can be used to manually remove it later using
        /*
			setTimeout(function(){
				$.gritter.remove(unique_id, {
					fade: true,
					speed: 'slow'
				});
			}, 6000)
		*/

        return false;

    });

    $('#add-max').click(function () {
		$.gritter.add({
            title: 'This is a notice with a max of 3 on screen at one time!',
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            image: 'assets/img/demo/demo-avatar9604.jpg',
            sticky: false,
            // (function) before the gritter notice is opened
            before_open: function () {
                if($('.gritter-item-wrapper').length == 3) {
                    // Returning false prevents a new gritter from opening
                    return false;
                }
            }
        });

        return false;

    });

    $('#add-without-image').click(function () {
		$.gritter.add({
            title: 'This is a notice without an image!',
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.'
        });
		return false;
    });

    $('#add-gritter-light').click(function () {

        $.gritter.add({
            title: 'This is a light notification',
            text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
            class_name: 'gritter-light',
            time: 1500
        });
		return false;
    });

    $('#add-with-callbacks').click(function () {

        $.gritter.add({
            title: 'This is a notice with callbacks!',
            text: 'The callback is...',
            // (function | optional) function called before it opens
            before_open: function () {
                alert('I am called before it opens');
            },
            // (function | optional) function called after it opens
            after_open: function (e) {
                alert("I am called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
            },
            // (function | optional) function called before it closes
            before_close: function (e, manual_close) {
                var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
                alert("I am called before it closes: I am passed the jQuery object for the Gritter element... \n" + manually);
            },
            // (function | optional) function called after it closes
            after_close: function (e, manual_close) {
                var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
                alert('I am called after it closes. ' + manually);
            }
        });
		return false;
    });

    $('#add-sticky-with-callbacks').click(function () {
		$.gritter.add({
            title: 'This is a sticky notice with callbacks!',
            text: 'Sticky sticky notice.. sticky sticky notice...',
            sticky: true,
            before_open: function () {
                alert('I am a sticky called before it opens');
            },
            after_open: function (e) {
                alert("I am a sticky called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
            },
            before_close: function (e) {
                alert("I am a sticky called before it closes: I am passed the jQuery object for the Gritter element... \n" + e);
            },
            after_close: function () {
                alert('I am a sticky called after it closes');
            }
        });
		return false;
	});

    $("#remove-all").click(function () {
		$.gritter.removeAll();
        return false;
	});

    $("#remove-all-with-callbacks").click(function () {
		$.gritter.removeAll({
            before_close: function (e) {
                alert("I am called before all notifications are closed.  I am passed the jQuery object containing all  of Gritter notifications.\n" + e);
            },
            after_close: function () {
                alert('I am called after everything has been closed.');
            }
        });
        return false;
	});
	
	
	$('#add-dark-image').click(function () {
		$.gritter.add({
			title: 'This notice with image',
			text: 'This will fade out after a certain amount of time.',
			image: 'assets/img/demo/demo-avatar9604.jpg',
			sticky: false,
			time: 2000
		});
		return false;
	});
	
	$('#add-light-image').click(function () {
		$.gritter.add({
			title: 'This notice with image',
			text: 'This will fade out after a certain amount of time.',
			image: 'assets/img/demo/demo-avatar9604.jpg',
			sticky: false,
			time: 2000,
			class_name: 'gritter-light'
		});
		return false;
	});
	
	


});

$(document).ready(function () {
	
	
	
	setTimeout(function () {
		$.gritter.add({
			title: 'This notice with image',
			text: 'This will fade out after a certain amount of time.',
			image: 'assets/img/demo/demo-avatar9604.jpg',
			sticky: false,
			time: 2000
		});
		return false;
	}, 1000);
	
	setTimeout(function () {
		$.gritter.add({
			title: 'This notice with image',
			text: 'This will fade out after a certain amount of time.',
			image: 'assets/img/demo/demo-avatar9604.jpg',
			sticky: false,
			time: 2000,
			class_name: 'gritter-light'
		});
		return false;
	}, 4000);
	
});