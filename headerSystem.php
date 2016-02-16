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
    <?php if(!isset($no_visible_elements) || !$no_visible_elements) { ?>
<div class="page-container">
    <div id="header-container">
        <div id="header">
            <div class="navbar navbar-inverse navbar-fixed-top">
                <div class="navbar navbar-inverse navbar-fixed-top">
                <div class="navbar-inner">
                    
                    <div class="container-fluid">
                       
                        <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                        <a class="brand" href="?link=home"> Loket Antrian Bank Ini</a>
                        <div class="nav-collapse collapse">
                             <?php include('element/menus_system.php'); ?>
                             
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            <!-- // navbar -->
            <?php } ?>
            <?php if(!isset($no_visible_elements) || !$no_visible_elements) { ?>
             
            <!-- // drawer --> 
        </div>
    </div>
        </div>
    <!-- // header-container -->
     <?php } ?>
    <!-- // header-container -->