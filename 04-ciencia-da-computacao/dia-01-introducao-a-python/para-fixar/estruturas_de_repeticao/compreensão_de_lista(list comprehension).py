from exemplo_for import restaurants

min_rating = 3.0
filtered_restaurants = [
    restaurant["name"]  # aqui pedimos somente o nome do restaurante
    for restaurant in restaurants
    if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


# Conversão de loop for em compreensão de listas

team = ["Ana", "Rada", "Duda", "André", "Jean"]
a_name = []

for name in team:
    if name[0] == "A":
        a_name.append(name.upper())


a_name = [name.upper() for name in team if name[0] == "A"]

# a_name = ["ANA", "ANDRÉ"]


nomes = ["Duda", "Rafa", "Cris", "Yuri"]
nomes2 = [s for s in nomes if "a" in s]
print(nomes2)

# Saída
["Duda", "Rafa"]

quadrados = [x * x for x in range(11)]
print(quadrados)

# Saída
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# equivalente às operações de map e filter em JavaScript.
