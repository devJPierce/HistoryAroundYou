 - HISTORY AROUND YOU - 

WHAT IS IT: a mobile app that allows user to login, utilize geo-tracking to pinpoint their location, pull from a database to show historical sites around them, and show links to click for further reading and info for when they visit those sites

ELEVATOR PITCH: Imagine you are on a roadtrip with your family, and you're stopped for the day at a location along your route. You've saved up a lot of money for your destination and the expenses to drive there, but what about what to do on your stops along the way? HISTORY AROUND YOU will open your eyes to the unseen treasures nearby by showing you all the historical sites near your location! Turn that 'We're so bored!' into 'Oh cool, there's a ghost town a mile away!' or 'Honey, did you know there's a Civil War battlefield next door?'

WHAT DO I WANT IT TO INCLUDE:
    1. a way for user to register an account after downloading

    2. a login feature

    3. a way to store their account information and access it upon login

    4. a way to pinpoint a user's specific location

    5. a way to access historical site databases

    6. a way to cross-reference database results with user's location

    7. a way to display the results for the user

    8. links to click for more information on results

    9. a way for user to save their results if they choose

    10. a way for user to set preferences on account so they are notified when they are near that kind of historical site

WHAT WILL THAT REQUIRE:
    1. INPUT FIELDS (First/Last Name, Username/Email, Password, Confirm Password, Phone Number), Submit Button, hooks to manage state, client-side validation, match password and confirm password fields, BACKEND (API endpoint, Axios requests)

    2. INPUT FIELDS (username/email and password), SUBMIT BUTTON, hooks to manage state, client-side validation, BACKEND (API endpoint, Axios requests)

    3. API ENDPOINTS (Registration, Login, Profile), state
    
    4. GEOLOCATION API (maybe GoogleMaps API?)

    5. PUBLIC API (to access historical site data) or DATABASES (to access data via SQL queries)?

    6. use GEOLOCATION API to get user's current location, restrieve historical site data from DATABASE or PUBLIC API, use a distance calculation formula, filter sites based on defined radius from location

    7. Create a RESULTS COMPONENT, RENDER the list, provide option if no results are found

    8. Figure out a way to display URLs in RESULTS COMPONENT

    9. PERSISTED STATE? Save/Favorite Button, useState, display saved results

    10. Create a user preference state, create a form to set preferences, local storage for saved preferences?, way to periodically check user location, notification system

WHAT CHALLENGES DID I FACE?

    - the method to pinpoint user's location; use a Geolocation API to get user's location; 
    - accessing historical databases
    - cross-referencing database with location

NEXT STEPS:
    - set a distance radius to expand search from user's exact location to a perimeter of 5,10,15 miles away
    - be able to input a certain location you are not currently in and pull up historical sites
