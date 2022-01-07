import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "./UserContext";

function PrivateRoutes({ children }) {

    const { currentUser } = useContext(UserContext);

    console.log(`IN PRIVATE ROUTE ${currentUser}`);

    return currentUser ? children : <Navigate to="/login" />;
}

export default PrivateRoutes;