import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Meals from './Meals';
import BMICalculator from './BMICalculator';
import Login from './Login'
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/meals" element={<Meals />}></Route>
          <Route exact path="/bmi" element={<BMICalculator />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
