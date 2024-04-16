# Count positive number in array:
numbers = [1,-2,3,-4,5,6,-7,-8,9,10]
positive_number_count = 0

for i in numbers:
    if i > 0:
        positive_number_count += 1
print("Final Count of Positive number is:", positive_number_count)



# Count Negative number in array:

negative_number_count = 0

for i in numbers:
    if i < 0:
        negative_number_count += 1
print("Final Count of Positive number is:", negative_number_count)

