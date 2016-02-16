
                                                <?php
                                                session_start();
			 $location_counter = "data_administrasi.txt";
			 $location_date = "date.txt";
			 $itis = date ("d");
			 
			 // Hari baru?    
			$aday = join('', file($location_date));
			trim($aday);
		
			if("$aday"=="$itis"){
				//Cari hari ini
				$tcounter = join('', file($location_counter));
				trim($tcounter);
				$tcounter++;
				
				$fp = fopen($location_counter,"w");
				fputs($fp, $tcounter);
				fclose($fp);
			}else{
				//hari baru
				$fp = fopen($location_counter,"w");
				fputs($fp, 0);
				fclose($fp);
				$tcounter = join('', file($location_counter));
				trim($tcounter);
				$tcounter++;
				//tulis hari baru
				$fp = fopen($location_counter,"w");
				fputs($fp, $tcounter);
				fclose($fp);
				//tulis di date.txt
				$fp = fopen($location_date,"w");
				fputs($fp, $itis);
				fclose($fp);	
			}

			$panjang=strlen($tcounter);
			$antrian=$tcounter;
			
			for($i=0;$i<$panjang;$i++){
		?>
        		   		        
        <?php
			}
                        $_SESSION['antrian']   = " <h1>No. A$antrian <br>Antrian Administrasi</h1> ";
                        
		?>
        
<?php
$outprint = "
================================================\n";
$outprint1 = "     $antrian \n
    


";
/*$tanggal = date("d-m-Y");
$jam = date("H:i:s");
$printer = printer_open("POS76");
if($printer){
    
//echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;connected to print";
printer_set_option($printer, PRINTER_MODE, "RAW");
//printer_set_option($printer, PRINTER_SCALE, 75);
//printer_set_option($printer, PRINTER_TEXT_ALIGN, PRINTER_TA_LEFT);
printer_start_doc($printer, "Tes Printer");
printer_start_page($printer);
//printer_write($printer, $outprint);
$font = printer_create_font("Arial", 12, 10, PRINTER_FW_NORMAL, false, false, false, 0);
printer_select_font($printer, $font);
printer_draw_text($printer, ".:: Bandar Udara H. Aroeppala Selayar ::.",100,0);

printer_write($printer, $outprint1);
//$font = printer_create_font("Arial", 72, 48, 400, false, false, false, 0);
//printer_select_font($printer, $font);
//printer_draw_text($printer, "$outprint", 10, 10);
//printer_end_page($printer);
printer_end_doc($printer);
//printer_close($printer);

} else{
	//echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;not connected to print";   
}
header("location:struk.php");
/*$outprint1 = "================================================\n
                         $antrian ";
$handle = printer_open("POS76");
printer_start_doc($handle, "My Document");
printer_start_page($handle);

$font = printer_create_font("Arial", 72, 48, 400, false, false, false, 0);
printer_select_font($handle, $font);
printer_draw_text($handle, "             $antrian", 10, 10);
printer_delete_font($font);

printer_end_page($handle);
printer_end_doc($handle);
printer_close($handle);*/
?>

<?php/*
$handle = printer_open("POS76");
printer_set_option($handle, PRINTER_SCALE, 75);
printer_set_option($handle, PRINTER_TEXT_ALIGN, PRINTER_TA_LEFT);
printer_start_doc($handle, "My Document");
printer_start_page($handle);

$pen = printer_create_pen(PRINTER_PEN_SOLID, 1, "000000");
printer_select_pen($handle, $pen);
$row +=760;
printer_draw_line($handle, 1, 10, $row, 10);
printer_draw_line($handle, 1, 60, 500, 60);
printer_draw_line($handle, 1, 40, 400, 40);

printer_delete_pen($pen);

printer_end_page($handle);
printer_end_doc($handle);
printer_close($handle);*/
?>

<?php 
$tanggal = date("d-m-Y");
$jam = date("H:i:s");
$var_magin_left = 10;
$p = printer_open('POS80');
printer_set_option($p, PRINTER_MODE, "RAW"); // mode disobek (gak ngegulung kertas)

//then the width
printer_set_option( $p,PRINTER_RESOLUTION_Y, 940);
printer_start_doc($p);
printer_start_page($p);

$font = printer_create_font("Arial", 38, 10, PRINTER_FW_NORMAL, false, false, false, 0);
printer_select_font($p, $font);
printer_draw_text($p, "BANK INI",100,0);
//printer_draw_text($p, "",250,20);
// Header Bon
$pen = printer_create_pen(PRINTER_PEN_SOLID, 1, "000000");
printer_select_pen($p, $pen);
//printer_draw_line($p, $var_magin_left, 50, 700, 50);
printer_draw_text($p, "No Antrian Anda:", 10, 50);

$font = printer_create_font("Arial", 98, 37, PRINTER_FW_NORMAL, false, false, false, 0);
printer_select_font($p, $font);
printer_draw_text($p, "A$antrian", 210, 70);

$font = printer_create_font("Arial", 15, 12, PRINTER_FW_NORMAL, false, false, false, 0);
printer_select_font($p, $font);
printer_draw_text($p, "Waktu Antrian :", $var_magin_left, 150);
printer_draw_text($p, date("Y/m/d H:i:s"),$var_magin_left, 170);
printer_draw_line($p, $var_magin_left, 210, 700, 210);
printer_draw_text($p, "\"Budayakan Antri Untuk Kenyamanan \n Bersama\"", $var_magin_left, 230);
printer_draw_text($p, "Terimakasih Atas Kunjungannya", 100, 250);

printer_draw_text($p, "  ", $var_magin_left, 260);

$row +=300;
printer_draw_text($p, "- ", 0, $row);
                           
printer_delete_font($font);

printer_end_page($p);
printer_end_doc($p);

printer_start_doc($p);
printer_start_page($p);
printer_close($p);
/**include 'config/database.php';
include "config/fungsi_zona.php";
mysql_query("INSERT INTO `nomor_antrian_administrasi`( `nomor_antrian`, `created`) VALUES ('P$antrian','$wita')");
header("location:struk.php");**/
?>
