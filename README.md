## MyFitness

MyFitness is a mobile-friendly web application that allows users to keep track of their health. And it is designed for people who want to manage their weight and plan their meals. The goal is to track their calories in and out to help with the struggles of weight loss or weight gain.

## Live Demo:
https://myfitness-frontend.herokuapp.com/

## Features:

### Guest 
  - BMR calculator.
  - Sign up for a new account with password hashing `Bcryptjs`

### Signed up User - everything Guest can do and more:
  - Log in
  - Calculate their calories via BMR and Calories Calculator.
  - User can enter details and it will ask a user what they want to do to lose/gain weight based on that show calories.
  - It will give the user, some meal suggestions as per user calories count.
  - User can search for meals.
  - Users can add meals to their food journal to keep track of the calories.
  - Table of Food logged.

## Login/SignUp Safely
-  Users can create an account login with password hashing using the `Bcryptjs` library. Used `JSON Web Tokens` for user Authentication.

## User Flow
When the user first opens the page, the user has the option to sign up for an account or log into an existing account.
Without logging in, the user is able to use the `BMR Calculator` on the navigation bar.

The `BMR` tab allows the user to input their weight, height, Gender and age to calculate their BMR. The user will be provided with their BMR and user will select their Activity level and choose the option for Diet plan, how much calories they need to maintain their weight. It will give user the calories count in order to maintain or achicve their goal.
After Calulating the Calories user can go to the "Meal Suggestion" It will take user to the Meal page with some Suggestions. The Meals tab allows the user to search meals; a list of meals will appear where the user is able to click the "Add to Food Journal" button and to view added meal byclicking the "Go to the Food journal" button

The `Food Journal` page allows the user to view and delete meals for the day and also view meals which were added with date, meal name and calories.

## BMR Calculator
  ![Untitled Project](https://user-images.githubusercontent.com/62223366/149674685-4c352184-4995-4fb5-8a15-4434ebfc6444.gif)
  
## Meals Suggestions and Meal Search
![Untitled Projectm](https://user-images.githubusercontent.com/62223366/149675854-e75d83f0-7bf0-44fc-bef4-0ac76aa75240.gif)

## Food Journal
![Untitled Projectf](https://user-images.githubusercontent.com/62223366/149675383-abaf14c6-6b3b-4bb0-b346-c81b790c8860.gif)

## Technology Stack
 - React
 - JavaScript
 - Node.js
 - Express
 - Postgres
 - ReactStrap
 - HTML
 - CSS
 - Material Ui
 - Bootstrap
 - Upsplash 
 - [Spoonacular Api](https://spoonacular.com/food-api)

### To Run Locally
 - `psql  CREATE DATABASE myfitness`
 - Connect to the DB `\c myfitness`.
 - Create tables `\i myfitness-schema.sql`.
 - Start Backend Server `node server.js` will start on Port:3001
 - Start Frontend Server `npm start` start on Port:3000
