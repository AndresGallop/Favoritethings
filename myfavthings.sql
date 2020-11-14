-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 14, 2020 at 06:22 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_favthings`
--

-- --------------------------------------------------------

--
-- Table structure for table `myfavthings`
--

DROP TABLE IF EXISTS `myfavthings`;
CREATE TABLE IF NOT EXISTS `myfavthings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Thing` varchar(80) NOT NULL,
  `Img` varchar(40) NOT NULL,
  `Quote` text NOT NULL,
  `Recommendation` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `myfavthings`
--

INSERT INTO `myfavthings` (`id`, `Thing`, `Img`, `Quote`, `Recommendation`) VALUES
(1, 'Painting', 'paint.jpeg', '\"A true painting of the smallest man is able to interest the greatest man.\" Thomas Carlyle', 'Venice grand canal by Leonid Afremov.'),
(2, 'Working Out', 'excersice.jpeg', '\"Quality is not an act.\" Aristotle', 'Dwayne johnson.'),
(3, 'Reading', 'read.jpg', '\"No matter how busy you think you are, you must find time to read, or indulge in self-chosen ignorance.\" Confucius', 'The Godfather by Mario Puzo.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
