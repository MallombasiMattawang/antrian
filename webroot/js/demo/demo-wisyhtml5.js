/*** -----------------------------------------------------------------------------------------------

	ADMIN TEMPLATE | Boo Admin Template
	----------------------------------------

	JS - Demo Modal
	
	-------------------------------------------------------------------------------------------------------------------------------- ***/



	
	
// MODAL DEMO for BOOTBOX
// ------------------------------------------------------------------------------------------------ * -->
$(function () {
        

// FORM - WYSIHTML5 BOOTSTRAP EDITOR
        // ------------------------------------------------------------------------------------------------ * -->
		var myCustomTemplates = {
		        "font-styles": function (locale) {
		                return "<li class='dropdown'>" + 
						"<a class='btn btn-navi dropdown-toggle' data-toggle='dropdown' href='#'>" + 
						"<i class='fontello-icon-font'></i>&nbsp;<span class='current-font'>" + locale.font_styles.normal + "</span>&nbsp;<b class='caret'></b>" + 
						"</a>" + 
						"<ul class='dropdown-menu'>" + 
							"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='div'>" + locale.font_styles.normal + "</a></li>" + 
							"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='p'>" + locale.font_styles.normal + "</a></li>" + 
							"<li><a data-wysihtml5-command='formatInline' data-wysihtml5-command-value='span'>" + locale.font_styles.normal + "</a></li>" + 
							"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h1'>" + locale.font_styles.h1 + "</a></li>" + 
							"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h2'>" + locale.font_styles.h2 + "</a></li>" + 
							"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h3'>" + locale.font_styles.h3 + "</a></li>" + 
						"</ul>" + 
						"</li>";
		        },

		        "color": function (locale) {
		                return "<li class='dropdown'>" + 
						"<a class='btn btn-navi dropdown-toggle' data-toggle='dropdown' href='#'>" + 
						"<span class='current-color'>" + locale.colours.black + "</span>&nbsp;<b class='caret'></b>" + 
						"</a>" + 
						"<ul class='dropdown-menu'>" + 
						"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='black'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='black'>" + 
						locale.colours.black + "</a></li>" + 
						"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='silver'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='silver'>" + 
						locale.colours.silver + "</a></li>" + 
						"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='gray'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='gray'>" + 
						locale.colours.gray + "</a></li>" + 
						"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='maroon'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='maroon'>" + 
						locale.colours.maroon + "</a></li>" + 
						"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='red'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='red'>" + 
						locale.colours.red + "</a></li>" + 
						"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='purple'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='purple'>" + 
						locale.colours.purple + "</a></li>" + 
						"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='green'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='green'>" + 
						locale.colours.green + "</a></li>" + 
						"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='olive'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='olive'>" + 
						locale.colours.olive + "</a></li>" + 
						"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='navy'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='navy'>" + 
						locale.colours.navy + "</a></li>" + 
						"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='blue'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='blue'>" + 
						locale.colours.blue + "</a></li>" + 
						"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='orange'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='orange'>" + 
						locale.colours.orange + "</a></li>" + 
						"</ul>" + 
						"</li>";
		        },

		        "emphasis": function (locale) {
		                return "<li>" + 
						"<div class='btn-group'>" + 
						"<a class='btn btn-navi btn-glyph' data-wysihtml5-command='bold' title='CTRL+B'><i class='aweso-icon-bold'></i></a>" + 
						"<a class='btn btn-navi btn-glyph' data-wysihtml5-command='italic' title='CTRL+I'><i class='aweso-icon-italic'></i></a>" + 
						"<a class='btn btn-navi btn-glyph' data-wysihtml5-command='underline' title='CTRL+U'><i class='aweso-icon-underline'></i></a>" + 
						"</div>" + 
						"</li>";
		        },

		        "lists": function (locale) {
		                return "<li>" + 
						"<div class='btn-group'>" + 
						"<a class='btn btn-navi' data-wysihtml5-command='insertUnorderedList' title='" + locale.lists.unordered + "'><i class='fontello-icon-list'></i></a>" + 
						"<a class='btn btn-navi' data-wysihtml5-command='insertOrderedList' title='" + locale.lists.ordered + "'><i class='fontello-icon-th-list-1'></i></a>" + 
						"<a class='btn btn-navi' data-wysihtml5-command='Outdent' title='" + locale.lists.outdent + "'><i class='fontello-icon-indent-right-1'></i></a>" + 
						"<a class='btn btn-navi' data-wysihtml5-command='Indent' title='" + locale.lists.indent + "'><i class='fontello-icon-indent-left-1'></i></a>" + 
						"</div>" + 
						"</li>";
		        },

		        "link": function (locale) {
		                return "<li>" + 
						"<div class='bootstrap-wysihtml5-insert-link-modal modal hide fade'>" + 
						"<div class='modal-header'>" + 
						"<a class='close' data-dismiss='modal'>&times;</a>" + "<h3>" + locale.link.insert + "</h3>" + "</div>" + 
						"<div class='modal-body'>" + 
						"<input value='http://' class='bootstrap-wysihtml5-insert-link-url input-xlarge'>" + "</div>" + 
						"<div class='modal-footer'>" + 
						"<a href='#' class='btn' data-dismiss='modal'>" + locale.link.cancel + "</a>" + 
						"<a href='#' class='btn btn-primary' data-dismiss='modal'>" + locale.link.insert + "</a>" + "</div>" + 
						"</div>" + 
						"<a class='btn btn-navi' data-wysihtml5-command='createLink' title='" + locale.link.insert + "'><i class='fontello-icon-link'></i></a>" + 
						"</li>";
		        },

		        "image": function (locale) {
		                return "<li>" + 
						"<div class='bootstrap-wysihtml5-insert-image-modal modal hide fade'>" + 
						"<div class='modal-header'>" + 
						"<a class='close' data-dismiss='modal'>&times;</a>" + "<h3>" + locale.image.insert + "</h3>" + "</div>" + 
						"<div class='modal-body'>" + 
						"<input value='http://' class='bootstrap-wysihtml5-insert-image-url input-xlarge'>" + "</div>" + 
						"<div class='modal-footer'>" + 
						"<a href='#' class='btn' data-dismiss='modal'>" + locale.image.cancel + "</a>" + 
						"<a href='#' class='btn btn-primary' data-dismiss='modal'>" + locale.image.insert + "</a>" + "</div>" + 
						"</div>" + 
						"<a class='btn btn-navi' data-wysihtml5-command='insertImage' title='" + locale.image.insert + "'><i class='fontello-icon-picture'></i></a>" + 
						"</li>";
		        },

		        "html": function (locale) {
		                return "<li>" + 
						"<div class='btn-group'>" + 
						"<a class='btn btn-navi' data-wysihtml5-action='change_view' title='" + locale.html.edit + "'><i class='fontello-icon-code-1'></i></a>" + 
						"</div>" + 
						"</li>";
		        }
		};
		
		$('#wysiBooEditor').wysihtml5();
		$('#area-1').wysihtml5();
		$('#area-2').wysihtml5();
		$('#area-3').wysihtml5();
		$('#area-4').wysihtml5();
		$('#area-5').wysihtml5();
		$('#area-6').wysihtml5();
		$('#wysiBooEditorBlack').wysihtml5({
		        customTemplates: myCustomTemplates,
				stylesheets: ["assets/plugins/bootstrap-wysihtml5/src/bootstrap-wysihtml5-iframe-theme.css"],
		});

		$('#wysiBooEditorCustom').wysihtml5({
		        "font-styles": true,
		        "emphasis": true,
		        "color": true,
		        "lists": true,
		        "html": true,
		        "link": true,
		        "image": true,
		        customTemplates: myCustomTemplates,
				// Give the editor a name, the name will also be set as class name on the iframe and on the iframe's body
				name:                 null,
				// Whether the editor should look like the textarea (by adopting styles)
				style:                true,
				// Id of the toolbar element, pass falsey value if you don't want any toolbar logic
				toolbar:              null,
				// Whether urls, entered by the user should automatically become clickable-links
				autoLink:             true,
				// Object which includes parser rules (set this to examples/rules/spec.json or your own spec, otherwise only span tags are allowed!)
				parserRules:          null,
				// Parser method to use when the user inserts content via copy & paste
				parser:               wysihtml5.dom.parse || Prototype.K,
				// Class name which should be set on the contentEditable element in the created sandbox iframe, can be styled via the 'stylesheets' option
				composerClassName:    "wysihtml5-editor",
				// Class name to add to the body when the wysihtml5 editor is supported
				bodyClassName:        "wysihtml5-MYeditor",
				// Array (or single string) of stylesheet urls to be loaded in the editor's iframe
				stylesheets:          ["assets/plugins/bootstrap-wysihtml5/src/bootstrap-wysihtml5-iframe-theme.css"],
				// Placeholder text to use, defaults to the placeholder attribute on the textarea element
				placeholderText:      null,
				// Whether the composer should allow the user to manually resize images, tables etc.
				allowObjectResizing:  true,
				// Whether the rich text editor should be rendered on touch devices (wysihtml5 >= 0.3.0 comes with basic support for iOS 5)
				supportTouchDevices:  true
		});		
		
		
});