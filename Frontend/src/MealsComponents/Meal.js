import axios from "axios";
import { useState, useEffect } from "react"
import { Card, Button } from "react-bootstrap";

const API_KEY = '2deb002db1a04eb78427182a06cdb591';

function Meal({ meal }) {

    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {

        async function getMealInfo() {
            try {
                let result = await axios.get(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${API_KEY}&includeNutrition=false`);
                console.log(result.data);
                setImageUrl(result.data.image);
            } catch (error) {
                console.log(error);
            }
        }
        getMealInfo();
    }, [meal.id])

    return (
        <div>
            <Card className="MealSuggestionCard" style={{ width: "22rem" }} >
                <Card.Img variant="top" src={imageUrl} alt="recipe" />
                <Card.Body>
                    <Card.Title>{meal.title}</Card.Title>
                    <Card.Text>
                        In my food world, there is no fear or guilt, only joy and balance.
                        So no ingredient is ever off-limits. Rather,
                        all of the recipes here follow my Usually-Sometimes-Rarely philosophy.
                        Notice there is no Never.
                    </Card.Text>
                    <Button href="/meals" variant="info">View</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Meal;