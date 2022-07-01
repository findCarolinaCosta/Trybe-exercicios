def incrementa(x):
    x += 1
    return x


x = 10
incrementa(x)  # return 11
print(x)  # continua 10

# As variáveis definidas dentro das funções tem escopo local.
# Porém, quando uma função não encontra um nome no escopo local, ela irá
# procurar no espaço de nomes global.
