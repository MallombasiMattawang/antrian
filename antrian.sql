-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 20, 2015 at 08:01 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `antrian`
--

-- --------------------------------------------------------

--
-- Table structure for table `antrian_administrasi_save`
--

CREATE TABLE IF NOT EXISTS `antrian_administrasi_save` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomor_antrian` varchar(50) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `jenis_kelamin` varchar(10) NOT NULL,
  `no_telpon` varchar(20) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `created` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `antrian_administrasi_save`
--

INSERT INTO `antrian_administrasi_save` (`id`, `nomor_antrian`, `nama`, `jenis_kelamin`, `no_telpon`, `created_by`, `created`) VALUES
(1, 'A321', 'tes', 'LAKI-LAKI', '798798', '1', '2015-12-19 23:02:07'),
(2, 'A322', 'test2', 'LAKI-LAKI', '779789', '1', '2015-12-19 23:04:54'),
(3, 'A323', 'testw', 'LAKI-LAKI', '79789787', '', '2015-12-19 23:05:50'),
(4, 'A324', '77', 'PEREMPUAN', '6876767', 'admin', '2015-12-19 23:07:27');

-- --------------------------------------------------------

--
-- Table structure for table `antrian_transaksi_save`
--

CREATE TABLE IF NOT EXISTS `antrian_transaksi_save` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomor_antrian` varchar(50) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `jenis_kelamin` varchar(10) NOT NULL,
  `no_telpon` varchar(20) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `created` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `antrian_transaksi_save`
--

