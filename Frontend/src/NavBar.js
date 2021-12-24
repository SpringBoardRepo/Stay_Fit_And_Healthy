import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
    return (
        <div className="row">
            <Navbar expand="md" >
                <NavLink exact to="/" className="navbar-brand">
                    MyFitness
                </NavLink>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/meals">Meals</NavLink>
                        <NavLink to="/bmi">BMI</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import { makeStyles } from '@material-ui/core';

// const useStyle = makeStyles((theme) => ({
//     homeLink: {
//         color: "black",
//         fontWeight: "bold"
//     },
//     toolbar: {
//         display: "flex",
//         // justifyContent: "space-between"
//     },
//     linksmargin: {
//         marginLeft: "2rem"
//     }
// }))

// function NavBar() {
//     const classes = useStyle();
//     return (
//         <AppBar position="static" color="default">
//             <Container maxWidth="xl">
//                 <Toolbar className={classes.toolbar}>

//                     <Link href="#" underline="none" className={classes.homeLink}>
//                         Stay Fit</Link>
//                     <Link to="/meals" underline="none" className={classes.linksmargin}>Meals</Link>
//                     <Link to="/bmi" underline="none" className={classes.linksmargin}>BMI</Link>
//                     <Link to="/yoga" underline="none" className={classes.linksmargin}>Yoga</Link>
//                 </Toolbar>
//             </Container>

//         </AppBar >
//     )
// }
export default NavBar;