import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import RoutesComponents from './RoutesComponents';
import MyfitnessApi from "./api";
import NavBar from './NavBar';
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import jwt_decode from "jwt-decode"
import UserContext from "./UserContext";

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "myfitness-token";

function App() {

  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(function loadUserInfo() {

    async function getCurrentUser() {
      if (token) {
        try {
          console.log(JSON.stringify(token));
          let user = jwt_decode(token, { complete: true });
          console.log("USER", user);
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
      console.log(`LOGINDATA ${JSON.stringify(logindata)}`);
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
    } catch (error) {
      console.error("signUp failed", error);
      return { success: false, error };
    }
  }

  // Handle logout
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <div className="App">
      <Router>
        <UserContext.Provider
          value={{ currentUser, setCurrentUser }}>
          <NavBar logout={logout} />
          <RoutesComponents login={login} signUp={signUp} />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
