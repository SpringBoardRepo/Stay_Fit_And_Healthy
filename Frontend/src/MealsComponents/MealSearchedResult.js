
import { Card, Row } from "react-bootstrap";
import { Button } from 'reactstrap';
import ScrollContainer from 'react-indiana-drag-scroll'
import "./MealSearchedResult.css"

function MealSearchedResult({ searchedMeals }) {
    console.log(searchedMeals);
    return (

        <Row>
            {searchedMeals.map((meal) =>
                < Card className="MealSuggestionCard" style={{ width: "22rem" }} key={meal.id}>
                    <Card.Img variant="top" src={meal.image} alt="recipe" />
                    <Card.Body className="cardBody">
                        <Card.Title>{meal.title}</Card.Title>
                        <Card.Text>
                            {meal.nutrition.nutrients[0].name}: {meal.nutrition.nutrients[0].amount.toFixed(2)} kacl
                        </Card.Text>
                        <Button href='/foodJournal' size="md" block variant="info">Add</Button>
                    </Card.Body>
                </Card>
            )}
        </Row>
    )
}
export default MealSearchedResult;