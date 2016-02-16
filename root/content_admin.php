<?php

 // Bagian Home
if ($_GET['link']=='home'){
 include "modul/home/home_admin.php"; 

}
elseif ($_GET['link']=='menus'){
    include "modul/sys_menus/admin_index.php";
}
elseif ($_GET['link']=='pengguna-akun'){
    include "modul/daftar_akun/admin_index.php";
}
elseif ($_GET['link']=='menu-antrian-transaksi'){
    include "modul/menu_antrian/transaksi.php";
}
elseif ($_GET['link']=='menu-antrian-administrasi'){
    include "modul/menu_antrian/administrasi.php";
}
elseif ($_GET['link']=='daftar-customer-transaksi'){
    include "modul/save_antrian/daftar_transaksi.php";
}
elseif ($_GET['link']=='daftar-customer-administrasi'){
    include "modul/save_antrian/daftar_administrasi.php";
}
elseif ($_GET['link']=='loket'){
    include "modul/loket/admin_index.php";
}
elseif ($_GET['link']=='video'){
    include "modul/video/admin_index.php";
} 
elseif ($_GET['link']=='running-text'){
    include "modul/running_text/admin_index.php";
} 
//---------------------------------------------------------------------------------------------

else {
    echo'<div id="main-content" class="main-content container">
            <!-- // page head -->
            <br><br><br><br>
            <div class="span12">
                            <div class="widget widget-simple widget-collapsible">
                                <div class="widget-header">
                                    <h4> <small>Ups, Sory... Error 404</small></h4>
                                    <div class="widget-tool"><a class="btn btn-glyph btn-link widget-toggle fontello-icon-publish"  data-toggle="collapse" data-target="#demo1" href="javascript:void(0);"></a></div>
                                </div>
                                <div id="demo1" class="widget-content collapse in">
                                    <div class="widget-body">
                                        <p>Menu Yang Anda Minta Tidak ada
                                        </p>
                                        <a href="?link=home">Kembali Ke home</a>
                                    </div>
                                    <div class="widget-footer">
                                        
                                    </div>
                                </div>
                            </div>
                            <!-- // Widget --> 
                            
                        </div>
                        <!-- // Column -->
            
        </div>';
}

?>
