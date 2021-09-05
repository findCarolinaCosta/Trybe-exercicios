## Bônus 5
Kata ou Code Kata são exercícios de programação que ajudam a aprimorar as habilidades através da prática e da repetição.
[Kata 'Verificador de senhas'](https://github.com/CodeYourFuture/js-exercises-tdd/blob/master/III.tdd-katas/password-verifier/README.md): 
 * Crie uma função Verify() que retorne false para os casos listados no repositório e true caso contrário. Não é necessário fazer os itens extras (2, 3 e 4) do repositório.

--------------------------------------------------------------------------
## Create a Password verifications class called “PasswordVerifier”.

1. Add the following verifications to a master function called “Verify()”

   1. - password should be larger than 8 chars
   2. - password should not be null
   3. - password should have one uppercase letter at least
   4. - password should have one lowercase letter at least
   5. - password should have one number at least

 Each one of these should throw an exception with a different message of your choosing

2. Add feature: Password is OK if at least three of the previous conditions is true
3. Add feature: password is never OK if item 1.4 is not true.
4. Assume Each verification takes 1 second to complete. How would you solve  items 2 and 3  so tests can run faster?