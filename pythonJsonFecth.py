import requests

# URL of the JSON file
url = "https://www.cecyours.org/database/question_papers/671cf96800a69_65782738b0de8_QueBank_cpp.json"

# Fetch data
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()  # Parse JSON content
    print("Data fetched successfully!")
    print(data[questions][Question])  # or handle the data as needed
else:
    print(f"Failed to fetch data. Status code: {response.status_code}")
