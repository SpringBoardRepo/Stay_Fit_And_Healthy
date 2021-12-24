import { Card, Button } from "react-bootstrap";
import "./App.css"

function Home() {

    return (
        <Card style={{ width: '22rem' }}>
            <Card.Body>
                <Card.Text className="font-weight-bold" style={{ fontSize: '2rem' }}>
                    Fitness starts with what you eat.
                </Card.Text>
                <Card.Text style={{ fontSize: '0.8rem' }}>
                    Want to eat more mindfully? Track meals, learn about your habits, and reach your goals with MyFitness.
                </Card.Text>
                <Button variant="secondary" size="sm" href="/login">Login</Button>{' '}
                <Button variant="secondary" size="sm" href="/signup">Signup</Button>
            </Card.Body>
        </Card>
    )
}


export default Home;