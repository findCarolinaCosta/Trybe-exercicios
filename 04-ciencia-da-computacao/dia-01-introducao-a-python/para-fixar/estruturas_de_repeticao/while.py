# Sequência de Fibonacci,
n = 10
last, next = 0, 1  # atribuição múltipla troca de valores a, b = b, a
while last < n:
    print(last)
    last, next = next, last + next
