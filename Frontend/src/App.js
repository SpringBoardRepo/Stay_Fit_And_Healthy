import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import RoutesComponents from './RoutesComponents';
import MyfitnessApi from "./api";
import NavBar from './NavBar';
import { Fragment, useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import jwt_decode from "jwt-decode"
import UserContext from "./UserContext";

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "myfitness-token";

function App() {

  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [calories, setCalories] = useState(2000);
  const [dietcalories, setDietCalories] = useState('');
  const [savedMeals, setSavedMeals] = useState([]);

  useEffect(function loadUserInfo() {

    async function getCurrentUser() {
      if (token) {
        try {
          let user = jwt_decode(token, { complete: true });
          console.log("USER", user)
          MyfitnessApi.token = token;
          let currentUser = await MyfitnessApi.getCurrentUser(user.username);
          console.log("CURRENTUSER", currentUser);
          setCurrentUser(currentUser);
        } catch (error) {
          console.error(error);
          setCurrentUser(null);
        }
      }
    }
    getCurrentUser();
  }, [token]);

  async function login(logindata) {
    try {
      let token = await MyfitnessApi.login(logindata);
      setToken(token);
      return { success: true };
    } catch (error) {
      console.error("login failed", error);
      return { success: false, error };
    }

  }

  async function signUp(signdata) {
    try {
      let token = await MyfitnessApi.signup(signdata);
      setToken(token);
      return { success: true };
    } catch (error) {
      console.error("signUp failed", error);
      return { success: false, error };
    }
  }

  //Keep track of the calories
  function caloriesCount(calorie) {
    setCalories(calorie);
  }
  function caloriesCountAfterDietPlan(calorie) {
    setDietCalories(calorie);
  }

  // Handle logout
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function addMealsToUsers(data) {

    let res = await MyfitnessApi.addToFoodJournal(currentUser.username, data);
    //setSavedMeals(res);
  }

  async function getMeals() {
    let meal = await MyfitnessApi.getMeals(currentUser.username);
    return meal;
  }

  return (
    <div className="App">
      <Router>
        <Fragment>
          <UserContext.Provider
            value={{ currentUser, setCurrentUser, calories, caloriesCount, dietcalories, caloriesCountAfterDietPlan, addMealsToUsers, getMeals }}>
            <NavBar logout={logout} />
            <RoutesComponents login={login} signUp={signUp} />
          </UserContext.Provider>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
