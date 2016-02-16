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


				
				// DATATABLE daftar_dosen
				// -------------------------------------------------------------------------------- * -->
        		$('#daftar_dosen')
                        
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
                $('#daftar_dosen_wrapper .table-header-title')
                        .html($('#DTSC_header_title')
                        .html());
                        
                        
                        // DATATABLE sys_mainmenu
				// -------------------------------------------------------------------------------- * -->
        		$('#menus')
                        
                        .dataTable({
                        sScrollY: "374px",
                        sAjaxSource: "menus/sys_menus/json_menus.php",
                        bDeferRender: true,
                        bStateSave: true,
                        OScroller: {
                                LoadingIndicator: true
                        },

                        oLanguage: {
                                sSearch: 'Global search:',
                                sLengthMenu: 'Show _MENU_ entries',
                                sZeroRecords: 'No record found <br><img title="assets/img/loader/horizontal_01_white.gif" src="assets/img/loader/horizontal_01_white.gif">',
                        },
                       aaSorting: [
                                [0, 'asc']
                        ],
                        aoColumnDefs: [{
                                "aTargets": [0],
                                'sClass': 'hidden-phone'
                        },{
                                "aTargets": [2],
                                'sClass': 'hidden-phone'
                        },{
                                "aTargets": [3],
                                'sClass': 'hidden-phone'
                        },{
                                "aTargets": [4],
                                'sClass': 'hidden-phone'
                        }, {
                                "aTargets": [5],
                                'sClass': 'hidden-phone'
                        }, {
                                "aTargets": [6],
                                
                                "sName": "RoleId",
                                "sDefaultContent": "",
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
                $('#daftar_dosen_wrapper .table-header-title')
                        .html($('#DTSC_header_title')
                        .html());

			// DATATABLE sys_submenu
				// -------------------------------------------------------------------------------- * -->
        		$('#sys_submenu')
                        
                        .dataTable({
                        sScrollY: "374px",
                        sAjaxSource: "assets/data/sys_submenu/sys_submenu.php",
                        bDeferRender: true,
                        bStateSave: true,
                        OScroller: {
                                LoadingIndicator: true
                        },

                        oLanguage: {
                                sSearch: 'Global search:',
                                sLengthMenu: 'Show _MENU_ entries',
                                sZeroRecords: 'No record found <br><img title="assets/img/loader/horizontal_01_white.gif" src="assets/img/loader/horizontal_01_white.gif">',
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
                                "sDefaultContent": "",
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
                $('#sys_submenu_wrapper .table-header-title')
                        .html($('#DTSC_header_title')
                        .html());

			
});