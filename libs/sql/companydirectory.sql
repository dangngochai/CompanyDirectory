-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.6-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for companydirectory
CREATE DATABASE IF NOT EXISTS `companydirectory` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `companydirectory`;

-- Dumping structure for table companydirectory.department
CREATE TABLE IF NOT EXISTS `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `locationID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Dumping data for table companydirectory.department: ~12 rows (approximately)
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` (`id`, `name`, `locationID`) VALUES
	(1, 'Human Resources', 1),
	(2, 'Sales', 2),
	(3, 'Marketing', 2),
	(4, 'Legal', 1),
	(5, 'Services', 1),
	(6, 'Research and Development', 3),
	(7, 'Product Management', 3),
	(8, 'Training', 4),
	(9, 'Support', 4),
	(10, 'Engineering', 5),
	(11, 'Accounting', 5),
	(12, 'Business Development', 3);
/*!40000 ALTER TABLE `department` ENABLE KEYS */;

-- Dumping structure for table companydirectory.location
CREATE TABLE IF NOT EXISTS `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table companydirectory.location: ~4 rows (approximately)
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` (`id`, `name`) VALUES
	(1, 'London'),
	(2, 'New York'),
	(3, 'Paris'),
	(4, 'Munich'),
	(5, 'Rome');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;

-- Dumping structure for table companydirectory.personnel
CREATE TABLE IF NOT EXISTS `personnel` (
  `id` int(11) DEFAULT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `jobTitle` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `departmentID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table companydirectory.personnel: ~100 rows (approximately)