INSERT INTO `antrian_transaksi_save` (`id`, `nomor_antrian`, `nama`, `jenis_kelamin`, `no_telpon`, `created_by`, `created`) VALUES
(1, 'A321', 'tes', 'LAKI-LAKI', '798798', '1', '2015-12-19 23:02:07'),
(2, 'A322', 'test2', 'LAKI-LAKI', '779789', '1', '2015-12-19 23:04:54'),
(3, 'A323', 'testw', 'LAKI-LAKI', '79789787', '', '2015-12-19 23:05:50'),
(4, 'A324', '77', 'PEREMPUAN', '6876767', 'admin', '2015-12-19 23:07:27'),
(5, 'T$', 'dkdakj', 'LAKI-LAKI', '67878', '1', '2015-12-20 09:42:07');

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE IF NOT EXISTS `level` (
  `LEVEL_ID` int(11) DEFAULT NULL,
  `NAME` varchar(20) DEFAULT NULL,
  `CREATED` date DEFAULT NULL,
  `MODIFIED` datetime DEFAULT NULL,
  `CREATED_BY` tinyint(4) DEFAULT NULL,
  `MODIFIED_BY` tinyint(4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 PACK_KEYS=0;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`LEVEL_ID`, `NAME`, `CREATED`, `MODIFIED`, `CREATED_BY`, `MODIFIED_BY`) VALUES
(1, 'admin', '2014-05-10', NULL, 1, NULL),
(2, 'loket administrasi', '2014-05-10', '2014-07-18 02:20:13', 1, NULL),
(3, 'loket pas', '2014-05-12', '2014-07-18 06:27:14', 1, NULL),
(4, 'print', '2014-07-26', NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `loket`
--

CREATE TABLE IF NOT EXISTS `loket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no_loket` int(11) NOT NULL,
  `nama_loket` varchar(255) NOT NULL,
  `aktif` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `loket`
--

INSERT INTO `loket` (`id`, `no_loket`, `nama_loket`, `aktif`) VALUES
(1, 9, 'TRANSAKSI', 1),
(2, 1, 'ADMINISTRASI', 1);

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE IF NOT EXISTS `menus` (
  `menus_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `url` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `enable` tinyint(4) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `lft` int(11) NOT NULL,
  `created` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  PRIMARY KEY (`menus_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`menus_id`, `name`, `url`, `title`, `enable`, `parent_id`, `lft`, `created`, `created_by`) VALUES
(1, 'Setting', '#', 'Setting', 1, 0, 0, 2015, 1),
(2, 'pengguna akun', 'system.php?link=pengguna-akun', 'pengguna akun', 1, 1, 0, 2015, 1),
(3, 'Pengaturan Menu', 'system.php?link=menus', 'Setting Menu', 1, 1, 0, 2015, 1),
(4, 'Pengaturan Video LCD', 'system.php?link=video', 'Pengaturan Video LCD', 1, 1, 1, 2015, 1),
(5, 'Pengaturan Running Text', 'system.php?link=running-text', 'Pengaturan Running Text', 1, 1, 1, 2015, 1),
(6, 'Loket Administrasi', '#', 'Loket Administrasi', 1, 0, 1, 2015, 1),
(7, 'Data Customer Administrasi', 'system.php?link=daftar-customer-administrasi', 'Data Customer Administrasi', 1, 6, 1, 2015, 1),
(8, 'Panel Loket Administrasi', 'system.php?link=menu-antrian-administrasi', 'Panel Loket Administrasi', 1, 6, 1, 2015, 1),
(9, 'Loket', 'system.php?link=loket', 'loket', 1, 1, 0, 2015, 1),
(10, 'Loket Transaksi', '#', 'loket Transaksi', 1, 0, 1, 2015, 1),
(11, 'Data Customer Transaksi', 'system.php?link=daftar-customer-transaksi', 'Data Customer Transaksi', 1, 10, 1, 2015, 1),
(12, 'Panel Loket Transaksi', 'system.php?link=menu-antrian-transaksi', 'Panel Loket Transaksi', 1, 10, 1, 2015, 1);

-- --------------------------------------------------------

--
-- Table structure for table `running_text`
--

CREATE TABLE IF NOT EXISTS `running_text` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isi_text` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `running_text`
--

INSERT INTO `running_text` (`id`, `isi_text`) VALUES
(1, '  Sudah terlalu asik sendiri.....  |'),
(2, '  Sudah terlalu asik dengan duniaku sendiri....  |'),
(3, '  karna tak ada yang menemani... rasanya....  |');

-- --------------------------------------------------------

--
-- Table structure for table `temp_administrasi`
--

CREATE TABLE IF NOT EXISTS `temp_administrasi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomor_antrian` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `temp_administrasi`
--

INSERT INTO `temp_administrasi` (`id`, `nomor_antrian`, `time`) VALUES
(1, '47', '2015-12-20 15:56:46');

-- --------------------------------------------------------

--
-- Table structure for table `temp_transaksi`
--

CREATE TABLE IF NOT EXISTS `temp_transaksi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomor_antrian` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `temp_transaksi`
--

INSERT INTO `temp_transaksi` (`id`, `nomor_antrian`, `time`) VALUES
(1, '9', '2015-12-20 16:01:02');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `USER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `USERNAME` varchar(20) DEFAULT NULL,
  `PASSWORD` varchar(40) DEFAULT NULL,
  `NIP` varchar(20) DEFAULT NULL,
  `NAMA_LENGKAP` varchar(50) DEFAULT NULL,
  `JENIS_KELAMIN_ID` tinyint(4) DEFAULT NULL,
  `TEMPAT_LAHIR` varchar(100) NOT NULL,
  `TGL_LAHIR` date NOT NULL,
  `FOTO` varchar(200) DEFAULT NULL,
  `ALAMAT` varchar(20) DEFAULT NULL,
  `TELPON` varchar(20) DEFAULT NULL,
  `LEVEL_ID` tinyint(4) DEFAULT NULL,
  `BLOKIR` tinyint(4) DEFAULT NULL,
  `CREATED` date DEFAULT NULL,
  `MODIFIED` datetime DEFAULT NULL,
  `CREATED_BY` tinyint(4) DEFAULT NULL,
  `MODIFIED_BY` tinyint(4) DEFAULT NULL,
  `session_id` varchar(100) NOT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 PACK_KEYS=0 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`USER_ID`, `USERNAME`, `PASSWORD`, `NIP`, `NAMA_LENGKAP`, `JENIS_KELAMIN_ID`, `TEMPAT_LAHIR`, `TGL_LAHIR`, `FOTO`, `ALAMAT`, `TELPON`, `LEVEL_ID`, `BLOKIR`, `CREATED`, `MODIFIED`, `CREATED_BY`, `MODIFIED_BY`, `session_id`) VALUES
(1, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'xxxxxxxxxxxx', 'administrator', 1, 'AMDMAD', '1991-06-09', '23Photo_00004.jpg', 'makassar', '81243324689', 1, 0, '2014-05-10', '2014-07-18 21:13:53', 1, 1, ''),
(20, 'myprint', 'bebaec246afd2b4ccd42b6f977a4a25a2baedb8f', 'xxxx', 'printer', 1, 'jakarta', '2013-11-05', '9CPU-icon.png', 'MAKASSAR', '0808707779', 4, 0, '2014-07-26', NULL, 1, NULL, ''),
(19, 'administrasi', 'e5c6ba3abff1db4479bb60c5d79cc1c2a0689dcb', 'xxxxxx', 'admin administrasi', 1, 'JAKARTA', '1991-06-12', '94guard-icon.png', 'MAKASSAR', '093729272', 2, 0, '2014-07-18', '2014-07-18 22:22:39', 1, 1, ''),
(18, 'pas', '19c2a0dbd8e3a41b25d504744c57df8853e36677', 'xxxxx', 'admin pas', 1, 'JAKARTA', '1991-06-09', '12acid.MP4', 'MAKASSAR', '08927638282', 3, 0, '2014-07-18', '2014-07-20 21:14:03', 1, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE IF NOT EXISTS `video` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `judul` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `nama_file` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `tgl_posting` date NOT NULL,
  `hits` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=19 ;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id`, `judul`, `nama_file`, `tgl_posting`, `hits`) VALUES
(1, 'my video e', 'Kunto Aji - Terlalu Lama Sendiri.mp4', '0000-00-00', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
