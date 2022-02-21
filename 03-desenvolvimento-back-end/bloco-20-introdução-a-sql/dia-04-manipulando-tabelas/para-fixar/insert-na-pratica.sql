-- INSERT na prática

-- 1. Insira um novo funcionário na tabela sakila.staff .
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!
SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`)
VALUES ('Carolina', 'Costa', '2', 'carolina@gmail.com', '2', '0', 'findCarol', '12345678');

-- 2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`)
VALUES 
	('Bruno', 'Narto', '1', 'bruno@gmail.com', '1', '0', 'brunoN', '12345678'),
    ('Michael', 'Jackson', '1', 'mj@gmail.com', '2', '0', 'mj', '12345678');

-- 3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
SELECT * FROM sakila.actor;
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
ORDER BY customer_id LIMIT 5;

-- 4. Cadastre três categorias de uma vez só na tabela sakila.category .
SELECT * FROM sakila.category;
INSERT INTO sakila.category (name)
VALUES
    ('Adventure'),
    ('Documentary'),
    ('Biography');

-- 5. Cadastre uma nova loja na tabela sakila.store .
SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);