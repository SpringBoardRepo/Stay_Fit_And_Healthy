import "./NavBar.css";
import { Nav, Navbar } from "react-bootstrap";
import UserContext from "./UserContext";
import { useContext } from "react";

function NavBar({ logout }) {

    const { currentUser } = useContext(UserContext);
    function loggedInNav() {
        return (
            <div className="row">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/meals">Meals</Nav.Link>
                        <Nav.Link href="/bmi">BMI</Nav.Link>
                        <Nav.Link href="/foodJournal">Food Journal</Nav.Link>
                        <Nav.Link exact to="/" onClick={logout}>
                            Logout {currentUser.first_name || currentUser.username}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        );
    }
    function logoutNav() {
        return (
            <Navbar expand="lg" bg="dark" variant="dark">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">SignUp</Nav.Link>
            </Navbar >
        )
    }
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                MyFitness
            </Navbar.Brand>
            {currentUser ? loggedInNav() : logoutNav()}
        </Navbar>

    )
}
export default NavBar;