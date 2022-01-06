
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import ScrollContainer from 'react-indiana-drag-scroll'
import "./MealSearchedResult.css"

function MealSearchedResult({ searchedMeals }) {
    console.log(searchedMeals);
    return (

        <Row>
            {searchedMeals.map((meal) =>
                < Card className="MealSuggestionCard" style={{ width: "22rem" }} >
                    <Card.Img variant="top" src={meal.image} alt="recipe" />
                    <Card.Body className="cardBody">
                        <Card.Title>{meal.title}</Card.Title>
                        <Card.Text>
                            {/* {mealData.summary} */}
                        </Card.Text>
                        <Button href='#' variant="info">Read About it</Button>
                    </Card.Body>
                </Card>
            )}
        </Row>





    )
}



export default MealSearchedResult;