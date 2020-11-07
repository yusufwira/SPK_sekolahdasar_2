-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 05 Nov 2020 pada 01.45
-- Versi server: 10.3.16-MariaDB
-- Versi PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tugas_akhir_2`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `ekstrakurikuler`
--

CREATE TABLE `ekstrakurikuler` (
  `idekstrakurikuler` int(11) NOT NULL,
  `nama_eks` varchar(20) DEFAULT NULL,
  `keterangan` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `ekstrakurikuler`
--

INSERT INTO `ekstrakurikuler` (`idekstrakurikuler`, `nama_eks`, `keterangan`) VALUES
(1, 'Melukis', 'Tervalidasi'),
(2, 'Drum Band', 'Tervalidasi'),
(3, 'Tapak Suci', 'Tervalidasi'),
(4, 'Karate', 'Tervalidasi'),
(5, 'Taekwondo', 'Tervalidasi'),
(6, 'Paduan Suara', 'Tervalidasi'),
(7, 'Pramuka', 'Tervalidasi'),
(8, 'Robotika', 'Tervalidasi'),
(9, 'Tari', 'Tervalidasi'),
(10, 'Tataboga', 'Tervalidasi'),
(11, 'Mengaji', 'Tervalidasi'),
(12, 'Musik', 'Tervalidasi'),
(13, 'Sepak Bola', 'Tervalidasi'),
(14, 'Basket', 'Tervalidasi'),
(15, 'Softball', 'Tervalidasi'),
(16, 'Kerajinan Tangan', 'Tervalidasi'),
(17, 'Menjahit', 'Tervalidasi'),
(18, 'Nasyid', 'Tervalidasi'),
(19, 'Karawitan', 'Tervalidasi'),
(20, 'Fotografi / Sinemato', 'Tervalidasi'),
(21, 'Mading', 'Tervalidasi'),
(22, 'Paskibra', 'Tervalidasi'),
(23, 'Komputer', 'Tervalidasi'),
(24, 'Korahanian', 'Tervalidasi'),
(25, 'Bahasa', 'Tervalidasi'),
(26, 'Drama/Teather', 'Tervalidasi'),
(27, 'Multimedia', 'Tervalidasi'),
(28, 'Tenis', 'Tervalidasi'),
(29, 'Tenis Meja', 'Tervalidasi'),
(30, 'Catur', 'Tervalidasi'),
(31, 'Memanah', 'Tervalidasi'),
(32, 'Renang', 'Tervalidasi'),
(33, 'Futsal', 'Tervalidasi'),
(34, 'Kolintang', 'Tervalidasi'),
(35, 'Gamelang', 'Tervalidasi'),
(101, 'Tes', 'Tervalidasi'),
(102, 'Tes 2', 'Belum Tervalidasi');

-- --------------------------------------------------------

--
-- Struktur dari tabel `ekstrakurikuler_has_info_sekolah`
--

CREATE TABLE `ekstrakurikuler_has_info_sekolah` (
  `ekstrakurikuler_idekstrakurikuler` int(11) NOT NULL,
  `info_sekolah_idinfo_sekolah` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `ekstrakurikuler_has_info_sekolah`
--

INSERT INTO `ekstrakurikuler_has_info_sekolah` (`ekstrakurikuler_idekstrakurikuler`, `info_sekolah_idinfo_sekolah`) VALUES
(1, 20109251),
(1, 20531862),
(1, 20532815),
(1, 20533144),
(1, 20539077),
(1, 20541297),
(1, 20563931),
(1, 20572027),
(1, 20573303);

-- --------------------------------------------------------

--
-- Struktur dari tabel `foto_sekolah`
--

CREATE TABLE `foto_sekolah` (
  `idfoto_sekolah` int(11) NOT NULL,
  `nama_foto` varchar(20) DEFAULT NULL,
  `extention` varchar(5) DEFAULT NULL,
  `info_sekolah_idinfo_sekolah` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `foto_sekolah`
--

INSERT INTO `foto_sekolah` (`idfoto_sekolah`, `nama_foto`, `extention`, `info_sekolah_idinfo_sekolah`) VALUES
(1000, '1', 'jpg', 20531862),
(1001, '1', 'jpg', 20572027),
(1002, '1', 'jpg', 20573303),
(1003, '1', 'jpg', 20533144),
(1004, '1', 'jpg', 20532815),
(1005, '1', 'jpg', 20109251),
(1006, '1', 'jpg', 20541297),
(1007, '1', 'jpg', 20539077),
(1008, '1', 'jpg', 20563931);

-- --------------------------------------------------------

--
-- Struktur dari tabel `info_sekolah`
--

CREATE TABLE `info_sekolah` (
  `npsn` int(15) NOT NULL,
  `nama_sekolah` varchar(45) DEFAULT NULL,
  `alamat_sekolah` varchar(60) DEFAULT NULL,
  `notelp_sekolah` varchar(15) DEFAULT NULL,
  `kecamatan` varchar(15) DEFAULT NULL,
  `agama` varchar(10) NOT NULL,
  `nama_kepala_sekolah` varchar(30) NOT NULL,
  `jam_sekolah` varchar(15) DEFAULT NULL,
  `status_sekolah` varchar(25) DEFAULT NULL,
  `keterangan_status_sekolah` varchar(100) DEFAULT NULL,
  `users_id_users` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `info_sekolah`
--

INSERT INTO `info_sekolah` (`npsn`, `nama_sekolah`, `alamat_sekolah`, `notelp_sekolah`, `kecamatan`, `agama`, `nama_kepala_sekolah`, `jam_sekolah`, `status_sekolah`, `keterangan_status_sekolah`, `users_id_users`) VALUES
(20109251, 'SD JAC School', 'Jl. Puncak Permai Utara III No.9', '(031) 7324288', 'Tandes', 'All', 'Yuwanto Nawawi', '07.00-15.00', 'Tervalidasi', '', 105),
(20531862, 'SD Al Islam', 'Jl. Raya Tempurejo No.41', '0878-5548-0518', 'Mulyorejo', 'Islam', 'H. Ahmad Zaini Ilyas', '07.00-15.00', 'Tervalidasi', '', 100),
(20532815, 'SD VITA', ' Jl. Arief Rahman Hakim No. 189-191', ' (031) 594 7433', 'Keputih ', 'Kristen', 'Helenna Deborah', '07.30-14.30', 'Tervalidasi', '', 104),
(20533144, 'SD Katolik Kristus Raja', 'Jl. Wisma Permai Tengah No.1', '', 'Mulyorejo', 'Katolik', 'Antonius Joko Purnomo', '07.00-14.30', 'Tervalidasi', '', 103),
(20539077, 'SD LUQMAN AL HAKIM', 'Jl. Kejawan Putih Tambak VI No.1', '(031) 5928587', 'Keputih ', 'Islam', 'Nurut Thoyibah', '07.00-15.00', 'Tervalidasi', '', 107),
(20541297, 'SD MAWAR SHARON CHRISTIAN SCHOOL', 'Jl. Cempaka No.6-12', '(031) 5457522', 'Tegalsari', 'Kristen', 'Doddy Octniawan', '08.00-14.30', 'Tervalidasi', '', 106),
(20563931, 'SDS ANUGERAH PEKERTI', 'JL.DINOYO NO.127', '(031) 5660637', 'Keputran', 'All', 'Prasetya Catur Nugraha', '06.30-14.00', 'Tervalidasi', '', 108),
(20572027, 'SDIT PERMATA', 'Jl. Cacat Veteran No.41', '(031) 99161694', 'Pakal', 'All', 'Kaspul Yulianto', '07.00-14.00', 'Tervalidasi', '', 101),
(20573303, 'SD Al azhar 35', 'Jl. Florence J-4 No. 31 Komplek Pakuwon City', '(031) 5922205', 'Mulyorejo', 'Islam', 'Siti Khotimah', '07.00-15.30', 'Tervalidasi', '', 102);

-- --------------------------------------------------------

--
-- Struktur dari tabel `info_sekolah_has_kriteria_detail`
--

CREATE TABLE `info_sekolah_has_kriteria_detail` (
  `info_sekolah_idinfo_sekolah` int(10) NOT NULL,
  `kriteria_detail_iddetail_kriteria` int(11) NOT NULL,
  `nilai` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `info_sekolah_has_kriteria_detail`
--

INSERT INTO `info_sekolah_has_kriteria_detail` (`info_sekolah_idinfo_sekolah`, `kriteria_detail_iddetail_kriteria`, `nilai`) VALUES
(20109251, 6, '5'),
(20109251, 7, '2013'),
(20109251, 8, '28'),
(20109251, 9, '5'),
(20109251, 10, '475'),
(20109251, 11, '1'),
(20109251, 12, '3000'),
(20109251, 13, '500'),
(20109251, 14, '20'),
(20109251, 15, '20'),
(20109251, 16, '0'),
(20109251, 17, '0'),
(20109251, 18, '21500000'),
(20109251, 19, '5000000'),
(20109251, 20, '1700000'),
(20109251, 21, '1000000'),
(20109251, 22, '-7.2743332'),
(20109251, 23, '112.6808057'),
(20109251, 24, '1000'),
(20531862, 6, '5'),
(20531862, 7, '2013'),
(20531862, 8, '21'),
(20531862, 9, '4'),
(20531862, 10, '405'),
(20531862, 11, '0'),
(20531862, 12, '600'),
(20531862, 13, '600'),
(20531862, 14, '15'),
(20531862, 15, '3'),
(20531862, 16, '1'),
(20531862, 17, '2'),
(20531862, 18, '8500000'),
(20531862, 19, '120000'),
(20531862, 20, '50000'),
(20531862, 21, '670000'),
(20531862, 22, '-7.2558069'),
(20531862, 23, '112.7956792'),
(20531862, 24, '1000'),
(20532815, 6, '5'),
(20532815, 7, '2013'),
(20532815, 8, '30'),
(20532815, 9, '12'),
(20532815, 10, '438'),
(20532815, 11, '1'),
(20532815, 12, '1200'),
(20532815, 13, '209'),
(20532815, 14, '25'),
(20532815, 15, '25'),
(20532815, 16, '1'),
(20532815, 17, '1'),
(20532815, 18, '50000000'),
(20532815, 19, '10000000'),
(20532815, 20, '2500000'),
(20532815, 21, '1000000'),
(20532815, 22, '-7.2711068'),
(20532815, 23, '112.7781186'),
(20532815, 24, '1000'),
(20533144, 6, '5'),
(20533144, 7, '2013'),
(20533144, 8, '9'),
(20533144, 9, '2'),
(20533144, 10, '168'),
(20533144, 11, '0'),
(20533144, 12, '3000'),
(20533144, 13, '2600'),
(20533144, 14, '8'),
(20533144, 15, '0'),
(20533144, 16, '1'),
(20533144, 17, '1'),
(20533144, 18, '11400000'),
(20533144, 19, '7000000'),
(20533144, 20, '700000'),
(20533144, 21, '500000'),
(20533144, 22, '-7.2732762'),
(20533144, 23, '112.7852621'),
(20533144, 24, '1000'),
(20539077, 6, '5'),
(20539077, 7, '2013'),
(20539077, 8, '51'),
(20539077, 9, '10'),
(20539077, 10, '660'),
(20539077, 11, '0'),
(20539077, 12, '700'),
(20539077, 13, '300'),
(20539077, 14, '24'),
(20539077, 15, '24'),
(20539077, 16, '1'),
(20539077, 17, '1'),
(20539077, 18, '2622500'),
(20539077, 19, '0'),
(20539077, 20, '1250000'),
(20539077, 21, '0'),
(20539077, 22, '-7.2769977'),
(20539077, 23, '112.8015923'),
(20539077, 24, '1000'),
(20541297, 6, '3'),
(20541297, 7, '2013'),
(20541297, 8, '37'),
(20541297, 9, '0'),
(20541297, 10, '447'),
(20541297, 11, '1'),
(20541297, 12, '2000'),
(20541297, 13, '403'),
(20541297, 14, '25'),
(20541297, 15, '25'),
(20541297, 16, '1'),
(20541297, 17, '1'),
(20541297, 18, '42500000'),
(20541297, 19, '5000000'),
(20541297, 20, '1690000'),
(20541297, 21, '100000'),
(20541297, 22, '-7.2694038'),
(20541297, 23, '112.7383071'),
(20541297, 24, '1000'),
(20563931, 6, '5'),
(20563931, 7, '2013'),
(20563931, 8, '11'),
(20563931, 9, '0'),
(20563931, 10, '78'),
(20563931, 11, '0'),
(20563931, 12, '500'),
(20563931, 13, '1200'),
(20563931, 14, '6'),
(20563931, 15, '0'),
(20563931, 16, '1'),
(20563931, 17, '1'),
(20563931, 18, '1940000'),
(20563931, 19, '0'),
(20563931, 20, '1400000'),
(20563931, 21, '0'),
(20563931, 22, '-7.2866097'),
(20563931, 23, '112.7452576'),
(20563931, 24, '1000'),
(20572027, 6, '4'),
(20572027, 7, '2013'),
(20572027, 8, '11'),
(20572027, 9, '0'),
(20572027, 10, '262'),
(20572027, 11, '1'),
(20572027, 12, '400'),
(20572027, 13, '100'),
(20572027, 14, '11'),
(20572027, 15, '0'),
(20572027, 16, '1'),
(20572027, 17, '1'),
(20572027, 18, '10900000'),
(20572027, 19, '1000000'),
(20572027, 20, '700000'),
(20572027, 21, '700000'),
(20572027, 22, '-7.2433733'),
(20572027, 23, '112.6217509'),
(20572027, 24, '1000'),
(20573303, 6, '5'),
(20573303, 7, '2013'),
(20573303, 8, '22'),
(20573303, 9, '6'),
(20573303, 10, '386'),
(20573303, 11, '1'),
(20573303, 12, '950'),
(20573303, 13, '100'),
(20573303, 14, '17'),
(20573303, 15, '17'),
(20573303, 16, '1'),
(20573303, 17, '1'),
(20573303, 18, '32300000'),
(20573303, 19, '2000000'),
(20573303, 20, '1700000'),
(20573303, 21, '1500000'),
(20573303, 22, '-7.267805'),
(20573303, 23, '112.8011243'),
(20573303, 24, '1000');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kriteria`
--

