<?php 
error_reporting(0);

 ?>
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html>
<!--<![endif]-->

<head>
<meta charset="utf-8">
<title>Boo Admin - Dashboard 1</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="description" content="">
<meta name="author" content="">

<!-- Le styles -->
<link href="webroot/css/lib/bootstrap.css" rel="stylesheet">
<link href="webroot/css/lib/bootstrap-responsive.css" rel="stylesheet">
<link href="webroot/css/boo-extension.css" rel="stylesheet">
<link href="webroot/css/boo_1.css" rel="stylesheet">
<link href="webroot/css/style.css" rel="stylesheet">
<link href="webroot/css/boo-coloring.css" rel="stylesheet">
<link href="webroot/css/boo-utility.css" rel="stylesheet">

<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <script src="webroot/plugins/selectivizr/selectivizr-min.js"></script>
    <script src="webroot/plugins/flot/excanvas.min.js"></script>
<![endif]-->

<!-- Le fav and touch icons -->
<link rel="shortcut icon" href="webroot/ico/favicon.ico">
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="webroot/ico/apple-touch-icon-144-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="webroot/ico/apple-touch-icon-114-precomposed.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="webroot/ico/apple-touch-icon-72-precomposed.png">
<link rel="apple-touch-icon-precomposed" href="webroot/ico/apple-touch-icon-57-precomposed.png">
<style> 
                        .color { color:white; }  
                        .blink { padding-top:20px; color:white; -webkit-animation: blink .75s linear infinite; -moz-animation: blink .75s linear infinite; -ms-animation: blink .75s linear infinite; -o-animation: blink .75s linear infinite; animation: blink .75s linear infinite; } @-webkit-keyframes blink { 0% { opacity: 1; } 50% { opacity: 1; } 50.01% { opacity: 0; } 100% { opacity: 0; } } @-moz-keyframes blink { 0% { opacity: 1; } 50% { opacity: 1; } 50.01% { opacity: 0; } 100% { opacity: 0; } } @-ms-keyframes blink { 0% { opacity: 1; } 50% { opacity: 1; } 50.01% { opacity: 0; } 100% { opacity: 0; } } @-o-keyframes blink { 0% { opacity: 1; } 50% { opacity: 1; } 50.01% { opacity: 0; } 100% { opacity: 0; } } @keyframes blink { 0% { opacity: 1; } 50% { opacity: 1; } 50.01% { opacity: 0; } 100% { opacity: 0; } } 
                    </style>
  <script src="webroot/js/lib/jquery.js"></script>            
             <link rel="stylesheet" href="compiled/flipclock.css">
</head>

<body class="sidebar-left ">
<div class="page-container">
    <div id="header-container">
        <div id="header">
            <div class="navbar navbar-inverse navbar-fixed-top">
                <div class="navbar-inner">
                    <div class="container-fluid">
                        <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                        <a class="brand" href="javascript:void(0);"><h3>Antrian Bank Ini</h3></a>
		
                    </div>
                </div>
                
            </div>
            <!-- // navbar -->
            
            
            <!-- // drawer --> 
        </div>
    </div>
    <!-- // header-container -->
    
    <div id="main-container">
        
        <?php include"content.php"?>
        <?php
        include 'config/database.php';
        $detail = mysql_query("SELECT * FROM 
                            video
                            WHERE 
                            id='1'");
    $r    = mysql_fetch_array($detail); ?>

        <div id="main-content" class="main-content container-fluid">
            <div id="page-content" class="page-content">
                <section>
                    
                    <div class="row-fluid">
                        <div class="span12">
                            <div id='media-player' class="span12">
		<video id='media-video' class="span12" controls autoplay loop>
                    <source src='video/<?php echo "$r[nama_file]";?>' type='video/mp4'>
		</video>
	</div>
                           
                        </div>
                        <!-- // Column -->
                        
                    </div>
                    <!-- // Example row --> 
                    
                </section>
                 <center> <h4 class="blink">.:: Budayakan Antri Untuk Kenyamanan Bersama, Terimakasih Atas Kunjungan Anda ::. </h4></center>    
            </div>
        </div>
        <!-- // main-content --> 
        
    </div>
    <!-- // main-container  -->
    
    <footer id="footer-fix">
        <div id="footer-sidebar" class="footer-sidebar">
            <div class="navbar">
                <center><div class="clock"></div></center>
            </div>
        </div>
        <!-- // footer sidebar -->
        
        <div id="footer-content" class="footer-content">
            <span style='font-family:arial; font-size: 15px; font-weight:bold; color:#FFFF00;'> <marquee direction='left' scrollamount='5' height='35px' width='100%' bgcolor='#272B2E' >
            <?php 
                $sql = mysql_query("SELECT  id, isi_text FROM running_text");

                    while ($r=mysql_fetch_array($sql)){
                        echo "$r[isi_text]";
                    }
            ?>
                </marquee></span>

            
        </div>
        <!-- // footer content --> 
        
    </footer>
    <!-- // footer-fix  --> 
    
</div>
<!-- // page-container  --> 

<!-- Le javascript --> 
<!-- Placed at the end of the document so the pages load faster --> 



<script type="text/javascript">
			var clock;
			
			$(document).ready(function() {
				clock = $('.clock').FlipClock({
					clockFace: 'TwelveHourClock'
				});
			});
		</script>
<script src="compiled/flipclock.js"></script>       
</body>
</html>
