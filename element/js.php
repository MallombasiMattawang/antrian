<!-- // page-container  --> 
<!-- Le javascript --> 
<!-- Placed at the end of the document so the pages load faster --> 
<!-- Le javascript --> 
<!-- Placed at the end of the document so the pages load faster --> 

<!-- Le javascript --> 


<!-- Plugins Bootstrap -->
<script src="webroot/plugins/bootstrap-bootbox/bootbox.min.js"></script>
<script src="webroot/plugins/bootstrap-modal/js/bootstrap-modalmanager.js"></script>
<script src="webroot/plugins/bootstrap-modal/js/bootstrap-modal.js"></script>

<!-- Plugins Custom - Form -->
<script src="webroot/plugins/pl-form/uniform/jquery.uniform.min.js"></script>
<script src="webroot/plugins/pl-form/select2/select2.min.js"></script>
<script src="webroot/plugins/pl-form/counter/jquery.counter.js"></script>
<script src="webroot/plugins/pl-form/elastic/jquery.elastic.js"></script>
<script src="webroot/plugins/pl-form/inputmask/jquery.inputmask.js"></script>
<script src="webroot/plugins/pl-form/inputmask/jquery.inputmask.extensions.js"></script>
<script src="webroot/plugins/pl-form/validate/js/jquery.validate.min.js"></script>
<script src="webroot/plugins/pl-form/duallistbox/jquery.duallistbox.min.js"></script>




 <link rel="stylesheet" type="text/css" href="webroot/css/DateTimePicker.css" />
<script type="text/javascript" src="webroot/js/DateTimePicker.js"></script>
<script type="text/javascript">
      $(document).ready(function() {
        // ketika input usia di isi, eksekusi bagian ini.
	      $(".int").keypress(function (data)  
	      { 
	         // kalau data bukan berupa angka, tampilkan pesan error
	         if(data.which!=8 && data.which!=0 && (data.which<48 || data.which>57))
	         {
		          $(".pesan").html("Isikan Angka").show().fadeOut("slow"); 
	            return false;
           }	
	      });
      });
    </script>
 <script>
function reloadPage()
  {
  location.reload();
  }
</script>