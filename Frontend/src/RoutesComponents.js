import { Redirect, Route, Routes } from "react-router-dom";
import Meals from './MealsComponents/Meals';
import BMICalculator from './BMICalculator';
import Login from './Login'
import Signup from './Signup';
import Home from './Home';

function RoutesComponents({ login, signUp }) {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/meals" element={<Meals />}></Route>
            <Route exact path="/bmi" element={<BMICalculator />}></Route>
            <Route exact path="/login" element={<Login login={login} />}></Route>
            <Route exact path="/signup" element={<Signup signUp={signUp} />}></Route>
            {/* <Redirect to="/" /> */}
        </Routes>
    )
}

export default RoutesComponents;