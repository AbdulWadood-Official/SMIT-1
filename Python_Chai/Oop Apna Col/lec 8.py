# class Student:
#     college_name = "ABC college"
#     name = "Anonymous"
#     def __init__ (self,name,marks):
#         self.name = name
#         self.marks = marks
    
#     def welcome(self):
#         print("Welcome students,",self.name)
#     def get_marks(self):
#         return self.marks

# s1 = Student("Sara",77)
# # print(s1.name, s1.marks)
# s1.welcome()
# print(s1.get_marks())



# ******************** Practice Questions!**********************
# class Student:
    # def __init__ (self,name,marks):
    #     self.name = name
    #     self.marks = marks

    # @staticmethod
    # def hello():
    #     print("hello baby")

    # def get_avg(self):
    #     sum = 0
    #     for val in self.marks:
    #         sum += val
    #     print("hi",self.name, "Your avg score is:", sum/3)

# s1 = Student("Tony Ron", [77,81,89])
# s1.get_avg()

# s1.name = "Batman"
# s1.get_avg()

# s1.hello()


# Abstraction:
# Hiding the implementation of a class and showing the essential feature to the user
class Car:
    def __init__ (self):
        self.acc = False
        self.brk = False
        self.clutch = False

    def start(self):
        self.clutch = True
        self.acc = True
        print("Car started..")
car1 = Car()
car1.start()

# Encapsulation:
# wrapping data and function into a single unit(object) Ya Allah pak 

