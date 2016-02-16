/*** -----------------------------------------------------------------------------------------------

	ADMIN TEMPLATE | Boo Admin Template
	----------------------------------------

	JS - Demo FullCalendar
	http://arshaw.com/fullcalendar/docs/
	
	-------------------------------------------------------------------------------------------------------------------------------- ***/
$(document).ready(function () {
		demo_calendar.calBase();
        demo_calendar.calBaseStriped();
        demo_calendar.calWell();
        demo_calendar.calWellStriped();
        demo_calendar.calWellBlack();
        demo_calendar.calWellBlackStriped();
        demo_calendar.calWidgetBox();
        demo_calendar.calWidgetBoxStriped();
        demo_calendar.calWidgetSimple();
        demo_calendar.calWidgetSimpleStriped();
		demo_calendar.google();
        //* resize elements on window resize
        var lastWindowHeight = $(window).height();
        var lastWindowWidth = $(window).width();
        $(window).on("debouncedresize", function () {
                if($(window).height() != lastWindowHeight || $(window).width() != lastWindowWidth) {
                        lastWindowHeight = $(window).height();
                        lastWindowWidth = $(window).width();
                        //* rebuild calendar
                        $('#calendar').fullCalendar('render');
                        $('#calendarS').fullCalendar('render');
                        $('#calendarWell').fullCalendar('render');
                        $('#calendarWellS').fullCalendar('render');
                        $('#calendarWellB').fullCalendar('render');
                        $('#calendarWellBS').fullCalendar('render');
                        $('#calendarWidgetB').fullCalendar('render');
                        $('#calendarWidgetBS').fullCalendar('render');
                        $('#calendarWidgetS').fullCalendar('render');
                        $('#calendarWidgetSS').fullCalendar('render');
                        $('#calendar_google').fullCalendar('render');
                }
        });
		
		// DEMO CALENDAR initialize the external events
		// ------------------------------------------------------------------------------------------------ * -->
		$('#external-events div.external-event').each(function () {
		
				// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
				// it doesn't need to have a start or end
				var eventObject = {
						title: $.trim($(this).text()) // use the element's text as the event title
				};
		
				// store the Event Object in the DOM element so we can get to it later
				$(this).data('eventObject', eventObject);
		
				// make the event draggable using jQuery UI
				$(this).draggable({
						zIndex: 999,
						revert: true, // will cause the event to go back to its
						revertDuration: 0 //  original position after the drag
				});
		
		});
		
		// DEMO CALENDAR initialize the calendar
		// ------------------------------------------------------------------------------------------------ * -->
		$('#calendarDemo').fullCalendar({
				header: {
                                left: 'title,today',
                                center: '',
                                right: 'prev,month,agendaWeek,agendaDay,next'
                        },
                        buttonText: {
                                prev: '<i class="fontello-icon-left-open-1"></i>',
                                next: '<i class="fontello-icon-right-open-1"></i>',
                                prevYear: '&nbsp;&lt;&lt;&nbsp;',
                                nextYear: '&nbsp;&gt;&gt;&nbsp;',
                                today: ' today <i class="fontello-icon-target-2 f-14"></i>'
                        },
				aspectRatio: 2,
				editable: true,
				droppable: true, // this allows things to be dropped onto the calendar !!!
				drop: function (date, allDay ) { // this function is called when something is dropped
						
						// retrieve the dropped element's stored Event Object
						var originalEventObject = $(this).data('eventObject');
		
						// we need to copy it, so that multiple events don't have a reference to the same object
						var copiedEventObject = $.extend({}, originalEventObject);
		
						// assign it the date that was reported
						copiedEventObject.start = date;
						copiedEventObject.allDay = allDay;
		
						// render the event on the calendar
						// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
						$('#calendarDemo').fullCalendar('renderEvent', copiedEventObject, true);
		
						// is the "remove after drop" checkbox checked?
						if($('#drop-remove').is(':checked')) {
								// if so, remove the element from the "Draggable Events" list
								$(this).remove();
						}
		
				}
		});
		
		

});

