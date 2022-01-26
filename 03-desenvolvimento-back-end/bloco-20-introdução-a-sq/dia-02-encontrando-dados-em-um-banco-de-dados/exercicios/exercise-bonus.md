# Bônus
Exercício 2 : Para realizar as tarefas do 1 ao 4, restaure o seguinte banco de dados:
```
DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);

INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```

1. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT .
```
SELECT Piece, Price FROM Provides
	WHERE Provider = 'RBT';
```

2. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
```
SELECT Price AS 'Higher prices' FROM Provides
	ORDER BY Price DESC LIMIT 5;
```

3. Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
```
SELECT DISTINCT Provider, Price FROM Provides
	ORDER BY Price DESC LIMIT 4 OFFSET 2;
```

4. Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL . Ordene o resultado pelos preços das peças de forma decrescente.
```
SELECT * FROM Provides
	WHERE Provider = 'HAL' ORDER BY Price DESC;
```

5. Escreva uma query para exibir por quantas empresas a peça 1 é provida.
```
SELECT COUNT(Provider) FROM Provides
	WHERE Piece = 1;
```

Exercício 7 : Usando WHERE
1.  Select all records where the City column has the value "Berlin".
```
SELECT * FROM Customers
	WHERE City = 'Berlin';
```

2. Use the NOT keyword to select all records where City is NOT "Berlin".
```
SELECT * FROM Customers
	WHERE NOT City = 'Berlin';
```

3. Select all records where the CustomerID column has the value 32.
```
SELECT * FROM Customers
	 WHERE CustomerID = 32;
```

4. Select all records where the City column has the value 'Berlin' and the PostalCode column has the value 12209.
```
SELECT * FROM Customers
	 WHERE City = 'Berlin'
	 AND PostalCode = 12209;
```

5. Select all records where the City column has the value 'Berlin' or 'London'.
```

SELECT * FROM Customers
	 WHERE City = 'Berlin'
	 OR City = 'London';
```

Exercício 8 : Aplicando Restrições
Using the right constraints, find the information we need from the Movies table for each task below.

* Table: Movies
| Id | Title  | Director  | Year  | Length_minutes  |
|---|---|---|---|---|
| 1 | Toy Story | John Lasseter | 1995 | 81 |
| 2 | A Bug's Life | John Lasseter | 1998 | 95
| 3 | Toy Story 2 | John Lasseter | 1999 | 93 |
| 4 | Monsters, Inc. | Pete Docter | 2001 | 92 |
| 5 | Finding Nemo | Andrew Stanton | 2003 | 107|
| 6 | The Incredibles | Brad Bird | 2004 | 116 |
| 7 | Cars |	John Lasseter | 2006 | 117|
| 8 | Ratatouille |	Brad Bird |	2007 |	115 |
| 9 | WALL-E |	Andrew Stanton |	2008 |	104 |
| 10 | Up | Pete Docter | 2009 | 101 |
| 11 | Toy Story 3 |	Lee Unkrich |	2010 |	103
| 12 | Cars 2 |	John Lasseter |	2011 |	120|
| 13 | Brave |	Brenda Chapman |	2012 |	102 |
| 14 | Monsters University |	Dan Scanlon |	2013 |	110 |

1. Find the movie with a row id of 6
```
SELECT * FROM movies
	WHERE id = 6;
```

* Table: Movies
| Id | Title |
|---|---|
| 6 | The Incredibles|

2. Find the movies released in the years between 2000 and 2010.
```
SELECT title, year FROM movies
	WHERE year BETWEEN 2000 AND 2010;
```

* Table: Movies
| Title | Year |
|---|---|
| Monsters, Inc. |	2001 |
| Finding Nemo |	2003 |
| The Incredibles |	2004 |
| Cars |	2006 |
| Ratatouille |	2007 |
| WALL-E |	2008 |
| Up |	2009 |
| Toy Story 3 |	2010 |

3. Find the movies not released in the years between 2000 and 2010 
```
SELECT title, year FROM movies
	WHERE year < 2000 OR year > 2010;
```

