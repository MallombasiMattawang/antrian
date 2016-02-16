<?php
 if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
  echo header("location:home.php?link=home");
}
else{

switch($_GET[act]){
  default: ?>
<section>
                    <div class="row-fluid">
                        <div class="span12">
                            <div class="navbar">
                                        <div class="navbar-inner">
                                            <div class="fileupload-buttonbar">
                                                <h4 class="title"><i class="fontello-icon-th"></i> Menus</h4>
                                                <!-- The fileinput-button span is used to style the file input field as button -->
                                                <ul class="btn-toolbar pull-right">
                                                    <li><a href="?link=menus&act=Add" class="btn btn-blue "> <i class="fontello-icon-plus-1"></i> 
                                                            <span>Tambah </span>
                                                        </a></li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                            <div class="widget widget-simple widget-table">
                                <table id="table" class="table table-striped table-content table-condensed boo-table table-hover">
                                    <thead>
                                       
                                        <tr>
                                            <th class="no_mobile" scope="col">ID <span class="column-sorter"></span></th>
                                            <th class="no_mobile" scope="col">Menus <span class="column-sorter"></span></th>
                                            <th class="no_mobile" scope="col">URL <span class="column-sorter"></span></th>
                                            <th class="no_mobile" scope="col">Title <span class="column-sorter"></span></th>
                                            <th class="no_mobile" scope="col">Enable <span class="column-sorter"></span></th>
                                            <th class="no_mobile" scope="col">Parent_id <span class="column-sorter"></span></th>
                                            <th class="alignright">Actions</th>
                                        </tr>
                                    </thead>
                                </table>
                                 
                                
          <!-- INPUT elements of the form -->

      
     
                                <!-- // DATATABLE - DTSC -->
                                
                            </div>
                            <!-- // Widget -->
                             
                        </div>
                        <!-- // Column -->
                        
                    </div>
                    <!-- // Example row -->
                    
                    
                </section>
                <hr>
            
<?php   break; ?>
  
<?php  // Form Add 
        case "Add": 
        include "admin_add.php"; 
        break;  

  
      // Form Edit 
        case "Edit": 
        include "admin_edit.php"; 
        break;  
        
        // Form Detail 
        case "Detail": 
        include "admin_detail.php"; 
        break;  
}
}
?>
<script>
    $(document)
        .ready(function () {
     // DATATABLE
				// -------------------------------------------------------------------------------- * -->
        		$('#table')
                        
                        .dataTable({
                        sScrollY: "374px",
                        sAjaxSource: "modul/sys_menus/json.php",
                        bDeferRender: true,
                        bStateSave: true,
                        OScroller: {
                                LoadingIndicator: true
                        },

                        oLanguage: {
                                sSearch: 'Global search:',
                                sLengthMenu: 'Show _MENU_ entries',
                                sZeroRecords: 'No record found <br><img title="webroot/img/loader/horizontal_01_white.gif" src="webroot/img/loader/horizontal_01_white.gif">',
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
                            
                            return "<a  class='btn btn-yellow' href='?link=menus&act=Detail&id="+oObj.aData[0]+"'>Edit</a>";
                            
                        }
                        
                        }],
                    
                    
                        sDom: "<'row-fluid'<'widget-header' <'span6'<'table-header-title'>> <'span6'f>>>rtiS"
                })
                
                       
                // inject to datatable DTSC
                $('#wrapper .table-header-title')
                        .html($('#DTSC_header_title')
                        .html());
           });
</script>