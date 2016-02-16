<?php
  session_start();
  session_destroy();
  echo "<script>alert('Anda telah keluar dari halaman administrator'); window.location = '../'</script>";
?>
