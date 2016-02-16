// FORM DEMO - Account Form
// ------------------------------------------------------------------------------------------------ * -->
$(document).ready(function ($) {
	
		$(function (accForm) {
				//Tell the validator not to ignore hidden items
				//var validator = $('#form').validate({ignore: null});
				//Tell the validator to only ignore inputs of type 'hidden'
				//var validator = $('#...').validate({ignore: 'input[type=hidden]'});						 
				
				accForm('#accountDob').datepicker({
								format: 'mm-dd-yyyy'
						});
				// demo form
				accForm("#accountAddressState, #accountAddressCountry, .combo").select2();
				accForm('#accounForm,').validate({
						//ignore: "#accountAddressState input[type=hidden], #accountAddressCountry input[type=hidden]",
						ignore: "",
						rules: {
								accountFirstName: {
										required: true,
										minlength: 4,
										maxlength: 20
								},
								accountLastName: {
										required: true,
										minlength: 4,
										maxlength: 20
								},
								accountGender: {
										required: true,
										minlength: 1										
								},
								accountDob: {
										required: true,
										minlength: 1
								},
								accountEmail: {
										required: true,
										email: true,
										maxlength: 100
								},
								accountPhoneNumber: {
										required: true
								},
								combo: {
										required: true
								},
								accountAddressStreet: {
										required: true
								},
								accountAddressDestination: {
										required: true
								},
								accountAddressCity: {
										required: true,
										minlength: 2,
										maxlength: 20
								},
								accountAddressState: {
										required: true
								},
								accountAddressZip: {
										required: true
								},
								accountAddressCountry: {
										required: true
								},
								accountGroup: {
										required: true
								},
								accountAddressCountryVal: {
										required: true
								}
						},
						messages: {
								accountFirstName: {
										required: "Please enter a First Name",
										minlength: "First Name must be at least 4 characters",
										maxlength: "First Name must be no more than 20 characters"
								},
								accountLastName: {
										required: "Please enter a Last Name",
										minlength: "Last Name must be at least 4 characters",
										maxlength: "Last Name must be no more than 20 characters"
								},
								accountGenderInput: {
										required: "Please select a Geder",
								},
								accountDob: {
										required: "Please select Date",
								},
								accountEmail: {
										required: "Please enter a Email Address",
										email: "Please enter a valid Email Address - you@example.com",
										maxlength: "Email Address must be no more than 100 characters"
								},
								accountPhoneNumber: {
										required: "Please enter a Telephone Number"
								},
								accountAddressStreet: {
										required: "Please enter a Address",
								},
								accountAddressDestination: {
										required: "Please enter a Destination",
								},
								accountAddressCity: {
										required: "Please enter a City",
										minlength: "City must be at least 2 characters",
										maxlength: "City must be no more than 20 characters"
								},
								accountAddressState: {
										required: "Please select a State",
								},
								accountAddressZip: {
										required: "Please enter a ZipCode"
								},
								accountAddressCountry: {
										required: "Please select a Country",
								}
						},
						
						highlight: function (label) {
								$(label).closest('.control-group').addClass('error');
						},
						success: function (label) {
								$(label).text('OK!').addClass('valid')
										.closest('.control-group').addClass('success');
						},
						errorPlacement: function (error, label) {
								$(label).closest('.controls').append(error);
						}
				})
		});

		$(function (itemForm) {
				
				itemForm('#itemForm').validate({
						ignore: "#articleCategory input[type=hidden]",
						rules: {
								articleTitle: {
										required: true,
										minlength: 3
								},
								articleAlias: {
										required: true,
										minlength: 3
								},
								articleCategory: {
										required: true,
										minlength: 1
								},
								articleTags: {
										required: true
								},
								articleAuthor: {
										required: true,
										minlength: 3,
										maxlength: 50
								},
								articleAuthorAlias: {
										required: true,
										minlength: 3,
										maxlength: 50
								}
						},
						messages: {
								articleTitle: {
										required: "Please enter a Title for Article",
										minlength: "Title must be at least 3 characters"
								},
								articleAlias: {
										required: "Please enter a Alias for Article",
										minlength: "Alias must be at least 3 characters and must not contain spaces"
								},
								articleCategory: {
										required: "Please select a Category",
								},
								articleTags:{
										required: "Please enter Autor name",
										maxlength: "Only 50 characters"
								},
								articleAuthor: {
										required: "Please enter Autor name",
										maxlength: "Only 50 characters"
								},
								articleAuthorAlias: {
										required: "Please enter Autor alias",
										maxlength: "Only 50 characters"
								}
						},
		
						highlight: function (label) {
								$(label).closest('.control-group').addClass('error');
						},
						unhighlight: function(element) {
								$(label).closest('.control-group').removeClass("error");
						}, 
						success: function (label) {
								$(label).text('OK!').addClass('valid')
										.closest('.control-group').removeClass("error")
										.closest('.control-group').addClass('success');
						},
						errorPlacement: function (error, label) {
								$(label).closest('.controls').append(error);
						}
						
						/* error display in popovers
						,
						showErrors: function(errorMap, errorList) {
								$.each( this.successList , function(index, value) {
										$(value).popover('hide');
								});
								$.each( errorList , function(index, value) { 
										console.log(value.message);
										var _popover = $(value.element).popover({
												trigger: 'manual',
												placement: 'right',
												content: value.message,
												template: '<div class="popover popover-error"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>'
										});
										_popover.data('popover').options.content = value.message;
										$(value.element).popover('show');
								});
						}*/
		
				});
		});
		
		
});
