/*** -----------------------------------------------------------------------------------------------

	ADMIN TEMPLATE | Boo Admin Template
	----------------------------------------

	JS - Demo Chart
	
	-------------------------------------------------------------------------------------------------------------------------------- ***/
//set default tooltip style
$.fn.sparkline.defaults.common.tooltipClassname = 'sparktip';

//generate random number for charts
randNum = function () {
        //return Math.floor(Math.random()*101);
        return(Math.floor(Math.random() * (1 + 40 - 20))) + 20;
}

var coloursChart = ["#edc240", "#61ba61", "#1083c7", "#db6464", "#ff9933", "#009999"];
var dataLineDemo = [
                [1, 3 + randNum()],
                [2, 5 + randNum()],
                [3, 8 + randNum()],
                [4, 11 + randNum()],
                [5, 14 + randNum()],
                [6, 17 + randNum()],
                [7, 20 + randNum()],
                [8, 15 + randNum()],
                [9, 18 + randNum()],
                [10, 19 + randNum()],
				[11, 22 + randNum()],
				[12, 18 + randNum()]
        ]

// SPARKLINE LINE
// ------------------------------------------------------------------------------------------------ * -->
		// DEMO SPARKLINE LINE
        // ----------------------------------------- * -->
        $('.SPLine').sparkline( dataLineDemo , {
						type: 'line',
						width: '100px',
						height: '24px',
						fillColor: false,
						spotColor: false,
						minSpotColor: false,
						maxSpotColor: false
		});
		
        // DEMO SPARKLINE POINTS
        // ----------------------------------------- * -->
        $('.SPLinePoints').sparkline( dataLineDemo , {
				        type: 'line',
				        width: '100px',
				        height: '24px',
				        fillColor: false
		});
		
        // DEMO SPARKLINE FILL
        // ----------------------------------------- * -->
        $('.SPLineFill').sparkline( dataLineDemo , {
				        type: 'line',
				        width: '100px',
				        height: '24px',
				        spotColor: '#0066cc'
		});
		
		// DEMO SPARKLINE FILL & POINTS
        // ----------------------------------------- * -->
        $('.SPLineFillPoints').sparkline( dataLineDemo , {
				        type: 'line',
				        width: '100px',
				        height: '24px',
				        spotRadius: 2,
				        lineColor: '#c8e1f6',
				        valueSpots: {
				                '0:': '#f80'
				        }
		});
		
		// DEMO SPARKLINE ONLY POINTS
        // ----------------------------------------- * -->
        $('.SPLineFillOnlyPoints').sparkline( dataLineDemo , {
				        type: 'line',
				        width: '100px',
				        height: '24px',
				        spotRadius: 2,
				        fillColor: false,
				        lineColor: 'transparent',
				        valueSpots: {
				                '0:': '#f80'
				        }
		});
		
		// DEMO SPARKLINE LINE POSITIVE
        // ----------------------------------------- * -->
		$('.SPLinePositive').sparkline('html', {
				type: 'line',
				lineColor: '#5EB95E',
				fillColor: '#bcf0bc',
				height: '24px',
				width: '100px',
				chartRangeMin: -5
		});
		
		// DEMO SPARKLINE LINE NEGATIVE
        // ----------------------------------------- * -->
		$('.SPLineNegative').sparkline('html', {
				defaultPixelsPerValue: 7,
				type: 'line',
				lineColor: '#db6464',
				fillColor: '#f0b1b1',
				height: '24px',
				chartRangeMin: -3
		});
		
		// DEMO SPARKLINE LINE RANGE
        // ----------------------------------------- * -->
		// Line charts with normal range coloring marker 
		$('.SPLineNormalRange').sparkline([27,31,27,25,16,17,29,28,25,27,31,27,25], {
				type: 'line',
				width: '100px',
				height: '24px',
				fillColor: false,
				spotColor: false,
				normalRangeMin: 25,
				normalRangeMax: 26,
				normalRangeColor: '#5eb95e'
		});
		
