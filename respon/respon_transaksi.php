<?php

include '../config/database.php';
     $sql = mysql_query("SELECT nomor_antrian FROM `temp_transaksi`
                                        WHERE id = '1'");
      $r    = mysql_fetch_array($sql);
        $nomor = $r[nomor_antrian];
      echo "T$r[nomor_antrian]";
?>
<?php
$detail = mysql_query("SELECT * FROM
                            loket
                            WHERE
                            nama_loket='TRANSAKSI'");
$d    = mysql_fetch_array($detail);
$loket=$d[no_loket];
//Initialisasi nilai untuk nomor loket


$location_counter = "content/transaksi/data.txt";
$location_date = "content/transaksi/date.txt";
$itis = date ("d");

$panjang=strlen($nomor);
$antrian=$nomor;


?>
<script type="text/javascript" >

</script>

<audio id="suarabel" src="Airport_Bell.mp3"></audio>
<audio id="suarabelnomorurut" src="rekaman/nomor-urut.wav"  ></audio>
<audio id="suarabelsuarabelloket" src="rekaman/loket.wav"  ></audio>

<audio id="belas" src="rekaman/belas.wav"  ></audio>
<audio id="sebelas" src="rekaman/sebelas.wav"  ></audio>
<audio id="puluh" src="rekaman/puluh.wav"  ></audio>
<audio id="sepuluh" src="rekaman/sepuluh.wav"  ></audio>
<audio id="ratus" src="rekaman/ratus.wav"  ></audio>
<audio id="seratus" src="rekaman/seratus.wav"  ></audio>
<audio id="suarabelloket2" src="rekaman/<?php echo "$loket";?>.wav"  ></audio>
<?php	for($i=0;$i<$panjang;$i++){
    ?>
    <audio id="suarabel<?php echo $i; ?>" src="rekaman/<?php echo substr($antrian,$i,1); ?>.wav" ></audio>
<?php
}
?>


<script type="text/javascript">
    function mulai(){
        //MAINKAN SUARA BEL PADA SAAT AWAL
        document.getElementById('suarabel').pause();
        document.getElementById('suarabel').currentTime=0;
        document.getElementById('suarabel').play();

        //SET DELAY UNTUK MEMAINKAN REKAMAN NOMOR URUT
        totalwaktu=document.getElementById('suarabel').duration*1000;

        //MAINKAN SUARA NOMOR URUT
        setTimeout(function() {
            document.getElementById('suarabelnomorurut').pause();
            document.getElementById('suarabelnomorurut').currentTime=0;
            document.getElementById('suarabelnomorurut').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+2000;

        <?php
            //JIKA KURANG DARI 10 MAKA MAIKAN SUARA ANGKA1
            if($antrian < 10){
        ?>

        setTimeout(function() {
            document.getElementById('suarabel0').pause();
            document.getElementById('suarabel0').currentTime=0;
            document.getElementById('suarabel0').play();
        }, totalwaktu);

        totalwaktu=totalwaktu+1000;
        <?php
            }elseif($antrian ==10){
                //JIKA 10 MAKA MAIKAN SUARA SEPULUH
        ?>
        setTimeout(function() {
            document.getElementById('sepuluh').pause();
            document.getElementById('sepuluh').currentTime=0;
            document.getElementById('sepuluh').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
            }elseif($antrian ==11){
                //JIKA 11 MAKA MAIKAN SUARA SEBELAS
        ?>
        setTimeout(function() {
            document.getElementById('sebelas').pause();
            document.getElementById('sebelas').currentTime=0;
            document.getElementById('sebelas').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
            }elseif($antrian < 20){
                //JIKA 12-20 MAKA MAIKAN SUARA ANGKA2+"BELAS"
        ?>
        setTimeout(function() {
            document.getElementById('suarabel1').pause();
            document.getElementById('suarabel1').currentTime=0;
            document.getElementById('suarabel1').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('belas').pause();
            document.getElementById('belas').currentTime=0;
            document.getElementById('belas').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
                    }elseif($antrian < 100){
                        //JIKA PULUHAN MAKA MAINKAN SUARA ANGKA1+PULUH+AKNGKA2
                ?>
        setTimeout(function() {
            document.getElementById('suarabel0').pause();
            document.getElementById('suarabel0').currentTime=0;
            document.getElementById('suarabel0').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('puluh').pause();
            document.getElementById('puluh').currentTime=0;
            document.getElementById('puluh').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('suarabel1').pause();
            document.getElementById('suarabel1').currentTime=0;
            document.getElementById('suarabel1').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
}elseif($antrian ==100){
    //JIKA 100 MAKA MAIKAN SUARA SEratus
?>
        setTimeout(function() {
            document.getElementById('seratus').pause();
            document.getElementById('seratus').currentTime=0;
            document.getElementById('seratus').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
            }elseif($antrian < 110){
                //JIKA PULUHAN MAKA MAINKAN SUARA ANGKA1+PULUH+AKNGKA2
        ?>

        setTimeout(function() {
            document.getElementById('seratus').pause();
            document.getElementById('seratus').currentTime=0;
            document.getElementById('seratus').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('suarabel2').pause();
            document.getElementById('suarabel2').currentTime=0;
            document.getElementById('suarabel2').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
    }elseif($antrian == 110){
        //JIKA PULUHAN MAKA MAINKAN SUARA ANGKA1+PULUH+AKNGKA2
?>
        setTimeout(function() {
            document.getElementById('seratus').pause();
            document.getElementById('seratus').currentTime=0;
            document.getElementById('seratus').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('sepuluh').pause();
            document.getElementById('sepuluh').currentTime=0;
            document.getElementById('sepuluh').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
        //JIKA KURANG DARI 10 MAKA MAIKAN SUARA ANGKA1
        }elseif($antrian == 111){
    ?>

        setTimeout(function() {
            document.getElementById('seratus').pause();
            document.getElementById('seratus').currentTime=0;
            document.getElementById('seratus').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('sebelas').pause();
            document.getElementById('sebelas').currentTime=0;
            document.getElementById('sebelas').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
    }elseif($antrian < 120){
        //JIKA 12-20 MAKA MAIKAN SUARA ANGKA2+"BELAS"
?>
        setTimeout(function() {
            document.getElementById('seratus').pause();
            document.getElementById('seratus').currentTime=0;
            document.getElementById('seratus').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('suarabel2').pause();
            document.getElementById('suarabel2').currentTime=0;
            document.getElementById('suarabel2').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('belas').pause();
            document.getElementById('belas').currentTime=0;
            document.getElementById('belas').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
                    }elseif($antrian < 200){
                        //JIKA PULUHAN MAKA MAINKAN SUARA ANGKA1+PULUH+AKNGKA2
                ?>
        setTimeout(function() {
            document.getElementById('seratus').pause();
            document.getElementById('seratus').currentTime=0;
            document.getElementById('seratus').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('suarabel1').pause();
            document.getElementById('suarabel1').currentTime=0;
            document.getElementById('suarabel1').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('puluh').pause();
            document.getElementById('puluh').currentTime=0;
            document.getElementById('puluh').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('suarabel2').pause();
            document.getElementById('suarabel2').currentTime=0;
            document.getElementById('suarabel2').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
               }elseif($antrian ==200){
                   //JIKA 100 MAKA MAIKAN SUARA SEratus
           ?>
        setTimeout(function() {
            document.getElementById('suarabel0').pause();
            document.getElementById('suarabel0').currentTime=0;
            document.getElementById('suarabel0').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('ratus').pause();
            document.getElementById('ratus').currentTime=0;
            document.getElementById('ratus').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
                    }elseif($antrian < 210){
                        //JIKA PULUHAN MAKA MAINKAN SUARA ANGKA1+PULUH+AKNGKA2
                ?>
        setTimeout(function() {
            document.getElementById('suarabel0').pause();
            document.getElementById('suarabel0').currentTime=0;
            document.getElementById('suarabel0').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('ratus').pause();
            document.getElementById('ratus').currentTime=0;
            document.getElementById('ratus').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('suarabel2').pause();
            document.getElementById('suarabel2').currentTime=0;
            document.getElementById('suarabel2').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
    }elseif($antrian == 210){
        //JIKA PULUHAN MAKA MAINKAN SUARA ANGKA1+PULUH+AKNGKA2
?>
        setTimeout(function() {
            document.getElementById('suarabel0').pause();
            document.getElementById('suarabel0').currentTime=0;
            document.getElementById('suarabel0').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('ratus').pause();
            document.getElementById('ratus').currentTime=0;
            document.getElementById('ratus').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('sepuluh').pause();
            document.getElementById('sepuluh').currentTime=0;
            document.getElementById('sepuluh').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
        //JIKA KURANG DARI 10 MAKA MAIKAN SUARA ANGKA1
        }elseif($antrian == 211){
    ?>
        setTimeout(function() {
            document.getElementById('suarabel0').pause();
            document.getElementById('suarabel0').currentTime=0;
            document.getElementById('suarabel0').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('ratus').pause();
            document.getElementById('ratus').currentTime=0;
            document.getElementById('ratus').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('sebelas').pause();
            document.getElementById('sebelas').currentTime=0;
            document.getElementById('sebelas').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
    }elseif($antrian < 220){
        //JIKA 12-20 MAKA MAIKAN SUARA ANGKA2+"BELAS"
?>
        setTimeout(function() {
            document.getElementById('suarabel0').pause();
            document.getElementById('suarabel0').currentTime=0;
            document.getElementById('suarabel0').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('ratus').pause();
            document.getElementById('ratus').currentTime=0;
            document.getElementById('ratus').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('suarabel2').pause();
            document.getElementById('suarabel2').currentTime=0;
            document.getElementById('suarabel2').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('belas').pause();
            document.getElementById('belas').currentTime=0;
            document.getElementById('belas').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        <?php
                    }elseif($antrian < 1000){
                        //JIKA PULUHAN MAKA MAINKAN SUARA ANGKA1+PULUH+AKNGKA2
                ?>
        setTimeout(function() {
            document.getElementById('suarabel0').pause();
            document.getElementById('suarabel0').currentTime=0;
            document.getElementById('suarabel0').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('ratus').pause();
            document.getElementById('ratus').currentTime=0;
            document.getElementById('ratus').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('suarabel1').pause();
            document.getElementById('suarabel1').currentTime=0;
            document.getElementById('suarabel1').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('puluh').pause();
            document.getElementById('puluh').currentTime=0;
            document.getElementById('puluh').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('suarabel2').pause();
            document.getElementById('suarabel2').currentTime=0;
            document.getElementById('suarabel2').play();
        }, totalwaktu);
        totalwaktu=totalwaktu+1000;

        <?php
            }else{
                //JIKA LEBIH DARI 100
                //Karena aplikasi ini masih sederhana maka logina konversi hanya sampai 100
                //Selebihnya akan langsung disebutkan angkanya saja
                //tanpa kata "RATUS", "PULUH", maupun "BELAS"
        ?>

        <?php
            for($i=0;$i<$panjang;$i++){
        ?>

        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('suarabel<?php echo $i; ?>').pause();
            document.getElementById('suarabel<?php echo $i; ?>').currentTime=0;
            document.getElementById('suarabel<?php echo $i; ?>').play();
        }, totalwaktu);
        <?php
            }
            }
        ?>


        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('suarabelsuarabelloket').pause();
            document.getElementById('suarabelsuarabelloket').currentTime=0;
            document.getElementById('suarabelsuarabelloket').play();
        }, totalwaktu);

        totalwaktu=totalwaktu+1000;
        setTimeout(function() {
            document.getElementById('suarabelloket2').pause();
            document.getElementById('suarabelloket2').currentTime=0;
            document.getElementById('suarabelloket2').play();
        }, totalwaktu);
    }
</script>