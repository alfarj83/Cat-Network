import requests
import json

# SCRAPED DATA FROM FIRST PAGE OF SHELTERS IN TROY, NY
# 1. The Endpoint (from your JSON)
url = "https://services.petfinder.com/graphql"

# 2. The Headers (This is an educated guess - YOU MUST VERIFY THIS)
# The API might want the keys directly, or it might want a Bearer token
# that you get by *using* these keys first.
headers = {
    "Content-Type": "application/json",
    "x-client-id": "79Jskw0fm0TzCRCTtJZRhXvpgwzyQAWeXCWvhhWkoGueVUTG2C",
    "x-client-secret": "51EroweCqhfPCuOCoYtlMe6Wtj3wtC8feg37UBJW"
    # --- OR ---
    # "Authorization": "Bearer [SOME_TOKEN_YOU_GRAB_FROM_NETWORK_TAB]"
}

# 3. The Payload (The GraphQL Queryimport requests
import json

# --- Part 0: Credentials from the JSON data ---

# The GraphQL API endpoint
graphql_url = "https://svc.petfinder.com/graphql"

# The credentials you found
client_id = "79Jskw0fm0TzCRCTtJZRhXvpgwzyQAWeXCWvhhWkoGueVUTG2C"
client_secret = "51EroweCqhfPCuOCoYtlMe6Wtj3wtC8feg37UBJW"

# This is the (undocumented) URL to swap the credentials for a token.
# It's the same one used by their old V2 API.
auth_url = "https://api.petfinder.com/v2/oauth2/token"

# Your search location
search_location = "Troy, NY"


# -----------------------------------------------------------------
# --- Step 1: Get an Authentication Token ---
# -----------------------------------------------------------------
def get_auth_token():
    print(f"🔑 Step 1: Getting auth token...")
    try:
        data = {
            'grant_type': 'client_credentials',
            'client_id': client_id,
            'client_secret': client_secret
        }
        response = requests.post(auth_url, data=data)
        response.raise_for_status() # Check for errors
        
        token = response.json().get('access_token')
        if not token:
            print("Error: 'access_token' not found in auth response.")
            return None
            
        print("Got a temporary token.\n")
        print(token)
        return token
        
    except requests.exceptions.HTTPError as err:
        print(f"HTTP Error during auth: {err}")
        print(f"Response: {response.text}")
        return None
    except Exception as e:
        print(f"An error occurred during auth: {e}")
        return None

# -----------------------------------------------------------------
# --- Step 2: Search for Shelter IDs by Location ---
# -----------------------------------------------------------------
def get_shelter_data(token, location):
    print(f"Step 2: Searching for shelters near '{location}'...")
    
    # This is the EXACT query you provided
    search_query = """
    query SearchOrganizations($location: String, $shelterName: String, $page: Float) {
      searchOrganizations(
        location: $location
        shelter_name: $shelterName
        page: $page
      ) {
        organizations {
          displayId
          organizationName
          publicUrl {
            url
          }
          primaryLocation {
            email
            address {
              city
              state
            }
            phone
          }
        }
        pagination {
          totalCount
          currentPage
          totalPages
        }
      }
    }
    """
    
    # These are the variables for the query
    variables = {
        "location": location,
        "shelterName": None,  # We are searching by location, not name
        "page": 2
    }
    
    payload = {
        "query": search_query,
        "variables": variables
    }
    
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }

    try:
        # We use the NEW graphql_url you found
        response = requests.post(graphql_url, headers=headers, data=json.dumps(payload))
        response.raise_for_status()
        
        data = response.json()
        
        if "errors" in data:
            print(f"GraphQL Error in search: {data['errors']}")
            return None
        
        # The data is nested inside 'searchOrganizations'
        shelters = data['data']['searchOrganizations'].get('organizations')
        
        if not shelters:
            print(f"No shelters found for '{location}'.")
            return None
            
        print(f"✅ Success! Found {len(shelters)} shelters.\n")
        return shelters

    except requests.exceptions.HTTPError as err:
        print(f"HTTP Error during search: {err}")
        print(f"Response: {response.text}")
        return None
    except Exception as e:
        print(f"An error occurred during search: {e}")
        return None

# -----------------------------------------------------------------
# --- Run the full script ---
# -----------------------------------------------------------------
if __name__ == "__main__":
    
    # Step 1
    access_token = get_auth_token()
    
    if access_token:
        # Step 2
        shelter_data = get_shelter_data(access_token, search_location)
        
        if shelter_data:
            print("--- 📊 Final Shelter Data ---")
            with open("shelter_data.json", "w") as f:
                json.dump(shelter_data, f, indent=2)

# -----------------------------------------------------------------