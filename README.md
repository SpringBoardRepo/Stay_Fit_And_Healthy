## MyFitness

MyFitness is a mobile-friendly web application that allows users to keep track of their health. And it is designed for people who want to manage their weight and plan their meals. The goal is to track their calories in and out to help with the struggles of weight loss or weight gain.

## Live Demo:


## Features:

### Guest 
  - BMR calculator.
  - Sign up for a new account with password hashing using Flask-Bcrypt.

### Signed up User - everything Guest can do and more:
  - Log in
  - Calculate their calories via BMR and Calories Calculator.
  - User can enter details and it will ask a user what they want to do to lose/gain weight based on that show calories.
  - It will give the user, some meal suggestions as per user calories count.
  - User can search for meals.
  - Users can add meals to their food journal to keep track of the calories.
  - Table of Food logged.

## Login/SignUp Safely
- Used `JSON Web Tokens` for user Authorization.

## Technology Stack
 - React
 - JavaScript
 - Node.js
 - Express
 - Postgres
 - ReactStrap
 - HTML
 - CSS
 - Bootstrap
 - Upsplash 
 - [Spponacular](https://api.spoonacular.com/)

### To Run Locally
 - `psql  CREATE DATABASE myfitness`
 - Connect to the DB `\c myfitness`.
 - Create tables `\i myfitness-schema.sql`.
 - Start Backend Server `node server.js` will start on Port:3001
 - Start Frontend Server `npm start` start on Port:3000
