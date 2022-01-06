import "./NavBar.css";
import { Nav, Navbar } from "react-bootstrap";

function NavBar() {
    return (
        <div className="row">
            <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    MyFitness
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/meals">Meals</Nav.Link>
                        <Nav.Link href="/bmi">BMI</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Signup</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
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