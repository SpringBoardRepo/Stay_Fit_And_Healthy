import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./MealSearch.css"
import MealSearchedResult from "./MealSearchedResult";
import Constants from '../Config';
function MealSearch() {

    const [query, setQuery] = useState("");
    const [searchedMeals, setSearchedMeals] = useState("");

    async function getSearchMeals() {
        let results = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${Constants.API_KEY}&query=${query}&maxCalories=800&number=10`);
        setSearchedMeals(results.data.results)

    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        getSearchMeals();
    }

    const handleChange = (evt) => {
        setQuery(evt.target.value);
    }

    return (
        <>
            <div className="searchMealInput">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label><h2>Search Meal 🥗 </h2></Form.Label>
                        <Form.Control type="text"
                            placeholder="Example: pasta"
                            name="query"
                            required
                            id="meal"
                            value={query}
                            onChange={handleChange} />
                    </Form.Group>
                    <Button type="submit">Search</Button>
                </Form>
            </div>
            {searchedMeals && <MealSearchedResult searchedMeals={searchedMeals} />}
        </>
    );
}

export default MealSearch;