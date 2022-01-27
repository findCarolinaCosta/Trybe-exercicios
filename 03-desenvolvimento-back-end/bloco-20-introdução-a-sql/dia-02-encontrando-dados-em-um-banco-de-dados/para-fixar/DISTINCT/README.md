# Exercicio para fixar DISTINCT:
Tabela ficticia:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/sampleTable1-1df75b03ae8e20c7da20d37904a634e6.png)

Para criar no MySQL Workbench em uma nova janela:
```
CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
```

Monte uma query para encontrar os seguintes dados nessa table:
1. Monte uma query para encontrar pares únicos de nomes e idades .
```
SELECT DISTINCT Nome, Idade FROM Alunos;
```

2. Quantas linhas você encontraria na query anterior?
5

3. Monte uma query para encontrar somente os nomes únicos.
```
SELECT DISTINCT Nome FROM Alunos;
```

4. Quantas linhas você encontraria na query anterior?
4

5. Monte uma query para encontrar somente as idades únicas.
```
SELECT DISTINCT Idade FROM Alunos;
```

6. Quantas linhas você encontraria na query anterior?
4
