-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2017-03-11 15:49:54
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `News`
--

-- --------------------------------------------------------

--
-- 表的结构 `newsTable`
--

CREATE TABLE `newsTable` (
  `newsimg` varchar(200) NOT NULL,
  `newstime` date NOT NULL,
  `newssrc` varchar(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsid` int(11) NOT NULL,
  `newstype` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻列表';

--
-- 转存表中的数据 `newsTable`
--

INSERT INTO `newsTable` (`newsimg`, `newstime`, `newssrc`, `newstitle`, `newsid`, `newstype`) VALUES
('img/3.jpg', '2017-03-02', '搜狐新闻', '搜狐新闻第一条', 2, '搜狐'),
('img/4.jpg', '2017-03-14', '新浪新闻', '这是来自新浪的第一条新闻', 3, '新浪新闻'),
('img/4.jpg', '2017-03-16', '今日头条', '新闻1', 5, '精选'),
('img/2.jpg', '2017-03-08', '国际', '456', 6, '国际'),
('img/3.jpg', '2017-03-24', '国际', '搜狐1', 7, '国际'),
('img/3.jpg', '2017-03-14', '民生', '搜狐1', 8, '民生'),
('img/3.jpg', '2017-03-31', '晨报', '搜狐4', 9, '晨报'),
('img/2.jpg', '2017-03-09', '百家', '百家新闻1', 10, '百家'),
('img/3.jpg', '2017-03-10', '本地', '本地新闻', 11, '本地');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `newsTable`
--
ALTER TABLE `newsTable`
  ADD PRIMARY KEY (`newsid`),
  ADD KEY `newsimg` (`newsimg`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `newsTable`
--
ALTER TABLE `newsTable`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
