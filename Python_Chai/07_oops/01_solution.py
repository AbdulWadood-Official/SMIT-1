# Basic Class N Objects:
class Car:
    def __init__(self, brand,model): #Constructor Example
        self.brand = brand
        self.model = model


my_car = Car("Kia","SUV")
print(my_car.brand)
print(my_car.model)

my_new_car = Car("Tata","Safari")
print(my_new_car.brand)