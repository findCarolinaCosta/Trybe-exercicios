# filosofia da linguagem Python nos diz: "Legibilidade conta..."
salary = 3500
position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:  # else será executado se nenhuma das condições anteriores for satisfeita
    position = "líder"

# "Simples é melhor do que complexo" - Zen do python
# criar estruturas de mapeamento (dicts)
key = "id"
from_to = {
    "id": "identifier",
    "mail": "email",
    "lastName": "last_name",
}
from_to[key]
