-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for doktor
CREATE DATABASE IF NOT EXISTS `doktor` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `doktor`;

-- Dumping structure for table doktor.anxiety
CREATE TABLE IF NOT EXISTS `anxiety` (
  `id` int NOT NULL AUTO_INCREMENT,
  `video_url` varchar(255) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text,
  `causes` text,
  `symptoms` text,
  `impact` text,
  `treatment` text,
  `awareness` text,
  `conclusion` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table doktor.anxiety: ~2 rows (approximately)
DELETE FROM `anxiety`;
INSERT INTO `anxiety` (`id`, `video_url`, `title`, `description`, `causes`, `symptoms`, `impact`, `treatment`, `awareness`, `conclusion`, `created_at`, `updated_at`, `createdAt`, `updatedAt`) VALUES
	(1, 'https://youtu.be/ZjfOB5N0tBg', 'Apa itu Anxiety Disorder', 'Kecemasan adalah respons alami terhadap stres, namun ketika menjadi berlebihan dan tidak terkendali, dapat mengganggu kehidupan sehari-hari. Hal ini ditandai dengan perasaan takut, khawatir, atau cemas yang intens dan persisten terhadap situasi-situasi sehari-hari. Gangguan kecemasan mencakup berbagai kondisi, termasuk gangguan kecemasan umum (GAD), gangguan panik, gangguan kecemasan sosial, dan fobia spesifik.', 'Genetik: Riwayat keluarga memainkan peran penting, menunjukkan kecenderungan terhadap gangguan kecemasan.\nKimia Otak: Ketidakseimbangan neurotransmitter seperti serotonin dan dopamine dapat mempengaruhi regulasi mood.\nPengalaman Hidup: Peristiwa traumatis, masa kecil yang sulit, atau stres yang berkepanjangan dapat memicu gejala kecemasan.\nSifat Kepribadian: Beberapa sifat seperti perfeksionisme, sensitivitas terhadap kritik, atau kecenderungan untuk berpikir berlebihan dapat meningkatkan kerentanan.', 'Mengenali tanda-tanda kecemasan dapat bervariasi dari individu ke individu, tetapi umumnya mencakup gejala fisik seperti detak jantung cepat, gejala emosional seperti khawatir yang persisten, dan gejala perilaku seperti menghindari pemicu kecemasan.', 'Hubungan Sosial: Rasa takut akan penilaian atau penolakan dapat menyebabkan isolasi dan hubungan yang tegang.\nKinerja Kerja atau Akademis: Kesulitan berkonsentrasi, penundaan pekerjaan, dan absensi dapat mempengaruhi produktivitas.\nKesehatan Fisik: Kecemasan kronis juga dapat berkontribusi pada gangguan tidur, masalah pencernaan, atau masalah kesehatan lainnya.', 'Manajemen efektif kecemasan sering melibatkan kombinasi terapi seperti terapi kognitif perilaku (CBT), penggunaan obat-obatan, dan perubahan gaya hidup seperti olahraga teratur dan teknik manajemen stres.', 'Membangun kesadaran tentang kecemasan penting untuk mendorong individu untuk mencari bantuan tanpa adanya stigma. Diskusi terbuka, edukasi, dan sistem dukungan sangat penting dalam meningkatkan kesadaran kesehatan mental.', 'Kecemasan adalah kondisi kesehatan mental yang kompleks dan dapat memengaruhi siapa saja. Dengan pemahaman tentang penyebab, gejala, dan pilihan pengobatan yang efektif, kita dapat menciptakan lingkungan yang mendukung bagi mereka yang terkena kecemasan. Dengan empati, edukasi, dan intervensi yang efektif, kita dapat membantu individu mengelola kecemasan mereka dan menjalani kehidupan yang memuaskan.', '2024-06-20 13:24:56', '2024-06-20 13:24:56', '2024-06-20 13:24:56', '2024-06-20 13:24:56'),
	(2, 'https://youtu.be/aKJOPBu67Fw', 'Apa itu Anxiety Disorder', 'Kecemasan adalah respons alami terhadap stres, namun ketika menjadi berlebihan dan tidak terkendali, dapat mengganggu kehidupan sehari-hari. Hal ini ditandai dengan perasaan takut, khawatir, atau cemas yang intens dan persisten terhadap situasi-situasi sehari-hari. Gangguan kecemasan mencakup berbagai kondisi, termasuk gangguan kecemasan umum (GAD), gangguan panik, gangguan kecemasan sosial, dan fobia spesifik.', 'Genetik: Riwayat keluarga memainkan peran penting, menunjukkan kecenderungan terhadap gangguan kecemasan.\nKimia Otak: Ketidakseimbangan neurotransmitter seperti serotonin dan dopamine dapat mempengaruhi regulasi mood.\nPengalaman Hidup: Peristiwa traumatis, masa kecil yang sulit, atau stres yang berkepanjangan dapat memicu gejala kecemasan.\nSifat Kepribadian: Beberapa sifat seperti perfeksionisme, sensitivitas terhadap kritik, atau kecenderungan untuk berpikir berlebihan dapat meningkatkan kerentanan.', 'Mengenali tanda-tanda kecemasan dapat bervariasi dari individu ke individu, tetapi umumnya mencakup gejala fisik seperti detak jantung cepat, gejala emosional seperti khawatir yang persisten, dan gejala perilaku seperti menghindari pemicu kecemasan.', 'Hubungan Sosial: Rasa takut akan penilaian atau penolakan dapat menyebabkan isolasi dan hubungan yang tegang.\nKinerja Kerja atau Akademis: Kesulitan berkonsentrasi, penundaan pekerjaan, dan absensi dapat mempengaruhi produktivitas.\nKesehatan Fisik: Kecemasan kronis juga dapat berkontribusi pada gangguan tidur, masalah pencernaan, atau masalah kesehatan lainnya.', 'Manajemen efektif kecemasan sering melibatkan kombinasi terapi seperti terapi kognitif perilaku (CBT), penggunaan obat-obatan, dan perubahan gaya hidup seperti olahraga teratur dan teknik manajemen stres.', 'Membangun kesadaran tentang kecemasan penting untuk mendorong individu untuk mencari bantuan tanpa adanya stigma. Diskusi terbuka, edukasi, dan sistem dukungan sangat penting dalam meningkatkan kesadaran kesehatan mental.', 'Kecemasan adalah kondisi kesehatan mental yang kompleks dan dapat memengaruhi siapa saja. Dengan pemahaman tentang penyebab, gejala, dan pilihan pengobatan yang efektif, kita dapat menciptakan lingkungan yang mendukung bagi mereka yang terkena kecemasan. Dengan empati, edukasi, dan intervensi yang efektif, kita dapat membantu individu mengelola kecemasan mereka dan menjalani kehidupan yang memuaskan.', '2024-06-20 13:26:08', '2024-06-20 13:26:08', '2024-06-20 13:26:08', '2024-06-20 13:26:08'),
	(3, 'https://youtu.be/ZjfOB5N0tBg', 'Apa itu Anxiety Disorder', 'Kecemasan adalah respons alami terhadap stres, namun ketika menjadi berlebihan dan tidak terkendali, dapat mengganggu kehidupan sehari-hari. Hal ini ditandai dengan perasaan takut, khawatir, atau cemas yang intens dan persisten terhadap situasi-situasi sehari-hari. Gangguan kecemasan mencakup berbagai kondisi, termasuk gangguan kecemasan umum (GAD), gangguan panik, gangguan kecemasan sosial, dan fobia spesifik.', 'Genetik: Riwayat keluarga memainkan peran penting, menunjukkan kecenderungan terhadap gangguan kecemasan.\nKimia Otak: Ketidakseimbangan neurotransmitter seperti serotonin dan dopamine dapat mempengaruhi regulasi mood.\nPengalaman Hidup: Peristiwa traumatis, masa kecil yang sulit, atau stres yang berkepanjangan dapat memicu gejala kecemasan.\nSifat Kepribadian: Beberapa sifat seperti perfeksionisme, sensitivitas terhadap kritik, atau kecenderungan untuk berpikir berlebihan dapat meningkatkan kerentanan.', 'Mengenali tanda-tanda kecemasan dapat bervariasi dari individu ke individu, tetapi umumnya mencakup gejala fisik seperti detak jantung cepat, gejala emosional seperti khawatir yang persisten, dan gejala perilaku seperti menghindari pemicu kecemasan.', 'Hubungan Sosial: Rasa takut akan penilaian atau penolakan dapat menyebabkan isolasi dan hubungan yang tegang.\nKinerja Kerja atau Akademis: Kesulitan berkonsentrasi, penundaan pekerjaan, dan absensi dapat mempengaruhi produktivitas.\nKesehatan Fisik: Kecemasan kronis juga dapat berkontribusi pada gangguan tidur, masalah pencernaan, atau masalah kesehatan lainnya.', 'Manajemen efektif kecemasan sering melibatkan kombinasi terapi seperti terapi kognitif perilaku (CBT), penggunaan obat-obatan, dan perubahan gaya hidup seperti olahraga teratur dan teknik manajemen stres.', 'Membangun kesadaran tentang kecemasan penting untuk mendorong individu untuk mencari bantuan tanpa adanya stigma. Diskusi terbuka, edukasi, dan sistem dukungan sangat penting dalam meningkatkan kesadaran kesehatan mental.', 'Kecemasan adalah kondisi kesehatan mental yang kompleks dan dapat memengaruhi siapa saja. Dengan pemahaman tentang penyebab, gejala, dan pilihan pengobatan yang efektif, kita dapat menciptakan lingkungan yang mendukung bagi mereka yang terkena kecemasan. Dengan empati, edukasi, dan intervensi yang efektif, kita dapat membantu individu mengelola kecemasan mereka dan menjalani kehidupan yang memuaskan.', '2024-06-20 13:26:30', '2024-06-20 13:26:30', '2024-06-20 13:26:30', '2024-06-20 13:26:30');

-- Dumping structure for table doktor.appointment
CREATE TABLE IF NOT EXISTS `appointment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `medical_record_no` varchar(50) DEFAULT NULL,
  `patient_name` varchar(100) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `registration_date` text,
  `complaints` text,
  `notes` text,
  `status` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  `type` text,
  `paket` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `doctor_id` (`doctor_id`),
  CONSTRAINT `appointment_ibfk_117` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `appointment_ibfk_118` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table doktor.appointment: ~2 rows (approximately)
DELETE FROM `appointment`;
INSERT INTO `appointment` (`id`, `medical_record_no`, `patient_name`, `phone_number`, `registration_date`, `complaints`, `notes`, `status`, `createdAt`, `updatedAt`, `user_id`, `doctor_id`, `type`, `paket`) VALUES
	(7, 'MEDIS-5a0684ba', 'test2', '089665881651', '2024-10-10 10.00', 'Kecemasan', 'Sering merasa cemas', 'terjadwal', '2024-06-20 21:04:44', '2024-06-20 21:04:44', 1, 2, 'Online', 'Basic'),
	(8, 'MEDIS-666968f6', 'testest', '123123', '2024-10-10 09.00', 'Kecemasan', 'Sering merasa cemas', 'terjadwal', '2024-06-21 00:03:26', '2024-06-21 00:03:26', 3, 2, 'Offline', 'Basic'),
	(9, 'MEDIS-58375f05', 'testing1', '1231123123123', '2024-06-21T00:31:40.028Z', 'Kecemasan', 'Sering merasa cemas', 'terjadwal', '2024-06-21 00:31:40', '2024-06-21 00:31:40', 4, 1, 'Online', 'Basic'),
	(10, 'MEDIS-635b3372', '', '', '2024-10-10 10.00', 'Kecemasan', 'Sering merasa cemas', 'terjadwal', '2024-06-21 00:33:18', '2024-06-21 00:33:18', 4, 2, 'Offline', 'Basic'),
	(11, 'MEDIS-c53024a3', '', '', '2024-06-21T14:06:43.737Z', 'Kecemasan', 'Sering merasa cemas', 'terjadwal', NULL, NULL, 4, 3, 'Online', 'Basic'),
	(12, 'MEDIS-0f34449e', '', '', '2024-10-10 09.00', 'Kecemasan', 'Sering merasa cemas', 'terjadwal', NULL, NULL, 4, 2, 'Offline', 'Basic');

-- Dumping structure for table doktor.bipolar
CREATE TABLE IF NOT EXISTS `bipolar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `video_url` varchar(255) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text,
  `symptoms` text,
  `manic_episodes` text,
  `treatment_options` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table doktor.bipolar: ~2 rows (approximately)
DELETE FROM `bipolar`;
INSERT INTO `bipolar` (`id`, `video_url`, `title`, `description`, `symptoms`, `manic_episodes`, `treatment_options`, `created_at`, `updated_at`, `createdAt`, `updatedAt`) VALUES
	(1, 'https://youtu.be/aKJOPBu67Fw', 'Gangguan Bipolar: Memahami Gejala dan Pilihan pengobatan', 'Gangguan bipolar, sering kali disebut sebagai gangguan manik-depresif, adalah kondisi kesehatan mental yang ditandai oleh perubahan suasana hati yang ekstrim, termasuk episode manik (kegembiraan yang berlebihan) dan episode depresi (kesedihan yang mendalam). Kondisi ini bisa mempengaruhi cara seseorang berpikir, merasa, dan berperilaku, dan dapat memengaruhi kualitas hidup secara keseluruhan. Memahami gejala dan pilihan pengobatan gangguan bipolar dapat membantu individu yang terkena kondisi ini untuk mengelola dan mengatasi tantangan yang mereka hadapi.', 'Penting untuk dicatat bahwa pengobatan gangguan bipolar dapat bervariasi antara individu dan dapat memerlukan waktu untuk menemukan kombinasi pengobatan yang paling efektif. Konsultasikan dengan profesional kesehatan mental untuk mendapatkan evaluasi dan rencana pengobatan yang sesuai dengan kebutuhan individu.\n\nGangguan bipolar bukanlah kondisi yang mudah, tetapi dengan pengelolaan yang tepat, banyak orang dapat menjalani kehidupan yang memuaskan dan bermakna meskipun menghadapi tantangan ini. Dengan dukungan yang tepat dari orang-orang terkasih dan profesional kesehatan mental, individu yang mengalami gangguan bipolar dapat belajar untuk mengelola gejala dan memperbaiki kualitas hidup mereka.', NULL, 'Obat-obatan: Dokter atau psikiater dapat meresepkan obat-obatan untuk membantu mengatur suasana hati dan mencegah episode manik atau depresi. Contoh obat-obatan termasuk stabilisator suasana hati seperti litium, antipsikotik, atau antidepresan.\nTerapi Psikologis: Terapi kognitif perilaku (CBT), terapi interpersonal, dan terapi kesejahteraan dapat membantu individu memahami dan mengelola gejala gangguan bipolar, serta meningkatkan keterampilan pengaturan emosi.\nPola Hidup Sehat: Menerapkan pola hidup sehat seperti tidur yang cukup, olahraga teratur, makan makanan sehat, dan menghindari alkohol dan obat-obatan terlarang dapat membantu mengelola gejala gangguan bipolar.\nDukungan Sosial: Dukungan dari keluarga, teman, dan kelompok dukungan dapat memberikan perasaan dukungan dan pemahaman yang diperlukan bagi individu yang mengalami gangguan bipolar.\nPemantauan dan Pengelolaan Stress: Mengidentifikasi faktor-faktor pemicu stres dan belajar teknik pengelolaan stres seperti meditasi, yoga, atau relaksasi otot progresif dapat membantu mengurangi risiko episode manik atau depresi.', '2024-06-20 13:28:12', '2024-06-20 13:28:12', '2024-06-20 13:28:12', '2024-06-20 13:28:12'),
	(2, 'https://youtu.be/dfeen7_eFTs', 'Gangguan Bipolar: Memahami Gejala dan Pilihan pengobatan', 'Gangguan bipolar, sering kali disebut sebagai gangguan manik-depresif, adalah kondisi kesehatan mental yang ditandai oleh perubahan suasana hati yang ekstrim, termasuk episode manik (kegembiraan yang berlebihan) dan episode depresi (kesedihan yang mendalam). Kondisi ini bisa mempengaruhi cara seseorang berpikir, merasa, dan berperilaku, dan dapat memengaruhi kualitas hidup secara keseluruhan. Memahami gejala dan pilihan pengobatan gangguan bipolar dapat membantu individu yang terkena kondisi ini untuk mengelola dan mengatasi tantangan yang mereka hadapi.', 'Penting untuk dicatat bahwa pengobatan gangguan bipolar dapat bervariasi antara individu dan dapat memerlukan waktu untuk menemukan kombinasi pengobatan yang paling efektif. Konsultasikan dengan profesional kesehatan mental untuk mendapatkan evaluasi dan rencana pengobatan yang sesuai dengan kebutuhan individu.\n\nGangguan bipolar bukanlah kondisi yang mudah, tetapi dengan pengelolaan yang tepat, banyak orang dapat menjalani kehidupan yang memuaskan dan bermakna meskipun menghadapi tantangan ini. Dengan dukungan yang tepat dari orang-orang terkasih dan profesional kesehatan mental, individu yang mengalami gangguan bipolar dapat belajar untuk mengelola gejala dan memperbaiki kualitas hidup mereka.', NULL, 'Obat-obatan: Dokter atau psikiater dapat meresepkan obat-obatan untuk membantu mengatur suasana hati dan mencegah episode manik atau depresi. Contoh obat-obatan termasuk stabilisator suasana hati seperti litium, antipsikotik, atau antidepresan.\nTerapi Psikologis: Terapi kognitif perilaku (CBT), terapi interpersonal, dan terapi kesejahteraan dapat membantu individu memahami dan mengelola gejala gangguan bipolar, serta meningkatkan keterampilan pengaturan emosi.\nPola Hidup Sehat: Menerapkan pola hidup sehat seperti tidur yang cukup, olahraga teratur, makan makanan sehat, dan menghindari alkohol dan obat-obatan terlarang dapat membantu mengelola gejala gangguan bipolar.\nDukungan Sosial: Dukungan dari keluarga, teman, dan kelompok dukungan dapat memberikan perasaan dukungan dan pemahaman yang diperlukan bagi individu yang mengalami gangguan bipolar.\nPemantauan dan Pengelolaan Stress: Mengidentifikasi faktor-faktor pemicu stres dan belajar teknik pengelolaan stres seperti meditasi, yoga, atau relaksasi otot progresif dapat membantu mengurangi risiko episode manik atau depresi.', '2024-06-20 13:28:14', '2024-06-20 13:28:14', '2024-06-20 13:28:14', '2024-06-20 13:28:14'),
	(3, 'https://youtu.be/aKJOPBu67Fw', 'Gangguan Bipolar: Memahami Gejala dan Pilihan pengobatan', 'Gangguan bipolar, sering kali disebut sebagai gangguan manik-depresif, adalah kondisi kesehatan mental yang ditandai oleh perubahan suasana hati yang ekstrim, termasuk episode manik (kegembiraan yang berlebihan) dan episode depresi (kesedihan yang mendalam). Kondisi ini bisa mempengaruhi cara seseorang berpikir, merasa, dan berperilaku, dan dapat memengaruhi kualitas hidup secara keseluruhan. Memahami gejala dan pilihan pengobatan gangguan bipolar dapat membantu individu yang terkena kondisi ini untuk mengelola dan mengatasi tantangan yang mereka hadapi.', 'Penting untuk dicatat bahwa pengobatan gangguan bipolar dapat bervariasi antara individu dan dapat memerlukan waktu untuk menemukan kombinasi pengobatan yang paling efektif. Konsultasikan dengan profesional kesehatan mental untuk mendapatkan evaluasi dan rencana pengobatan yang sesuai dengan kebutuhan individu.\n\nGangguan bipolar bukanlah kondisi yang mudah, tetapi dengan pengelolaan yang tepat, banyak orang dapat menjalani kehidupan yang memuaskan dan bermakna meskipun menghadapi tantangan ini. Dengan dukungan yang tepat dari orang-orang terkasih dan profesional kesehatan mental, individu yang mengalami gangguan bipolar dapat belajar untuk mengelola gejala dan memperbaiki kualitas hidup mereka.', NULL, 'Obat-obatan: Dokter atau psikiater dapat meresepkan obat-obatan untuk membantu mengatur suasana hati dan mencegah episode manik atau depresi. Contoh obat-obatan termasuk stabilisator suasana hati seperti litium, antipsikotik, atau antidepresan.\nTerapi Psikologis: Terapi kognitif perilaku (CBT), terapi interpersonal, dan terapi kesejahteraan dapat membantu individu memahami dan mengelola gejala gangguan bipolar, serta meningkatkan keterampilan pengaturan emosi.\nPola Hidup Sehat: Menerapkan pola hidup sehat seperti tidur yang cukup, olahraga teratur, makan makanan sehat, dan menghindari alkohol dan obat-obatan terlarang dapat membantu mengelola gejala gangguan bipolar.\nDukungan Sosial: Dukungan dari keluarga, teman, dan kelompok dukungan dapat memberikan perasaan dukungan dan pemahaman yang diperlukan bagi individu yang mengalami gangguan bipolar.\nPemantauan dan Pengelolaan Stress: Mengidentifikasi faktor-faktor pemicu stres dan belajar teknik pengelolaan stres seperti meditasi, yoga, atau relaksasi otot progresif dapat membantu mengurangi risiko episode manik atau depresi.', '2024-06-20 13:28:23', '2024-06-20 13:28:23', '2024-06-20 13:28:23', '2024-06-20 13:28:23');

-- Dumping structure for table doktor.chat
CREATE TABLE IF NOT EXISTS `chat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `doctor_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `message` text,
  `sender_doctor` tinyint(1) DEFAULT '0',
  `sender_user` tinyint(1) DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `doctor_id` (`doctor_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `chat_ibfk_57` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `chat_ibfk_58` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table doktor.chat: ~8 rows (approximately)
DELETE FROM `chat`;
INSERT INTO `chat` (`id`, `doctor_id`, `user_id`, `message`, `sender_doctor`, `sender_user`, `createdAt`, `updatedAt`) VALUES
	(1, NULL, 1, 'chat', 0, 1, '2024-06-20 14:53:17', '2024-06-20 14:53:17'),
	(2, NULL, 1, 'chat 2', 0, 1, '2024-06-20 14:53:21', '2024-06-20 14:53:21'),
	(3, NULL, 1, 'balasan 1', 1, 0, '2024-06-20 14:53:45', '2024-06-20 14:53:45'),
	(4, NULL, 1, 'chat 3', 0, 1, '2024-06-20 14:53:49', '2024-06-20 14:53:49'),
	(5, NULL, 1, 'balasan 2', 1, 0, '2024-06-20 14:53:53', '2024-06-20 14:53:53'),
	(6, NULL, 1, 'chat 4', 0, 1, '2024-06-20 14:53:57', '2024-06-20 14:53:57'),
	(7, NULL, 1, 'chat 6', 0, 1, '2024-06-20 14:55:13', '2024-06-20 14:55:13'),
	(8, NULL, 1, 'chat 7', 0, 1, '2024-06-20 14:55:18', '2024-06-20 14:55:18'),
	(9, NULL, 2, 'balasan 1', 1, 0, '2024-06-20 14:55:25', '2024-06-20 14:55:25'),
	(10, NULL, 2, 'balasan 4', 1, 0, '2024-06-20 14:55:29', '2024-06-20 14:55:29');

-- Dumping structure for table doktor.community
CREATE TABLE IF NOT EXISTS `community` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `members_count` int DEFAULT NULL,
  `slogan` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table doktor.community: ~2 rows (approximately)
DELETE FROM `community`;
INSERT INTO `community` (`id`, `image`, `url`, `title`, `members_count`, `slogan`, `createdAt`, `updatedAt`) VALUES
	(1, '6fe4ecc52739502fbbe4c53a0a1496e0.png', 'http://localhost:3001/images/6fe4ecc52739502fbbe4c53a0a1496e0.png', 'Mentari Sehat', 1, 'Cahaya Peduli, Menyinari Untuk Hati yang Sehat', '2024-06-20 13:29:24', '2024-06-20 13:29:24'),
	(2, '52195d1aead70149fac4b047c5926644.png', 'http://localhost:3001/images/52195d1aead70149fac4b047c5926644.png', 'Pikiran Sejahtera', 1, 'Pikiran Bersama, Sejahtera Bersama', '2024-06-20 13:30:08', '2024-06-20 13:30:08'),
	(3, '62c43f2a81a41eb38300fbc36fb6d438.png', 'http://localhost:3001/images/62c43f2a81a41eb38300fbc36fb6d438.png', 'Saling Jaga', 1, 'Saling Mendukung, Saling Merawat, Saling Jaga', '2024-06-20 13:30:29', '2024-06-20 13:30:29');

-- Dumping structure for table doktor.community_data
CREATE TABLE IF NOT EXISTS `community_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `community_id` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `description` text,
  `likes_count` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `community_id` (`community_id`),
  CONSTRAINT `community_data_ibfk_1` FOREIGN KEY (`community_id`) REFERENCES `community` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table doktor.community_data: ~9 rows (approximately)
DELETE FROM `community_data`;
INSERT INTO `community_data` (`id`, `community_id`, `title`, `image`, `url`, `description`, `likes_count`, `createdAt`, `updatedAt`) VALUES
	(2, 1, 'Pantangan Makanan untuk Mereka yang Sering Depresi: Menuju Kesehatan Mental Lebih Baik', '687d2c0aa1e28551dc98b298ba1e99d8.png', 'http://localhost:3001/images/687d2c0aa1e28551dc98b298ba1e99d8.png', 'Kesehatan mental adalah aspek penting dalam kehidupan kita yang sering kali terabaikan. Depresi adalah salah satu masalah kesehatan mental yang umum dan dapat mempengaruhi berbagai aspek kehidupan sehari-hari. Selain terapi dan dukungan sosial, diet juga memainkan peran penting dalam manajemen depresi. Beberapa jenis makanan dapat memperburuk gejala depresi atau menghambat upaya pemulihan, sementara yang lain dapat membantu memperbaiki keseimbangan kimia otak dan mood.\n\nMakanan yang Harus Dihindari:\nGula Berlebihan: Konsumsi gula yang tinggi dapat menyebabkan lonjakan dan penurunan kadar gula darah yang drastis, mempengaruhi mood secara negatif.\nMakanan Cepat Saji: Kandungan lemak jenuh dan kalori tinggi dalam makanan cepat saji dapat mempengaruhi keseimbangan kimia otak dan menyebabkan perasaan lelah dan lesu.\nAlkohol: Alkohol dapat memperburuk gejala depresi dan mengganggu pola tidur yang sehat.\nKafein: Minuman yang mengandung kafein seperti kopi dan minuman berenergi dapat mempengaruhi tidur dan meningkatkan kecemasan.\nMakanan Tinggi Lemak Trans: Lemak trans dapat meningkatkan peradangan dalam tubuh, yang dapat mempengaruhi keseimbangan kimia otak.\nMakanan yang Dianjurkan untuk Kesehatan Mental yang Lebih Baik:\nSayuran Hijau dan Buah-buahan: Kaya akan antioksidan dan nutrisi, seperti vitamin C dan beta-karoten, yang dapat membantu mengurangi peradangan dan meningkatkan mood.\nMakanan Kaya Omega-3: Salmon, sarden, dan biji-bijian seperti chia dan kenari mengandung asam lemak omega-3, yang telah terbukti mengurangi gejala depresi.\nSerat: Makanan tinggi serat seperti gandum utuh, kacang-kacangan, dan biji-bijian membantu menjaga stabilitas gula darah dan mood.\nProtein Seimbang: Protein dari sumber seperti daging tanpa lemak, telur, dan produk susu rendah lemak dapat membantu menjaga stabilitas energi dan mood.\nKacang-kacangan dan Biji-bijian: Kaya akan magnesium, yang dapat membantu mengatur mood dan mengurangi gejala kecemasan.\nSelain memperhatikan makanan yang dikonsumsi, penting untuk menjaga pola makan yang seimbang dan teratur. Hindari makan berlebihan atau tidak teratur, karena hal ini dapat mempengaruhi energi dan mood secara keseluruhan. Mengatur pola makan dengan bijak dapat membantu dalam manajemen gejala depresi dan meningkatkan kesehatan mental secara keseluruhan.\n\nKesimpulan:\nMemilih makanan dengan bijak bukan hanya berdampak pada kesehatan fisik kita, tetapi juga kesehatan mental. Dengan menghindari makanan yang tidak sehat dan mengintegrasikan makanan yang bermanfaat, kita dapat mendukung proses pemulihan dari depresi dan mencapai kesehatan mental yang lebih baik secara keseluruhan. Jadi, mulailah dari sekarang dengan mengatur pola makan Anda untuk mendukung kesehatan mental yang optimal.', 0, '2024-06-20 13:31:43', '2024-06-20 13:31:43'),
	(3, 1, 'Pantangan Makanan untuk Mereka yang Sering Depresi: Menuju Kesehatan Mental Lebih Baik', '263536aa8355d11e1dfb1e5a8d46bc3c.png', 'http://localhost:3001/images/263536aa8355d11e1dfb1e5a8d46bc3c.png', 'Kesehatan mental adalah aspek penting dalam kehidupan kita yang sering kali terabaikan. Depresi adalah salah satu masalah kesehatan mental yang umum dan dapat mempengaruhi berbagai aspek kehidupan sehari-hari. Selain terapi dan dukungan sosial, diet juga memainkan peran penting dalam manajemen depresi. Beberapa jenis makanan dapat memperburuk gejala depresi atau menghambat upaya pemulihan, sementara yang lain dapat membantu memperbaiki keseimbangan kimia otak dan mood.\n\nMakanan yang Harus Dihindari:\nGula Berlebihan: Konsumsi gula yang tinggi dapat menyebabkan lonjakan dan penurunan kadar gula darah yang drastis, mempengaruhi mood secara negatif.\nMakanan Cepat Saji: Kandungan lemak jenuh dan kalori tinggi dalam makanan cepat saji dapat mempengaruhi keseimbangan kimia otak dan menyebabkan perasaan lelah dan lesu.\nAlkohol: Alkohol dapat memperburuk gejala depresi dan mengganggu pola tidur yang sehat.\nKafein: Minuman yang mengandung kafein seperti kopi dan minuman berenergi dapat mempengaruhi tidur dan meningkatkan kecemasan.\nMakanan Tinggi Lemak Trans: Lemak trans dapat meningkatkan peradangan dalam tubuh, yang dapat mempengaruhi keseimbangan kimia otak.\nMakanan yang Dianjurkan untuk Kesehatan Mental yang Lebih Baik:\nSayuran Hijau dan Buah-buahan: Kaya akan antioksidan dan nutrisi, seperti vitamin C dan beta-karoten, yang dapat membantu mengurangi peradangan dan meningkatkan mood.\nMakanan Kaya Omega-3: Salmon, sarden, dan biji-bijian seperti chia dan kenari mengandung asam lemak omega-3, yang telah terbukti mengurangi gejala depresi.\nSerat: Makanan tinggi serat seperti gandum utuh, kacang-kacangan, dan biji-bijian membantu menjaga stabilitas gula darah dan mood.\nProtein Seimbang: Protein dari sumber seperti daging tanpa lemak, telur, dan produk susu rendah lemak dapat membantu menjaga stabilitas energi dan mood.\nKacang-kacangan dan Biji-bijian: Kaya akan magnesium, yang dapat membantu mengatur mood dan mengurangi gejala kecemasan.\nSelain memperhatikan makanan yang dikonsumsi, penting untuk menjaga pola makan yang seimbang dan teratur. Hindari makan berlebihan atau tidak teratur, karena hal ini dapat mempengaruhi energi dan mood secara keseluruhan. Mengatur pola makan dengan bijak dapat membantu dalam manajemen gejala depresi dan meningkatkan kesehatan mental secara keseluruhan.\n\nKesimpulan:\nMemilih makanan dengan bijak bukan hanya berdampak pada kesehatan fisik kita, tetapi juga kesehatan mental. Dengan menghindari makanan yang tidak sehat dan mengintegrasikan makanan yang bermanfaat, kita dapat mendukung proses pemulihan dari depresi dan mencapai kesehatan mental yang lebih baik secara keseluruhan. Jadi, mulailah dari sekarang dengan mengatur pola makan Anda untuk mendukung kesehatan mental yang optimal.', 0, '2024-06-20 13:31:50', '2024-06-20 13:31:50'),
	(4, 1, 'Pantangan Makanan untuk Mereka yang Sering Depresi: Menuju Kesehatan Mental Lebih Baik', '00d863a15d7cfd97c7b521ab93d36d7b.png', 'http://localhost:3001/images/00d863a15d7cfd97c7b521ab93d36d7b.png', 'Kesehatan mental adalah aspek penting dalam kehidupan kita yang sering kali terabaikan. Depresi adalah salah satu masalah kesehatan mental yang umum dan dapat mempengaruhi berbagai aspek kehidupan sehari-hari. Selain terapi dan dukungan sosial, diet juga memainkan peran penting dalam manajemen depresi. Beberapa jenis makanan dapat memperburuk gejala depresi atau menghambat upaya pemulihan, sementara yang lain dapat membantu memperbaiki keseimbangan kimia otak dan mood.\n\nMakanan yang Harus Dihindari:\nGula Berlebihan: Konsumsi gula yang tinggi dapat menyebabkan lonjakan dan penurunan kadar gula darah yang drastis, mempengaruhi mood secara negatif.\nMakanan Cepat Saji: Kandungan lemak jenuh dan kalori tinggi dalam makanan cepat saji dapat mempengaruhi keseimbangan kimia otak dan menyebabkan perasaan lelah dan lesu.\nAlkohol: Alkohol dapat memperburuk gejala depresi dan mengganggu pola tidur yang sehat.\nKafein: Minuman yang mengandung kafein seperti kopi dan minuman berenergi dapat mempengaruhi tidur dan meningkatkan kecemasan.\nMakanan Tinggi Lemak Trans: Lemak trans dapat meningkatkan peradangan dalam tubuh, yang dapat mempengaruhi keseimbangan kimia otak.\nMakanan yang Dianjurkan untuk Kesehatan Mental yang Lebih Baik:\nSayuran Hijau dan Buah-buahan: Kaya akan antioksidan dan nutrisi, seperti vitamin C dan beta-karoten, yang dapat membantu mengurangi peradangan dan meningkatkan mood.\nMakanan Kaya Omega-3: Salmon, sarden, dan biji-bijian seperti chia dan kenari mengandung asam lemak omega-3, yang telah terbukti mengurangi gejala depresi.\nSerat: Makanan tinggi serat seperti gandum utuh, kacang-kacangan, dan biji-bijian membantu menjaga stabilitas gula darah dan mood.\nProtein Seimbang: Protein dari sumber seperti daging tanpa lemak, telur, dan produk susu rendah lemak dapat membantu menjaga stabilitas energi dan mood.\nKacang-kacangan dan Biji-bijian: Kaya akan magnesium, yang dapat membantu mengatur mood dan mengurangi gejala kecemasan.\nSelain memperhatikan makanan yang dikonsumsi, penting untuk menjaga pola makan yang seimbang dan teratur. Hindari makan berlebihan atau tidak teratur, karena hal ini dapat mempengaruhi energi dan mood secara keseluruhan. Mengatur pola makan dengan bijak dapat membantu dalam manajemen gejala depresi dan meningkatkan kesehatan mental secara keseluruhan.\n\nKesimpulan:\nMemilih makanan dengan bijak bukan hanya berdampak pada kesehatan fisik kita, tetapi juga kesehatan mental. Dengan menghindari makanan yang tidak sehat dan mengintegrasikan makanan yang bermanfaat, kita dapat mendukung proses pemulihan dari depresi dan mencapai kesehatan mental yang lebih baik secara keseluruhan. Jadi, mulailah dari sekarang dengan mengatur pola makan Anda untuk mendukung kesehatan mental yang optimal.', 0, '2024-06-20 13:31:57', '2024-06-20 13:31:57'),
	(5, 2, 'Pantangan Makanan untuk Mereka yang Sering Depresi: Menuju Kesehatan Mental Lebih Baik', '00d863a15d7cfd97c7b521ab93d36d7b.png', 'http://localhost:3001/images/00d863a15d7cfd97c7b521ab93d36d7b.png', 'Kesehatan mental adalah aspek penting dalam kehidupan kita yang sering kali terabaikan. Depresi adalah salah satu masalah kesehatan mental yang umum dan dapat mempengaruhi berbagai aspek kehidupan sehari-hari. Selain terapi dan dukungan sosial, diet juga memainkan peran penting dalam manajemen depresi. Beberapa jenis makanan dapat memperburuk gejala depresi atau menghambat upaya pemulihan, sementara yang lain dapat membantu memperbaiki keseimbangan kimia otak dan mood.\n\nMakanan yang Harus Dihindari:\nGula Berlebihan: Konsumsi gula yang tinggi dapat menyebabkan lonjakan dan penurunan kadar gula darah yang drastis, mempengaruhi mood secara negatif.\nMakanan Cepat Saji: Kandungan lemak jenuh dan kalori tinggi dalam makanan cepat saji dapat mempengaruhi keseimbangan kimia otak dan menyebabkan perasaan lelah dan lesu.\nAlkohol: Alkohol dapat memperburuk gejala depresi dan mengganggu pola tidur yang sehat.\nKafein: Minuman yang mengandung kafein seperti kopi dan minuman berenergi dapat mempengaruhi tidur dan meningkatkan kecemasan.\nMakanan Tinggi Lemak Trans: Lemak trans dapat meningkatkan peradangan dalam tubuh, yang dapat mempengaruhi keseimbangan kimia otak.\nMakanan yang Dianjurkan untuk Kesehatan Mental yang Lebih Baik:\nSayuran Hijau dan Buah-buahan: Kaya akan antioksidan dan nutrisi, seperti vitamin C dan beta-karoten, yang dapat membantu mengurangi peradangan dan meningkatkan mood.\nMakanan Kaya Omega-3: Salmon, sarden, dan biji-bijian seperti chia dan kenari mengandung asam lemak omega-3, yang telah terbukti mengurangi gejala depresi.\nSerat: Makanan tinggi serat seperti gandum utuh, kacang-kacangan, dan biji-bijian membantu menjaga stabilitas gula darah dan mood.\nProtein Seimbang: Protein dari sumber seperti daging tanpa lemak, telur, dan produk susu rendah lemak dapat membantu menjaga stabilitas energi dan mood.\nKacang-kacangan dan Biji-bijian: Kaya akan magnesium, yang dapat membantu mengatur mood dan mengurangi gejala kecemasan.\nSelain memperhatikan makanan yang dikonsumsi, penting untuk menjaga pola makan yang seimbang dan teratur. Hindari makan berlebihan atau tidak teratur, karena hal ini dapat mempengaruhi energi dan mood secara keseluruhan. Mengatur pola makan dengan bijak dapat membantu dalam manajemen gejala depresi dan meningkatkan kesehatan mental secara keseluruhan.\n\nKesimpulan:\nMemilih makanan dengan bijak bukan hanya berdampak pada kesehatan fisik kita, tetapi juga kesehatan mental. Dengan menghindari makanan yang tidak sehat dan mengintegrasikan makanan yang bermanfaat, kita dapat mendukung proses pemulihan dari depresi dan mencapai kesehatan mental yang lebih baik secara keseluruhan. Jadi, mulailah dari sekarang dengan mengatur pola makan Anda untuk mendukung kesehatan mental yang optimal.', 0, '2024-06-20 13:32:00', '2024-06-20 13:32:00'),
	(6, 1, 'tst', 'a6a0d4f610d8febe82ac22c737204244.png', 'http://localhost:3001/images/a6a0d4f610d8febe82ac22c737204244.png', 'testsetstest', 0, '2024-06-20 19:33:23', '2024-06-20 19:33:23'),
	(7, 1, 'te', '8deaaa6538333240766b98a14a5202f9.png', 'http://localhost:3001/images/8deaaa6538333240766b98a14a5202f9.png', 'te', 0, '2024-06-20 19:33:53', '2024-06-20 19:33:53'),
	(8, 1, 'te', '8deaaa6538333240766b98a14a5202f9.png', 'http://localhost:3001/images/8deaaa6538333240766b98a14a5202f9.png', 'te', 0, '2024-06-20 19:34:08', '2024-06-20 19:34:08'),
	(9, 1, 'tet', 'a6a0d4f610d8febe82ac22c737204244.png', 'http://localhost:3001/images/a6a0d4f610d8febe82ac22c737204244.png', 'testes', 0, '2024-06-21 00:36:09', '2024-06-21 00:36:09'),
	(10, 1, 'test', '781d6e4a0e1ebcd69746504d2a6b6477.jpg', 'http://localhost:3001/images/781d6e4a0e1ebcd69746504d2a6b6477.jpg', 'tseste', 0, NULL, NULL),
	(11, 1, 'test2', '781d6e4a0e1ebcd69746504d2a6b6477.jpg', 'http://localhost:3001/images/781d6e4a0e1ebcd69746504d2a6b6477.jpg', 'test2', 0, NULL, NULL);

-- Dumping structure for table doktor.depression
CREATE TABLE IF NOT EXISTS `depression` (
  `id` int NOT NULL AUTO_INCREMENT,
  `video_url` varchar(255) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text,
  `signs` text,
  `causes` text,
  `impact` text,
  `treatment` text,
  `support` text,
  `conclusion` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table doktor.depression: ~2 rows (approximately)
DELETE FROM `depression`;
INSERT INTO `depression` (`id`, `video_url`, `title`, `description`, `signs`, `causes`, `impact`, `treatment`, `support`, `conclusion`, `created_at`, `updated_at`, `createdAt`, `updatedAt`) VALUES
	(1, 'https://youtu.be/wr2IqS8bsS4', 'Memahami Depresi: Mengenal Lebih Dalam', 'Depresi adalah gangguan kesehatan mental yang serius yang mempengaruhi bagaimana seseorang berpikir, merasa, dan bertindak. Berbeda dengan kesedihan atau perasaan sedih sesaat, depresi bersifat kronis dan dapat memengaruhi kehidupan sehari-hari secara signifikan. Menurut Organisasi Kesehatan Dunia (WHO), lebih dari 264 juta orang di seluruh dunia menderita depresi.', 'Gejala depresi dapat bervariasi, tetapi umumnya mencakup perasaan sedih yang persisten, kehilangan minat atau kesenangan dalam aktivitas yang biasanya dinikmati, energi yang rendah, perubahan pola tidur atau nafsu makan, perasaan tidak berharga atau bersalah berlebihan, kesulitan berkonsentrasi, atau bahkan pemikiran tentang kematian atau bunuh diri.', 'Depresi bisa disebabkan oleh kombinasi faktor genetik, perubahan kimia otak, trauma psikologis, stres kronis, atau kondisi medis tertentu. Riwayat keluarga dengan gangguan depresi juga dapat meningkatkan risiko seseorang mengalami depresi.', 'Depresi dapat mempengaruhi semua aspek kehidupan seseorang, termasuk kualitas hubungan sosial, kinerja di tempat kerja atau sekolah, dan kesehatan fisik secara keseluruhan. Orang dengan depresi sering kali mengalami kesulitan dalam menjalani aktivitas sehari-hari dan mempertahankan hubungan yang sehat.', 'Pengobatan depresi dapat meliputi terapi psikologis seperti terapi kognitif perilaku (CBT), penggunaan obat-obatan antidepressant, atau kombinasi keduanya. Selain itu, perubahan gaya hidup seperti olahraga teratur, tidur yang cukup, manajemen stres, dan dukungan sosial juga dapat membantu dalam manajemen depresi.', 'Membangun kesadaran tentang depresi dan menghilangkan stigma adalah langkah penting untuk memungkinkan individu mencari bantuan secara terbuka dan mendapatkan perawatan yang diperlukan. Dukungan dari keluarga, teman, dan masyarakat juga berperan penting dalam pemulihan individu yang mengalami depresi.', 'Depresi adalah gangguan kesehatan mental yang serius dan mempengaruhi jutaan orang di seluruh dunia. Dengan pemahaman yang lebih dalam tentang gejala, penyebab, dan pengobatan depresi, diharapkan dapat meningkatkan kesadaran dan penerimaan terhadap individu yang terkena depresi, serta memberikan dukungan yang tepat untuk pemulihan mereka.', '2024-06-20 13:28:45', '2024-06-20 13:28:45', '2024-06-20 13:28:45', '2024-06-20 13:28:45'),
	(2, 'https://youtu.be/zLGbzASsNM0', 'Memahami Depresi: Mengenal Lebih Dalam', 'Depresi adalah gangguan kesehatan mental yang serius yang mempengaruhi bagaimana seseorang berpikir, merasa, dan bertindak. Berbeda dengan kesedihan atau perasaan sedih sesaat, depresi bersifat kronis dan dapat memengaruhi kehidupan sehari-hari secara signifikan. Menurut Organisasi Kesehatan Dunia (WHO), lebih dari 264 juta orang di seluruh dunia menderita depresi.', 'Gejala depresi dapat bervariasi, tetapi umumnya mencakup perasaan sedih yang persisten, kehilangan minat atau kesenangan dalam aktivitas yang biasanya dinikmati, energi yang rendah, perubahan pola tidur atau nafsu makan, perasaan tidak berharga atau bersalah berlebihan, kesulitan berkonsentrasi, atau bahkan pemikiran tentang kematian atau bunuh diri.', 'Depresi bisa disebabkan oleh kombinasi faktor genetik, perubahan kimia otak, trauma psikologis, stres kronis, atau kondisi medis tertentu. Riwayat keluarga dengan gangguan depresi juga dapat meningkatkan risiko seseorang mengalami depresi.', 'Depresi dapat mempengaruhi semua aspek kehidupan seseorang, termasuk kualitas hubungan sosial, kinerja di tempat kerja atau sekolah, dan kesehatan fisik secara keseluruhan. Orang dengan depresi sering kali mengalami kesulitan dalam menjalani aktivitas sehari-hari dan mempertahankan hubungan yang sehat.', 'Pengobatan depresi dapat meliputi terapi psikologis seperti terapi kognitif perilaku (CBT), penggunaan obat-obatan antidepressant, atau kombinasi keduanya. Selain itu, perubahan gaya hidup seperti olahraga teratur, tidur yang cukup, manajemen stres, dan dukungan sosial juga dapat membantu dalam manajemen depresi.', 'Membangun kesadaran tentang depresi dan menghilangkan stigma adalah langkah penting untuk memungkinkan individu mencari bantuan secara terbuka dan mendapatkan perawatan yang diperlukan. Dukungan dari keluarga, teman, dan masyarakat juga berperan penting dalam pemulihan individu yang mengalami depresi.', 'Depresi adalah gangguan kesehatan mental yang serius dan mempengaruhi jutaan orang di seluruh dunia. Dengan pemahaman yang lebih dalam tentang gejala, penyebab, dan pengobatan depresi, diharapkan dapat meningkatkan kesadaran dan penerimaan terhadap individu yang terkena depresi, serta memberikan dukungan yang tepat untuk pemulihan mereka.', '2024-06-20 13:28:54', '2024-06-20 13:28:54', '2024-06-20 13:28:54', '2024-06-20 13:28:54'),
	(3, 'https://youtu.be/dVqZhLwWGBA', 'Memahami Depresi: Mengenal Lebih Dalam', 'Depresi adalah gangguan kesehatan mental yang serius yang mempengaruhi bagaimana seseorang berpikir, merasa, dan bertindak. Berbeda dengan kesedihan atau perasaan sedih sesaat, depresi bersifat kronis dan dapat memengaruhi kehidupan sehari-hari secara signifikan. Menurut Organisasi Kesehatan Dunia (WHO), lebih dari 264 juta orang di seluruh dunia menderita depresi.', 'Gejala depresi dapat bervariasi, tetapi umumnya mencakup perasaan sedih yang persisten, kehilangan minat atau kesenangan dalam aktivitas yang biasanya dinikmati, energi yang rendah, perubahan pola tidur atau nafsu makan, perasaan tidak berharga atau bersalah berlebihan, kesulitan berkonsentrasi, atau bahkan pemikiran tentang kematian atau bunuh diri.', 'Depresi bisa disebabkan oleh kombinasi faktor genetik, perubahan kimia otak, trauma psikologis, stres kronis, atau kondisi medis tertentu. Riwayat keluarga dengan gangguan depresi juga dapat meningkatkan risiko seseorang mengalami depresi.', 'Depresi dapat mempengaruhi semua aspek kehidupan seseorang, termasuk kualitas hubungan sosial, kinerja di tempat kerja atau sekolah, dan kesehatan fisik secara keseluruhan. Orang dengan depresi sering kali mengalami kesulitan dalam menjalani aktivitas sehari-hari dan mempertahankan hubungan yang sehat.', 'Pengobatan depresi dapat meliputi terapi psikologis seperti terapi kognitif perilaku (CBT), penggunaan obat-obatan antidepressant, atau kombinasi keduanya. Selain itu, perubahan gaya hidup seperti olahraga teratur, tidur yang cukup, manajemen stres, dan dukungan sosial juga dapat membantu dalam manajemen depresi.', 'Membangun kesadaran tentang depresi dan menghilangkan stigma adalah langkah penting untuk memungkinkan individu mencari bantuan secara terbuka dan mendapatkan perawatan yang diperlukan. Dukungan dari keluarga, teman, dan masyarakat juga berperan penting dalam pemulihan individu yang mengalami depresi.', 'Depresi adalah gangguan kesehatan mental yang serius dan mempengaruhi jutaan orang di seluruh dunia. Dengan pemahaman yang lebih dalam tentang gejala, penyebab, dan pengobatan depresi, diharapkan dapat meningkatkan kesadaran dan penerimaan terhadap individu yang terkena depresi, serta memberikan dukungan yang tepat untuk pemulihan mereka.', '2024-06-20 13:29:03', '2024-06-20 13:29:03', '2024-06-20 13:29:03', '2024-06-20 13:29:03');

-- Dumping structure for table doktor.doctor
CREATE TABLE IF NOT EXISTS `doctor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `online` tinyint(1) DEFAULT NULL,
  `offline` tinyint(1) DEFAULT NULL,
  `likes_count` int DEFAULT NULL,
  `experience` text,
  `about_me` text,
  `professional_experience` text,
  `focus_areas` text,
  `certificate_title` text,
  `certificate_image` text,
  `certificate_image_url` text,
  `reviews` text,
  `refresh_token` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `birth_place` varchar(100) DEFAULT NULL,
  `birth_date` datetime DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table doktor.doctor: ~6 rows (approximately)
DELETE FROM `doctor`;
INSERT INTO `doctor` (`id`, `email`, `password`, `name`, `image`, `url`, `price`, `address`, `online`, `offline`, `likes_count`, `experience`, `about_me`, `professional_experience`, `focus_areas`, `certificate_title`, `certificate_image`, `certificate_image_url`, `reviews`, `refresh_token`, `createdAt`, `updatedAt`, `gender`, `birth_place`, `birth_date`, `phone_number`) VALUES
	(1, 'gracia@gmail.com', '$2b$10$hO4IgfngMSt9OG3Ou8fbZ.u06NyO9OX/Jj0Yz5nYBFM3/OkYQrpLW', 'Gracia Stephanie S.Psi., M.Psi ', '6b84fc0848e087df73ce0ac73ef77a4d.png', 'http://localhost:3001/images/6b84fc0848e087df73ce0ac73ef77a4d.png', 100.00, 'Simpang Kuda, Medan Tembung', 1, 1, 70, '6', 'Gracia Stephanie, S.Psi., M.Psi adalah seorang psikolog berpengalaman dengan lebih dari sepuluh tahun melayani pasien di berbagai setting klinis dan non-klinis. Mengkhususkan diri dalam terapi kognitif-behavioral, ia membantu klien mengatasi berbagai tantangan mental dan emosional, termasuk depresi, kecemasan, dan stres.\n\nPengalaman bertahun-tahun dalam bidang psikologi klinis\nSpesialis dalam terapi kognitif-behavioral (CBT)\nTerapi untuk anak-anak, remaja, dan dewasa\nKonsultasi pernikahan dan keluarga\nPelatihan manajemen stres dan pengembangan diri\nUntuk konsultasi lebih lanjut, Anda dapat menghubungi saya melalui:\n\nEmail: gracia.stephanie@example.com\n\nTelepon: +62 123 4567 890', 'Gracia memiliki pengalaman kerja di berbagai rumah sakit dan klinik terkemuka. Dia telah bekerja di:\n\nRSIA Mitra Medika Premiere, Medan Tembung\nKlinik Sehat Sentosa, Jakarta\nRS Hermina, Bekasi', 'Kesehatan Mental\nMembantu pasien mengatasi masalah kesehatan mental seperti depresi, kecemasan, dan stres.\n\nPsikologi Anak\nSpesialis dalam terapi untuk anak-anak dan remaja, termasuk masalah perkembangan dan perilaku.\n\nKonseling Keluarga\nMemberikan konseling dan dukungan untuk keluarga dalam mengatasi konflik dan meningkatkan komunikasi.', 'Sertifikat Kompetensi Psikolog Klinis\nSertifikat Pelatihan Terapi Kognitif-Behavioral\nSertifikat Pelatihan Konseling Pernikahan dan Keluarga', NULL, NULL, 'Kutipan ini hanya mewakili sedikit dari sekian banyak ulasan positif yang kami terima untuk Gracia Stephanie, S.Psi,. M.Psi . Kami tidak membayar siapa pun untuk memberikan ulasannya dan semuanya dibuat secara sukarela. Pengalaman beberapa orang menerima terapi dengan BetterHelp mungkin berbeda.', NULL, '2024-06-20 21:47:04', '2024-06-20 21:47:04', NULL, NULL, NULL, NULL),
	(2, 'gracia2@gmail.com', '$2b$10$gjGmColEbZwxkXaSLYArcuNKoaHSyw2YKuZaDfYZT.ClSEiwUF2Ta', 'Gracia 2 Stephanie S.Psi., M.Psi ', '6b84fc0848e087df73ce0ac73ef77a4d.png', 'http://localhost:3001/images/6b84fc0848e087df73ce0ac73ef77a4d.png', 100.00, 'Simpang Kuda, Medan Tembung', 1, 1, 70, '6', 'Gracia Stephanie, S.Psi., M.Psi adalah seorang psikolog berpengalaman dengan lebih dari sepuluh tahun melayani pasien di berbagai setting klinis dan non-klinis. Mengkhususkan diri dalam terapi kognitif-behavioral, ia membantu klien mengatasi berbagai tantangan mental dan emosional, termasuk depresi, kecemasan, dan stres.\n\nPengalaman bertahun-tahun dalam bidang psikologi klinis\nSpesialis dalam terapi kognitif-behavioral (CBT)\nTerapi untuk anak-anak, remaja, dan dewasa\nKonsultasi pernikahan dan keluarga\nPelatihan manajemen stres dan pengembangan diri\nUntuk konsultasi lebih lanjut, Anda dapat menghubungi saya melalui:\n\nEmail: gracia.stephanie@example.com\n\nTelepon: +62 123 4567 890', 'Gracia memiliki pengalaman kerja di berbagai rumah sakit dan klinik terkemuka. Dia telah bekerja di:\n\nRSIA Mitra Medika Premiere, Medan Tembung\nKlinik Sehat Sentosa, Jakarta\nRS Hermina, Bekasi', 'Kesehatan Mental\nMembantu pasien mengatasi masalah kesehatan mental seperti depresi, kecemasan, dan stres.\n\nPsikologi Anak\nSpesialis dalam terapi untuk anak-anak dan remaja, termasuk masalah perkembangan dan perilaku.\n\nKonseling Keluarga\nMemberikan konseling dan dukungan untuk keluarga dalam mengatasi konflik dan meningkatkan komunikasi.', 'Sertifikat Kompetensi Psikolog Klinis\nSertifikat Pelatihan Terapi Kognitif-Behavioral\nSertifikat Pelatihan Konseling Pernikahan dan Keluarga', NULL, NULL, 'Kutipan ini hanya mewakili sedikit dari sekian banyak ulasan positif yang kami terima untuk Gracia Stephanie, S.Psi,. M.Psi . Kami tidak membayar siapa pun untuk memberikan ulasannya dan semuanya dibuat secara sukarela. Pengalaman beberapa orang menerima terapi dengan BetterHelp mungkin berbeda.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N0b3JJZCI6MiwibmFtZSI6IkdyYWNpYSAyIFN0ZXBoYW5pZSBTLlBzaS4sIE0uUHNpICIsImVtYWlsIjoiZ3JhY2lhMkBnbWFpbC5jb20iLCJpYXQiOjE3MTg5ODA3NTksImV4cCI6MTcxOTA2NzE1OX0.nrWpgB_3OaGxEwT7vFOKEuOIpqzsAhOu2udrXtpY8Jg', '2024-06-20 21:47:11', '2024-06-21 00:32:09', NULL, NULL, NULL, NULL),
	(3, 'gracia3@gmail.com', '$2b$10$rmGn8I/awm5lVaxEncgTjeLvC5/gkCE.vXVveSeAB1s0VXlf8j6nq', 'Gracia 3 Stephanie S.Psi., M.Psi ', '8f6825a67f29b28e35f8f5c0a0fa9f9a.png', 'http://localhost:3001/images/8f6825a67f29b28e35f8f5c0a0fa9f9a.png', 100.00, 'Simpang Kuda, Medan Tembung', 1, 1, 70, '6', 'Gracia Stephanie, S.Psi., M.Psi adalah seorang psikolog berpengalaman dengan lebih dari sepuluh tahun melayani pasien di berbagai setting klinis dan non-klinis. Mengkhususkan diri dalam terapi kognitif-behavioral, ia membantu klien mengatasi berbagai tantangan mental dan emosional, termasuk depresi, kecemasan, dan stres.\n\nPengalaman bertahun-tahun dalam bidang psikologi klinis\nSpesialis dalam terapi kognitif-behavioral (CBT)\nTerapi untuk anak-anak, remaja, dan dewasa\nKonsultasi pernikahan dan keluarga\nPelatihan manajemen stres dan pengembangan diri\nUntuk konsultasi lebih lanjut, Anda dapat menghubungi saya melalui:\n\nEmail: gracia.stephanie@example.com\n\nTelepon: +62 123 4567 890', 'Gracia memiliki pengalaman kerja di berbagai rumah sakit dan klinik terkemuka. Dia telah bekerja di:\n\nRSIA Mitra Medika Premiere, Medan Tembung\nKlinik Sehat Sentosa, Jakarta\nRS Hermina, Bekasi', 'Kesehatan Mental\nMembantu pasien mengatasi masalah kesehatan mental seperti depresi, kecemasan, dan stres.\n\nPsikologi Anak\nSpesialis dalam terapi untuk anak-anak dan remaja, termasuk masalah perkembangan dan perilaku.\n\nKonseling Keluarga\nMemberikan konseling dan dukungan untuk keluarga dalam mengatasi konflik dan meningkatkan komunikasi.', 'Sertifikat Kompetensi Psikolog Klinis\nSertifikat Pelatihan Terapi Kognitif-Behavioral\nSertifikat Pelatihan Konseling Pernikahan dan Keluarga', NULL, NULL, 'Kutipan ini hanya mewakili sedikit dari sekian banyak ulasan positif yang kami terima untuk Gracia Stephanie, S.Psi,. M.Psi . Kami tidak membayar siapa pun untuk memberikan ulasannya dan semuanya dibuat secara sukarela. Pengalaman beberapa orang menerima terapi dengan BetterHelp mungkin berbeda.', NULL, '2024-06-20 21:47:30', '2024-06-20 21:47:30', NULL, NULL, NULL, NULL),
	(4, 'gracia4@gmail.com', '$2b$10$1I8A2vNIUg5t87.yIA05V.PDf4zH2fO13lWELNNwMo2PxvGAoza1S', 'Gracia 4 Stephanie S.Psi., M.Psi ', '520d6043024d6997d68ed27ca9ae6fe8.png', 'http://localhost:3001/images/520d6043024d6997d68ed27ca9ae6fe8.png', 100.00, 'Simpang Kuda, Medan Tembung', 1, 1, 70, '6', 'Gracia Stephanie, S.Psi., M.Psi adalah seorang psikolog berpengalaman dengan lebih dari sepuluh tahun melayani pasien di berbagai setting klinis dan non-klinis. Mengkhususkan diri dalam terapi kognitif-behavioral, ia membantu klien mengatasi berbagai tantangan mental dan emosional, termasuk depresi, kecemasan, dan stres.\n\nPengalaman bertahun-tahun dalam bidang psikologi klinis\nSpesialis dalam terapi kognitif-behavioral (CBT)\nTerapi untuk anak-anak, remaja, dan dewasa\nKonsultasi pernikahan dan keluarga\nPelatihan manajemen stres dan pengembangan diri\nUntuk konsultasi lebih lanjut, Anda dapat menghubungi saya melalui:\n\nEmail: gracia.stephanie@example.com\n\nTelepon: +62 123 4567 890', 'Gracia memiliki pengalaman kerja di berbagai rumah sakit dan klinik terkemuka. Dia telah bekerja di:\n\nRSIA Mitra Medika Premiere, Medan Tembung\nKlinik Sehat Sentosa, Jakarta\nRS Hermina, Bekasi', 'Kesehatan Mental\nMembantu pasien mengatasi masalah kesehatan mental seperti depresi, kecemasan, dan stres.\n\nPsikologi Anak\nSpesialis dalam terapi untuk anak-anak dan remaja, termasuk masalah perkembangan dan perilaku.\n\nKonseling Keluarga\nMemberikan konseling dan dukungan untuk keluarga dalam mengatasi konflik dan meningkatkan komunikasi.', 'Sertifikat Kompetensi Psikolog Klinis\nSertifikat Pelatihan Terapi Kognitif-Behavioral\nSertifikat Pelatihan Konseling Pernikahan dan Keluarga', NULL, NULL, 'Kutipan ini hanya mewakili sedikit dari sekian banyak ulasan positif yang kami terima untuk Gracia Stephanie, S.Psi,. M.Psi . Kami tidak membayar siapa pun untuk memberikan ulasannya dan semuanya dibuat secara sukarela. Pengalaman beberapa orang menerima terapi dengan BetterHelp mungkin berbeda.', NULL, '2024-06-20 21:47:48', '2024-06-20 21:47:48', NULL, NULL, NULL, NULL),
	(5, 'tes@gmail.com', '$2b$10$lopvV1MkKC8ryr5kQsacIOfhlXgBKxhwvjlxdLxNbhPYtUE0czV.e', 'TEst', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-21 13:06:36', '2024-06-21 13:06:36', 'Laki-Laki', 'test', '2024-12-12 00:00:00', '123123123'),
	(6, 'fadelanas08072001@gmail.com', '$2b$10$8Up/zBUZ9oDGOrGRAgzdG./UUsrWxMVpJn1mMWzr6Fxlg3zUnotQC', 'test terapis', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-21 13:08:02', '2024-06-21 13:08:02', 'male', 'test', '2024-06-21 00:00:00', '1231123123123'),
	(7, 'testtests2@gmail.com', '$2b$10$6nCDlwUsGbWRapGELFWVOebjHD2rh.EduiDCO7XfXhmQi8lk8Mqgq', 'test terapis2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N0b3JJZCI6NywibmFtZSI6InRlc3QgdGVyYXBpczIiLCJlbWFpbCI6InRlc3R0ZXN0czJAZ21haWwuY29tIiwiaWF0IjoxNzE4OTgwNzI4LCJleHAiOjE3MTkwNjcxMjh9.4-L13XcatqiaojO7VWlsAzo1kuybDw36GDZtS9fh_XI', NULL, NULL, 'male', 'test', '2024-06-21 00:00:00', '1231123123123');

-- Dumping structure for table doktor.jadwal
CREATE TABLE IF NOT EXISTS `jadwal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tanggal` datetime DEFAULT NULL,
  `sesi` varchar(100) DEFAULT NULL,
  `waktu` varchar(100) DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `doctor_id` (`doctor_id`),
  CONSTRAINT `jadwal_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table doktor.jadwal: ~0 rows (approximately)
DELETE FROM `jadwal`;
INSERT INTO `jadwal` (`id`, `tanggal`, `sesi`, `waktu`, `doctor_id`, `createdAt`, `updatedAt`) VALUES
	(1, '2024-10-10 00:00:00', 'siang', '09.00', 2, '2024-06-20 20:36:02', '2024-06-20 20:36:02'),
	(2, '2024-10-10 00:00:00', 'siang', '10.00', 2, '2024-06-20 20:36:11', '2024-06-20 20:36:11'),
	(3, '2024-10-10 00:00:00', 'siang', '10.00', 1, '2024-06-20 20:37:27', '2024-06-20 20:37:27'),
	(4, '2024-06-21 06:53:07', 'pagi', '06:54', NULL, '2024-06-20 23:48:13', '2024-06-20 23:48:13'),
	(5, '2024-06-21 06:53:08', 'pagi', '06:54', NULL, '2024-06-20 23:48:41', '2024-06-20 23:48:41'),
	(6, '2024-06-20 00:00:00', 'pagi\r\n', '06:54', 2, '2024-06-20 23:51:10', '2024-06-20 23:51:10'),
	(7, '2024-06-20 00:00:00', 'siang', '06:54', 2, '2024-06-20 23:52:44', '2024-06-20 23:52:44');

-- Dumping structure for table doktor.review
CREATE TABLE IF NOT EXISTS `review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  `rating` tinyint DEFAULT NULL,
  `review_text` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `doctor_id` (`doctor_id`),
  CONSTRAINT `review_ibfk_115` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `review_ibfk_116` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table doktor.review: ~2 rows (approximately)
DELETE FROM `review`;
INSERT INTO `review` (`id`, `user_id`, `doctor_id`, `rating`, `review_text`, `created_at`, `updated_at`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 2, 3, 'Bagus Cukup', '2024-06-20 14:37:57', '2024-06-20 14:37:57', '2024-06-20 14:37:57', '2024-06-20 14:37:57'),
	(2, 1, 1, 4, 'Bagus', '2024-06-20 14:38:06', '2024-06-20 14:38:06', '2024-06-20 14:38:06', '2024-06-20 14:38:06');

-- Dumping structure for table doktor.reviews
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  `rating` tinyint DEFAULT NULL,
  `review_text` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `doctor_id` (`doctor_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table doktor.reviews: ~0 rows (approximately)
DELETE FROM `reviews`;

-- Dumping structure for table doktor.saved_post
CREATE TABLE IF NOT EXISTS `saved_post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `community_data_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `community_data_id` (`community_data_id`),
  CONSTRAINT `saved_post_ibfk_117` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `saved_post_ibfk_118` FOREIGN KEY (`community_data_id`) REFERENCES `community_data` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table doktor.saved_post: ~6 rows (approximately)
DELETE FROM `saved_post`;
INSERT INTO `saved_post` (`id`, `user_id`, `community_data_id`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 2, '2024-06-20 18:56:52', '2024-06-20 18:56:52'),
	(2, 4, 8, '2024-06-21 00:36:17', '2024-06-21 00:36:17'),
	(3, 4, 9, '2024-06-21 00:36:19', '2024-06-21 00:36:19'),
	(4, 4, 4, '2024-06-21 00:36:22', '2024-06-21 00:36:22'),
	(5, 4, 6, '2024-06-21 00:36:35', '2024-06-21 00:36:35'),
	(6, 4, 2, NULL, NULL);

-- Dumping structure for table doktor.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `birth_place` varchar(100) DEFAULT NULL,
  `birth_date` datetime DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `community_id` int DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `refresh_token` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username_2` (`username`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `username_3` (`username`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `username_4` (`username`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `username_5` (`username`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `username_6` (`username`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `username_7` (`username`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `username_8` (`username`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `username_9` (`username`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `username_10` (`username`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `username_11` (`username`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `username_12` (`username`),
  UNIQUE KEY `email_12` (`email`),
  UNIQUE KEY `username_13` (`username`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `username_14` (`username`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `username_15` (`username`),
  UNIQUE KEY `email_15` (`email`),
  UNIQUE KEY `username_16` (`username`),
  UNIQUE KEY `email_16` (`email`),
  UNIQUE KEY `username_17` (`username`),
  UNIQUE KEY `email_17` (`email`),
  UNIQUE KEY `username_18` (`username`),
  UNIQUE KEY `email_18` (`email`),
  UNIQUE KEY `username_19` (`username`),
  UNIQUE KEY `email_19` (`email`),
  UNIQUE KEY `username_20` (`username`),
  UNIQUE KEY `email_20` (`email`),
  UNIQUE KEY `username_21` (`username`),
  UNIQUE KEY `email_21` (`email`),
  UNIQUE KEY `username_22` (`username`),
  UNIQUE KEY `email_22` (`email`),
  UNIQUE KEY `username_23` (`username`),
  UNIQUE KEY `email_23` (`email`),
  UNIQUE KEY `username_24` (`username`),
  UNIQUE KEY `email_24` (`email`),
  UNIQUE KEY `username_25` (`username`),
  UNIQUE KEY `email_25` (`email`),
  UNIQUE KEY `username_26` (`username`),
  UNIQUE KEY `email_26` (`email`),
  UNIQUE KEY `username_27` (`username`),
  UNIQUE KEY `email_27` (`email`),
  UNIQUE KEY `username_28` (`username`),
  UNIQUE KEY `email_28` (`email`),
  UNIQUE KEY `username_29` (`username`),
  UNIQUE KEY `email_29` (`email`),
  UNIQUE KEY `username_30` (`username`),
  UNIQUE KEY `email_30` (`email`),
  UNIQUE KEY `username_31` (`username`),
  KEY `community_id` (`community_id`),
  KEY `doctor_id` (`doctor_id`),
  CONSTRAINT `users_ibfk_59` FOREIGN KEY (`community_id`) REFERENCES `community` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_60` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table doktor.users: ~2 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `username`, `full_name`, `gender`, `birth_place`, `birth_date`, `email`, `phone_number`, `role`, `password`, `community_id`, `doctor_id`, `created_at`, `updated_at`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
	(1, NULL, 'test2', 'Laki-Laki', 'Testing', '2003-02-02 00:00:00', 'test2@gmail.com', '089665881651', 'user', '$2b$10$fJUAcZejhgI34LbztWgpcuxPwVR3sw/mMK6K4QkaVIjr1VqZf9ufC', NULL, NULL, '2024-06-20 15:17:06', '2024-06-20 15:17:06', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImZ1bGxfbmFtZSI6InRlc3QyIiwiZ2VuZGVyIjoiTGFraS1MYWtpIiwiYmlydGhfcGxhY2UiOiJUZXN0aW5nIiwiYmlydGhfZGF0ZSI6IjIwMDMtMDItMDJUMDA6MDA6MDAuMDAwWiIsImVtYWlsIjoidGVzdDJAZ21haWwuY29tIiwicGhvbmVfbnVtYmVyIjoiMDg5NjY1ODgxNjUxIiwiaWF0IjoxNzE4ODk3NzAwLCJleHAiOjE3MTg5ODQxMDB9.nxCa_OcNcuMQpFX7q5QipHfvT7-fGTgteoEtAXlDGL8', '2024-06-20 15:17:06', '2024-06-20 15:35:00'),
	(2, NULL, 'Agils', 'Laki-Laki', 'Testing', '2003-02-02 00:00:00', 'gilsatria121@gmail.com', '089665881651', 'user', '$2b$10$.axxXBqBpUgX3/r1.DxngOniH5IBWpIuv0Dm1YeppvpQVsEBxGNzm', NULL, NULL, '2024-06-20 15:17:23', '2024-06-20 15:17:23', NULL, '2024-06-20 15:17:23', '2024-06-20 15:27:09'),
	(3, NULL, 'testest', 'male', 'test', '2024-06-21 00:00:00', 'Rahul.ratu662@gmail.com', '123123', 'user', '$2b$10$B9NpJMX8ywHhvFjX5SNTUeTUcULRhJ.mQ7GlNfVRDKZa4RtUTBgfS', NULL, NULL, '2024-06-20 21:25:45', '2024-06-20 21:25:45', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImZ1bGxfbmFtZSI6InRlc3Rlc3QiLCJnZW5kZXIiOiJtYWxlIiwiYmlydGhfcGxhY2UiOiJ0ZXN0IiwiYmlydGhfZGF0ZSI6IjIwMjQtMDYtMjFUMDA6MDA6MDAuMDAwWiIsImVtYWlsIjoiUmFodWwucmF0dTY2MkBnbWFpbC5jb20iLCJwaG9uZV9udW1iZXIiOiIxMjMxMjMiLCJpYXQiOjE3MTg5MjgxNzQsImV4cCI6MTcxOTAxNDU3NH0.gdJ3Ybo2FKrGiX6YFnTciJ9TKHJCLsm5l3ZthnW1W78', '2024-06-20 21:25:45', '2024-06-21 00:02:54'),
	(4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$2b$10$wTgSV0KNe/6HczfT4pH8R.KV3zH6lSwIbuOb0jcZ4Pfk/AblliV4i', NULL, NULL, '2024-06-21 00:30:19', '2024-06-21 00:30:19', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImZ1bGxfbmFtZSI6InRlc3RpbmcxIiwiZ2VuZGVyIjoibWFsZSIsImJpcnRoX3BsYWNlIjoidGVzdCIsImJpcnRoX2RhdGUiOiIyMDI0LTA2LTIxVDAwOjAwOjAwLjAwMFoiLCJlbWFpbCI6ImZhZGVsYW5hczA4MDcyMDAxQGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjEyMzExMjMxMjMxMjMiLCJpYXQiOjE3MTg5MzAwOTQsImV4cCI6MTcxOTAxNjQ5NH0.f-P955IQZLgsmEiKiJG86jv6mCSVsVVzY2Atfn2B_E4', '2024-06-21 00:30:19', '2024-06-21 00:34:54');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
