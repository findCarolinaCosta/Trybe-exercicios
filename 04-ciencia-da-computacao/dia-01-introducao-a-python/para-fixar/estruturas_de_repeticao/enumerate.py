# enumerate() do Python para obter um contador e o valor do iterável ao mesmo
# tempo
languages = ["Python", "Java", "JavaScript"]

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

# desestruturar (unpack) os itens da lista ou tupla
languages = ["Python", "Java", "JavaScript"]

for index, language in enumerate(["Python", "Java"]):
    print(f"{index} - {language}")
# Saída:
#  - Python
#  - Java
