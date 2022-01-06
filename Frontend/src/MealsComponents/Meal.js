import axios from "axios";
import { useState, useEffect } from "react"
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import Constants from "../Config";

function Meal({ meal }) {

    const [imageUrl, setImageUrl] = useState("");
    const [mealData, setMealData] = useState(null);
    let nutrients;
    const URL = `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${Constants.API_KEY}&includeNutrition=true`;
    useEffect(() => {

        async function getMealInfo() {
            try {
                let result = await axios.get(URL);
                setImageUrl(result.data.image);
                setMealData(result.data);
                console.log('MEALDATA :', result.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMealInfo();
    }, [meal.id])

    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="MealSuggestionCard" style={{ width: "22rem" }} >
                <Card.Img variant="top" src={imageUrl} alt="recipe" />
                <Card.Body className="cardBody">
                    <Card.Title>{meal.title}</Card.Title>
                    {/* <Card.Text dangerouslySetInnerHTML={{ __html: mealData.summary }}>
                    </Card.Text> */}
                    {/* {mealData.nutrition.nutrients} */}
                    <Button href={mealData.sourceUrl} variant="info">Read more about it</Button>
                </Card.Body>
            </Card>
        </Col >

    );
}

export default Meal;