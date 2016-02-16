/*** -----------------------------------------------------------------------------------------------

	ADMIN TEMPLATE | Boo Admin Template
	----------------------------------------

	JS - Demo Chart
	
	-------------------------------------------------------------------------------------------------------------------------------- ***/
$(document).ready(function () {
        dashboard_A_chart.chartVisit ();
		dashboard_A_chart.sparkLine ();
		
		setTimeout(function () {
			$.gritter.add({
				title: 'Welcome back Twitter Bootstrap',
				text: 'You have <a class="bold" href="#">4 new messages</a> in the support center. <br />Please solve it as soon as possible. <br /> <strong>Have a nice day, Your Boo</strong>',
				image: 'assets/img/demo/demo-avatar9604.jpg',
				sticky: false,
				time: 7000
			});
			return false;
		}, 2200);
		
		setTimeout(function () {
			$.gritter.add({
				title: 'Reminder message',
				text: 'Do you have a scheduled <strong class="firebrick">business meeting at 13:30</strong> with Natali McDonalds. <br /><a class="bold" href="component-widgets-remember.html">Go to Task &raquo;</a>',
				image: 'assets/img/demo/demo-avatar9605a.jpg',
				sticky: true,
				class_name: 'gritter-light'
			});
			return false;
		}, 3000);
		
		var n = notyfy({
        text: '<h4>Hi!</h4> Today&apos;s sale is <strong class="f22">$ 7,880</strong>.',
        type: 'success',
        layout: 'bottomRight',
        theme: 'boolight',
        closeWith: ['hover']
        });
		
		
		
});


