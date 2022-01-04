
import React, { useState, useEffect } from 'react';
import axios from "axios";
import MealsList from "./MealsList";

const API_KEY = '2deb002db1a04eb78427182a06cdb591';
const DEFAULT_CALORIES = '2000';

function Meals() {

    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(DEFAULT_CALORIES);
    useEffect(() => {
        async function getMeals() {
            try {
                let results = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calories}`);
                // let results = await axios.get(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=2deb002db1a04eb78427182a06cdb591&maxCarbs=50&number=10`);
                console.log(results.data);
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