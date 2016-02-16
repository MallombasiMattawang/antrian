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
				$tcounter=0;
				
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
                        
                        
                        $_SESSION['suara1']   = "$tcounter";
                        $_SESSION['suara2']   = "$antrian";
			$_SESSION['antrian_loket1']   = "A$antrian";
                        //echo "$antrian";
                        //include '../../config/database.php';
                        //include '../../config/fungsi_zona.php';
                         //mysql_query("UPDATE temp_administrasi SET nomor_antrian='$antrian', 
                           //             time='$wita'
                             //           WHERE id = '1'");
                        header("location:../system.php?link=menu-antrian-administrasi");
		?>