// CHARTS SETTINGS
// ------------------------------------------------------------------------------------------------ * -->
dashboard_A_chart = {
        // Dashboard 1 Chart Visit
        chartVisit: function () {
				var elem = $('#dashChartVisitors');
				var elemo = $('#dashChartVisitorsOverview');
				
                var d1 = [
					[1196463600000, 2],[1196550000000, 22],[1196636400000, 68],[1196722800000, 127],[1196809200000, 136],[1196895600000, 175],[1196982000000, 236],
					[1197068400000, 286],[1197154800000, 376],[1197241200000, 405],[1197327600000, 406],[1197414000000, 410],[1197500400000, 339],[1197586800000, 440],
					[1197673200000, 435],[1197759600000, 301],[1197846000000, 575],[1197932400000, 481],[1198018800000, 591],[1198105200000, 608],[1198191600000, 459],
					[1198278000000, 234],[1198364400000, 352],[1198450800000, 686],[1198537200000, 279],[1198623600000, 449],[1198710000000, 468],[1198796400000, 392],
					[1198882800000, 282],[1198969200000, 208],[1199055600000, 229],[1199142000000, 177],[1199228400000, 374],[1199314800000, 436],[1199401200000, 404],
					[1199487600000, 253],[1199574000000, 218],[1199660400000, 476],[1199746800000, 462],[1199833200000, 448],[1199919600000, 442],[1200006000000, 403],
					[1200092400000, 204],[1200178800000, 194],[1200265200000, 327],[1200351600000, 374],[1200438000000, 507],[1200524400000, 546],[1200610800000, 482],
					[1200697200000, 283],[1200783600000, 221],[1200870000000, 483],[1200956400000, 523],[1201042800000, 528],[1201129200000, 483],[1201215600000, 452],
					[1201302000000, 670],[1201388400000, 722],[1201474800000, 839],[1201561200000, 859],[1201647600000, 721],[1201734000000, 977],[1201820400000, 642],
					[1201906800000, 252],[1201993200000, 236],[1202079600000, 525],[1202166000000, 477],[1202252400000, 386],[1202338800000, 409],[1202425200000, 408],
					[1202511600000, 637],[1202598000000, 493],[1202684400000, 357],[1202770800000, 414],[1202857200000, 393],[1202943600000, 353],[1203030000000, 364],
					[1203116400000, 215],[1203202800000, 214],[1203289200000, 356],[1203375600000, 399],[1203462000000, 334],[1203548400000, 348],[1203634800000, 243],
					[1203721200000, 126],[1203807600000, 157],[1203894000000, 288]
				];
				var d2 = [
					[1196463600000, 2],[1196550000000, 20],[1196636400000, 28],[1196722800000, 37],[1196809200000, 76],[1196895600000, 75],[1196982000000, 46],
					[1197068400000, 06],[1197154800000, 76],[1197241200000, 05],[1197327600000, 06],[1197414000000, 10],[1197500400000, 19],[1197586800000, 40],
					[1197673200000, 25],[1197759600000, 21],[1197846000000, 75],[1197932400000, 81],[1198018800000, 91],[1198105200000, 08],[1198191600000, 89],
					[1198278000000, 104],[1198364400000, 52],[1198450800000, 86],[1198537200000, 79],[1198623600000, 49],[1198710000000, 68],[1198796400000, 92],
					[1198882800000, 82],[1198969200000, 08],[1199055600000, 29],[1199142000000, 77],[1199228400000, 74],[1199314800000, 36],[1199401200000, 04],
					[1199487600000, 53],[1199574000000, 18],[1199660400000, 76],[1199746800000, 62],[1199833200000, 48],[1199919600000, 42],[1200006000000, 03],
					[1200092400000, 04],[1200178800000, 94],[1200265200000, 27],[1200351600000, 74],[1200438000000, 07],[1200524400000, 46],[1200610800000, 82],
					[1200697200000, 83],[1200783600000, 21],[1200870000000, 83],[1200956400000, 23],[1201042800000, 28],[1201129200000, 83],[1201215600000, 52],
					[1201302000000, 70],[1201388400000, 22],[1201474800000, 39],[1201561200000, 59],[1201647600000, 21],[1201734000000, 77],[1201820400000, 42],
					[1201906800000, 52],[1201993200000, 36],[1202079600000, 25],[1202166000000, 77],[1202252400000, 86],[1202338800000, 09],[1202425200000, 08],
					[1202511600000, 37],[1202598000000, 93],[1202684400000, 57],[1202770800000, 14],[1202857200000, 93],[1202943600000, 53],[1203030000000, 64],
					[1203116400000, 15],[1203202800000, 14],[1203289200000, 56],[1203375600000, 99],[1203462000000, 34],[1203548400000, 48],[1203634800000, 43],
					[1203721200000, 26],[1203807600000, 57],[1203894000000, 88]
				];
                // first correct the timestamps - they are recorded as the daily
                // midnights in UTC+0100, but Flot always displays dates in UTC
                // so we have to add one hour to hit the midnights in the plot
                for(var i = 0; i < d1.length; ++i)
                d1[i][0] += 60 * 60 * 1000;

                // helper for returning the weekends in a period
                function weekendAreas(axes) {
                        var markings = [];
                        var d1 = new Date(axes.xaxis.min);
                        // go to the first Saturday
                        d1.setUTCDate(d1.getUTCDate() - ((d1.getUTCDay() + 1) % 7))
                        d1.setUTCSeconds(0);
                        d1.setUTCMinutes(0);
                        d1.setUTCHours(0);
                        var i = d1.getTime();
                        do {
                                // when we don't set yaxis, the rectangle automatically
                                // extends to infinity upwards and downwards
                                markings.push({
                                        xaxis: {
                                                from: i,
                                                to: i + 2 * 24 * 60 * 60 * 1000
                                        }
                                });
                                i += 7 * 24 * 60 * 60 * 1000;
                        } while (i < axes.xaxis.max);

                        return markings;
                        var d2 = new Date(axes.xaxis.min);
                        // go to the first Saturday
                        d2.setUTCDate(d1.getUTCDate() - ((d2.getUTCDay() + 1) % 7))
                        d2.setUTCSeconds(0);
                        d2.setUTCMinutes(0);
                        d2.setUTCHours(0);
                        var i = d2.getTime();
                        do {
                                // when we don't set yaxis, the rectangle automatically
                                // extends to infinity upwards and downwards
                                markings.push({
                                        xaxis: {
                                                from: i,
                                                to: i + 2 * 24 * 60 * 60 * 1000
                                        }
                                });
                                i += 7 * 24 * 60 * 60 * 1000;
                        } while (i < axes.xaxis.max);

                        return markings;
                };

                var options = {
                        colors: ["#edc240", "#5EB95E"],
                        legend: {
                                show: true,
                                noColumns: 2, // number of colums in legend table
                                labelFormatter: null, // fn: string -> string
                                labelBoxBorderColor: false,
                                container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                                margin: 8,
                                backgroundColor: false
                        },
                        series: {
                                lines: {
                                        show: true,
                                        lineWidth: 4,
                                        fill: true
                                },
                                points: {
                                        show: true,
                                        fillColor: "rgba(0,0,0,0.35)",
                                        radius: 3.5,
                                        lineWidth: 1.5
                                },
								grow: {
                                        active: false
                                }
                        },
                        xaxis: {
                                mode: "time",
                                font: {
                                        weight: "bold"
                                },
                                color: "#D6D8DB",
                                tickColor: "rgba(237,194,64,0.25)",
                                min: "1201302000000",
                                max: "1203894000000",
                                tickLength: 5
                        },
                        selection: {
                                mode: "x"
                        },
                        grid: {
                                color: "#D6D8DB",
                                tickColor: "rgba(255,255,255,0.05)",
                                borderWidth: 0,
                                markings: weekendAreas,
                                markingsColor: "rgba(255,255,255,0.05)",
                                // interactive stuff
                                clickable: true,
                                hoverable: true
                        }
                };

                var plot = $.plot(elem, [{
                        data: d1,
                        label: "Visitors"
                }, {
                        data: d2,
                        label: "New registration"
                }], options);

                var overview = $.plot(elemo, [d1, d2], {
                        colors: ["#edc240", "#5EB95E"],
                        series: {
                                bars: {
                                        show: true,
                                        lineWidth: 5,
                                        fillColor: "#5EB95E"
                                },
                                shadowSize: 0,
								grow: {
                                        active: false
                                }
                        },
                        xaxis: {
                                ticks: [],
                                mode: "time"
                        },
                        yaxis: {
                                ticks: [],
                                min: 0,
                                autoscaleMargin: 0.1
                        },
                        selection: {
                                mode: "x"
                        },
                        grid: {
                                color: "#D6D8DB",
                                borderColor: "rgba(255,255,255,0.05)",
                                borderWidth: 0,
                                //markings: weekendAreas,
                                //markingsColor: "rgba(255,255,255,0.05)",
                                backgroundColor: {
                                        colors: ["rgba(54,58,60,0.05)", "rgba(0,0,0,0.2)"]
                                }
                        }
                });

                // now connect the two
                elem.bind("plotselected", function (event, ranges) {
                        // do the zooming
                        plot = $.plot(elem, [d1, d2],
                        $.extend(true, {}, options, {
                                xaxis: {
                                        min: ranges.xaxis.from,
                                        max: ranges.xaxis.to
                                }
                        }));

                        // don't fire event on the overview to prevent eternal loop
                        overview.setSelection(ranges, true);
                });

                elemo.bind("plotselected", function (event, ranges) {
                        plot.setSelection(ranges);
                });

                // Create a tooltip on our chart
                elem.qtip({
                        prerender: true,
                        content: 'Loading...', // Use a loading message primarily
                        position: {
                                viewport: $(window), // Keep it visible within the window if possible
                                target: 'mouse', // Position it in relation to the mouse
                                adjust: {
                                        x: 7
                                } // ...but adjust it a bit so it doesn't overlap it.
                        },
                        show: false, // We'll show it programatically, so no show event is needed
                        style: {
                                classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
                                tip: false // Remove the default tip.
                        }
                });

                // Bind the plot hover
                elem.bind("plothover", function (event, coords, item) {
                        // Grab the API reference
                        var self = $(this),
                                api = $(this).qtip(),
                                previousPoint, content,

                                // Setup a visually pleasing rounding function
                                round = function (x) {
                                        return Math.round(x * 1000) / 1000;
                                };

                        // If we weren't passed the item object, hide the tooltip and remove cached point data
                        if(!item) {
                                api.cache.point = false;
                                return api.hide(event);
                        }

                        // Proceed only if the data point has changed
                        previousPoint = api.cache.point;
                        if(previousPoint !== item.dataIndex) {
                                // Update the cached point data
                                api.cache.point = item.dataIndex;

                                // Setup new content
                                content = item.series.label + ' = ' + round(item.datapoint[1]);

                                // Update the tooltip content
                                api.set('content.text', content);

                                // Make sure we don't get problems with animations
                                api.elements.tooltip.stop(1, 1);

                                // Show the tooltip, passing the coordinates
                                api.show(coords);
                        }
                });

                $("#clearSelection").click(function () {
                        overview.clearSelection();
						$.plot(elem, [{
								data: d1,
								label: "Visitors"
						}, {
								data: d2,
								label: "New registration"
						}], options);
                });

                $("#setLastSevenDays").click(function () {
                        plot.setSelection({
                                xaxis: {
                                        from: 1203289200000,
                                        to: 1203894000000
                                }
                        });
                });
				
                $("#setLastFortnight").click(function () {
                        plot.setSelection({
                                xaxis: {
                                        from: 1202684400000,
                                        to: 1203894000000
                                }
                        });
                });
				
                $("#setLastHours").click(function () {
                        plot.setSelection({
                                xaxis: {
                                        from: 1203807600000,
                                        to: 1203894000000
                                }
                        });
                });
        },
		
		// Dashboard Sparkline
        sparkLine: function () {
				$(".well-black .DSPLine").sparkline('html', {
						type: 'line',
						width: '100px',
						height: '20px',
						lineColor: '#9cd397',
						fillColor: '#5eb95e',
						spotColor: false,
						minSpotColor: false,
						maxSpotColor: false
				});
				$(".well-nice .DSPLine").sparkline('html', {
						type: 'line',
						width: '100px',
						height: '20px',
						lineColor: '#5e8fb9',
						fillColor: '#c8e1f6',
						spotColor: false,
						minSpotColor: false,
						maxSpotColor: false
				})
        }
};




