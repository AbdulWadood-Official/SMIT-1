# Leap Year Checker
year = 2024

if (year % 400 == 0) or (year % 4 == 0 and year % 100 !=0):
    print(year , "is a Leap year!")
else:
    print(year, "is Not a leap year")