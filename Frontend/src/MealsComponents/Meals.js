
import React, { useState, useEffect } from 'react';
import axios from "axios";
import MealsList from "./MealsList";
import Constants from '../Config';

const DEFAULT_CALORIES = '2000';

function Meals() {

    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(DEFAULT_CALORIES);
    const URL = `https://api.spoonacular.com/mealplanner/generate?apiKey=${Constants.API_KEY}&timeFrame=day&targetCalories=${calories}`;
    useEffect(() => {
        async function getMeals() {
            try {
                let results = await axios.get(URL);
                setMealData(results.data);
            } catch (error) {
                console.error(error);
            }
        }
        getMeals();
    }, []);


    return (
        <>
            {mealData && <MealsList mealData={mealData} />}
        </>
    );
};

export default Meals;