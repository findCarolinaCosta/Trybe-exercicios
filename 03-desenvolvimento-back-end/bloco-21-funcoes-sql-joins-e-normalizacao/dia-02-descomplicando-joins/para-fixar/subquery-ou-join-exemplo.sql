-- SUBQUERY ou JOIN
-- Usar a que tiver mais performance, as duas podem fazer as mesmas coisas.
-- Para mensurar-la é possivel usar Execution Plan no MYSQL Workbench (ferramenta gráfica para gerenciamento do banco de dados MySQL)

-- Exemplo subquery
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;

-- exemplo com inner join
SELECT c.first_name, ad.address
FROM sakila.customer c
INNER JOIN sakila.address ad ON c.address_id = ad.address_id;