-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 11, 2019 at 03:00 PM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `619wickedsales`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `created`) VALUES
(1, '2019-10-09 16:34:16');

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cartItems`
--

INSERT INTO `cartItems` (`id`, `productID`, `count`, `price`, `added`, `updated`, `cartID`) VALUES
(18, 1, 2, 13000, '2019-10-10 08:44:31', '2019-10-10 18:23:43', 1),
(20, 2, 1, 7995, '2019-10-10 11:24:01', '2019-10-10 18:24:01', 1),
(21, 3, 1, 35000, '2019-10-10 11:24:13', '2019-10-10 18:24:13', 1),
(22, 8, 1, 8478, '2019-10-11 08:47:26', '2019-10-11 15:47:26', 1);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` mediumint(9) NOT NULL,
  `url` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `product_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `url`, `product_id`) VALUES
(1, 'images/bodum1.jpg', 1),
(2, 'images/bodum2.jpg', 1),
(3, 'images/motif1.jpg', 2),
(4, 'images/motif2.jpg', 2),
(5, 'images/chemex1.jpg', 3),
(6, 'images/chemex2.jpg', 3),
(7, 'images/kitchenaid1.jpg', 4),
(8, 'images/kitchenaid2.jpg', 4),
(9, 'images/smeg1.jpg', 5),
(10, 'images/smeg2.jpg', 5),
(11, 'images/wolfgourmet1.jpg', 6),
(12, 'images/wolfgourmet2.jpg', 6),
(13, 'images/bodum3.jpg', 1),
(14, 'images/bodum4.jpg', 1),
(15, 'images/motif3.jpg', 2),
(16, 'images/motif4.jpg', 2),
(17, 'images/chemex3.jpg', 3),
(18, 'images/chemex4.jpg', 3),
(19, 'images/kitchenaid3.jpg', 4),
(20, 'images/kitchenaid4.jpg', 4),
(27, 'images/smeg3.jpg', 5),
(28, 'images/smeg4.jpg', 5),
(29, 'images/wolfgourmet3.jpg', 6),
(30, 'images/wolfgourmet4.jpg', 6),
(31, 'images/calphalon1.jpg', 7),
(32, 'images/calphalon2.jpg', 7),
(33, 'images/calphalon3.jpg', 7),
(34, 'images/calphalon4.jpg', 7),
(37, 'images/russel1.jpg', 8),
(38, 'images/russel2.jpg', 8),
(39, 'images/russel3.jpg', 8),
(40, 'images/russel4.jpg', 8);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(30) CHARACTER SET utf16 COLLATE utf16_unicode_ci NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `image` varchar(50) CHARACTER SET utf16 COLLATE utf16_unicode_ci NOT NULL,
  `shortDescription` varchar(150) CHARACTER SET utf16 COLLATE utf16_unicode_ci NOT NULL,
  `longDescription` varchar(1000) CHARACTER SET utf16 COLLATE utf16_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `shortDescription`, `longDescription`) VALUES
(1, 'Bodum CoffeeMaker', 13000, 'images/bodum1.jpg', 'Bodum Automatic Pour-Over Coffeemaker with Thermal Carafe', 'This groundbreaking coffeemaker automates the popular pour-over coffee brewing method for a delicious, flavorful brew. A powerful, spiral heating element heats water as it travels through tempered glass tubes, maintaining optimum brewing temperature, to a showerhead that evenly distributes water over the grounds. Best of all there\'s no need for paper filters thanks to the titanium-plated, fine-mesh stainless steel filter. A vacuum-sealed thermal carafe keeps coffee hot and aromatic without a heating element, which can overheat and turn coffee bitter.'),
(2, 'Motif Pour-Over', 7995, 'images/motif1.jpg', 'Motif Essential Pour-Over Style Coffee Brewer with Thermal Carafe', 'Our classic glass carafe brewer is thoughtfully designed to elevate and personalize your home experience with precision brewing for ultimate flavor. With Motif, every detail is in the service of making the best possible coffee at home. The Motif line of coffee brewing essentials, developed in Seattle, is thoughtfully designed to elevate and personalize that home experience. We want to help you figure out the best methods and products to match your level of knowledge, your priorities, your lifestyle, and your preferences.'),
(3, 'Chemex Ottomatic 2.0', 35000, 'images/chemex1.jpg', 'Chemex Ottomatic Coffee Maker 2.0. 7.5\"Wx11\"Dx11.5\"H', 'The latest version of this simply elegant automatic brewing system now offers the ability to brew both hot and cold coffee. Designed to work with the iconic Chemex coffee carafe and its patented filters, the coffee maker delivers the perfect cup of coffee every time with no sediment or bitter elements. The system automatically manages key brewing variables including pre-infusion, contact time of water to coffee and precise water heating to the specialty coffee industry target temperature. Greedy cup spray head technology uses a staged brewing cycle and pulsing water bath to ensure steady temperature and saturation of entire coffee bed for even extraction. The hot plate keeps coffee warm without burning or compromising flavor. The Chemex Ottomatic coffee maker is equipped with a 6-cup glass carafe and is also compatible with all 3-, 5-, 6- and 8-cup Chemex brewers.\r\n'),
(4, 'KitchenAid Siphon', 19999, 'images/kitchenaid.jpg', 'KitchenAid Siphon Coffee Maker. 6.7\"Wx8.7\"Dx14.3\"H', 'There\'s a simple science to complex flavor. Automating the manual vacuum brewer process, the KitchenAid siphon vacuum coffee maker effortlessly brews up to eight cups of velvety smooth and flavorful coffee. Great for entertaining, the glass globe design puts on a show as pressure pushes the water up through the grounds and drips down into the carafe.'),
(5, 'Smeg Cream Drip', 19995, 'https://bit.ly/2VD80b8', 'Smeg Cream Drip Coffee Machine with 50\'s Retro Style Aesthetic ', 'Known for their wonderfully retro refrigerators, SMEG has launched a joyfully designed kitchen appliance collection based on the curved and compact lines of postwar design. Incorporating a 1950s-era aesthetic, SMEG\'s nod to the past is the star of today\'s kitchen, incorporating all the current advances in technology. With its charming bullet shape and fun chrome metal accents, the creamy white drip coffee maker delivers up to 10 cups of delicious coffee, adjustable for aroma levels from light to intense.'),
(6, 'Wolf Gourmet', 49995, 'images/wolfgourmet1.jpg', '10-cup double-wall insulated stainless steel thermal carafe keeps coffee hot and fresh', 'Simply program this 10-cup coffee maker to automatically brew just before you wake up, and the thermal carafe will keep your coffee hot and ready for you first thing in the morning-perfect for those who need caffeinated motivation to get out of bed. Just choose your desired brew strength among the five options and the number of cups you wish to brew, and the intuitive LCD display informs you how much coffee to add. The built-in scale makes it easy to add the exact amount for precise, consistent flavor, brew after brew. LCD display will also inform you when water reservoir needs to be refilled. Convenient features like Last Brew Memory and Auto Pause and Serve remember your previous brew settings and allow you to pause the brew cycle to pour and enjoy a cup during the process.'),
(7, 'Calphalon Special Brew', 15999, 'images/calphalon1.jpg', 'Calphalon Special Brew Coffee Maker. 15.04\"Wx8.67\"Dx15.59\"H', 'This 10-cup coffee maker features a premium boiling system to produce precise temperatures to extract more flavor than leading coffee makers, creating a bold, robust brew. Tailor your preference with the adjustable flavor strength feature and monitor freshness with a timer that tracks the time since coffee was first brewed.'),
(8, 'Russell Hobbs', 8478, 'images/russel1.jpg', 'Russell Hobbs Glass Series 8-Cup Coffeemaker, Silver & Stainless Steel', 'This contemporary 8-cup* (1.25L) programmable coffee maker adds elegance to everyday life, combining sleek, elegant design with true innovation. Not only does it brew 40% faster**, the advanced showerhead technology evenly saturates coffee grounds for full flavor extraction; and a pause and pour function that lets you enjoy your first cup before brewing is complete. The permanent, gold-tone filter removes the need for paper filters, and the efficient self-cleaning function helps remove mineral buildup, so the first pot is as fresh as the last. Get ready to wake up to a great day.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cartproductid` (`productID`,`cartID`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
