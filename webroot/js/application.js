(function ($, window, document, undefined) {

        // MAKE CODE PRETTY
        // ------------------------------------------------------------------------------------------------ * -->
        var $window = $(window)
        window.prettyPrint && prettyPrint();

        // CHANGE wrapper to table - ONLY DEMO
        // ------------------------------------------------------------------------------------------------ * -->
        $("#btnChangeWrapper1, #btnChangeWrapper2").click(function () {
                $('.widget').toggleClass('widget-simple widget-box');
        });

        // COLLAPSE - WIDGET HEADER
        // ------------------------------------------------------------------------------------------------ * -->
        // Collapsible widget	
        $('.widget-content.collapse')
                .on('shown', function (e) {
                $(e.target)
                        .parent('.widget-collapsible')
                        .children('.widget-header')
                        .removeClass('collapsed');
                $(e.target)
                        .prev('.widget-header')
                        .find('.widget-toggle')
                        .toggleClass('fontello-icon-publish fontello-icon-window');
        });

        $('.widget-content.collapse')
                .on('hidden', function (e) {
                $(e.target)
                        .parent('.widget-collapsible')
                        .children('.widget-header')
                        .addClass('collapsed');
                $(e.target)
                        .prev('.widget-header')
                        .find('.widget-toggle')
                        .toggleClass('fontello-icon-window fontello-icon-publish');
        });

        // BREADCRUMBS
        // ------------------------------------------------------------------------------------------------ * -->
        $('#breadcrumbs').xBreadcrumbs();

        // FORM - BOOTSTRAP SELECTPICKER
        // ------------------------------------------------------------------------------------------------ * -->
        $(function () {
				 $('.selectpicker').selectpicker();
		});
		
		// FORM - SELECT 2
        // ------------------------------------------------------------------------------------------------ * -->
        // select2 demo
		$(".selecttwo").select2({
                minimumResultsForSearch: 6,
				width: "off"
        });
        $(".selecttwo-s").select2();
		
        $(".selecttwo-full").select2({
				minimumResultsForSearch: 6,
                width: "100%"
        });
		
		$(".selecttwo-full-s").select2({
				width: "100%"
        });

        // selec2 tagging support demo	
        $("#customerTag").select2({
                tags: [{
                        'id': 1,
                                'text': 'Customer'
                }, {
                        'id': 16,
                                'text': 'Managing'
                }, {
                        'id': 23,
                                'text': 'Marketing'
                }, {
                        'id': 7,
                                'text': 'Support24'
                }, {
                        'id': 12,
                                'text': 'Supplier'
                }],
                tokenSeparators: [",", " "]
        })
                .select2("val", [1, 7])
                .on('change', function (event) {
                console.log(event.val.toString());
        });

        // selec2 tagging support demo	
        $("#articleTags, #metaArticleKeywords").select2({
                tags: [{
                        'id': 1,
                                'text': 'Design'
                }, {
                        'id': 16,
                                'text': 'Css'
                }, {
                        'id': 23,
                                'text': 'Bootstrap'
                }, {
                        'id': 7,
                                'text': 'Framework'
                }],
                tokenSeparators: [",", " "]
        });

        var accountGroupData = [{
                id: "wholesaler",
                text: "Wholesaler"
        }, {
                id: "retailer",
                text: "Retailer"
        }, {
                id: "suppliers",
                text: "Suppliers"
        }, {
                id: "manager",
                text: "Manager"
        }, {
                id: "wholesalecustomer",
                text: "Wholesale Customer"
        }, {
                id: "powers",
                text: "Powers"
        }]
        $("#accountGroup").select2({
                tags: accountGroupData,
                createSearchChoice: function (term, data) {
                        if($(data).filter(function () {
                                return this.text.localeCompare(term) === 0;
                        }).length === 0) {
                                return {
                                        id: term,
                                        text: term
                                };
                        }
                },
                width: "100%",
                multiple: true,
                placeholder: "Choose or enter group for account...",
                tokenSeparators: [",", " "]
        });

        // selec2 tagging support demo
        $("#taskTags, #taskTagsModal").select2({
                tags: ["one", "two", "three"],
                placeholder: "Select or Enter tag"
        });

        // FORM - UNIFORM PLUGIN 
        // ------------------------------------------------------------------------------------------------ * -->
        $("input.checkbox, input.radio, input:file.input-file").uniform({
                radioClass: 'radios' // edited class - the original radio
        });

        // FORM - INPUTMASK PLUGIN
        // ------------------------------------------------------------------------------------------------ * -->
        $("input.maskDate").inputmask("99/99/9999", {
                placeholder: "dd/mm/yyyy"
        });
        $("input.maskPhone").inputmask("(999) 999-9999", {
                completed: function () {
                        alert("Callback when completed");
                }
        });
        $("input.maskPhoneExt").inputmask("(999) 999-9999? x99999");
        $("input.maskPhoneInt").inputmask("+43 999 999 999");
        $("input.maskZipcode").inputmask("99999");
        $("input.maskTid").inputmask("99-9999999");
        $("input.maskSsn").inputmask("999-99-9999");
        $("input.maskProd").inputmask("a*-999-a999-a999");
        $("input.maskEye").inputmask("~9.99 ~9.99 999");
        $("input.maskPo").inputmask("MM: aaa-999-*****-9999");
        $("input.maskPct").inputmask("99%");
        $("input.maskAcid").inputmask("FP009-99999-2012");

        // FORM - ELASTIC TEXTAREA
        // ------------------------------------------------------------------------------------------------ * -->
        $('textarea.auto').elastic();
        $('textarea.auto').trigger('update');

        // BOOTSTRAP DATEPICKER
        // ------------------------------------------------------------------------------------------------ * -->
		$('.datepickers').datepicker();
        $('#articleCreated, #articleCreatedDate, #articlePublishingStart, #articlePublishingFinish, #datePickerVia').datepicker();
		
        // bootstrap datepicker demo
        $('#datePicker').datepicker({
                format: 'mm-dd-yyyy'
        });
		
        // bootstrap datepicker demo
        $('#DPV').click(function (e) {
                e.stopPropagation();
                $('#datePickerVia').datepicker('update', '10/10/12');
        });
		
        // bootstrap datepicker demo
        $('#datePickerComponent').datepicker();

        var startDate = new Date(2012, 1, 20);
        var endDate = new Date(2012, 1, 25);
        $('#DTP1').datepicker()
                .on('changeDate', function (ev) {
                if(ev.date.valueOf() > endDate.valueOf()) {
                        $('#alert').show().find('.msg').text('The start date can not be greater then the end date');
                } else {
                        $('#alert').hide();
                        startDate = new Date(ev.date);
                        $('#startDate').text($('#DTP1').data('date'));
                }
                $('#DTP1').datepicker('hide');
        });
		
        // bootstrap datepicker demo
        $('#DTP2').datepicker()
                .on('changeDate', function (ev) {
                if(ev.date.valueOf() < startDate.valueOf()) {
                        $('#alert').show().find('.msg').text('The end date can not be less then the start date');
                } else {
                        $('#alert').hide();
                        endDate = new Date(ev.date);
                        $('#endDate').text($('#DTP2').data('date'));
                }
                $('#DTP2').datepicker('hide');
        });
		
        // bootstrap datepicker demo
        $('#datePickerToDiv').datepicker()
                .on('changeDate', function (ev) {
                showDate = new Date(ev.date);
                $('#showDate').text($('#datePickerToDiv').data('date'));
        });
		
		// bootstrap datepicker demo
        $('#DPTD').click(function () {
                $('#datePickerToDiv').datepicker('update', '01-09-1969');
                $('#showDate').text($('#datePickerToDiv').data('date'));
        });

        // BOOTSTRAP DATERANGEPICKER
        // ------------------------------------------------------------------------------------------------ * -->
        		
        $('.datepicker-range').daterangepicker();

        // bootstrap daterangepicker direction the dropdown expands
        $('#accountForce').daterangepicker({
                opens: 'left'
        });
		/*
		// bootstrap daterangepicker demo
        $('#articlePostFromTo').daterangepicker({
                opens: 'right'
        });*/

        // bootstrap daterangepicker pre-defined Ranges
        $('#customRange').daterangepicker({
                opens: 'left',
                format: 'dd/MM/yyyy',
                ranges: {
                        'Today': ['today', 'today'],
                                'Yesterday': ['yesterday', 'yesterday'],
                                'Last 7 Days': [Date.today().add({
                                days: -6
                        }), 'today'],
                                'Last 30 Days': [Date.today().add({
                                days: -29
                        }), 'today'],
                                'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                                'Last Month': [Date.today().moveToFirstDayOfMonth().add({
                                months: -1
                        }), Date.today().moveToFirstDayOfMonth().add({
                                days: -1
                        })]
                }

        });

        // bootstrap daterangepicker demo
        $('#selectrange').daterangepicker();

        // bootstrap daterangepicker demo
        $('#reportdate').daterangepicker({
                ranges: {
                        'Today': ['today', 'today'],
                                'Yesterday': ['yesterday', 'yesterday'],
                                'Last 7 Days': [Date.today().add({
                                days: -6
                        }), 'today'],
                                'Last 30 Days': [Date.today().add({
                                days: -29
                        }), 'today'],
                                'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                                'Last Month': [Date.today().moveToFirstDayOfMonth().add({
                                months: -1
                        }), Date.today().moveToFirstDayOfMonth().add({
                                days: -1
                        })]
                }
        },

        function (start, end) {
                $('#reportdate span').html(start.toString('MMMM d, yyyy') + ' - ' + end.toString('MMMM d, yyyy'));
        });

        // bootstrap daterangepicker demo
        $('#reportSelect').daterangepicker({
                changed: true,
                opens: 'left',
                ranges: {
                        'Today': ['today', 'today'],
                                'Yesterday': ['yesterday', 'yesterday'],
                                'Last 7 Days': [Date.today().add({
                                days: -6
                        }), 'today'],
                                'Last 30 Days': [Date.today().add({
                                days: -29
                        }), 'today'],
                                'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                                'Last Month': [Date.today().moveToFirstDayOfMonth().add({
                                months: -1
                        }), Date.today().moveToFirstDayOfMonth().add({
                                days: -1
                        })]
                }
        },

        function (start, end) {
                $('#reportView').val(start.toString('dd-MM-yyyy') + ' - ' + end.toString('dd-MM-yyyy'));
        });

        // BOOTSTRAP TIMEPICKER
        // ------------------------------------------------------------------------------------------------ * -->
        $('.timepicker').timepicker({
                minuteStep: 5,
                showInputs: false,
        });
		
		
			$.configureBoxes();
				$.configureBoxes({
						box1View: 'box3View',
						box1Storage: 'box3Storage',
						box1Filter: 'box3Filter',
						box1Clear: 'box3Clear',
						box1Counter: 'box3Counter',
						box2View: 'box4View',
						box2Storage: 'box4Storage',
						box2Filter: 'box4Filter',
						box2Clear: 'box4Clear',
						box2Counter: 'box4Counter',
						to1: 'to3',
						to2: 'to4',
						allTo1: 'allTo3',
						allTo2: 'allTo4',
						selectOnSubmit: false
					});
					$.configureBoxes({
						box1View: 'box5View',
						box1Storage: 'box5Storage',
						box1Filter: 'box5Filter',
						box1Clear: 'box5Clear',
						box1Counter: 'box5Counter',
						box2View: 'box6View',
						box2Storage: 'box6Storage',
						box2Filter: 'box6Filter',
						box2Clear: 'box6Clear',
						box2Counter: 'box6Counter',
						to1: 'to5',
						to2: 'to6',
						allTo1: 'allTo5',
						allTo2: 'allTo6',
						selectOnSubmit: false
					});/**/	
       

        // BOOTSTRAP COLORPICKER
        // ------------------------------------------------------------------------------------------------ * -->
        $(function () {
                $('.colorpicker').colorpicker();

                $('.cpHEX').colorpicker({
                        format: 'hex'
                });

                $('#cpComponent').colorpicker();

                /*var divStyle = $('#colored')[0].style;
                $('#cpCHANGE').colorpicker().on('changeColor', function (ev) {
                        divStyle.backgroundColor = ev.color.toHex();
                });*/
        });


        // BOOTSTRAP BUTTON TOGGLE CHANGE COLOR ON ACTIVE
        // ------------------------------------------------------------------------------------------------ * -->
        $('.btn-group > .btn, .btn[data-toggle="button"]').click(function () {

                if($(this).attr('class-toggle') != undefined && !$(this).hasClass('disabled')) {
                        var btnGroup = $(this).parent('.btn-group');

                        if(btnGroup.attr('data-toggle') == 'buttons-radio') {
                                btnGroup.find('.btn').each(function () {
                                        $(this).removeClass($(this).attr('class-toggle'));
                                });
                                $(this).addClass($(this).attr('class-toggle'));
                        }

                        if(btnGroup.attr('data-toggle') == 'buttons-checkbox' || $(this).attr('data-toggle') == 'button') {
                                if($(this).hasClass('active')) {
                                        $(this).removeClass($(this).attr('class-toggle'));
                                } else {
                                        $(this).addClass($(this).attr('class-toggle'));
                                }
                        }
                }
        });

        // FORM - LIMITER
        // ------------------------------------------------------------------------------------------------ * -->		
        $(".limiteChar15").counter({
                goal: 15
        });
        $(".limiteChar140").counter({
                goal: 140
        });
        $(".limiteWords15").counter({
                goal: 15,
                type: 'word',
                msg: 'words left before you fall into a pit of emptiness.'
        });
        $(".countingChar").counter({
                goal: 'sky',
                msg: 'have written'
        });

        // FORM - CLEAR FIELD
        // ------------------------------------------------------------------------------------------------ * -->
        $.fn.clearicon = function (options) {
                // default settings
                var config = {
                        "in": 'fadeIn',
                                "out": 'fadeOut',
                                "speed": 'fast',
                                "css": {
                                "right": "-3px",
                                        "top": "-6px"
                        },
                                "html": '<i class="fontello-icon-cancel-circle f14 opaci45"></i>',
                                "click": function () {
                                // general purposes functionality for clearing a field element
                                $(this).val('').removeAttr('checked').removeAttr('selected').keyup();
                        }
                };
                if(options) $.extend(config, options);
                // do the magic
                $(this).each(function () {
                        // the current element
                        var self = $(this);
                        var ctr = $('<span style="position: relative; width:auto; overflow: hidden;" class="clear-icon-wrap"/>');
                        $(this).wrap(ctr);
                        var btn = $('<a style="position: absolute;" class="btn btn-glyph btn-link clear-icon-btn" href="javascript:;"/>');
                        btn.css(config.css).html(config.html);
                        self.after(btn);
                        // handle clicking of button
                        if(config.click) btn.click(function () {
                                config.click.apply(self);
                        });
                        // handle value changes of input
                        self.keyup(function () {
                                if(self.val().length > 0) {
                                        btn[config['in']](config.speed);
                                } else {
                                        btn[config['out']](config.speed);
                                }
                        });
                        // trigger initial state
                        self.keyup();
                });
                return this;
        };

        $('.clear-field').clearicon();
        $('.clear-textarea').clearicon({
                'css': {
                        'right': '-3px',
                                'top': '0'
                },
        });

        // BOOTSTRAP TOOLTIP
        // ------------------------------------------------------------------------------------------------ * -->
        $("a[rel=tooltip], input[rel=tooltip] ").tooltip()

        $('.Ttip').tooltip({
                placement: 'top'
        });
        $('.Rtip').tooltip({
                placement: 'right'
        });
        $('.Btip').tooltip({
                placement: 'bottom'
        });
        $('.Ltip').tooltip({
                placement: 'left'
        });

        // GTIP - TOOLTIP
        // ------------------------------------------------------------------------------------------------ * -->
        var shared = {
                position: {
                        viewport: $(window)
                },
                style: {
                        tip: true,
                        classes: 'ui-tooltip-shadow ui-tooltip-tipsy'
                }
        };

        $('.tip-tl').qtip($.extend({}, shared, {
                position: {
                        my: 'bottom right',
                        at: 'top left'
                }
        }));
        $('.tip-tc, .tip').qtip($.extend({}, shared, {
                position: {
                        my: 'bottom center',
                        at: 'top center'
                }
        }));
        $('.tip-tr').qtip($.extend({}, shared, {
                position: {
                        my: 'bottom left',
                        at: 'top right'
                }
        }));
        $('.tip-bl').qtip($.extend({}, shared, {
                position: {
                        my: 'top right',
                        at: 'bottom left'
                }
        }));
        $('.tip-bc').qtip($.extend({}, shared, {
                position: {
                        my: 'top center',
                        at: 'bottom center'
                }
        }));
        $('.tip-br').qtip($.extend({}, shared, {
                position: {
                        my: 'top left',
                        at: 'bottom right'
                }
        }));
        $('.tip-rt').qtip($.extend({}, shared, {
                position: {
                        my: 'left bottom',
                        at: 'right top'
                }
        }));
        $('.tip-rc').qtip($.extend({}, shared, {
                position: {
                        my: 'left center',
                        at: 'right center'
                }
        }));
        $('.tip-rb').qtip($.extend({}, shared, {
                position: {
                        my: 'left top',
                        at: 'right bottom'
                }
        }));
        $('.tip-lt').qtip($.extend({}, shared, {
                position: {
                        my: 'right bottom',
                        at: 'left top'
                }
        }));
        $('.tip-lc').qtip($.extend({}, shared, {
                position: {
                        my: 'right center',
                        at: 'left center'
                }
        }));
        $('.tip-lb').qtip($.extend({}, shared, {
                position: {
                        my: 'right top',
                        at: 'left bottom'
                }
        }));

        // BOOTSTRAP POPOVER
        // ------------------------------------------------------------------------------------------------ * -->
        // popover demo
        $('.popover').popover()
        $("[rel=popover]")
                .popover({
                html: true
        });

        // popover hover
        $("[rel=popover-hover]")
                .popover({
                html: true,
                trigger: 'hover',
                delay: {
                        hide: 500
                }
        });

        // Popover hide click to element
        $('[rel=popover-click]')
                .popover({
                html: true,
                delay: {
                        show: 100,
                        hide: 300
                }
        })
                .click(function (e) {
                $(this).popover('toggle');
                e.stopPropagation();
        });

        // SPARKLINE 
        // ------------------------------------------------------------------------------------------------ * -->
        // Change class for tooltip 
		$.fn.sparkline.defaults.common.tooltipClassname = 'sparktip';
		

        // Bootstrap Hack for button radio to hidden input 
		// ------------------------------------------------------------------------------------------------ * -->
        var _old_toggle = $.fn.button.prototype.constructor.Constructor.prototype.toggle;
        $.fn.button.prototype.constructor.Constructor.prototype.toggle = function () {
                _old_toggle.apply(this);
                var $parent = this.$element.parent('[data-toggle="buttons-radio"]')
                var target = $parent ? $parent.data('target') : undefined;
                var value = this.$element.attr('value');
                if(target && value) {
                        $('#' + target).val(value);
                }
        };

})(jQuery, this, document);