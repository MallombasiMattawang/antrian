/*** -----------------------------------------------------------------------------------------------

	ADMIN TEMPLATE | Boo Admin Template
	----------------------------------------

	JS - Demo Chart
	
	-------------------------------------------------------------------------------------------------------------------------------- ***/
$(document).ready(function () {
		dashboard_B_chart.chartOrders ();
		dashboard_B_chart.chartAmounts ();
});

// CHARTS SETTINGS
// ------------------------------------------------------------------------------------------------ * -->
dashboard_B_chart = {
        // Dashboard 2 Orders
        chartOrders: function () {
				var elem = $('#ordersChart');
				
				var data = [{
						label: "Orders",
						color: "#4da74d",
						data: [
								[1341014400000, 0],
								[1341018000000, 0],
								[1341021600000, 0],
								[1341025200000, 0],
								[1341028800000, 0],
								[1341032400000, 0],
								[1341036000000, 1],
								[1341039600000, 0],
								[1341043200000, 2],
								[1341046800000, 0],
								[1341050400000, 0],
								[1341054000000, 1],
								[1341057600000, 3],
								[1341059400000, 2], //12:30
								[1341061200000, 1],
								[1341064800000, 2],
								[1341065700000, 2], //14:15
								[1341068400000, 0],
								[1341072000000, 1],
								[1341073500000, 1], //16:25
								[1341073800000, 1], //16:30
								[1341075600000, 3],
								[1341079200000, 4],
								[1341082800000, 1],
								[1341083800000, 1], //19:10
								[1341086400000, 0],
								[1341090000000, 0],
								[1341093600000, 0]
						]
				}];
		
				var options = {
						series: {
								lines: {
										show: true,
										lineWidth: 3,
										fill: true
								},
								points: {
										show: false,
										radius: 3.5,
										lineWidth: 3
								},
								shadowSize: 3,
						},
						legend: {
								show: false,
						},
						xaxis: {
								mode: "time",
								font: {
										weight: "bold",
										size: 11
								},
								color: "#333",
								tickColor: "rgba(237,194,64,0.25)",
								tickLength: 5
						},
						yaxis: {
								color: "#333333",
								font: {
										weight: "bold",
										size: 11
								}
						},
						grid: {
								color: "#333333",
								tickColor: "rgba(0,0,0,0.03)",
								borderWidth: 0,
								// interactive stuff
								clickable: true,
								hoverable: true
						}
				};
		
				chartOrders_plot = $.plot(elem, data, options);
		
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
						var self = $(this),
								api = $(this).qtip(),
								previousPoint, content,
								round = function (x) {
										return Math.round(x * 1000) / 1000;
								};
						if(!item) {
								api.cache.point = false;
								return api.hide(event);
						}
						previousPoint = api.cache.point;
						if(previousPoint !== item.dataIndex) {
								api.cache.point = item.dataIndex;
								content = item.series.label + ' = ' + round(item.datapoint[1]);
								api.set('content.text', content);
								api.elements.tooltip.stop(1, 1);
								api.show(coords);
						}
				});
		},
		// Dashboard 2 Amounts
		chartAmounts: function () {
				var elem = $('#amountsChart');
				
				var d3 = [
						[1341014400000, 0.00],
						[1341018000000, 0.00],
						[1341021600000, 0.00],
						[1341025200000, 0.00],
						[1341028800000, 0.00],
						[1341032400000, 0.00],
						[1341036000000, 0.00],
						[1341039600000, 0.00],
						[1341043200000, 158.70],
						[1341046800000, 0.00],
						[1341050400000, 0.00],
						[1341054000000, 245.30],
						[1341057600000, 78.00],
						[1341061200000, 169.20],
						[1341064800000, 357.33],
						[1341068400000, 0.00],
						[1341072000000, 49.50],
						[1341075600000, 576.60],
						[1341079200000, 237.00],
						[1341082800000, 111.80],
						[1341086400000, 0.00],
						[1341090000000, 0.00],
						[1341093600000, 0.00]
		
				];
				
				function dolarFormatter(v, axis) {
						return v.toFixed(axis.tickDecimals) +"$";
				}
		
				$.plot(elem, [d3], {
						legend: {
								show: false
						},
						series: {
								label: "Revenue",
								lines: {
										show: true,
										fill: true
								}
						},
						xaxis: {
								mode: "time",
								font: {
										weight: "bold",
										size:11
								},
								color: "#333333",
								tickColor: "rgba(237,194,64,0.25)",
								tickLength: 5
						},
						yaxis: {
								tickFormatter: dolarFormatter,
								color: "#333333",
								font: {
										weight: "bold",
										size:11
								}
						},
						grid: {
								color: "#333333",
								tickColor: "rgba(0,0,0,0.03)",
								borderWidth: 0,
								// interactive stuff
								clickable: true,
								hoverable: true
						},
				});
				
				// Create a tooltip on our chart
				elem.qtip({
						prerender: true,
						content: 'Loading...',
						position: {
								viewport: $(window),
								target: 'mouse',
								adjust: {
										x: 7
								}
						},
						show: false,
						style: {
								classes: 'ui-tooltip-shadow ui-tooltip-tipsy',
								tip: false 
						}
				});
				// Bind the plot hover
				elem.bind("plothover", function (event, coords, item) {
						var self = $(this),
								api = $(this).qtip(),
								previousPoint, content,
								round = function (x) {
										return Math.round(x * 1000) / 1000;
								};
						if(!item) {
								api.cache.point = false;
								return api.hide(event);
						}
						previousPoint = api.cache.point;
						if(previousPoint !== item.dataIndex) {
								api.cache.point = item.dataIndex;
								content = item.series.label + ' = $' + round(item.datapoint[1]); 
								api.set('content.text', content);
								api.elements.tooltip.stop(1, 1);
								api.show(coords);
						}
				});
		}
};




