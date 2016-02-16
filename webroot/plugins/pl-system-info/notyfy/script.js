/* 
 * Authors: Nedim Arabacı (http://ned.im)
 */
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
                                                        text: 'Your transaction is committed. <strong>Merry Christmas</strong>',
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