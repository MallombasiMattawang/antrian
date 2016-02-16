<?php
  session_start();
  session_destroy();
  echo header("location:home.php?link=home");
?>
