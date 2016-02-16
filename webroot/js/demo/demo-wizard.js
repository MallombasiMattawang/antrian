// FORM DEMO - Account Form
// ------------------------------------------------------------------------------------------------ * -->
$(document).ready(function ($) {
	
		$(function (wizardForm) {
				// navbar, numbering, progressbar, submit button well-nice
				wizardForm('#demoWizard').bootstrapWizard({
						nextSelector: '.wizard-action .next',
						previousSelector: '.wizard-action .previous',
						firstSelector: '.wizard-action .first',
						lastSelector: '.wizard-action .last',
						onTabShow: function (tab, navigation, index) {
		
								var $total = navigation.find('li').length;
								var $current = index + 1;
								var $percent = ($current / $total) * 100;
								var $wizard = $('#demoWizard');
								
								$wizard.find('.bar').css({
										width: $percent + '%'
								});
								
								$wizard.find('.number-page').text($current + ' of ' + $total);
								
								// If it's the last tab then hide the last button and show the finish instead
								if($current >= $total) {
										$wizard.find('.wizard-action .next').hide();
										$wizard.find('.wizard-action .finish').show();
										$wizard.find('.wizard-action .finish').removeClass('disabled');
										$wizard.find('.wizard-action .print').show();
										$wizard.find('.wizard-action .print').removeClass('disabled');
										$wizard.find('.wizard-action .cancel').show();
										$wizard.find('.wizard-action .cancel').removeClass('disabled');
								} else {
										$wizard.find('.wizard-action .next').show();
										$wizard.find('.wizard-action .finish').hide();
										$wizard.find('.wizard-action .print').hide();
										$wizard.find('.wizard-action .cancel').hide();
								}
		
						}
						
				});
				wizardForm('#demoWizard .finish').click(function () {
						alert('Finished!, Starting over!');
						$('#demoWizard').find("a[href*='tab1e']").trigger('click');
				});
				
				wizardForm('#wzNewAddressState').select2();
		});
		
		$(function (wizardForm) {
				// navbar, numbering, progressbar, submit button well-nice
				wizardForm('#demoWizard2').bootstrapWizard({
						nextSelector: '.wizard-action .next',
						previousSelector: '.wizard-action .previous',
						firstSelector: '.wizard-action .first',
						lastSelector: '.wizard-action .last',
						onTabShow: function (tab, navigation, index) {
		
								var $total = navigation.find('li').length;
								var $current = index + 1;
								var $percent = ($current / $total) * 100;
								var $wizard = $('#demoWizard2');
								
								$wizard.find('.bar').css({
										width: $percent + '%'
								});
								
								$wizard.find('.number-page').text($current + ' of ' + $total);
								
								// If it's the last tab then hide the last button and show the finish instead
								if($current >= $total) {
										$wizard.find('.wizard-action .next').hide();
										$wizard.find('.wizard-action .finish').show();
										$wizard.find('.wizard-action .finish').removeClass('disabled');
										$wizard.find('.wizard-action .print').show();
										$wizard.find('.wizard-action .print').removeClass('disabled');
										$wizard.find('.wizard-action .cancel').show();
										$wizard.find('.wizard-action .cancel').removeClass('disabled');
								} else {
										$wizard.find('.wizard-action .next').show();
										$wizard.find('.wizard-action .finish').hide();
										$wizard.find('.wizard-action .print').hide();
										$wizard.find('.wizard-action .cancel').hide();
								}
		
						}
						
				});
				wizardForm('#demoWizard2 .finish').click(function () {
						alert('Finished!, Starting over!');
						$('#demoWizard2').find("a[href*='tab1e']").trigger('click');
				});
				
				wizardForm('#wzNewAddressState2').select2();
		});
});
