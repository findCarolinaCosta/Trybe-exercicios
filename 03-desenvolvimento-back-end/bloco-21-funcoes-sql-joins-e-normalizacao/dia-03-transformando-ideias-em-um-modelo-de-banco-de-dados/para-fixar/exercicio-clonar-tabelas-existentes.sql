-- Clonar tabelas existentes

-- Para  trabalhar com a alteração ou manipulação de tabelas existentes de forma segura existe a opção de clonar tabelas;

-- Sintaxe:
USE nome_do_banco_de_dados;
CREATE TABLE nome_para_nova_tabela LIKE tabela_a_ser_clonada;

-- Exercicio: Clone alguma tabela do banco de dados sakila para ver na prática o resultado do comando acima.
USE sakila;
CREATE TABLE actor_clone LIKE sakila.actor;

-- Pontos de Atenção
	-- Esse comando não copia os dados, apenas a estrutura;
	-- Caso não especifique qual banco de dados utilizar, a nova tabela será inserida no banco que estiver ativo no momento da execução. Sendo assim, sempre especifique o banco de dados antes.