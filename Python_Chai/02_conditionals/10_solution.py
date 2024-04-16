# Pet Food Recommendation:
# 10_solution
# This program is only applicable for two pet only:Cat and dog;

pet_type = "Cat"
pet_age = 6

if pet_type == "Dog":
    if pet_age <  2:
        print("Puppy Food")
    else:
        print("Adult Dog Food")
elif pet_type == "Cat":
    if pet_age > 5:
        print("Senior Cat Food")
    else:
        print("Junior Cat Food")

print("Recommended for this pet_age:", pet_age)