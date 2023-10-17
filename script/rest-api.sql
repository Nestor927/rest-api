-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-10-2023 a las 07:43:48
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rest-api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `año-publicacion` date NOT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `año-publicacion`, `ISBN`) VALUES
(1, 'Neuromante', 'William Gibson', 'Ciberpunk', '1984-07-01', '9789505472406'),
(2, 'DUNE - LAS CRONICAS DE DUNE', 'FRANK HERBERT', 'Ciencia ficcion', '1965-01-01', '9789877254112'),
(3, 'METRO 2033', 'Dmitry Glukhovsky', 'Ciencia ficcion', '2002-01-01', '9788445012819'),
(4, 'LA LLAMADA DE CTHULHU', 'H. P. Lovecraft', 'Terror', '1928-01-01', '9788418008504'),
(5, 'LA REBELION DE ATLAS', 'AYN RAND', 'Ciencia ficcion', '1957-01-01', '9789878318028'),
(6, 'Parasite Eve', 'Sena Hideaki', 'Terror', '2005-01-01', '1932234195'),
(7, 'BAJO LA MISMA ESTRELLA', 'JOHN GREEN', 'Romance', '2012-06-07', '9788415594017'),
(8, 'A DOS METROS DE TI', 'RACHAEL LIPPINCOTT', 'Romance', '2019-01-01', '9789871997381'),
(9, 'ESTUDIO EN ESCARLATA', 'Arthur Conan Doyle', 'Policial', '1887-01-01', '9789500213059'),
(10, 'El fantasma de Canterville', 'Oscar Wilde', 'Juvenil', '1999-02-01', '9788467034684');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
