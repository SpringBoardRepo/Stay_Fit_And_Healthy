
import { useState } from 'react';
import { Card, Form, FormLabel } from "react-bootstrap";
import { Button } from 'reactstrap'
import "./BmiForm.css";
function BMICalculator() {

    const INTIAL_DATA = {
        weight: "",
        height: "",
        gender: "Male",
        age: "",
        activityLevel: "",
        dietPlan: "Maintain current weight; 0 calories deficit"
    }

    const [bmrData, setBmrData] = useState(INTIAL_DATA);
    const [bmr, setBmr] = useState('');

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setBmrData(data => ({
            ...data,
            [name]: value
        }));
    }

    /**Women: BMR = 655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.7 x age in years)

       Men: BMR = 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years) */

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let bmr = '';
        let weight = +(data.get('weight'));
        let gender = data.get("gender");
        let age = +(data.get('age'));
        let height = data.get('height');
        let heightINFeet = height.slice(0, 1);
        let heightInInches = height.slice(-1);
        let h = ((heightINFeet * 30.48) + (heightInInches * 2.54));

        if (gender === 'female') {
            bmr = 655 + (4.35 * weight) + (4.7 * h) - (4.7 * age);
            setBmr(bmr);
        }
        else if (gender === 'male') {
            bmr = 66 + (6.23 * weight) + (12.7 * h) - (6.8 * age);
            setBmr(bmr);
        }
        setBmrData(INTIAL_DATA);
    };

    const handleBMRSubmit = (event) => {
        event.preventDefault();
    }
    return (

        <Card style={{ width: '22rem' }}>
            <h4 className="Title">BMR &amp; Calories Calculator</h4>
            <Form className="form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <FormLabel><b>Weight</b></FormLabel>
                    <Form.Control type="text"
                        placeholder="Enter Your Weight in Pounds"
                        name="weight"
                        required
                        id="weight"
                        autoFocus
                        value={bmrData.weight}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label><b>Height</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Height Ex.5'0"
                        required
                        id="height"
                        name="height"
                        value={bmrData.height}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label><b>Age</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Age"
                        required
                        id="age"
                        name="age"
                        value={bmrData.age}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label><b>Gender</b></Form.Label>
                    <Form.Select name="gender" value={bmrData.gender} onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Form.Select>
                </Form.Group>
                <Button type="submit" size="md" block>Calculate BMR</Button>
                {bmr ? <div><Button className="BmrBtn" color="info" size="md" block outline>{bmr}</Button></div> : null}
            </Form>
            {bmr ?
                <Form className="form" onSubmit={handleBMRSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label><b>Activity Level</b></Form.Label>
                        <Form.Select name="activityLevel"
                            id="activityLevel"
                            value={bmrData.activityLevel}
                            onChange={handleChange}>
                            <option value="little or no exercise">Little or no exercise</option>
                            <option value="light exercise/sports 1-3 days/week">Light exercise/sports 1-3 days/week</option>
                            <option value="moderate exercise/sports 3-5 days/week">Moderate exercise/sports 3-5 days/week</option>
                            <option value="hard exercise/sports 6-7 days a week">Hard exercise/sports 6-7 days a week</option>
                            <option value="very hard exercise/sports and physical job or 2x training">Very hard exercise/sports and physical job or 2x training</option>
                        </Form.Select>
                    </Form.Group>
                    <Button type="submit" size="md" block>Calculate Calories</Button>
                </Form> : null
            }
            <Form.Group className="mb-3">
                <Form.Label><b>Diet Plan</b></Form.Label>
                <Form.Select name="dietPlan" value={bmrData.dietPlan} onChange={handleChange}>
                    <option value="Maintain current weight; 0 calories deficit">Maintain current weight; 0 calories deficit</option>
                    <option value="Gain 1.5lbs per week; 750 calories surplus">Gain 1.5lbs per week; 750 calories surplus</option>
                    <option value="Lose 1lb per week; 500 calories deficit">Lose 1lb per week; 500 calories deficit</option>
                    <option value="Lose 1.5lbs per week; 750 calories deficit">Lose 1.5lbs per week; 750 calories deficit</option>
                    <option value="Gain .5lb per week; 250 calories surplus">Gain .5lb per week; 250 calories surplus</option>
                    <option value="Gain 1lb per week; 500 calories surplus">Gain 1lb per week; 500 calories surplus</option>
                </Form.Select>
            </Form.Group>
        </Card>
    );

}
export default BMICalculator;