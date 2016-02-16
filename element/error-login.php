<?php
// Warning Error To Login Admin Page
$error_login = "Maaf, Username & Password Salah! Atau ID Anda Sedang Di Blokir Oleh Admin.";

// View Error Message To Browser
echo "
<html>
<head>
<title>Login Administrator</title>
<link rel=\"stylesheet\" type=\"text/css\" href=\"../webroot/css/style_login.css\" />

<link rel=\"shortcut icon\" href=\"images/images_admin/favicon.ico\" />
</head>
<body>

<div id=\"main\" style=\"width:560px;\">
<div id=\"error_login\">

$error_login
<br /><center><a href=\"../index.php\" class=\"clickhere\">ULANGI LAGI</a></center>
</div>

<div class=\"clear\"></div>
<div id=\"vertical_effect\">&nbsp;</div>
</div>

</body>
</html>
";
?>
