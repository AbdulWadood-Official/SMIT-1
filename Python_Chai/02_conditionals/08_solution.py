# Password Strength Checker:
password = "secure"
password_leng = len(password)

if password_leng < 6:
    strength = "Weak"
elif password_leng <= 10:
    strength = "Medium"
else:
    strength = "Strong"

print("Your Password is:" , strength)