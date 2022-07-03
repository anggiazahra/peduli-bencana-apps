-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2022 at 08:20 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pedulibencana`
--

-- --------------------------------------------------------

--
-- Table structure for table `pendaftaranrelawan`
--

CREATE TABLE `pendaftaranrelawan` (
  `id` varchar(50) NOT NULL,
  `idPostinganRelawan` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `namaLengkap` varchar(200) NOT NULL,
  `noTelepon` varchar(20) NOT NULL,
  `kabKota` varchar(50) NOT NULL,
  `provinsi` varchar(50) NOT NULL,
  `tanggalDaftar` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pendaftaranrelawan`
--

INSERT INTO `pendaftaranrelawan` (`id`, `idPostinganRelawan`, `username`, `namaLengkap`, `noTelepon`, `kabKota`, `provinsi`, `tanggalDaftar`) VALUES
('KTjqsNePKqpTc8t5', 'ywmkbceyl_alre6e', 'anggiazahra', 'Anggi', '089165129876', 'Sukabumi', 'Jawa Barat', '28/6/2022');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pendaftaranrelawan`
--
ALTER TABLE `pendaftaranrelawan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPostinganRelawan` (`idPostinganRelawan`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pendaftaranrelawan`
--
ALTER TABLE `pendaftaranrelawan`
  ADD CONSTRAINT `pendaftaranrelawan_ibfk_1` FOREIGN KEY (`idPostinganRelawan`) REFERENCES `postinganrelawan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
