# Validate Input
while True:
    number = int(input("Enter value b/w 1 to 10:\n"))
    if 1 <= number <= 10:
        print("Thanks")
        break
    else:
        print("Number doesn't exist and try again")