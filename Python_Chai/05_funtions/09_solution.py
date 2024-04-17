# Generators Function with Yield
def even_generator(rang):
    for i in range(2, rang + 1,2):
        yield i

for num in even_generator(10):
    print(num)
