# **Exercícios Unix e bash - Parte 2 _(Parte I, parte II e parte III)_**

## Parte I Comandos de Input e Output 

#### Exercício 1 - Navegue até a pasta `unix_tests`;
`cd unix_tests `

### Exercício 2 - Crie um arquivo texto pelo terminal com o nome `skills2.txt` e adicione os valores `Internet`, `Unix` e `Bash`, um em cada linha.
```
cat > skills2.txt
Internet
Unix
Bash
```
### Exercício 3 - Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal.🤓
``` 
cat >> skills2.txt
Windows
Mac
Iphone
Android
Tecnologia 
```

### Exercício 4 - Conte quantas linhas tem o arquivo `skills2.txt`.
`wc -l skills2.txt`

### Exercício 5 - Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt`, contendo as 3 primeiras skills em ordem alfabética.
` cat > top_skills.txt | cat skills2.txt | head -3 | sort`

### Exercício 6 - Crie um novo arquivo chamado `phrases2.txt` pelo o terminal e adicione algumas frases de suas escolha.
`cat >> phrases2.txt`

### Exercício 7 - Conte o número de linhas que contêm as letras `br`.
`grep -c 'br' phrases2.txt | wc -l`

### Exercício 8 - Conte o número de linhas que **não** contêm as letras `br`.
`grep -v 'br' phrases2.txt | wc -l`

### Exercício 9 - Adicione dois nomes de países ao final do arquivo `phrases2.txt`.
`cat >> phrases2.txt`

### Exercício 10 - Crie um novo arquivo chamado `bunch_of_things.txt` com os conteúdos dos arquivos `phrases2.txt` e `countries.txt`
`cat > bunch_of_things.txt | cat phrases2.txt  countries.txt | sort >> bunch_of_things.txt`

### Exercício 11 - Ordene o arquivo `bunch_of_things.txt`.
otimizei, última parte do exercício anterior :)

## Parte II Permissões

### Exercício 1 - Navegue até a pasta `unix_tests`;
`cd unix_tests`

### Exercício 2 - Rode o comando `ls -l` e veja quais as permissões dos arquivos;
`ls -l`

### Exercício 3 - Mude a permissão do arquivo `bunch_of_things.txt` para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando `ls -l`;
> Resultado esperado: `-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt`
`chmod a+rw bunch_of_things.txt`

### Exercício 4 - Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;
> Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
`chmod a-w bunch_of_things.txt`

### Exercício 5 - Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt
> Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt
`chmod 644 bunch_of_things.txt`

## Parte III Processos & Jobs

### Exercício 1 - Liste todos os processos;
`ps`

### Exercício 2 - Agora use o comando sleep 30 & ;
`sleep 30 &`

### Exercício 3 - Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo) ;
`kill 23235`

### Exercício 4 - Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;
```
sleep 30
Ctrl + Z
bg %3
```

### Exercício 5 - Crie um processo em background que rode o comando sleep por 300 segundos.
`sleep 300 &`

### Exercício 6 - Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
> Você deve criá-los em foreground (sem usar o & ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar.
```
sleep 200
Ctrl + z
sleep 100
Ctrl + z
```

### Exercício 7 - Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.
> Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal.
```
ps
fg %3
Ctrl + z
```

### Exercício 8 - Retome a execução do processo sleep 100 em background com o comando bg .
`bg %5`

### Exercício 9 - Termine a execução de todos os processos sleep (mate os processos) .
`kill -9 23258 23686 23698`

## (Bônus) Parte IV O despertar do terminal

### Exercício 1- Abra o terminal e execute o comando sudo apt-get install cmatrix e, depois, execute o comando cmatrix . Quando estiver se sentindo como o Neo , aperte ctrl+c para voltar ao terminal;
```
sudo apt-get install cmatrix
senha: ************
ctrl + c
```

### Exercício 2 - Execute o comando sudo apt-get install fortune , após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune , e o operador > ;
```
apt-get install fortune
cat > fortune.txt
```

### Exercício 3 - Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc ;
`wc -w fortune.txt`

### Exercício 4 - Execute o comando sudo apt-get install sl , após a instalação, execute o comando sl . Agora tente sl -F ;
```
sudo apt-get install sl
sl -F
```

### Exercício 5 - Execute o comando sudo apt-get install cowsay , após a instalação, execute o comando cowsay e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt ;
```
sudo apt-get install cowsay
cowsay
cat fortune.txt | cowsay
```

### Exercício 6 - Descubra os fatores primos usando o comando factor e em seguida o número 42 ;
`factor 42`

### Exercício 7 - Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev .
`rev fortun`

### Exercício 8 - Execute o comando `telnet towel.blinkenlights.nl` e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer!
`telnet towel.blinkenlights.nl`
