-- -----------------------------------------------------
-- Schema exercicio-de-fixacao
-- -----------------------------------------------------
DROP DATABASE IF EXISTS `exercicio-de-fixacao`;
CREATE DATABASE `exercicio-de-fixacao`;

-- -----------------------------------------------------
-- Table `exercicio-de-fixacao`.`example_table`
-- -----------------------------------------------------
CREATE TABLE `exercicio-de-fixacao`.`example_table` (
  `Funcionario_id` INT NOT NULL,
  `Nome` VARCHAR(45) NOT NULL,
  `Sobrenome` VARCHAR(45) NOT NULL,
  `Contato` VARCHAR(45) NOT NULL,
  `ContatoTelefone` VARCHAR(45) NOT NULL,
  `DataCadastro` VARCHAR(45) NOT NULL,
  `Setor` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Funcionario_id`)
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Data for table `exercicio-de-fixacao`.`example_table`
-- -----------------------------------------------------
INSERT INTO `exercicio-de-fixacao`.`example_table` (`Funcionario_id`, `Nome`, `Sobrenome`, `Contato`, `ContatoTelefone`, `DataCadastro`, `Setor`) 
VALUES (12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25', 'Administração, Vendas'),
(13, 'André', 'Freeman', 'andre1990@gmail.com	', '(47)99522-4996', '5 de Fevereiro de 2020', 'Operacional'),
(14, 'Cíntia', 'Duval', 'cindy@outlook.com	', '(33)99855-4669', '2020-05-05 10:55:35', 'Estratégico, Vendas'),
(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com	', '(33)99200-1556', '2020-05-05 11:45:40', 'Marketing');

SELECT * FROM `exercicio-de-fixacao`.`example_table`;