// CALENDAR SETTINGS
// ------------------------------------------------------------------------------------------------ * -->
demo_calendar = {
        // new calendar
		calBase: function () {
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                var calendar = $('#calendar').fullCalendar({
                        header: {
                                left: 'title,today',
                                center: '',
                                right: 'prev,month,agendaWeek,agendaDay,next'
                        },
                        buttonText: {
                                prev: '<i class="fontello-icon-left-open-1"></i>',
                                next: '<i class="fontello-icon-right-open-1"></i>',
                                prevYear: '&nbsp;&lt;&lt;&nbsp;',
                                nextYear: '&nbsp;&gt;&gt;&nbsp;',
                                today: ' today <i class="fontello-icon-target-2 f-14"></i>'
                        },
                        aspectRatio: 2,
                        selectable: true,
                        selectHelper: true,
                        select: function (start, end, allDay) {
                                var title = prompt('Event Title:');
                                if(title) {
                                        calendar.fullCalendar('renderEvent', {
                                                title: title,
                                                start: start,
                                                end: end,
                                                allDay: allDay
                                        },
                                        true // make the event "stick"
                                        );
                                }
                                calendar.fullCalendar('unselect');
                        },
                        editable: true,
                        theme: false,
                        events: [{
                                title: 'All Day Event',
                                start: new Date(y, m, 1),
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Long Event',
                                start: new Date(y, m, d - 5),
                                end: new Date(y, m, d - 2)
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 8, 16, 0),
                                allDay: false
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 15, 16, 0),
                                allDay: false
                        }, {
                                title: 'Meeting',
                                start: new Date(y, m, d + 12, 15, 0),
                                description: 'Here description for events',
                                allDay: false,
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Lunch',
                                start: new Date(y, m, d, 12, 0),
                                end: new Date(y, m, d, 14, 0),
                                allDay: false
                        }, {
                                title: 'Birthday Party',
                                start: new Date(y, m, d + 1, 19, 0),
                                end: new Date(y, m, d + 1, 22, 30),
                                allDay: false,
                                color: '#c6707e',
                                textColor: '#51262d'
                        }, {
                                title: 'Click for Google',
                                start: new Date(y, m, 28),
                                end: new Date(y, m, 29),
                                color: '#028fdf',
                                textColor: '#fff',
                                url: 'http://google.com/'
                        }],
                        eventColor: '#9dbdcd'
                })
        },
		// new calendar
        calBaseStriped: function () {
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                var calendar = $('#calendarS').fullCalendar({
                        header: {
                                left: 'title,today',
                                center: '',
                                right: 'prev,month,agendaWeek,agendaDay,next'
                        },
                        buttonText: {
                                prev: '<i class="fontello-icon-left-open-1"></i>',
                                next: '<i class="fontello-icon-right-open-1"></i>',
                                prevYear: '&nbsp;&lt;&lt;&nbsp;',
                                nextYear: '&nbsp;&gt;&gt;&nbsp;',
                                today: ' today <i class="fontello-icon-target-2 f-14"></i>'
                        },
                        aspectRatio: 2,
                        selectable: true,
                        selectHelper: true,
                        select: function (start, end, allDay) {
                                var title = prompt('Event Title:');
                                if(title) {
                                        calendar.fullCalendar('renderEvent', {
                                                title: title,
                                                start: start,
                                                end: end,
                                                allDay: allDay
                                        },
                                        true // make the event "stick"
                                        );
                                }
                                calendar.fullCalendar('unselect');
                        },
                        editable: true,
                        theme: false,
                        events: [{
                                title: 'All Day Event',
                                start: new Date(y, m, 1),
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Long Event',
                                start: new Date(y, m, d - 5),
                                end: new Date(y, m, d - 2)
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 8, 16, 0),
                                allDay: false
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 15, 16, 0),
                                allDay: false
                        }, {
                                title: 'Meeting',
                                start: new Date(y, m, d + 12, 15, 0),
                                allDay: false,
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Lunch',
                                start: new Date(y, m, d, 12, 0),
                                end: new Date(y, m, d, 14, 0),
                                allDay: false
                        }, {
                                title: 'Birthday Party',
                                start: new Date(y, m, d + 1, 19, 0),
                                end: new Date(y, m, d + 1, 22, 30),
                                allDay: false,
                                color: '#d29a4d',
                                textColor: '#533812'
                        }, {
                                title: 'Click for Google',
                                start: new Date(y, m, 28),
                                end: new Date(y, m, 29),
                                color: '#0085cc',
                                textColor: '#fff',
                                url: 'http://google.com/'
                        }],
                        eventColor: '#9dbdcd'
                })
        },
		// new calendar
        calWell: function () {
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                var calendar = $('#calendarWell').fullCalendar({
                        header: {
                                left: 'title,today',
                                center: '',
                                right: 'prev,month,agendaWeek,agendaDay,next'
                        },
                        buttonText: {
                                prev: '<i class="fontello-icon-left-open-1"></i>',
                                next: '<i class="fontello-icon-right-open-1"></i>',
                                prevYear: '&nbsp;&lt;&lt;&nbsp;',
                                nextYear: '&nbsp;&gt;&gt;&nbsp;',
                                today: ' today <i class="fontello-icon-target-2 f-14"></i>'
                        },
                        aspectRatio: 2,
                        selectable: true,
                        selectHelper: true,
                        select: function (start, end, allDay) {
                                var title = prompt('Event Title:');
                                if(title) {
                                        calendar.fullCalendar('renderEvent', {
                                                title: title,
                                                start: start,
                                                end: end,
                                                allDay: allDay
                                        },
                                        true // make the event "stick"
                                        );
                                }
                                calendar.fullCalendar('unselect');
                        },
                        editable: true,
                        theme: false,
                        events: [{
                                title: 'All Day Event',
                                start: new Date(y, m, 1),
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Long Event',
                                start: new Date(y, m, d - 5),
                                end: new Date(y, m, d - 2)
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 8, 16, 0),
                                allDay: false
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 15, 16, 0),
                                allDay: false
                        }, {
                                title: 'Meeting',
                                start: new Date(y, m, d + 12, 15, 0),
                                allDay: false,
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Lunch',
                                start: new Date(y, m, d, 12, 0),
                                end: new Date(y, m, d, 14, 0),
                                allDay: false
                        }, {
                                title: 'Birthday Party',
                                start: new Date(y, m, d + 1, 19, 0),
                                end: new Date(y, m, d + 1, 22, 30),
                                allDay: false,
                                color: '#d29a4d',
                                textColor: '#533812'
                        }, {
                                title: 'Click for Google',
                                start: new Date(y, m, 28),
                                end: new Date(y, m, 29),
                                color: '#0085cc',
                                textColor: '#fff',
                                url: 'http://google.com/'
                        }],
                        eventColor: '#9dbdcd'
                })
        },
		// new calendar
        calWellStriped: function () {
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                var calendar = $('#calendarWellS').fullCalendar({
                        header: {
                                left: 'title,today',
                                center: '',
                                right: 'prev,month,agendaWeek,agendaDay,next'
                        },
                        buttonText: {
                                prev: '<i class="fontello-icon-left-open-1"></i>',
                                next: '<i class="fontello-icon-right-open-1"></i>',
                                prevYear: '&nbsp;&lt;&lt;&nbsp;',
                                nextYear: '&nbsp;&gt;&gt;&nbsp;',
                                today: ' today <i class="fontello-icon-target-2 f-14"></i>'
                        },
                        aspectRatio: 2,
                        selectable: true,
                        selectHelper: true,
                        select: function (start, end, allDay) {
                                var title = prompt('Event Title:');
                                if(title) {
                                        calendar.fullCalendar('renderEvent', {
                                                title: title,
                                                start: start,
                                                end: end,
                                                allDay: allDay
                                        },
                                        true // make the event "stick"
                                        );
                                }
                                calendar.fullCalendar('unselect');
                        },
                        editable: true,
                        theme: false,
                        events: [{
                                title: 'All Day Event',
                                start: new Date(y, m, 1),
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Long Event',
                                start: new Date(y, m, d - 5),
                                end: new Date(y, m, d - 2)
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 8, 16, 0),
                                allDay: false
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 15, 16, 0),
                                allDay: false
                        }, {
                                title: 'Meeting',
                                start: new Date(y, m, d + 12, 15, 0),
                                allDay: false,
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Lunch',
                                start: new Date(y, m, d, 12, 0),
                                end: new Date(y, m, d, 14, 0),
                                allDay: false
                        }, {
                                title: 'Birthday Party',
                                start: new Date(y, m, d + 1, 19, 0),
                                end: new Date(y, m, d + 1, 22, 30),
                                allDay: false,
                                color: '#d29a4d',
                                textColor: '#533812'
                        }, {
                                title: 'Click for Google',
                                start: new Date(y, m, 28),
                                end: new Date(y, m, 29),
                                color: '#0085cc',
                                textColor: '#fff',
                                url: 'http://google.com/'
                        }],
                        eventColor: '#9dbdcd'
                })
        },
		// new calendar
        calWellBlack: function () {
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                var calendar = $('#calendarWellB').fullCalendar({
                        header: {
                                left: 'title,today',
                                center: '',
                                right: 'prev,month,agendaWeek,agendaDay,next'
                        },
                        buttonText: {
                                prev: '<i class="fontello-icon-left-open-1"></i>',
                                next: '<i class="fontello-icon-right-open-1"></i>',
                                prevYear: '&nbsp;&lt;&lt;&nbsp;',
                                nextYear: '&nbsp;&gt;&gt;&nbsp;',
                                today: ' today <i class="fontello-icon-target-2 f-14"></i>'
                        },
                        aspectRatio: 2,
                        selectable: true,
                        selectHelper: true,
                        select: function (start, end, allDay) {
                                var title = prompt('Event Title:');
                                if(title) {
                                        calendar.fullCalendar('renderEvent', {
                                                title: title,
                                                start: start,
                                                end: end,
                                                allDay: allDay
                                        },
                                        true // make the event "stick"
                                        );
                                }
                                calendar.fullCalendar('unselect');
                        },
                        editable: true,
                        theme: false,
                        events: [{
                                title: 'All Day Event',
                                start: new Date(y, m, 1),
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Long Event',
                                start: new Date(y, m, d - 5),
                                end: new Date(y, m, d - 2)
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 8, 16, 0),
                                allDay: false
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 15, 16, 0),
                                allDay: false
                        }, {
                                title: 'Meeting',
                                start: new Date(y, m, d + 12, 15, 0),
                                allDay: false,
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Lunch',
                                start: new Date(y, m, d, 12, 0),
                                end: new Date(y, m, d, 14, 0),
                                allDay: false
                        }, {
                                title: 'Birthday Party',
                                start: new Date(y, m, d + 1, 19, 0),
                                end: new Date(y, m, d + 1, 22, 30),
                                allDay: false,
                                color: '#d29a4d',
                                textColor: '#533812'
                        }, {
                                title: 'Click for Google',
                                start: new Date(y, m, 28),
                                end: new Date(y, m, 29),
                                color: '#0085cc',
                                textColor: '#fff',
                                url: 'http://google.com/'
                        }],
                        eventColor: '#9dbdcd'
                })
        },
		// new calendar
        calWellBlackStriped: function () {
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                var calendar = $('#calendarWellBS').fullCalendar({
                        header: {
                                left: 'title,today',
                                center: '',
                                right: 'prev,month,agendaWeek,agendaDay,next'
                        },
                        buttonText: {
                                prev: '<i class="fontello-icon-left-open-1"></i>',
                                next: '<i class="fontello-icon-right-open-1"></i>',
                                prevYear: '&nbsp;&lt;&lt;&nbsp;',
                                nextYear: '&nbsp;&gt;&gt;&nbsp;',
                                today: ' today <i class="fontello-icon-target-2 f-14"></i>'
                        },
                        aspectRatio: 2,
                        selectable: true,
                        selectHelper: true,
                        select: function (start, end, allDay) {
                                var title = prompt('Event Title:');
                                if(title) {
                                        calendar.fullCalendar('renderEvent', {
                                                title: title,
                                                start: start,
                                                end: end,
                                                allDay: allDay
                                        },
                                        true // make the event "stick"
                                        );
                                }
                                calendar.fullCalendar('unselect');
                        },
                        editable: true,
                        theme: false,
                        events: [{
                                title: 'All Day Event',
                                start: new Date(y, m, 1),
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Long Event',
                                start: new Date(y, m, d - 5),
                                end: new Date(y, m, d - 2)
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 8, 16, 0),
                                allDay: false
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 15, 16, 0),
                                allDay: false
                        }, {
                                title: 'Meeting',
                                start: new Date(y, m, d + 12, 15, 0),
                                allDay: false,
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Lunch',
                                start: new Date(y, m, d, 12, 0),
                                end: new Date(y, m, d, 14, 0),
                                allDay: false
                        }, {
                                title: 'Birthday Party',
                                start: new Date(y, m, d + 1, 19, 0),
                                end: new Date(y, m, d + 1, 22, 30),
                                allDay: false,
                                color: '#d29a4d',
                                textColor: '#533812'
                        }, {
                                title: 'Click for Google',
                                start: new Date(y, m, 28),
                                end: new Date(y, m, 29),
                                color: '#0085cc',
                                textColor: '#fff',
                                url: 'http://google.com/'
                        }],
                        eventColor: '#9dbdcd'
                })
        },
		// new calendar
        calWidgetBox: function () {
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                var calendar = $('#calendarWidgetB').fullCalendar({
                        header: {
                                left: 'title,today',
                                center: '',
                                right: 'prev,month,agendaWeek,agendaDay,next'
                        },
                        buttonText: {
                                prev: '<i class="fontello-icon-left-open-1"></i>',
                                next: '<i class="fontello-icon-right-open-1"></i>',
                                prevYear: '&nbsp;&lt;&lt;&nbsp;',
                                nextYear: '&nbsp;&gt;&gt;&nbsp;',
                                today: ' today <i class="fontello-icon-target-2 f-14"></i>'
                        },
                        aspectRatio: 2,
                        selectable: true,
                        selectHelper: true,
                        select: function (start, end, allDay) {
                                var title = prompt('Event Title:');
                                if(title) {
                                        calendar.fullCalendar('renderEvent', {
                                                title: title,
                                                start: start,
                                                end: end,
                                                allDay: allDay
                                        },
                                        true // make the event "stick"
                                        );
                                }
                                calendar.fullCalendar('unselect');
                        },
                        editable: true,
                        theme: false,
                        events: [{
                                title: 'All Day Event',
                                start: new Date(y, m, 1),
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Long Event',
                                start: new Date(y, m, d - 5),
                                end: new Date(y, m, d - 2)
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 8, 16, 0),
                                allDay: false
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 15, 16, 0),
                                allDay: false
                        }, {
                                title: 'Meeting',
                                start: new Date(y, m, d + 12, 15, 0),
                                allDay: false,
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Lunch',
                                start: new Date(y, m, d, 12, 0),
                                end: new Date(y, m, d, 14, 0),
                                allDay: false
                        }, {
                                title: 'Birthday Party',
                                start: new Date(y, m, d + 1, 19, 0),
                                end: new Date(y, m, d + 1, 22, 30),
                                allDay: false,
                                color: '#d29a4d',
                                textColor: '#533812'
                        }, {
                                title: 'Click for Google',
                                start: new Date(y, m, 28),
                                end: new Date(y, m, 29),
                                color: '#0085cc',
                                textColor: '#fff',
                                url: 'http://google.com/'
                        }],
                        eventColor: '#9dbdcd'
                })
        },
		// new calendar
        calWidgetBoxStriped: function () {
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                var calendar = $('#calendarWidgetBS').fullCalendar({
                        header: {
                                left: 'title,today',
                                center: '',
                                right: 'prev,month,agendaWeek,agendaDay,next'
                        },
                        buttonText: {
                                prev: '<i class="fontello-icon-left-open-1"></i>',
                                next: '<i class="fontello-icon-right-open-1"></i>',
                                prevYear: '&nbsp;&lt;&lt;&nbsp;',
                                nextYear: '&nbsp;&gt;&gt;&nbsp;',
                                today: ' today <i class="fontello-icon-target-2 f-14"></i>'
                        },
                        aspectRatio: 2,
                        selectable: true,
                        selectHelper: true,
                        select: function (start, end, allDay) {
                                var title = prompt('Event Title:');
                                if(title) {
                                        calendar.fullCalendar('renderEvent', {
                                                title: title,
                                                start: start,
                                                end: end,
                                                allDay: allDay
                                        },
                                        true // make the event "stick"
                                        );
                                }
                                calendar.fullCalendar('unselect');
                        },
                        editable: true,
                        theme: false,
                        events: [{
                                title: 'All Day Event',
                                start: new Date(y, m, 1),
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Long Event',
                                start: new Date(y, m, d - 5),
                                end: new Date(y, m, d - 2)
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 8, 16, 0),
                                allDay: false
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 15, 16, 0),
                                allDay: false
                        }, {
                                title: 'Meeting',
                                start: new Date(y, m, d + 12, 15, 0),
                                allDay: false,
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Lunch',
                                start: new Date(y, m, d, 12, 0),
                                end: new Date(y, m, d, 14, 0),
                                allDay: false
                        }, {
                                title: 'Birthday Party',
                                start: new Date(y, m, d + 1, 19, 0),
                                end: new Date(y, m, d + 1, 22, 30),
                                allDay: false,
                                color: '#d29a4d',
                                textColor: '#533812'
                        }, {
                                title: 'Click for Google',
                                start: new Date(y, m, 28),
                                end: new Date(y, m, 29),
                                color: '#0085cc',
                                textColor: '#fff',
                                url: 'http://google.com/'
                        }],
                        eventColor: '#9dbdcd'
                })
        },
		// new calendar
        calWidgetSimple: function () {
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                var calendar = $('#calendarWidgetS').fullCalendar({
                        header: {
                                left: 'title,today',
                                center: '',
                                right: 'prev,month,agendaWeek,agendaDay,next'
                        },
                        buttonText: {
                                prev: '<i class="fontello-icon-left-open-1"></i>',
                                next: '<i class="fontello-icon-right-open-1"></i>',
                                prevYear: '&nbsp;&lt;&lt;&nbsp;',
                                nextYear: '&nbsp;&gt;&gt;&nbsp;',
                                today: ' today <i class="fontello-icon-target-2 f-14"></i>'
                        },
                        aspectRatio: 2,
                        selectable: true,
                        selectHelper: true,
                        select: function (start, end, allDay) {
                                var title = prompt('Event Title:');
                                if(title) {
                                        calendar.fullCalendar('renderEvent', {
                                                title: title,
                                                start: start,
                                                end: end,
                                                allDay: allDay
                                        },
                                        true // make the event "stick"
                                        );
                                }
                                calendar.fullCalendar('unselect');
                        },
                        editable: true,
                        theme: false,
                        events: [{
                                title: 'All Day Event',
                                start: new Date(y, m, 1),
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Long Event',
                                start: new Date(y, m, d - 5),
                                end: new Date(y, m, d - 2)
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 8, 16, 0),
                                allDay: false
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 15, 16, 0),
                                allDay: false
                        }, {
                                title: 'Meeting',
                                start: new Date(y, m, d + 12, 15, 0),
                                allDay: false,
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Lunch',
                                start: new Date(y, m, d, 12, 0),
                                end: new Date(y, m, d, 14, 0),
                                allDay: false
                        }, {
                                title: 'Birthday Party',
                                start: new Date(y, m, d + 1, 19, 0),
                                end: new Date(y, m, d + 1, 22, 30),
                                allDay: false,
                                color: '#d29a4d',
                                textColor: '#533812'
                        }, {
                                title: 'Click for Google',
                                start: new Date(y, m, 28),
                                end: new Date(y, m, 29),
                                color: '#0085cc',
                                textColor: '#fff',
                                url: 'http://google.com/'
                        }],
                        eventColor: '#9dbdcd'
                })
        },
		// new calendar
        calWidgetSimpleStriped: function () {
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                var calendar = $('#calendarWidgetSS').fullCalendar({
                        header: {
                                left: 'title,today',
                                center: '',
                                right: 'prev,month,agendaWeek,agendaDay,next'
                        },
                        buttonText: {
                                prev: '<i class="fontello-icon-left-open-1"></i>',
                                next: '<i class="fontello-icon-right-open-1"></i>',
                                prevYear: '&nbsp;&lt;&lt;&nbsp;',
                                nextYear: '&nbsp;&gt;&gt;&nbsp;',
                                today: ' today <i class="fontello-icon-target-2 f-14"></i>'
                        },
                        aspectRatio: 2,
                        selectable: true,
                        selectHelper: true,
                        select: function (start, end, allDay) {
                                var title = prompt('Event Title:');
                                if(title) {
                                        calendar.fullCalendar('renderEvent', {
                                                title: title,
                                                start: start,
                                                end: end,
                                                allDay: allDay
                                        },
                                        true // make the event "stick"
                                        );
                                }
                                calendar.fullCalendar('unselect');
                        },
                        editable: true,
                        theme: false,
                        events: [{
                                title: 'All Day Event',
                                start: new Date(y, m, 1),
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Long Event',
                                start: new Date(y, m, d - 5),
                                end: new Date(y, m, d - 2)
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 8, 16, 0),
                                allDay: false
                        }, {
                                id: 999,
                                title: 'Repeating Event',
                                start: new Date(y, m, d + 15, 16, 0),
                                allDay: false
                        }, {
                                title: 'Meeting',
                                start: new Date(y, m, d + 12, 15, 0),
                                allDay: false,
                                color: '#61c261',
                                textColor: '#fff'
                        }, {
                                title: 'Lunch',
                                start: new Date(y, m, d, 12, 0),
                                end: new Date(y, m, d, 14, 0),
                                allDay: false
                        }, {
                                title: 'Birthday Party',
                                start: new Date(y, m, d + 1, 19, 0),
                                end: new Date(y, m, d + 1, 22, 30),
                                allDay: false,
                                color: '#d29a4d',
                                textColor: '#533812'
                        }, {
                                title: 'Click for Google',
                                start: new Date(y, m, 28),
                                end: new Date(y, m, 29),
                                color: '#0085cc',
                                textColor: '#fff',
                                url: 'http://google.com/'
                        }],
                        eventColor: '#9dbdcd'
                })
        },
		// new calendar
        google: function () {
                var calendar = $('#calendar_google').fullCalendar({
                        header: {
                                left: 'prev next',
                                center: 'title,today',
                                right: 'month,agendaWeek,agendaDay'
                        },
                        buttonText: {
                                prev: '<i class="icon-chevron-left cal_prev" />',
                                next: '<i class="icon-chevron-right cal_next" />'
                        },
                        aspectRatio: 3,
                        theme: false,
                        events: {
                                url: 'http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic',
                                title: 'Italian Holidays',
                                color: '#bcdeee'
                        },
                        eventClick: function (event) {
                                // opens events in a popup window
                                window.open(event.url, 'gcalevent', 'width=700,height=600');
                                return false;
                        }

                })
        }
};