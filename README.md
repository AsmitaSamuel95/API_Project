## Node.js Express API that connects to a MongoDB database and retrieves user data.

- Implemented main logic in server.js and defined the route there. 
- Added data to MongoDB database (users) using seed.js which contains sample data. 
- Fetches data for valid users when http://localhost:3000/users/<userid> is given in browser, and returns 'User not found' for users with age less than or equal to 21, and if user does not exist in db, and returns 'Invalid ID' format for invalid inputs, and 'Internal server error' for other errors.
