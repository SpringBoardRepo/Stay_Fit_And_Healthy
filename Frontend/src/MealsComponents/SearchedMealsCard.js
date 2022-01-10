
import { Card } from "react-bootstrap";
import { Button } from 'reactstrap';
import "./MealSearchedResult.css";
import UserContext from '../UserContext';
import { useContext } from 'react'

function SearchedMealsCard({ meal, nutrition }) {
    const { currentUser } = useContext(UserContext);
    console.debug("SearchedMealsCard", "currentUser=", currentUser);
    console.debug("SearchedMealsCard", meal, nutrition);

    return (

        < Card className="MealSuggestionCard mt-4" style={{ width: "22rem" }}>
            <Card.Img variant="top" src={meal.image} alt="recipe" />
            <Card.Body className="cardBody">
                <Card.Title>{meal.title}</Card.Title>
                <Card.Text>
                    {nutrition.nutrients.map((nutrient) =>
                        <li key={nutrient.title}>{nutrient.name} : {nutrient.amount.toFixed(2)}{nutrient.unit}</li>)}
                </Card.Text>
                <div className="buttons">
                    <Button href='/foodJournal'
                        size="md" block outline color="info">
                        Add
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );

}

export default SearchedMealsCard;