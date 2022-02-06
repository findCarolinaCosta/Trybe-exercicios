-- Bônus: Transformando ideias em um modelo de banco de dados - Parte 2

-- Sintaxe
-- Adicionar uma nova coluna
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;

-- Modificar o tipo e propriedades de uma coluna
ALTER TABLE noticia MODIFY noticia_id BIGINT;

-- Adicionar incremento automático a uma coluna
-- (especifique o tipo da coluna + auto_increment)
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;

-- Alterar o tipo e nome de uma coluna
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;

-- Dropar/Excluir uma coluna
ALTER TABLE noticia DROP COLUMN data_postagem;

-- Adicionar uma nova coluna após outra
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;


-- Exercícios
-- Banco de dados usado: HR
-- Desafios sobre ALTER TABLE

-- 1. Escreva uma query SQL para alterar na tabela locations o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE locations CHANGE COLUMN street_address address VARCHAR(40);


-- 2. Escreva uma query SQL para alterar na tabela regions o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE regions CHANGE COLUMN region_name region VARCHAR(25);


-- 3. Escreva uma query SQL para alterar na tabela countries o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE countries CHANGE COLUMN country_name country VARCHAR(40);