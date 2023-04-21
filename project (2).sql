-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2021 at 01:29 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `photography`
--

CREATE TABLE `photography` (
  `Email` varchar(350) NOT NULL,
  `Password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `photography`
--

INSERT INTO `photography` (`Email`, `Password`) VALUES
('kl@gmail.com', '..k,,m');

-- --------------------------------------------------------

--
-- Table structure for table `sign`
--

CREATE TABLE `sign` (
  `First` varchar(20) NOT NULL,
  `Last` varchar(20) NOT NULL,
  `dob` date NOT NULL,
  `Email` varchar(50) NOT NULL,
  `contact` bigint(12) NOT NULL,
  `password` varchar(15) NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sign`
--

INSERT INTO `sign` (`First`, `Last`, `dob`, `Email`, `contact`, `password`, `address`) VALUES
('', '', '0000-00-00', '', 0, '', ''),
('', '', '0000-00-00', '', 0, '', ''),
('', '', '0000-00-00', '', 0, '', ''),
('', '', '0000-00-00', '', 0, '', ''),
('kl', 'ksk', '2021-05-13', 'kunal@gmail.com', 355, '35o', ''),
('prachi', 'verma', '2003-07-05', 'prachi2341@gmail.com', 9826344539, 'tilda', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `photography`
--
ALTER TABLE `photography`
  ADD PRIMARY KEY (`Email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
