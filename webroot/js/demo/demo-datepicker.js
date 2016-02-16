(function ($, window, document, undefined) {

        
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
        $('.datePickerComponent').datepicker();

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
                opens: 'left',
        });
		
		// bootstrap daterangepicker demo
        $('#articlePostFromTo').daterangepicker({
                opens: 'right',
        });

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

})(jQuery, this, document);