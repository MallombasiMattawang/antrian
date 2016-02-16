<?php
function sensor($teks){
    $w = mysql_query("SELECT * FROM katajelek");
    while ($r = mysql_fetch_array($w)){
        $teks = str_replace($r['kata'], $r['ganti'], $teks);       
    }
    return $teks;
}  
?>
