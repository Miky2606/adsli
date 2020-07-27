-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 28, 2020 at 01:36 AM
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
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `user` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `userType` text NOT NULL,
  `userVerified` int(1) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `user`, `email`, `password`, `userType`, `userVerified`, `fecha`) VALUES
(3, 'pedro', 'pedro@gmail.com', 'pedro', 'adslier', 0, '2020-07-27 04:27:48'),
(4, 'maria', 'maria@gmail.com', '$2b$10$HiLYJfwbm8FVOGp46GFDmuQLArFUrk7tMKc.A7PVAxWUxQND3AyHO', 'user', 0, '2020-07-27 10:11:35'),
(15, 'felipe', 'felipe@gmail.com', '$2b$10$5kiJI3/RKgw4zDIaOT1ciOZBJJ/fB5q.osHSZFl5gDsZJumpzWjdi', 'user', 0, '2020-07-27 10:44:18'),
(21, 'franco', 'jg99109@students.leeschools.net', '$2b$10$q.9Le1De1fcZ3Ka5HmnKrOmPvUlSM3WOM8RVog5uZhksRinI09bcS', 'user', 0, '2020-07-27 11:19:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
