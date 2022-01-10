import axios from "axios";
import { useState, useEffect } from "react"
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import Constants from "../Config";
import MealCard from "./MealCard";

function Meal({ meal }) {

    const [imageUrl, setImageUrl] = useState("");
    const [mealData, setMealData] = useState("");
    const [nutrients, setNutrients] = useState("");
    const URL = `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${Constants.API_KEY}&includeNutrition=true`;
    useEffect(() => {
        async function getMealInfo() {
            try {
                let result = await axios.get(URL);
                setImageUrl(result.data.image);
                setMealData(result.data);
                setNutrients(result.data.nutrition.nutrients);
            } catch (error) {
                console.log(error);
            }
        }
        getMealInfo();
    }, [meal.id])

    return (
        <>
            {imageUrl && mealData && nutrients &&
                <MealCard meal={meal}
                    key={meal.id}
                    imageUrl={imageUrl}
                    mealData={mealData}
                    nutrients={nutrients} />}
        </>
    );
}

export default Meal;