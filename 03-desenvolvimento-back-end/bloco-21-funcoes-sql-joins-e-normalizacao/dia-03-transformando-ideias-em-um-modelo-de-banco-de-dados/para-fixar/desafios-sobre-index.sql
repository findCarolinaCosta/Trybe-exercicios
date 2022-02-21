-- Bônus: Transformando ideias em um modelo de banco de dados - Parte 2

-- Sintaxe
-- Criando um índice em uma coluna
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna1, coluna2);

-- Excluindo índices
DROP INDEX nome_do_indice ON tabela;

-- Impacto positivo em relação ao tempo de execução;

-- Exercícios
-- Desafios sobre INDEX

-- 1. Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na coluna name . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
CREATE FULLTEXT INDEX category_name_index ON category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');  -- Query cost: 0.35

DROP INDEX category_name_index ON category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';  -- Query cost: 1.85 sem INDEX

-- 2. Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
CREATE INDEX postal_code_index ON address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693'; -- Query cost: 0.35 no execution plan

DROP INDEX postal_code_index ON address;

SELECT *
FROM sakila.address
WHERE postal_code = '36693'; -- Query cost: 61.80 no execution plan sem index