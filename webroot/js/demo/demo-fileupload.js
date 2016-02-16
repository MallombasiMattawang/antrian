/*
 * jQuery File Upload Plugin JS Example for Multiple File Upload Widgets on the same page
 *
 * jslint nomen: true, unparam: true, regexp: true
/* global $, window, document */

$(document).bind('drop dragover', function (e) {
		e.preventDefault();
		
		$(function () {
			'use strict';
			
			// define animate fot dropzone
			var dropZone = $('.fileupload-active .dropzone'), timeout = window.dropZoneTimeout;
			
			// set class for animate dropzone
			if(!timeout) {
					dropZone.addClass('in');
			} else {
					clearTimeout(timeout);
			}
			if(e.target === dropZone[0]) {
					dropZone.addClass('hover');
			} else {
					dropZone.removeClass('hover');
			}
			window.dropZoneTimeout = setTimeout(function () {
					window.dropZoneTimeout = null;
					dropZone.removeClass('in hover');
			}, 100);
						
			// Initialize the jQuery File Upload widget:
			$('.fileupload').each(function () {
				$(this).fileupload({
					// Uncomment the following to send cross-domain cookies:
					//xhrFields: {withCredentials: true}, var value = this.$element.attr('value');
					dropZone: $(this).find(".dropzone"),
					url: 'upload/php/',
					maxFileSize: 2000000, // 2MB
					limitMultiFileUploads: 5,
					process: {
						action: 'resize',
						maxWidth: 800,
						maxHeight: 600
					},
					acceptFileTypes:/(\.|\/)(pdf|docx|doc|xlsx|xls|rtf|txt|gif|jpe?g|png)$/i
				});
			});
			
			$('.fileupload-widget').fileupload({
				previewMaxWidth: 45
			});
		
		
		});

});