* Table: Movies
| Title |	Year |
|---|---|
| Toy Story |	1995 |
| A Bug's Life |	1998 |
| Toy Story 2 |	1999 |
| Cars 2 |	2011 |
| Brave |	2012 |
| Monsters University	| 2013 |

4. Find the first 5 Pixar movies and their release year
```
SELECT title, year FROM movies
	WHERE year <= 2003;
```

* Table: Movies
| Title |	Year |
|---|---|
| Toy Story |	1995 |
| A Bug's Life |	1998 |
| Toy Story 2 |	1999 |
| Monsters, Inc. |	2001 |
| Finding Nemo |	2003 |

Exercícios 9 : Estude e faça os exercícios das páginas 1 a 3 do sqlcourse -Interactive Online SQL Training.

The where clause (optional) specifies which data values or rows will be returned or displayed, based on the criteria described after the keyword where.

Conditional selections used in the where clause:
|      |                      |
|------|-----------------------|
| =    | Equal                 |
| >    | Greater than          |
| <    | Less than             |
| >=   | Greater than or equal |
| <=   | Less than or equal    |
| <>   | Not equal to          |
| LIKE | *See note below       |
The LIKE pattern matching operator can also be used in the conditional selection of the where clause. Like is a very powerful operator that allows you to select only rows that are "like" what you specify. The percent sign "%" can be used as a wild card to match any possible character that might appear before or after the characters specified.

Sample Table: empinfo 
| first |	last |	id | 	age |	city |	state |
|---|---|---|---|---|---|
| John |	Jones |	99980 |	45 |	Payson |	Arizona |
| Mary |	Jones |	99982 |	25 |	Payson |	Arizona |
| Eric |	Edwards |	88232 |	32 |	San Diego |	California |
| Mary | Ann |	Edwards |	88233 |	32 |	Phoenix |	Arizona |
| Ginger |	Howell |	98002 |	42 |	Cottonwood |	Arizona |
| Sebastian |	Smith |	92001 |	23 |	Gila Bend |	Arizona |
| Gus |	Gray |	22322 |	35 |	Bagdad |	Arizona |
| Mary | Ann |	May |	32326 |	52 |	Tucson |	Arizona |
| Erica |	Williams |	32327 |	60 |	Show Low |	Arizona |
| Leroy |	Brown |	32380 |	22 |	Pinetop |	Arizona |
| Elroy |	Cleaver |	32382 |	22 |	Globe	Arizona |


1. Display everyone's first name and their age for everyone that's in table.
```
select first, age from empinfo;
 ```

2. Display the first name, last name, and city for everyone that's not from Payson.
```
select first, last, city from empinfo
	where city <>  'Payson';
```

3 . Display all columns for everyone that is over 40 years old.

select * from empinfo
       where age > 40;

4 . Display the first and last names for everyone whose last name ends in an "ay".

select first, last from empinfo
       where last LIKE '%ay';

5. Display all columns for everyone whose first name equals "Mary".

select * from empinfo
       where first = 'Mary';

6. Display all columns for everyone whose first name contains "Mary".

select * from empinfo
       where first LIKE '%Mary%';

Exercício 10 : Exercícios de comparação de valores.
SELECT from WORLD Tutorial

| name |	continent |	area |	population |	gdp |
|---|---|---|---|---|
| Afghanistan |	Asia |	652230 |	25500100 |	20343000000 |
| Albania |	Europe |	28748 |	2831741 |	12960000000 |
| Algeria |	Africa |	2381741 |	37100000 |	188681000000 |
| Andorra |	Europe |	468 |	78115 |	3712000000 |
| Angola |	Africa |	1246700 |	20609294 |	100990000000 |

In this tutorial you will use the SELECT command on the table world:
1. Read the notes about this table. Observe the result of running this SQL command to show the name, continent and population of all countries.
```
SELECT name, continent, population FROM world;
```

