import { Navigate, Route, Routes } from "react-router-dom";
import Meals from './MealsComponents/Meals';
import BMICalculator from './BMICalculator';
import Login from './Login'
import Signup from './Signup';
import Home from './Home';
import FoodJournal from './MealsComponents/FoodJournal';
import PrivateRoutes from "./PrivateRoutes";

function RoutesComponents({ login, signUp }) {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login login={login} />}></Route>
            <Route exact path="/signup" element={<Signup signUp={signUp} />}></Route>
            <Route path="/bmi"
                element={<PrivateRoutes>
                    <BMICalculator />
                </PrivateRoutes>
                }
            />
            <Route path="/meals"
                element={
                    <PrivateRoutes>
                        <Meals />
                    </PrivateRoutes>
                }
            />
            <Route path="/foodJournal"
                element={
                    <PrivateRoutes>
                        <FoodJournal />
                    </PrivateRoutes>
                }
            />
        </Routes>
    )
}

export default RoutesComponents;