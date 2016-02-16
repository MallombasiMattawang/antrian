/*** -----------------------------------------------------------------------------------------------

	ADMIN TEMPLATE | Boo Admin Template
	----------------------------------------

	JS - Demo DataTable
	
	-------------------------------------------------------------------------------------------------------------------------------- ***/
$(document)
        .ready(function () {

        


// DATATABLE SETTINGS component-table-boo.html
// ------------------------------------------------------------------------------------------------ * -->
				// DATATABLE exampleDT
				// -------------------------------------------------------------------------------- * -->
				$('.exampleDT')
                        .dataTable({
                        iDisplayLength: 3,
                        sDom: "<'row-fluid' <'span4'l> <'span8'pf> > rt <'row-fluid' <'span12'i> >"
                });
				$('.exampleDT_length select').select2({
						minimumResultsForSearch: 6,
						width: "off"
				});


				// DATATABLE exampleDTA
				// -------------------------------------------------------------------------------- * -->
        		$('#exampleDTA')
                        .dataTable({
                        oLanguage: {
                                sSearch: 'Global search:',
                                sLengthMenu: '_MENU_ to page',
                                sZeroRecords: 'No record found <button class="btn btn-danger resetTable">Reset filter</button>',
                                oPaginate: {
                                        sNext: '<i class="arrowicon-r-black"></i>',
                                        sPrevious: '<i class="arrowicon-l-black"></i>'
                                }
                        },
                        iDisplayLength: 3,
                        aaSorting: [
                                [0, 'desc']
                        ],
                        aoColumnDefs: [{
                                "aTargets": [2],
                                'sClass': 'hidden-phone'
                        }, {
                                "aTargets": [3],
                                'sClass': 'hidden-phone hidden-tablet'
                        }, {
                                "aTargets": [4],
                                'sType': 'eu_date'
                        }],
                        sDom: "<'row-fluid'<'widget-header'<'span6'l><'span6'f>>>rt<'row-fluid'<'widget-footer'<'span6'><'span6'p>>"

                });
				$('#exampleDTA_length select').select2({
						minimumResultsForSearch: 6,
						width: "off"
				});


				// DATATABLE exampleDTB-1
				// -------------------------------------------------------------------------------- * -->
				$('#exampleDTB-1')
                        .dataTable({
                        oLanguage: {
                                sSearch: "",
                                sLengthMenu: "_MENU_ entries to page",
                                sZeroRecords: 'No record found <button class="btn btn-danger resetTable">Reset filter</button>'
                        },
                        iDisplayLength: 3,
                        aaSorting: [
                                [1, 'asc']
                        ],
                        aoColumnDefs: [{
                                "aTargets": [2],
                                'sClass': 'hidden-phone'
                        }, {
                                "aTargets": [3],
                                'sClass': 'hidden-phone hidden-tablet'
                        }, {
                                "aTargets": [4],
                                'sType': 'eu_date'
                        }],
                        sPaginationType: 'full_numbers',
                        sDom: "<'row-fluid' <'widget-header' <'span4'l> <'span8'<'table-reset-wrapper'>f<'table-tool-wrapper'> > > >  rt <'row-fluid' <'widget-footer' <'span12'p> >",
                });
                //* inject  to datatable DTB
                $('#exampleDTB-1_wrapper .table-global-filter input')
                        .attr("placeholder", "enter search terms");
                $('#exampleDTB-1_wrapper .table-tool-wrapper')
                        .html($('.DTB_toolBar')
                        .html());
                $('#exampleDTB-1_wrapper .table-reset-wrapper')
                        .html($('.DTB_resetTable')
                        .html());
				$('#exampleDTB-1_length select').select2({
						minimumResultsForSearch: 6,
						width: "off"
				});
						

				// DATATABLE exampleDTB-2
				// -------------------------------------------------------------------------------- * -->
        		$('#exampleDTB-2')
                        .dataTable({
                        oLanguage: {
                                sSearch: "",
                                sLengthMenu: "_MENU_ entries to page",
                                sZeroRecords: 'No record found <button class="btn btn-danger resetTable">Reset filter</button>'
                        },
                        iDisplayLength: 3,
                        aaSorting: [
                                [1, 'asc']
                        ],
                        aoColumnDefs: [{
                                "aTargets": [2],
                                'sClass': 'hidden-phone'
                        }, {
                                "aTargets": [3],
                                'sClass': 'hidden-phone hidden-tablet'
                        }, {
                                "aTargets": [4],
                                'sType': 'eu_date'
                        }],
                        sPaginationType: 'full_numbers',
                        sDom: "<'row-fluid' <'widget-header no-border-bottom' <'span4'l> <'span8'<'table-reset-wrapper'>f<'table-tool-wrapper'> > > >  rti <'row-fluid' <'widget-footer' <'span12'p> >",
                });
                //* inject to datatable DTB
                $('#exampleDTB-2_wrapper .table-global-filter input')
                        .attr("placeholder", "enter search terms");
                $('#exampleDTB-2_wrapper .table-tool-wrapper')
                        .html($('.DTB_toolBar')
                        .html());
                $('#exampleDTB-2_wrapper .table-reset-wrapper')
                        .html($('.DTB_resetTable')
                        .html());
				
				$('#exampleDTB-2_length select').select2({
						minimumResultsForSearch: 6,
						width: "off"
				});
				

				// DATATABLE exampleDTC
				// -------------------------------------------------------------------------------- * -->
        		$('#exampleDTC')
                        .dataTable({
                        oLanguage: {
                                sSearch: "Global search: ",
                                sLengthMenu: "Show _MENU_ entries",
                                sZeroRecords: 'No record found <button class="btn btn-danger resetTable">Reset filter</button>'
                        },
                        iDisplayLength: 5,
                        aaSorting: [
                                [1, 'asc']
                        ],
                        aoColumnDefs: [{
                                "aTargets": [0],
                                'sClass': 'bold'
                        }, {
                                "aTargets": [1],
                                'sClass': 'text-center'
                        }, {
                                "aTargets": [2],
                                'sClass': 'hidden-phone'
                        }, {
                                "aTargets": [3],
                                'sClass': 'text-right hidden-phone hidden-tablet',
                                'sType': 'eu_date'
                        }, {
                                "aTargets": [4],
                                'sClass': 'text-right hidden-phone hidden-tablet',
                                'sType': 'eu_date'
                        }, {
                                "aTargets": [5],
                                'sClass': 'text-right',
                                'sType': 'eu_date'
                        }, {
                                "aTargets": [6],
                                'sClass': 'text-right'
                        }],
                        sPaginationType: 'full_numbers',
                        sDom: "<'row-fluid' <'widget-header' <'span4'l> <'span8'<'table-reset-wrapper'>f> > <'table-tool'> >  Rrt <'row-fluid' <'widget-footer' <'span4' <'table-action-wrapper'> i> <'span8'p> >",

                        fnFooterCallback: function (nRow, aaData, iStart, iEnd, aiDisplay) {
                                var iPageSum = 0;
                                for(var i = iStart; i < iEnd; i++) {
                                        iPageSum += aaData[aiDisplay[i]][6] * 1;
                                }
                                var nCells = nRow.getElementsByTagName('th');
                                nCells[6].innerHTML = parseInt(iPageSum * 100) / 100;
                        }
                });
                //* inject to datatable DTC
                $('#exampleDTC_wrapper .table-tool')
                        .html($('#DTC_toolBar')
                        .html());
                $('#exampleDTC_wrapper .table-reset-wrapper')
                        .html($('.DTC_resetTable')
                        .html());
                $('#exampleDTC_wrapper .table-action-wrapper')
                        .html($('#DTC_actionTable')
                        .html());
				
				$('#exampleDTC_length select').select2({
						minimumResultsForSearch: 6,
						width: "off"
				});
					
						
				// DATATABLE exampleDTCF
				// -------------------------------------------------------------------------------- * -->
        		$('#exampleDTCF')
                        .dataTable({
                        bAutoWidth: false,
                        bSortCellsTop: true,
                        BProcessing: true,
                        oLanguage: {
                                sSearch: "Global search: ",
                                sLengthMenu: "Show _MENU_ entries",
                                sZeroRecords: 'No record found <button class="btn btn-danger resetTable">Reset filter</button>'
                        },
                        iDisplayLength: 10,
                        aaSorting: [
                                [3, 'asc']
                        ],
                        aoColumnDefs: [{
                                "aTargets": [0],
                                'bSortable': false,
                                'sWidth': '25px'
                        }, {
                                "aTargets": [1],
                                'sWidth': '65px',
                                'sClass': 'bold'
                        }, {
                                "aTargets": [3],
                                'sClass': 'text-right hidden-phone hidden-tablet',
                                'sType': 'eu_date'
                        }, {
                                "aTargets": [4],
                                'sClass': 'text-right',
                                'sType': 'eu_date'
                        }, {
                                "aTargets": [5],
                                'sClass': 'text-right'
                        }],
                        sPaginationType: 'full_numbers',
                        sDom: "<'row-fluid' <'widget-header' <'span4'l> <'span8'<'table-tool-wrapper'><'table-tool-container'>> > > rti <'row-fluid' <'widget-footer' <'span6' <'table-action-wrapper'>> <'span6'p> >>",

                        fnFooterCallback: function (nRow, aaData, iStart, iEnd, aiDisplay) {
                                var iPageSum = 0;
                                for(var i = iStart; i < iEnd; i++) {
                                        iPageSum += aaData[aiDisplay[i]][5] * 1;
                                }
                                var nCells = nRow.getElementsByTagName('th');
                                nCells[5].innerHTML = parseInt(iPageSum * 100) / 100;
                        }
                })
                // Table Filter
                .columnFilter({
                        sPlaceHolder: 'head:after',
                        aoColumns: [
                        null, {
                                type: 'number'
                        }, {
                                type: 'text'
                        }, {
                                type: 'text'
                        }, {
                                type: 'text'
                        }, {
                                type: 'text'
                        }]
                });
                // inject to datatable DTCF
                $('#exampleDTCF_wrapper .table-tool-wrapper')
                        .html($('#DTCF_toolBar')
                        .html());
                $('#exampleDTCF_wrapper .table-action-wrapper')
                        .html($('#DTCF_actionTable')
                        .html());
				
				$('#exampleDTCF_length select').select2({
						minimumResultsForSearch: 6,
						width: "off"
				});


				// DATATABLE exampleDTSC
				// -------------------------------------------------------------------------------- * -->
        		$('#exampleDTSC')
                        
                        .dataTable({
                        sScrollY: "374px",
                        sAjaxSource: "assets/data/checking.php",
                        bDeferRender: true,
                        bStateSave: true,
                        OScroller: {
                                LoadingIndicator: true
                        },

                        oLanguage: {
                                sSearch: 'Global search:',
                                sLengthMenu: 'Show _MENU_ entries',
                                sZeroRecords: 'No record found <br><img title="img/ajax-loaders/ajax-loader-5.gif" src="img/ajax-loaders/ajax-loader-5.gif">',
                        },
                       aaSorting: [
                                [0, 'desc']
                        ],
                        aoColumnDefs: [{
                                "aTargets": [0],
                                'sClass': 'hidden-phone'
                        }, {
                        "aTargets": [2]
                                
                        }, {
                                "aTargets": [3],
                                
                                "sName": "RoleId",
                        "bSearchable": false,
                        "bSortable": false,
                        "fnRender": function (oObj)                              
                        {
                            // oObj.aData[0] returns the RoleId
                            
                            return "<a class='btn btn-green' href='?link=dosen&act=detaildosen&id="+oObj.aData[0]+"'>Detail</a>  <a  class='btn btn-yellow' href='?link=dosen&act=editdosen&id="+oObj.aData[0]+"'>Edit</a>  <a class='btn btn-red' href='modul/dosen/aksi_dosen.php?link=dosen&act=hapus&id="+oObj.aData[0]+"'>Delete</a>";
                            
                        }
                        
                        }],
                    
                        sDom: "<'row-fluid'<'widget-header' <'span6'<'table-header-title'>> <'span6'f>>>rtiS"
                })
                
                       
                // inject to datatable DTSC
                $('#exampleDTSC_wrapper .table-header-title')
                        .html($('#DTSC_header_title')
                        .html());
// DATATABLE exampleDTSC
				// -------------------------------------------------------------------------------- * -->
        		$('#pengajaran')
                        
                        .dataTable({
                        sScrollY: "374px",
                        sAjaxSource: "assets/data/check_ajar.php",
                        bDeferRender: true,
                        bStateSave: true,
                        OScroller: {
                                LoadingIndicator: true
                        },

                        oLanguage: {
                                sSearch: 'Global search:',
                                sLengthMenu: 'Show _MENU_ entries',
                                sZeroRecords: 'No record found <br><img title="img/ajax-loaders/ajax-loader-5.gif" src="img/ajax-loaders/ajax-loader-5.gif">',
                        },
                       aaSorting: [
                                [0, 'desc']
                        ],
                        aoColumnDefs: [{
                                "aTargets": [0],
                                'sClass': 'hidden-phone'
                        }, {
                        "aTargets": [2]
                                
                        }, {
                                "aTargets": [5],
                                
                                "sName": "RoleId",
                        "bSearchable": false,
                        "bSortable": false,
                        "fnRender": function (oObj)                              
                        {
                            // oObj.aData[0] returns the RoleId
                            
                            return "<a  href='?link=dosen&act=detaildosen&id="+oObj.aData[0]+"'>Detail</a> | <a  href='?link=dosen&act=editdosen&id="+oObj.aData[0]+"'>Edit</a> | <a  href='modul/dosen/aksi_dosen.php?link=dosen&act=hapus&id="+oObj.aData[0]+"'>Delete</a>";
                            
                        }
                        
                        }],
                    
                        sDom: "<'row-fluid'<'widget-header' <'span6'<'table-header-title'>> <'span6'f>>>rtiS"
                })
                
                       
                // inject to datatable DTSC
                $('#exampleDTSC_wrapper .table-header-title')
                        .html($('#DTSC_header_title')
                        .html());


// DATATABLE SETTINGS component-widgets-users.html
// ------------------------------------------------------------------------------------------------ * -->
			// DATATABLE lastLogedTable
			// ------------------------------------------------------------------------------------------------ * -->
			$('#lastLogedTable')
					.dataTable({
					bAutoWidth: false,
                                        oLanguage: {
							sSearch: 'Global search:',
							sLengthMenu: '_MENU_ to page',
							sZeroRecords: 'No record found <button class="btn btn-danger resetTable">Reset filter</button>',
							oPaginate: {
									sNext: '<i class="arrowicon-r-black"></i>',
									sPrevious: '<i class="arrowicon-l-black"></i>'
							}
					},
					iDisplayLength: 10,
					aaSorting: [
							[1, 'asc']
					],
					aoColumnDefs: [{
							"aTargets": [0],
                                                        'sWidth': '40px'
                                        }, {                
                                                        "aTargets": [2],
							'sClass': 'hidden-phone'
					}, {
							"aTargets": [3],
							'sClass': 'hidden-tablet hidden-phone'
					}, {
							"aTargets": [4]
					}, {
                                                        "aTargets": [6],
                                                        'sClass': 'hidden-tablet hidden-phone'
                                        }],
					sDom: "<'row-fluid'<'widget-header'<'span6'l><'span6'f>>>rt<'row-fluid'<'widget-footer'<'span6'><'span6'p>>"
	
			});
			$('#lastLogedTable_length select').select2({
					minimumResultsForSearch: 6,
					width: "off"
			});
			
			
});