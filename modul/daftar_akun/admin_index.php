<?php
session_start();
 if (empty($_SESSION['username']) AND empty($_SESSION['passuser'])){
  echo header("location:../../index.php");
}
else{
switch($_GET[act]){
  default:    ?>
<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header well" data-original-title>
						<div class="box-icon">
							<a href="?link=pengguna-akun&act=Add" class="btn btn-round" title="Tambah Pengguna" data-rel="tooltip"><i class="icon-plus"></i></a>
							
						</div>
					</div>
					<div class="box-content">
						<table id="akun" class="table table-striped table-bordered bootstrap-datatable">
						  <thead>
							  <tr>
                                                                    <th>ID</th>
                                                                    <th>Username</th>
                                                                    <th>Nama Lengkap</th>
                                                                    <th>Action</th>
							  </tr>
						  </thead>   
					  </table>      
					</div>
				</div><!--/span-->
			</div><!--/row-->                        
<?php  break; 
  // Form Add 
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
    // Form Detail User
        case "DetailUser": 
        include "user_detail.php"; 
        break;  
 }
}
?>

    <script>
        $(document).ready(function(){
        //datatable
	$('#akun').dataTable({
			"sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span12'i><'span12 center'p>>",
			"sPaginationType": "bootstrap",
                        "sAjaxSource": 'modul/daftar_akun/json.php',
			"oLanguage": {
			"sLengthMenu": "_MENU_ records per page"
			},
                        aoColumnDefs: [{
                                "aTargets": [0]
                        }, {
                        "aTargets": [2]
                                
                        }, {
                                "aTargets": [3],
                                
                                "sName": "RoleId",
                                "sDefaultContent": "",
                        "bSearchable": false,
                        "bSortable": false,
                        "fnRender": function (oObj)                              
                        {
                            // oObj.aData[0] returns the RoleId
                            
                            return " <a class='btn btn-success' href='?link=pengguna-akun&act=Detail&id="+oObj.aData[0]+"'><i class='icon-zoom-in icon-white'></i> Detail</a> ";
                            
                        }
                        
                        }]
		} );
                });
    </script>
