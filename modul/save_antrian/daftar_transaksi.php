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
                            
                            <div class="widget widget-simple widget-table">
                                <table id="table" class="table table-striped table-content table-condensed boo-table table-hover">
                                    <thead>
                                       
                                        <tr>
                                            <th class="no_mobile" scope="col">ID <span class="column-sorter"></span></th>
                                            <th class="no_mobile" scope="col">No Antrian <span class="column-sorter"></span></th>
                                            <th class="no_mobile" scope="col">Customer <span class="column-sorter"></span></th>
                                            <th class="no_mobile" scope="col">Waktu Pelayanan <span class="column-sorter"></span></th>
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
        
        // Form Detail 
        case "Detail": 
        include "daftar_transaksi_detail.php"; 
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
                        sAjaxSource: "modul/save_antrian/json_transaksi.php",
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
                                [0, 'desc']
                        ],
                        aoColumnDefs: [{
                                "aTargets": [0],
                                'sClass': 'hidden-phone'
                        
                        }, {
                                "aTargets": [4],
                                
                                "sName": "RoleId",
                                "sDefaultContent": "",
                        "bSearchable": false,
                        "bSortable": false,
                        "fnRender": function (oObj)                              
                        {
                            // oObj.aData[0] returns the RoleId
                            
                            return "<a  class='btn btn-yellow' href='?link=daftar-customer-transaksi&act=Detail&id="+oObj.aData[0]+"'>View</a>";
                            
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