// DEMO SPARKLINE BAR
// ------------------------------------------------------------------------------------------------ * -->		
		// DEMO SPARKLINE BAR POSITIVE
        // ----------------------------------------- * -->
		$('.SPBarPositive').sparkline('html', {
				type: 'bar',
				barColor: '#5EB95E',
				height: '24px'
		});
		
		// DEMO SPARKLINE BAR NEGATIVE
        // ----------------------------------------- * -->
		$('.SPBarNegative').sparkline('html', {
				type: 'bar',
				barColor: '#db6464',
				height: '24px'
		});
		
		// DEMO SPARKLINE BAR NEGATIVE
        // ----------------------------------------- * -->
		$('.SPBarNegativeValues').sparkline([5,6,-7,5,7,-3,-7,-6,0,-3,3,5,6,2,0,-4,-2,4,7,2,0,-4], {
				type: 'bar',
				barColor: '#5eb95e',
				negBarColor: '#db6464',
				zeroColor: '#0000bf',
				height: '24px'
		});
		
		// DEMO SPARKLINE BAR NEGATIVE
        // ----------------------------------------- * -->
		$('#SPBarStacked').sparkline([ [27,15],[31,18],[27,20],[4,10],[6,8],[25,22],[16,15],[17,2],[29,6],[28,17],[15,18],[21,14],[25,19],[27,13],[31,14],[27,16],[25,24],[10,15],[4,10],[6,8],[4,19],[20,7] ], {
				type: 'bar',
				barColor: '#1083c7',
				stackedBarColor: ['#9FCDE9', '#1083c7'],
				height: '24px'
		});
		
// DEMO SPARKLINE PIE
// ------------------------------------------------------------------------------------------------ * -->		
		// DEMO SPARKLINE PIE POSITIVE
        // ----------------------------------------- * -->
		$('.SPPiePositive').sparkline('html', {
				type: 'pie',
				sliceColors: ['#61ba61', '#DB6464'],
				height: '44px'
		});
		
		// DEMO SPARKLINE PIE NEGATIVE
        // ----------------------------------------- * -->
		$('.SPPieNegative').sparkline('html', {
				type: 'pie',
				sliceColors: ['#DB6464', '#61ba61'],
				height: '44px'
		});
		
		// DEMO SPARKLINE PIE NEGATIVE
        // ----------------------------------------- * -->
		$('.SPPieMix').sparkline([25,15,50,10], {
				type: 'pie',
				sliceColors: ['#FFD6AD', '#FFC285', '#FFAD5C', '#FF9933', '#CC7A29', '#995C1F'],
				height: '44px'
		});
		
		// DEMO SPARKLINE PIE NEGATIVE
        // ----------------------------------------- * -->
		$('.SPPieMixMax').sparkline('html', {
				type: 'pie',
				height: '44px'
		});
		
		
		
		
// DEMO SPARKLINE COMPOSITE
// ------------------------------------------------------------------------------------------------ * -->
		// COMPOSITE LINE
        // ----------------------------------------- * -->
        // Composite line charts, the second using values supplied via javascript
		$('#SPLineComposite').sparkline([2.7,3.1,2.7,2.5,1.6,1.7,1.9,2.1,1.8,2,1.9,2.1,1.8], {
				type: 'line',
				width: '100px',
				height: '24px',
				lineColor: '#db6464',
				fillColor: false,
				spotColor: false,
				minSpotColor: false,
				maxSpotColor: false
		});
		$('#SPLineComposite').sparkline( dataLineDemo , {
				composite: true,
				type: 'line',
				width: '100px',
				height: '24px',
				lineColor: '#5EB95E',
				fillColor: false,
				spotColor: false,
				minSpotColor: false,
				maxSpotColor: false
		});
		
		// COMPOSITE BAR
        // ----------------------------------------- * -->
		// Bar + line composite charts
		$('#SPBarComposite').sparkline('html', {
				type: 'bar',
				width: '75px',
				height: '24px',
				barColor: '#70B5DD'
		});
		$('#SPBarComposite').sparkline( dataLineDemo, {
				composite: true,
				width: '75px',
				height: '24px',
				fillColor: false,
				lineColor: 'yellow'
		});
		
		
// DEMO SPARKLINE TRISTATE
// ------------------------------------------------------------------------------------------------ * -->
// positive negative
		$(".SPTristate").sparkline([1,1,-1,0,1,0,1,-1,-1,1,-1,0,0,1,1,1,0,1,-1,-1,1,1,0,-1,-1,-1,1,1,0,1,0,1,1,1,1,0,-1,-1,1,-1,1,-1,1,-1,1,1,0,1 ], {
				type: 'tristate',
				height: '24px',
				posBarColor: '#61ba61',
				negBarColor: '#db6464',
				barWidth: 5,
				zeroAxis: false
		});
				//Supplied values must be in this order: target, performance, range1, range2, range3,...
				$(".DSPBulletDirect").sparkline('html', { 
   						type: 'bullet',
						width: '85px',
				        height: '16px',
						targetColor: '#c8e1f6',
						targetWidth: 2, // width of the target bar in pixels
						performanceColor: '#5e8fb9',//81dc81
						rangeColors: ['#3c4044', '#303336', '#25282a'],
						tooltipValueLookups: { fields: {t: 'Target', p: 'Current Month', r: 'Range' } }
				});

                

		
		


