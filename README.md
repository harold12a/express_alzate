# manga back 

# Getting Started

These instructions will help you set up the project on your local machine.

# Prerequisites
Node.js and npm should be installed on your system.
# Installing Dependencies
Run the following commands to install the required dependencies:


1. install Express

npm install express

2. install Mongosse

npm install mongoose

3. Install Nodemon (development dependency):

npm install --save-dev nodemon

4. Install dotenv

npm install dotenv

5. Install Cors

npm i cors

6. Install Morgan

npm i morgan

7. Install Joi

npm joi

8. Install jsonwebtoken

npm i jsonwebtoken

9. Install Passport

npm i passport

10. Install Passport-jwt

npm i passport-jwt

# Environment Setup

Create an .env file at the root of your project with the following content:

MONGO_URI = 'YOUR_MONGO_DB_CONNECTION_STRING'
SECRET_KEY = 'YOUR_SECRET_KEY_FOR_JWT'

Replace 'YOUR_MONGO_DB_CONNECTION_STRING' with your actual MongoDB connection string, and 'YOUR_SECRET_KEY_FOR_JWT' with your preferred secret key for JSON Web Tokens.