CREATE TABLE `kriteria` (
  `idkriteria` int(11) NOT NULL,
  `nama_kriteria` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `kriteria`
--

INSERT INTO `kriteria` (`idkriteria`, `nama_kriteria`) VALUES
(1, 'Fasilitas'),
(2, 'Akademis'),
(3, 'Ekstrakurikuler'),
(4, 'Lokasi'),
(5, 'Biaya');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kriteria_bobot`
--

CREATE TABLE `kriteria_bobot` (
  `idKriteria_bobot` int(11) NOT NULL,
  `kriteria_1` int(11) NOT NULL,
  `kriteria_2` int(11) NOT NULL,
  `bobot` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `kriteria_bobot`
--

INSERT INTO `kriteria_bobot` (`idKriteria_bobot`, `kriteria_1`, `kriteria_2`, `bobot`) VALUES
(66, 2, 2, 1),
(67, 1, 1, 1),
(68, 3, 3, 1),
(69, 4, 4, 1),
(70, 5, 5, 1),
(71, 1, 2, 0.5),
(72, 1, 3, 3),
(73, 1, 4, 2),
(74, 1, 5, 0.5),
(75, 2, 3, 3),
(76, 2, 4, 2),
(77, 2, 5, 0.5),
(78, 3, 4, 0.3333333333333333),
(79, 3, 5, 0.25),
(80, 4, 5, 0.5);

-- --------------------------------------------------------

--
-- Struktur dari tabel `kriteria_detail`
--

CREATE TABLE `kriteria_detail` (
  `iddetail_kriteria` int(11) NOT NULL,
  `detail` varchar(45) DEFAULT NULL,
  `kriteria_idkriteria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `kriteria_detail`
--

INSERT INTO `kriteria_detail` (`iddetail_kriteria`, `detail`, `kriteria_idkriteria`) VALUES
(6, 'Akreditasi', 2),
(7, 'Tahun Kurikulum', 2),
(8, 'Jumlah Staff (Guru dan Non guru)', 2),
(9, 'Jumlah Guru Bersertifikasi', 2),
(10, 'Jumlah Lulusan', 2),
(11, 'Internet', 1),
(12, 'Luas Bangunan Sekolah (M2)', 1),
(13, 'Luas Tanah Terbuka (M2)', 1),
(14, 'Jumlah Kelas Keseluruhan', 1),
(15, 'Jumlah Kelas yang terdapat AC', 1),
(16, 'Jumlah Perpustakaan', 1),
(17, 'Jumlah Laboratorium', 1),
(18, 'Uang Gedung', 5),
(19, 'Uang Daftar Ulang', 5),
(20, 'Uang SPP', 5),
(21, 'Uang Seragam', 5),
(22, 'Uang Lain-lain', 5),
(23, 'koor_X', 4),
(24, 'koor_Y', 4);

-- --------------------------------------------------------

--
-- Struktur dari tabel `rating`
--

CREATE TABLE `rating` (
  `users_id` int(11) DEFAULT NULL,
  `info_sekolah_id` int(11) DEFAULT NULL,
  `rating` int(11) NOT NULL,
  `kriteria_idkriteria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `review`
--

CREATE TABLE `review` (
  `idreview` int(11) NOT NULL,
  `isi_review` varchar(100) DEFAULT NULL,
  `tanggal` datetime DEFAULT current_timestamp(),
  `info_sekolah_idinfo_sekolah` int(11) NOT NULL,
  `users_id_users` int(11) NOT NULL,
  `kriteria_idkriteria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `subkriteria_bobot`
--

CREATE TABLE `subkriteria_bobot` (
  `idsub_bobot` int(11) NOT NULL,
  `sub_1` int(11) DEFAULT NULL,
  `sub_2` int(11) DEFAULT NULL,
  `bobot` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `subkriteria_bobot`
--

INSERT INTO `subkriteria_bobot` (`idsub_bobot`, `sub_1`, `sub_2`, `bobot`) VALUES
(1, 6, 6, 1),
(3, 7, 7, 1),
(4, 8, 8, 1),
(5, 9, 9, 1),
(6, 10, 10, 1),
(7, 11, 11, 1),
(8, 12, 12, 1),
(9, 13, 13, 1),
(10, 14, 14, 1),
(11, 15, 15, 1),
(12, 16, 16, 1),
(13, 17, 17, 1),
(14, 18, 18, 1),
(15, 19, 19, 1),
(16, 20, 20, 1),
(17, 21, 21, 1),
(21, 11, 12, 0.5),
(22, 11, 13, 0.3333333333333333),
(23, 11, 14, 0.5),
(24, 11, 15, 0.5),
(25, 11, 16, 1),
(26, 11, 17, 2),
(27, 12, 13, 0.5),
(28, 12, 14, 3),
(29, 12, 15, 2),
(30, 12, 16, 5),
(31, 12, 17, 4),
(32, 13, 14, 3),
(33, 13, 15, 2),
(34, 13, 16, 4),
(35, 13, 17, 3),
(36, 14, 15, 0.5),
(37, 14, 16, 0.5),
(38, 14, 17, 1),
(39, 15, 16, 2),
(40, 15, 17, 3),
(41, 16, 17, 1),
(43, 6, 7, 2),
(44, 6, 8, 3),
(45, 6, 9, 2),
(46, 6, 10, 4),
(47, 7, 8, 1),
(48, 7, 9, 0.5),
(49, 7, 10, 2),
(50, 8, 9, 0.5),
(51, 8, 10, 1),
(52, 9, 10, 3),
(53, 18, 19, 3),
(54, 18, 20, 0.5),
(55, 18, 21, 4),
(56, 19, 20, 0.25),
(57, 19, 21, 1),
(58, 20, 21, 0.25),
(63, 22, 22, 1),
(64, 18, 22, 1),
(66, 19, 22, 1),
(67, 20, 22, 1),
(68, 21, 22, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id_users` int(5) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `hak_akses` varchar(15) DEFAULT NULL,
  `nama_user` varchar(45) DEFAULT NULL,
  `alamat_user` varchar(60) DEFAULT NULL,
  `kecamatan` varchar(10) DEFAULT NULL,
  `notelp_user` varchar(15) DEFAULT NULL,
  `email_user` varchar(35) DEFAULT NULL,
  `photo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id_users`, `username`, `password`, `hak_akses`, `nama_user`, `alamat_user`, `kecamatan`, `notelp_user`, `email_user`, `photo`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'Super_Admin', 'Admin School Finder', '-', 'Kenjeran', '081232345', 'admin@gmail.com', 'admin.png'),
(100, '20531862', 'fef4cda9b13cc54433ef48d9277128d5', 'admin_sekolah', 'Admin Sekolah100', NULL, NULL, NULL, NULL, 'default.jpg'),
(101, '20572027', 'fef4cda9b13cc54433ef48d9277128d5', 'admin_sekolah', 'Admin Sekolah101', NULL, NULL, NULL, NULL, 'default.jpg'),
(102, '20573303', 'fef4cda9b13cc54433ef48d9277128d5', 'admin_sekolah', 'Admin Sekolah102', NULL, NULL, NULL, NULL, 'default.jpg'),
(103, '20533144', 'fef4cda9b13cc54433ef48d9277128d5', 'admin_sekolah', 'Admin Sekolah103', NULL, NULL, NULL, NULL, 'default.jpg'),
(104, '20532815', 'fef4cda9b13cc54433ef48d9277128d5', 'admin_sekolah', 'Admin Sekolah104', NULL, NULL, NULL, NULL, 'default.jpg'),
(105, '20109251', 'fef4cda9b13cc54433ef48d9277128d5', 'admin_sekolah', 'Admin Sekolah105', NULL, NULL, NULL, NULL, 'default.jpg'),
(106, '20541297', 'fef4cda9b13cc54433ef48d9277128d5', 'admin_sekolah', 'Admin Sekolah106', NULL, NULL, NULL, NULL, 'default.jpg'),
(107, '20539077', 'fef4cda9b13cc54433ef48d9277128d5', 'admin_sekolah', 'Admin Sekolah107', NULL, NULL, NULL, NULL, 'default.jpg'),
(108, '20563931', 'fef4cda9b13cc54433ef48d9277128d5', 'admin_sekolah', 'Admin Sekolah108', NULL, NULL, NULL, NULL, 'default.jpg'),
(114, 'sekolah_1', 'fef4cda9b13cc54433ef48d9277128d5', 'admin_sekolah', 'sekolah', 'sekolah_2', 'Asemrowo', '9871231', 'sekolah', 'fisika.png');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `ekstrakurikuler`
--
ALTER TABLE `ekstrakurikuler`
  ADD PRIMARY KEY (`idekstrakurikuler`);

--
-- Indeks untuk tabel `ekstrakurikuler_has_info_sekolah`
--
ALTER TABLE `ekstrakurikuler_has_info_sekolah`
  ADD PRIMARY KEY (`ekstrakurikuler_idekstrakurikuler`,`info_sekolah_idinfo_sekolah`),
  ADD KEY `fk_ekstrakurikuler_has_info_sekolah_info_sekolah1_idx` (`info_sekolah_idinfo_sekolah`),
  ADD KEY `fk_ekstrakurikuler_has_info_sekolah_ekstrakurikuler1_idx` (`ekstrakurikuler_idekstrakurikuler`);

--
-- Indeks untuk tabel `foto_sekolah`
--
ALTER TABLE `foto_sekolah`
  ADD PRIMARY KEY (`idfoto_sekolah`),
  ADD KEY `fk_foto_sekolah_info_sekolah1_idx` (`info_sekolah_idinfo_sekolah`);

--
-- Indeks untuk tabel `info_sekolah`
--
ALTER TABLE `info_sekolah`
  ADD PRIMARY KEY (`npsn`),
  ADD KEY `fk_info_sekolah_users1_idx` (`users_id_users`);

--
-- Indeks untuk tabel `info_sekolah_has_kriteria_detail`
--
ALTER TABLE `info_sekolah_has_kriteria_detail`
  ADD PRIMARY KEY (`info_sekolah_idinfo_sekolah`,`kriteria_detail_iddetail_kriteria`),
  ADD KEY `fk_info_sekolah_has_kriteria_detail_kriteria_detail1_idx` (`kriteria_detail_iddetail_kriteria`),
  ADD KEY `fk_info_sekolah_has_kriteria_detail_info_sekolah1_idx` (`info_sekolah_idinfo_sekolah`);

--
-- Indeks untuk tabel `kriteria`
--
ALTER TABLE `kriteria`
  ADD PRIMARY KEY (`idkriteria`);

--
-- Indeks untuk tabel `kriteria_bobot`
--
ALTER TABLE `kriteria_bobot`
  ADD PRIMARY KEY (`idKriteria_bobot`),
  ADD KEY `fk_Kriteria_bobot_Kriteria_idx` (`kriteria_1`),
  ADD KEY `fk_Kriteria_bobot_Kriteria1_idx` (`kriteria_2`);

--
-- Indeks untuk tabel `kriteria_detail`
--
ALTER TABLE `kriteria_detail`
  ADD PRIMARY KEY (`iddetail_kriteria`),
  ADD KEY `fk_detail_kriteria_kriteria1_idx` (`kriteria_idkriteria`);

--
-- Indeks untuk tabel `rating`
--
ALTER TABLE `rating`
  ADD KEY `users_id` (`users_id`),
  ADD KEY `info_sekolah_id` (`info_sekolah_id`),
  ADD KEY `fk_rating_kriteria1_idx` (`kriteria_idkriteria`);

--
-- Indeks untuk tabel `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`idreview`),
  ADD KEY `fk_review_info_sekolah1_idx` (`info_sekolah_idinfo_sekolah`),
  ADD KEY `fk_review_users1_idx` (`users_id_users`),
  ADD KEY `fk_review_kriteria1_idx` (`kriteria_idkriteria`);

--
-- Indeks untuk tabel `subkriteria_bobot`
--
ALTER TABLE `subkriteria_bobot`
  ADD PRIMARY KEY (`idsub_bobot`),
  ADD KEY `sub_1` (`sub_1`),
  ADD KEY `sub_2` (`sub_2`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `ekstrakurikuler`
--
ALTER TABLE `ekstrakurikuler`
  MODIFY `idekstrakurikuler` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT untuk tabel `foto_sekolah`
--
ALTER TABLE `foto_sekolah`
  MODIFY `idfoto_sekolah` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1066;

--
-- AUTO_INCREMENT untuk tabel `info_sekolah`
--
ALTER TABLE `info_sekolah`
  MODIFY `npsn` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=234234235;

--
-- AUTO_INCREMENT untuk tabel `kriteria`
--
ALTER TABLE `kriteria`
  MODIFY `idkriteria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `kriteria_bobot`
--
ALTER TABLE `kriteria_bobot`
  MODIFY `idKriteria_bobot` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT untuk tabel `kriteria_detail`
--
ALTER TABLE `kriteria_detail`
  MODIFY `iddetail_kriteria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `review`
--
ALTER TABLE `review`
  MODIFY `idreview` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `subkriteria_bobot`
--
ALTER TABLE `subkriteria_bobot`
  MODIFY `idsub_bobot` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id_users` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `ekstrakurikuler_has_info_sekolah`
--
ALTER TABLE `ekstrakurikuler_has_info_sekolah`
  ADD CONSTRAINT `fk_ekstrakurikuler_has_info_sekolah_ekstrakurikuler1` FOREIGN KEY (`ekstrakurikuler_idekstrakurikuler`) REFERENCES `ekstrakurikuler` (`idekstrakurikuler`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ekstrakurikuler_has_info_sekolah_info_sekolah1` FOREIGN KEY (`info_sekolah_idinfo_sekolah`) REFERENCES `info_sekolah` (`npsn`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `foto_sekolah`
--
ALTER TABLE `foto_sekolah`
  ADD CONSTRAINT `fk_foto_sekolah_info_sekolah1` FOREIGN KEY (`info_sekolah_idinfo_sekolah`) REFERENCES `info_sekolah` (`npsn`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `info_sekolah`
--
ALTER TABLE `info_sekolah`
  ADD CONSTRAINT `fk_info_sekolah_users1` FOREIGN KEY (`users_id_users`) REFERENCES `users` (`id_users`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `info_sekolah_has_kriteria_detail`
--
ALTER TABLE `info_sekolah_has_kriteria_detail`
  ADD CONSTRAINT `fk_info_sekolah_has_kriteria_detail_info_sekolah1` FOREIGN KEY (`info_sekolah_idinfo_sekolah`) REFERENCES `info_sekolah` (`npsn`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_info_sekolah_has_kriteria_detail_kriteria_detail1` FOREIGN KEY (`kriteria_detail_iddetail_kriteria`) REFERENCES `kriteria_detail` (`iddetail_kriteria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `kriteria_bobot`
--
ALTER TABLE `kriteria_bobot`
  ADD CONSTRAINT `fk_Kriteria_bobot_Kriteria` FOREIGN KEY (`kriteria_1`) REFERENCES `kriteria` (`idkriteria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Kriteria_bobot_Kriteria1` FOREIGN KEY (`kriteria_2`) REFERENCES `kriteria` (`idkriteria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `kriteria_detail`
--
ALTER TABLE `kriteria_detail`
  ADD CONSTRAINT `fk_detail_kriteria_kriteria1` FOREIGN KEY (`kriteria_idkriteria`) REFERENCES `kriteria` (`idkriteria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `fk_rating_kriteria1` FOREIGN KEY (`kriteria_idkriteria`) REFERENCES `kriteria` (`idkriteria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id_users`),
  ADD CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`info_sekolah_id`) REFERENCES `info_sekolah` (`npsn`);

--
-- Ketidakleluasaan untuk tabel `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `fk_review_info_sekolah1` FOREIGN KEY (`info_sekolah_idinfo_sekolah`) REFERENCES `info_sekolah` (`npsn`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_review_kriteria1` FOREIGN KEY (`kriteria_idkriteria`) REFERENCES `kriteria` (`idkriteria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_review_users1` FOREIGN KEY (`users_id_users`) REFERENCES `users` (`id_users`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `subkriteria_bobot`
--
ALTER TABLE `subkriteria_bobot`
  ADD CONSTRAINT `subkriteria_bobot_ibfk_1` FOREIGN KEY (`sub_1`) REFERENCES `kriteria_detail` (`iddetail_kriteria`),
  ADD CONSTRAINT `subkriteria_bobot_ibfk_2` FOREIGN KEY (`sub_2`) REFERENCES `kriteria_detail` (`iddetail_kriteria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
