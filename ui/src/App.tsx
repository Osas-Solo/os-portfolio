import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "reactstrap";
import './App.css';
import {Container} from "reactstrap";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

const App = () => {
    return (
        <Router>
            <Container>
                <Header/>

                <Routes>
                    <Route path="/" Component={AboutPage}/>
                    <Route path="/about" Component={AboutPage}/>
                    {/*<Route path="/projects" component={ProjectsPage} />*/}
                    <Route path="/contact" Component={ContactPage}/>
                </Routes>

                <Footer/>
            </Container>
        </Router>
    );
};

export default App;
