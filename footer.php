<footer id="footer-fix">
        <div id="footer-sidebar" class="footer-sidebar">
            <small><a href="#"> &nbsp;&nbsp;M. Mattawang 2012</a>
            <a href="#"> &nbsp;&nbsp;Junior Programming</a></small>
        </div>
        <!-- // footer sidebar -->
        
        <div id="footer-content" class="footer-content">
            <div class="navbar navbar-inverse">
                <div class="navbar-inner">
                    
                    <ul class="nav pull-right">
                        <li class="divider-vertical"></li>
                        <li><a class="btn-glyph fontello-icon-help-2 tip" href="javascript:void(0);" title="help to page" data-toggle="modal" data-target="#confirm-help"></a></li>
                        <li class="divider-vertical"></li>
                        
                        <li class="divider-vertical"></li>
                        <li><a id="btnLogout" class="btn-glyph fontello-icon-logout-1 tip" href="logout.php" title="logout"></a></li>
                        <li class="divider-vertical"></li>
                        <li><a id="btnScrollup" class="scrollup btn-glyph fontello-icon-up-open-1" href="javascript:void(0);"></a></li>
                        <li class="divider-vertical"></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- // footer content --> 
        
    </footer>
    <!-- // footer-fix  --> 
    <div class="modal fade" id="confirm-help" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Informasi Aplikasi </h4>
            </div>
            <div class="modal-body">
                <p>Keterangan Penggunaan</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
</div>
                        <script>
                            $('#modal').on('show', function() {
    $('#confirm-delete').on('show.bs.modal', function(e) {
    $(this).find('.danger').attr('href', $(e.relatedTarget).data('href'));
});
                            </script>
    
</div>
<?php include('element/js.php'); ?>

</body>
</html>
