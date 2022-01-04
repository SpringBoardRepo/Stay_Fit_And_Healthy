import { Badge } from 'react-bootstrap';
import Meal from './Meal';


function MealsList({ mealData }) {

    const nutrients = mealData.nutrients;
    return (
        <main>
            <section className="Nutrients">
                <h2>Macros</h2>
                <span>
                    <Badge bg="success" size="lg">Calories : {nutrients.calories.toFixed(0)}</Badge>
                    <Badge bg="success">Carbohydrates : {nutrients.carbohydrates.toFixed(0)}</Badge>
                    <Badge bg="success">Fat : {nutrients.fat.toFixed(0)}</Badge>
                    <Badge bg="success">Protein : {nutrients.protein.toFixed(0)}</Badge>

                </span>
            </section>
            <section className="Meals">
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />
                }
                )}
            </section>
        </main>
    );
}

export default MealsList;