# Find the first non repeated characters
input_str = "teeter"

for i in input_str:
    print(i)
    if input_str.count(i) == 1:
        print("char is:",i)
        break