Output:
| name                                                       | continent     | population |
|------------------------------------------------------------|---------------|------------|
| Afghanistan                                                | Asia          | 25500100   |
| Albania                                                    | Europe        | 2821977    |
| Algeria                                                    | Africa        | 38700000   |
| Andorra                                                    | Europe        | 76098      |
| Angola                                                     | Africa        | 19183590   |
| Antigua and Barbuda                                        | Caribbean     | 86295      |
| Argentina                                                  | South America | 42669500   |
| Armenia                                                    | Eurasia       | 3017400    |
| Australia                                                  | Oceania       | 23545500   |
| Austria                                                    | Europe        | 8504850    |
| Azerbaijan                                                 | Asia          | 9477100    |
| Bahamas                                                    | Caribbean     | 351461     |
| Bahrain                                                    | Asia          | 1234571    |
| Bangladesh                                                 | Asia          | 156557000  |
| Barbados                                                   | Caribbean     | 285000     |
| Belarus                                                    | Europe        | 9467000    |
| Belgium                                                    | Europe        | 11198638   |
| Belize                                                     | North America | 349728     |
| Benin                                                      | Africa        | 9988068    |
| Bhutan                                                     | Asia          | 749090     |
| Bolivia                                                    | South America | 10027254   |
| Bosnia and Herzegovina                                     | Europe        | 3791622    |
| Botswana                                                   | Africa        | 2024904    |
| Brazil                                                     | South America | 202794000  |
| Brunei                                                     | Asia          | 393162     |
| Bulgaria                                                   | Europe        | 7245677    |
| Burkina Faso                                               | Africa        | 17322796   |
| Burundi                                                    | Africa        | 9420248    |
| Cambodia                                                   | Asia          | 15184116   |
| Cameroon                                                   | Africa        | 20386799   |
| Canada                                                     | North America | 35427524   |
| Cape Verde                                                 | Africa        | 491875     |
| Central African Republic                                   | Africa        | 4709000    |
| Chad                                                       | Africa        | 13211000   |
| Chile                                                      | South America | 17773000   |
| China                                                      | Asia          | 1365370000 |
| Colombia                                                   | South America | 47662000   |
| Comoros                                                    | Africa        | 743798     |
| Congo, Democratic Republic of                              | Africa        | 69360000   |
| Congo, Republic of                                         | Africa        | 4559000    |
| Costa Rica                                                 | North America | 4667096    |
| Côte d'Ivoire                                              | Africa        | 23919000   |
| Croatia                                                    | Europe        | 4290612    |
| Cuba                                                       | Caribbean     | 11167325   |
| Cyprus                                                     | Asia          | 865878     |
| Czech Republic                                             | Europe        | 10517400   |
| Denmark                                                    | Europe        | 5634437    |
| Djibouti                                                   | Africa        | 886000     |
| Dominica                                                   | Caribbean     | 71293      |
| Dominican Republic                                         | Caribbean     | 9445281    |
| Results truncated. Only the first 50 rows have been shown. |               |            |

Large Countries
2. How to use WHERE to filter records. Show the name for the countries that have a population of at least 200 million. 200 million is 200000000, there are eight zeros.
```
SELECT name FROM world
	WHERE population > 200000000;
```

Output:
| name          |
|---------------|
| Brazil        |
| China         |
| India         |
| Indonesia     |
| United States |

Per capita GDP
3.Give the name and the per capita GDP for those countries with a population of at least 200 million.
```
SELECT name, gdp / population FROM world
WHERE  population > 200000000
```
Output:
| name          | gdp / populat.. |
|---------------|-----------------|
| Brazil        | 11115.2648      |
| China         | 6121.7106       |
| India         | 1504.7931       |
| Indonesia     | 3482.0205       |
| United States | 51032.2945      |

South America In millions
4. Show the name and population in millions for the countries of the continent 'South America'. Divide the population by 1000000 to get population in millions.
```
SELECT name, population / 1000000 FROM world
WHERE  continent = 'South America';
```

Output:
| name                             | population / .. |
|----------------------------------|-----------------|
| Argentina                        | 42.6695         |
| Bolivia                          | 10.0273         |
| Brazil                           | 202.794         |
| Chile                            | 17.773          |
| Colombia                         | 47.662          |
| Ecuador                          | 15.7742         |
| Guyana                           | 0.7849          |
| Paraguay                         | 6.7834          |
| Peru                             | 30.4751         |
| Saint Vincent and the Grenadines | 0.109           |
| Suriname                         | 0.5342          |
| Uruguay                          | 3.2863          |
| Venezuela                        | 28.9461         |