/*!40000 ALTER TABLE `personnel` DISABLE KEYS */;
INSERT INTO `personnel` (`id`, `firstName`, `lastName`, `jobTitle`, `email`, `departmentID`) VALUES
	(1, 'Rosana', 'Heffron', 'Manager', 'rheffron0@ibm.com', 1),
	(2, 'Kris', 'Kovnot', 'Sale Engineer', 'kkovnot1@google.nl', 2),
	(3, 'Vera', 'Kisbee', 'Marketing Executive', 'vkisbee2@nih.gov', 2),
	(4, 'Aveline', 'Edgson', 'Team Leader', 'aedgson3@wikispaces.com', 3),
	(5, 'Bertie', 'Wittke', 'Advisor', 'bwittke4@yahoo.com', 4),
	(6, 'Demetre', 'Cossam', 'Technician', 'dcossam5@washington.edu', 5),
	(7, 'Annabela', 'McGavigan', 'Junior Engineer', 'amcgavigan6@wp.com', 4),
	(8, 'Crichton', 'McAndrew', 'Manager', 'cmcandrew7@zdnet.com', 1),
	(9, 'Cordula', 'Plain', 'Service Manager', 'cplain8@google.ca', 5),
	(10, 'Glen', 'McDougle', 'Production Engineer', 'gmcdougle9@meetup.com', 6),
	(11, 'Theo', 'Audas', 'Electronic Engineer', 'taudasa@newsvine.com', 7),
	(12, 'Spense', 'Jolliss', 'Engineer', 'sjollissb@wufoo.com', 8),
	(13, 'Leopold', 'Carl', 'Engineer', 'lcarlc@paginegialle.it', 9),
	(14, 'Barr', 'MacAllan', 'Engineer', 'bmacalland@github.com', 5),
	(15, 'Suzie', 'Cromer', 'Engineer', 'scromere@imageshack.us', 1),
	(16, 'Tracee', 'Gisbourn', 'Engineer', 'tgisbournf@bloglines.com', 10),
	(17, 'Taylor', 'St. Quintin', 'Engineer', 'tstquinting@chronoengine.com', 10),
	(18, 'Lin', 'Klassmann', 'Engineer', 'lklassmannh@indiatimes.com', 10),
	(19, 'Lay', 'Fintoph', 'Engineer', 'lfintophi@goo.gl', 11),
	(20, 'Moishe', 'Flinn', 'Technician', 'mflinnj@list-manage.com', 12),
	(21, 'Gay', 'Bickford', 'Technician', 'gbickfordk@scientificamerican.com', 6),
	(22, 'Erik', 'Lindback', 'Technician', 'elindbackl@virginia.edu', 8),
	(23, 'Tamarra', 'Ace', 'Technician', 'tacem@vinaora.com', 9),
	(24, 'Barbara-anne', 'Rooksby', 'Technician', 'brooksbyn@issuu.com', 12),
	(25, 'Lucien', 'Allsup', 'Technician', 'lallsupo@goo.ne.jp', 9),
	(26, 'Jackelyn', 'Imlach', 'Technician', 'jimlachp@google.it', 11),
	(27, 'Virge', 'Bootes', 'Technician', 'vbootesq@oracle.com', 2),
	(28, 'Rafferty', 'Matasov', 'Technician', 'rmatasovr@4shared.com', 4),
	(29, 'Vanya', 'Goulder', 'Technician', 'vgoulders@phoca.cz', 9),
	(30, 'Bonita', 'McGonagle', 'Technician', 'bmcgonaglet@microsoft.com', 1),
	(31, 'Allx', 'Whaley', 'Team Leader', 'awhaleyu@bbb.org', 1),
	(32, 'Mavis', 'Lernihan', 'Associate', 'mlernihanv@netscape.com', 5),
	(33, 'Vern', 'Durling', 'Associate', 'vdurlingw@goo.gl', 1),
	(34, 'Myles', 'Minchi', 'Associate', 'mminchix@smugmug.com', 7),
	(35, 'Anitra', 'Coleridge', 'Associate', 'acoleridgey@nbcnews.com', 6),
	(36, 'Ailis', 'Brewster', 'Associate', 'abrewsterz@businesswire.com', 7),
	(37, 'Rahal', 'Tute', 'Associate', 'rtute10@pinterest.com', 6),
	(38, 'Warner', 'Blonden', 'Associate', 'wblonden11@spiegel.de', 12),
	(39, 'Melvyn', 'Canner', 'Associate', 'mcanner12@eepurl.com', 4),
	(40, 'Ryann', 'Giampietro', 'Associate', 'rgiampietro13@theguardian.com', 4),
	(41, 'Harwell', 'Jefferys', 'Associate', 'hjefferys14@jimdo.com', 10),
	(42, 'Lanette', 'Buss', 'Associate', 'lbuss15@51.la', 4),
	(43, 'Lissie', 'Reddington', 'Associate', 'lreddington16@w3.org', 9),
	(44, 'Dore', 'Braidford', 'Associate', 'dbraidford17@google.com.br', 11),
	(45, 'Lizabeth', 'Di Franceshci', 'Associate', 'ldifranceshci18@mediafire.com', 8),
	(46, 'Felic', 'Sharland', 'Engineer', 'fsharland19@myspace.com', 12),
	(47, 'Duff', 'Quail', 'Engineer', 'dquail1a@vimeo.com', 9),
	(48, 'Brendis', 'Shivell', 'Engineer', 'bshivell1b@un.org', 1),
	(49, 'Nevile', 'Schimaschke', 'Engineer', 'nschimaschke1c@hexun.com', 10),
	(50, 'Jon', 'Calbaithe', 'Engineer', 'jcalbaithe1d@netvibes.com', 4),
	(51, 'Emmery', 'Darben', 'Engineer', 'edarben1e@mapquest.com', 10),
	(52, 'Staford', 'Whitesel', 'Engineer', 'swhitesel1f@nasa.gov', 6),
	(53, 'Benjamin', 'Hawkslee', 'Engineer', 'bhawkslee1g@hubpages.com', 7),
	(54, 'Myrle', 'Speer', 'Engineer', 'mspeer1h@tripod.com', 3),
	(55, 'Matthus', 'Banfield', 'Engineer', 'mbanfield1i@angelfire.com', 3),
	(56, 'Annadiana', 'Drance', 'Engineer', 'adrance1j@omniture.com', 3),
	(57, 'Rinaldo', 'Fandrey', 'Engineer', 'rfandrey1k@bbc.co.uk', 2),
	(58, 'Roanna', 'Standering', 'Engineer', 'rstandering1l@cocolog-nifty.com', 3),
	(59, 'Lorrie', 'Fattorini', 'Engineer', 'lfattorini1m@geocities.jp', 9),
	(60, 'Talbot', 'Andrassy', 'Engineer', 'tandrassy1n@bigcartel.com', 4),
	(61, 'Cindi', 'OMannion', 'Engineer', 'comannion1o@ameblo.jp', 11),
	(62, 'Pancho', 'Mullineux', 'Engineer', 'pmullineux1p@webmd.com', 1),
	(63, 'Cynthy', 'Peyntue', 'Engineer', 'cpeyntue1q@amazon.co.jp', 6),
	(64, 'Kristine', 'Christal', 'Engineer', 'kchristal1r@behance.net', 8),
	(65, 'Dniren', 'Reboulet', 'Engineer', 'dreboulet1s@360.cn', 7),
	(66, 'Aggy', 'Napier', 'Executive', 'anapier1t@sciencedirect.com', 3),
	(67, 'Gayleen', 'Hessay', 'Executive', 'ghessay1u@exblog.jp', 4),
	(68, 'Cull', 'Snoden', 'Executive', 'csnoden1v@so-net.ne.jp', 1),
	(69, 'Vlad', 'Crocombe', 'Technician', 'vcrocombe1w@mtv.com', 7),
	(70, 'Georgeanna', 'Joisce', 'Technician', 'gjoisce1x@google.com.au', 6),
	(71, 'Ursola', 'Berthomieu', 'Technician', 'uberthomieu1y@un.org', 4),
	(72, 'Mair', 'McKirdy', 'Technician', 'mmckirdy1z@ovh.net', 1),
	(73, 'Erma', 'Runnalls', 'Technician', 'erunnalls20@spiegel.de', 8),
	(74, 'Heida', 'Gallone', 'Technician', 'hgallone21@hostgator.com', 10),
	(75, 'Christina', 'Denge', 'Technician', 'cdenge22@canalblog.com', 12),
	(76, 'Wilone', 'Fredi', 'Technician', 'wfredi23@gizmodo.com', 7),
	(77, 'Stormie', 'Bolderstone', 'Technician', 'sbolderstone24@globo.com', 11),
	(78, 'Darryl', 'Pool', 'Technician', 'dpool25@vistaprint.com', 11),
	(79, 'Nikolas', 'Mager', 'Technician', 'nmager26@nifty.com', 5),
	(80, 'Brittney', 'Gaskal', 'Technician', 'bgaskal27@weather.com', 10),
	(81, 'Field', 'Gresty', 'Technician', 'fgresty28@networkadvertising.org', 4),
	(82, 'Martina', 'Tremoulet', 'Technician', 'mtremoulet29@sciencedaily.com', 3),
	(83, 'Robena', 'Ivanyutin', 'Technician', 'rivanyutin2a@mozilla.org', 2),
	(84, 'Reagen', 'Corner', 'Technician', 'rcorner2b@qq.com', 11),
	(85, 'Eveleen', 'Sulter', 'Technician', 'esulter2c@nature.com', 6),
	(86, 'Christy', 'Dunbobbin', 'Technician', 'cdunbobbin2d@feedburner.com', 8),
	(87, 'Winthrop', 'Lansley', 'Technician', 'wlansley2e@alibaba.com', 8),
	(88, 'Lissa', 'Insley', 'Technician', 'linsley2f@friendfeed.com', 3),
	(89, 'Shell', 'Risebarer', 'Technician', 'srisebarer2g@patch.com', 10),
	(90, 'Cherianne', 'Liddyard', 'Manager', 'cliddyard2h@com.com', 2),
	(91, 'Brendan', 'Fooks', 'Manager', 'bfooks2i@utexas.edu', 2),
	(92, 'Edmund', 'Tace', 'Manager', 'etace2j@hatena.ne.jp', 9),
	(93, 'Ki', 'Tomasini', 'Manager', 'ktomasini2k@cnbc.com', 10),
	(94, 'Chadd', 'McGettrick', 'Manager', 'cmcgettrick2l@simplemachines.org', 10),
	(95, 'Dulcie', 'Baudi', 'Manager', 'dbaudi2m@last.fm', 3),
	(96, 'Barnebas', 'Mowbray', 'Manager', 'bmowbray2n@cbslocal.com', 1),
	(97, 'Stefanie', 'Anker', 'Manager', 'sanker2o@hud.gov', 5),
	(98, 'Cherye', 'de Cullip', 'Manager', 'cdecullip2p@loc.gov', 10),
	(99, 'Sinclare', 'Deverall', 'Manager', 'sdeverall2q@ow.ly', 6),
	(100, 'Shae', 'Johncey', 'Manager', 'sjohncey2r@bluehost.com', 10);
/*!40000 ALTER TABLE `personnel` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
