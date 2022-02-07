-- Exercício 2: Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2° Forma Normal.

-- 2ª Forma Normal da example_table
 -- Características
	-- A tabela deve estar na 1ª Forma Normal
	-- A tabela não deve possuir dependências parciais.
    
    

-- Exercício 2: Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2ª Forma Normal.

-- refazendo a tabela de setor
DROP TABLE IF EXISTS `exercicio-de-fixacao`.`setor` ;

CREATE TABLE  `exercicio-de-fixacao`.`setor` (
  `setor_id` INT NOT NULL AUTO_INCREMENT,
  `setor` VARCHAR(45) NULL,
  PRIMARY KEY (`setor_id`)
) ENGINE = InnoDB;


INSERT INTO `exercicio-de-fixacao`.`setor` (`setor`)
VALUES ('Administração'),
	   ('Vendas'),
	   ('Operacional'),
	   ('Estratégico'),
	   ('Vendas'),
	   ('Marketing');
       

-- cria tabela de relacionamento
DROP TABLE IF EXISTS `exercicio-de-fixacao`.`funcionario_setor` ;

CREATE TABLE `exercicio-de-fixacao`.`funcionario_setor` (
  `id_funcionario` INT NOT NULL,
  `id_setor` INT NOT NULL,
  FOREIGN KEY (`id_funcionario`)
    REFERENCES `exercicio-de-fixacao`.`funcionario` (`funcionario_id`),
  FOREIGN KEY (`id_setor`)
    REFERENCES `exercicio-de-fixacao`.`setor` (`setor_id`),
  CONSTRAINT PRIMARY KEY(`id_funcionario`, `id_setor`)
) ENGINE = InnoDB;

INSERT INTO  `exercicio-de-fixacao`.`funcionario_setor`(`id_funcionario`, `id_setor`)
VALUES (12, 1),
	   (12, 2),
	   (13, 3),
	   (14, 4),
	   (14, 2),
	   (15, 5);
       
SELECT * FROM `exercicio-de-fixacao`.`funcionario_setor`;