France, Germany, Italy
5. Show the name and population for France, Germany, Italy
```
SELECT name, population FROM world
WHERE name = 'France'
OR name = 'Germany'
OR name = 'Italy';
```

Output:
| name    | population |
|---------|------------|
| France  | 65906000   |
| Germany | 80716000   |
| Italy   | 60782668   |

United
6. Show the countries which have a name that includes the word 'United'
```
SELECT name FROM world
	WHERE name LIKE 'United%';
```

Output:
| name                 |
|----------------------|
| United Arab Emirates |
| United Kingdom       |
| United States        |

Two ways to be big
7. Two ways to be big: A country is big if it has an area of more than 3 million sq km or it has a population of more than 250 million.

Show the countries that are big by area or big by population. Show name, population and area.
```
SELECT name, population, area FROM world
	WHERE population > 200050000
	OR area > 3000000;
```

Output:
| name          | population | area     |
|---------------|------------|----------|
| Australia     | 23545500   | 7692024  |
| Brazil        | 202794000  | 8515767  |
| Canada        | 35427524   | 9984670  |
| China         | 1365370000 | 9596961  |
| India         | 1246160000 | 3166414  |
| Indonesia     | 252164800  | 1904569  |
| Russia        | 146000000  | 17125242 |
| United States | 318320000  | 9826675  |

One or the other (but not both)
8. Exclusive OR (XOR). Show the countries that are big by area (more than 3 million) or big by population (more than 250 million) but not both. Show name, population and area.

* Australia has a big area but a small population, it should be included.
* Indonesia has a big population but a small area, it should be included.
* China has a big population and big area, it should be excluded.
* United Kingdom has a small population and a small area, it should be excluded.
```
SELECT name, population, area FROM world
WHERE (area > 3000000 XOR population > 250000000) 
```
Table Logical Operators

| Name    | Description   |
|---------|---------------|
| AND, && | Logical AND   |
| NOT, !  | Negates value |
| OR, ||  | Logical OR    |
| XOR     | Logical XOR (XOR exclusivo ou um ou outro)   |

OUTPUT:
| name      | population | area     |
|-----------|------------|----------|
| Australia | 23545500   | 7692024  |
| Brazil    | 202794000  | 8515767  |
| Canada    | 35427524   | 9984670  |
| Indonesia | 252164800  | 1904569  |
| Russia    | 146000000  | 17125242 |

Rounding
1. Show the name and population in millions and the GDP in billions for the countries of the continent 'South America'. Use the ROUND function to show the values to two decimal places.

For South America show population in millions and GDP in billions both to 2 decimal places.
Divide by 1000000 (6 zeros) for millions. Divide by 1000000000 (9 zeros) for billions.
```
SELECT name, 
ROUND(population / 1000000, 2), 
ROUND(gdp / 1000000000, 2) FROM world
WHERE continent = 'South America';
```
* ROUND(f,p) returns f rounded to p decimal places.

