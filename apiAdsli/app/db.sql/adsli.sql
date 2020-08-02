-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 02, 2020 at 02:53 AM
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
-- Database: `adsli`
--

-- --------------------------------------------------------

--
-- Table structure for table `Adslier`
--

CREATE TABLE `Adslier` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `instagram` text NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Adslier`
--

INSERT INTO `Adslier` (`id`, `id_user`, `instagram`, `fecha`) VALUES
(18, 98, 'miky__2606', '2020-08-01 17:17:16');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `user` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `userType` text NOT NULL,
  `userVerified` int(1) NOT NULL,
  `perfilPic` text NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `user`, `email`, `password`, `userType`, `userVerified`, `perfilPic`, `fecha`) VALUES
(98, 'Jonathan ', 'jonathanjgn99@gmail.com', '$2b$10$vvq/XTa9aby3SFaQFevAmuOeIpqFH60ahTC/wccadG8A8aXKGE8S6', 'adslier', 0, 'https://scontent-mia3-1.cdninstagram.com/v/t51.2885-19/s150x150/22709425_1839820546047344_2849992808448655360_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_ohc=hrGKOggCVaAAX-vh9-d&oh=bb37dd7e9aa5160061370976b7c94b17&oe=5F5079F2', '2020-08-01 17:17:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Adslier`
--
ALTER TABLE `Adslier`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Adslier`
--
ALTER TABLE `Adslier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
