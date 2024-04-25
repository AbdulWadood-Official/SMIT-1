import requests
# 
def fetch_random_userapi():
    url = "https://api.freeapi.app/api/v1/public/randomusers/user/random"
    response = requests.get(url)
    data = response.json()

    if data["success"] and "data" in data:
        user_data = data["data"]
        username = user_data["login"]["username"]
        usercountry = user_data["location"]["country"]
        return username, usercountry
    else:
        raise Exception ("Failed to fetch user data")
# Testing my 
def main():
    try:
        username, country = fetch_random_userapi()
        print(f"Username:{username} \n Country: {country}")
    except Exception as e:
        print(str(e))

if __name__ == "__main__":
    main()

