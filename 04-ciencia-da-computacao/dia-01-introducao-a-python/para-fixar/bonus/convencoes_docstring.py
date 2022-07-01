# PEP 257 - Convenções Docstring


def quadrado(n):
    """Recebe um número n, retorna o quadrado de n"""  # Literal de string
    return n**2


# Atributo __doc__ do Python
def quadrado2(n):
    """Recebe um número n, retorna o quadrado de n"""  # Literal de string
    return n**2


print(quadrado.__doc__)
# Saída
# Recebe um número n, retorna o quadrado de n

# Docstrings para a função print() integrada
print(print.__doc__)

# Saída
# print(value, ..., sep=" ", end="\n", file=sys.stdout, flush=False)
