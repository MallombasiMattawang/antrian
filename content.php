<div id="main-sidebar" class="sidebar sidebar-inverse">
            <!-- // sidebar menu -->
       

            <?php //include"counter.php";?>
            <div class="sidebar-item"></div>
            <!-- // sidebar item --> 
            <div class="well well-black">
                <hr>
                                <div class="section-title">
                                    
                                    <center><h4 style="font-weight:bold; color:gray;"><i class=" fontello-icon-vcard"></i> Loket Transaksi</h4></center>
                                </div>
                <div class="row-fluid">
                
                        <div class="span7">
                        <center><h6 style="font-weight:bold; color:gray;">Nomor Antrian</h6>    
                            <h1 class="well well-black well-large inline" > <br><span id="responsecontainer" style="font-family:SimHei; font-size: 98px; font-weight:bold; color:#FFFF00;"></span><br></h1></center>
                            
                        </div>
                        <!-- // Column -->
                        
                        <div class="span5 pull-right">
                            <center><h6 style="font-weight:bold; color:gray;">Loket</h6>
                            <h1 class="well well-black well-large inline" ><br><span id="loket_transaksi" ></span></h1></center>
                        </div>
                        <!-- // Column --> 
                        
                    </div>
                           <hr>
                                <div class="section-title">
                                    <center><h4 style="font-weight:bold; color:gray;"><i class=" fontello-icon-docs"></i> Loket Administrasi</h4></center>
                                </div>
                <div class="row-fluid">
                
                        <div class="span7">
                        <center><h6 style="font-weight:bold; color:gray;">Nomor Antrian</h6>    
                            <h1 class="well well-black well-large inline" > <br><span id="respon_administrasi" style="font-family:SimHei; font-size: 88px; font-weight:bold; color:#FFFF00;"></span></h1></center>
                            
                        </div>
                        <!-- // Column -->
                        
                        <div class="span5 pull-right">
                            <center><h6 style="font-weight:bold; color:gray;">Loket</h6>
                            <h1 class="well well-black well-large inline" > <br><span id="loket_administrasi" style="font-family:SimHei; font-size: 88px; font-weight:bold; color:#FFFF00;"></span></h1></center>
                        </div>
                        <!-- // Column --> 
                        
                    </div><hr><br><br><br>
                            </div>
        </div>
        <!-- // sidebar -->
             
<script>
 $(document).ready(function() {
 	 $("#responsecontainer").load("respon/respon_transaksi.php");
   var refreshId = setInterval(function() {
      $("#responsecontainer").load('respon/respon_transaksi.php');
   }, 2000);
   $.ajaxSetup({ cache: false });
});
</script>
<script>
 $(document).ready(function() {
 	 $("#respon_administrasi").load("respon/respon_administrasi.php");
   var refreshId = setInterval(function() {
      $("#respon_administrasi").load('respon/respon_administrasi.php');
   }, 2000);
   $.ajaxSetup({ cache: false });
});
</script>
<script>
 $(document).ready(function() {
 	 $("#loket_administrasi").load("respon/loket_administrasi.php");
   var refreshId = setInterval(function() {
      $("#loket_administrasi").load('respon/loket_administrasi.php');
   }, 2000);
   $.ajaxSetup({ cache: false });
});
</script>
<script>
 $(document).ready(function() {
 	 $("#loket_transaksi").load("respon/loket_transaksi.php");
   var refreshId = setInterval(function() {
      $("#loket_transaksi").load('respon/loket_transaksi.php');
   }, 2000);
   $.ajaxSetup({ cache: false });
});
</script>