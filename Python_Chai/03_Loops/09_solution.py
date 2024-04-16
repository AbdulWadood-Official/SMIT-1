# List Uniqueness Checker

items = ["apple", "banana", "orange", "apple", "mango"]

unique_items = set()
# unique_items = set()

for item in items:
    if item in unique_items:
        print("Duplicate:", item)
        break
    unique_items.add(item)