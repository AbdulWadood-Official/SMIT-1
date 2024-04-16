import time

wait_time = 1
max_retries = 4
attempts = 0

while attempts < max_retries:
    print("Attempt",attempts + 1 ,"-wait time",wait_time)
    time.sleep(wait_time)
    wait_time *= 2
    attempts += 1

# finally compile