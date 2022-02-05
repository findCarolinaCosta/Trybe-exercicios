-- Trigger

-- Considerando as tabelas e os banco de dados abaixo:
CREATE DATABASE IF NOT EXISTS betrybe_automoveis;

USE betrybe_automoveis;

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;


-- Exercicio de fixação
-- 1. Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .
DROP TRIGGER IF EXISTS trigger_insert;
DELIMITER $$
CREATE TRIGGER trigger_insert
    BEFORE INSERT ON betrybe_automoveis.carros
    FOR EACH ROW
BEGIN
SET NEW.data_atualizacao = NOW(),
        NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

-- Teste se funciona
SELECT * FROM betrybe_automoveis.carros;

TRUNCATE TABLE betrybe_automoveis.carros;

INSERT INTO betrybe_automoveis.carros(preco, acao)
VALUES (100, 'compra');


-- 2. Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .
DROP TRIGGER IF EXISTS trigger_update;
DELIMITER $$
CREATE TRIGGER trigger_update
    BEFORE UPDATE ON betrybe_automoveis.carros
    FOR EACH ROW
BEGIN
SET NEW.data_atualizacao = NOW(),
	NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;

-- Teste se funciona
SELECT * FROM betrybe_automoveis.carros;

UPDATE betrybe_automoveis.carros
SET preco = 200
WHERE id_carro = 1;

TRUNCATE TABLE betrybe_automoveis.carros;


-- 3. Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.
DROP TRIGGER IF EXISTS trigger_delete;
DELIMITER $$
CREATE TRIGGER trigger_delete
    BEFORE DELETE ON betrybe_automoveis.carros
    FOR EACH ROW
BEGIN
	INSERT INTO betrybe_automoveis.log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', DATETIME());
END $$
DELIMITER ;

-- Teste se funciona
SELECT * FROM betrybe_automoveis.log_operacoes;

DELETE FROM betrybe_automoveis.carros WHERE id_carro = 1;

