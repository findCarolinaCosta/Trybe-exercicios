# Exercicio para fixar LIMIT OFFSET
* Pulando linhas desnecessárias

```
# Query + LIMIT quantidade_de_linhas OFFSET quantidade_de_linhas
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;
```

Tabela exemplo:

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/limit4-d2cddfe680162164a24131fee86ab759.png)

Qual query eu teria que montar para trazer os 10 primeiros resultados, a partir de JOHNNY?
```
SELECT * FROM sakila.actor LIMIT 10 OFFSET 5;
```