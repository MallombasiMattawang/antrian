<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html>
<!--<![endif]-->

<head>
    <?php include('element/css.php'); ?>
</head>

<body class="signin signin-vertical">
    <?php if(!isset($no_visible_elements) || !$no_visible_elements)	{ ?>
<div class="page-container">
    <div id="header-container">
        <div id="header">
            <div class="navbar navbar-inverse navbar-fixed-top">
                <div class="navbar navbar-inverse navbar-fixed-top">
                <div class="navbar-inner">
                    
                    <div class="container-fluid">
                        <div class="nav-collapse collapse">
                            <?php include('element/menus_home.php'); ?>
                        
                    </div>
                        <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                        <a class="brand" href="?link=home">Aplikasi Antrian Bank Ini</a>
                        <div class="nav-collapse collapse">
                            
                        </div>
                    </div>
                </div>
            </div>
            <!-- // navbar -->
            <?php } ?>
            <?php if(!isset($no_visible_elements) || !$no_visible_elements) { ?>
             <div class="header-drawer">
                <div class="mobile-nav text-center visible-phone"> <a href="javascript:void(0);" class="mobile-btn" data-toggle="collapse" data-target=".sidebar"><i class="aweso-icon-chevron-down"></i> Sistem Informasi Antrian</a> </div>
                <!-- // Resposive navigation -->
                <div class="breadcrumbs-nav hidden-phone">
                    <ul id="breadcrumbs" class="breadcrumb">
                        <li><a href="javascript:void(0);"><i class="fontello-icon-home f12"></i> Welcome </a> <span class="divider">/</span></li>
                        <li class="active">Sistem Informasi Antrian </li>
                    </ul>
                    
                </div>
                <!-- // breadcrumbs --> 
            </div>
            <!-- // drawer --> 
        </div>
    </div>
        </div>
    <!-- // header-container -->
     <?php } ?>
    <!-- // header-container -->