OUTPUT:
| name                             | ROUND(populat.. | ROUND(gdp / 1.. |
|----------------------------------|-----------------|-----------------|
| Argentina                        | 42.67           | 477.03          |
| Bolivia                          | 10.03           | 27.04           |
| Brazil                           | 202.79          | 2254.11         |
| Chile                            | 17.77           | 268.31          |
| Colombia                         | 47.66           | 369.81          |
| Ecuador                          | 15.77           | 87.5            |
| Guyana                           | 0.78            | 2.85            |
| Paraguay                         | 6.78            | 25.94           |
| Peru                             | 30.48           | 204.68          |
| Saint Vincent and the Grenadines | 0.11            | 0.69            |
| Suriname                         | 0.53            | 5.01            |
| Uruguay                          | 3.29            | 49.92           |
| Venezuela                        | 28.95           | 382.42          |

Trillion dollar economies
10. Show the name and per-capita GDP for those countries with a GDP of at least one trillion (1000000000000; that is 12 zeros). Round this value to the nearest 1000.

Show per-capita GDP for the trillion dollar countries to the nearest $1000.
```
SELECT name ,
ROUND(gdp / population, -3)
FROM world
WHERE gdp >= 1000000000000;
```
* The number of decimal places(ROUND(f, places)) may be negative, 1000 (when p is -3);
  
OUTPUT:
| name           | ROUND(gdp/pop.. |
|----------------|-----------------|
| Australia      | 66000           |
| Brazil         | 11000           |
| Canada         | 45000           |
| China          | 6000            |
| France         | 40000           |
| Germany        | 42000           |
| India          | 2000            |
| Italy          | 33000           |
| Japan          | 47000           |
| Mexico         | 10000           |
| Russia         | 14000           |
| South Korea    | 22000           |
| Spain          | 28000           |
| United Kingdom | 39000           |
| United States  | 51000           |

Name and capital have the same length
11.Greece has capital Athens.
Each of the strings 'Greece', and 'Athens' has 6 characters.
Show the name and capital where the name and the capital have the same number of characters.
You can use the LENGTH function to find the number of characters in a string
```
SELECT name, capital
  FROM world
 WHERE LENGTH(name) = LENGTH(capital);
 ```
OUTPUT:
| name       | capital    |
|------------|------------|
| Algeria    | Algiers    |
| Angola     | Luanda     |
| Armenia    | Yerevan    |
| Botswana   | Gaborone   |
| Cameroon   | Yaoundé    |
| Canada     | Ottowa     |
| Djibouti   | Djibouti   |
| Egypt      | Cairo      |
| Estonia    | Tallinn    |
| Fiji       | Suva       |
| Gambia     | Banjul     |
| Georgia    | Tbilisi    |
| Ghana      | Accra      |
| Greece     | Athens     |
| Luxembourg | Luxembourg |
| Mauritania | Nouakchott |
| Peru       | Lima       |
| Poland     | Warsaw     |
| Russia     | Moscow     |
| Rwanda     | Kigali     |
| San Marino | San Marino |
| Singapore  | Singapore  |
| Taiwan     | Taipei     |
| Turkey     | Ankara     |
| Zambia     | Lusaka     |

Matching name and capital
12.
The capital of Sweden is Stockholm. Both words start with the letter 'S'.

Show the name and the capital where the first letters of each match. Don't include countries where the name and the capital are the same word.
You can use the function LEFT to isolate the first character.
You can use <> as the NOT EQUALS operator.
```
SELECT name, capital
  FROM world
 WHERE LEFT(name, 1) = LEFT(capital, 1)
   AND name <> capital;
```

OUTPUT:
| name                  | capital                   |
|-----------------------|---------------------------|
| Algeria               | Algiers                   |
| Andorra               | Andorra la Vella          |
| Barbados              | Bridgetown                |
| Belize                | Belmopan                  |
| Brazil                | Brasília                  |
| Brunei                | Bandar Seri Begawan       |
| Burundi               | Bujumbura                 |
| Guatemala             | Guatemala City            |
| Guyana                | Georgetown                |
| Kuwait                | Kuwait City               |
| Maldives              | Malé                      |
| Marshall Islands      | Majuro                    |
| Mexico                | Mexico City               |
| Monaco                | Monaco-Ville              |
| Mozambique            | Maputo                    |
| Niger                 | Niamey                    |
| Panama                | Panama City               |
| Papua New Guinea      | Port Moresby              |
| Sao Tomé and Príncipe | São Tomé                  |
| South Korea           | Seoul                     |
| Sri Lanka             | Sri Jayawardenepura Kotte |
| Sweden                | Stockholm                 |
| Taiwan                | Taipei                    |
| Tunisia               | Tunis                     |

All the vowels
13.
Equatorial Guinea and Dominican Republic have all of the vowels (a e i o u) in the name. They don't count because they have more than one word in the name.

Find the country that has all the vowels and no spaces in its name.

You can use the phrase name NOT LIKE '%a%' to exclude characters from your results.
The query shown misses countries like Bahamas and Belarus because they contain at least one 'a'
```
SELECT name
  FROM world
 WHERE name     LIKE '%a%'
   AND name     LIKE '%e%'
   AND name     LIKE '%i%'
   AND name     LIKE '%o%'
   AND name     LIKE '%u%'
   AND name NOT LIKE '% %';
```

OUTPUT:
| name       |
|------------|
| Mozambique |