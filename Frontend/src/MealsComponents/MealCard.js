
import { Card, Col } from "react-bootstrap";
import { Button } from 'reactstrap';

function MealCard({ imageUrl, mealData, nutrients, meal }) {

    let showSomeNurtients = nutrients.slice(0, 5);
    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <Card className="MealSuggestionCard" style={{ width: "22rem" }} >
                <Card.Img variant="top" src={imageUrl} alt="recipe" />
                <Card.Body className="cardBody">
                    <Card.Title>{meal.title}</Card.Title>
                    {/* <Card.Text dangerouslySetInnerHTML={{ __html: mealData.summary }}>
                    </Card.Text> */}
                    <Card.Text>
                        {showSomeNurtients.map((nutrient) =>
                            <li key={nutrient.name}> {nutrient.name} : {nutrient.amount}{nutrient.unit}
                            </li>)}
                    </Card.Text>
                    <div><Button className="Btn" href='/foodJournal' color="info" size="md" outline block>Add</Button></div>
                    <div><Button className="Btn" href={mealData.sourceUrl} color="info" size="md" block>Read more about it</Button></div>
                </Card.Body>
            </Card>
        </Col >
    );
}

export default MealCard;